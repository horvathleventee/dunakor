import urllib.request,urllib.parse,pathlib,json,concurrent.futures
root=pathlib.Path(__file__).resolve().parents[1]
pages=json.loads((root/'docs/discovery.json').read_text(encoding='utf-8'))
items={}
for p in pages:
 for src in p.get('images',[]):
  name=urllib.parse.unquote(src.split('/')[-1]); items.setdefault(name,urllib.parse.urljoin(p['url'],src))
def fetch(item):
 name,url=item
 try:
  data=urllib.request.urlopen(urllib.parse.quote(url,safe=':/?=&%'),timeout=25).read()
  (root/'public/images'/name).write_bytes(data)
  return {'file':'/images/'+name,'url':url,'bytes':len(data)}
 except Exception as e:return {'url':url,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool: result=list(pool.map(fetch,items.items()))
(root/'docs/assets.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(result,ensure_ascii=True,indent=2))
