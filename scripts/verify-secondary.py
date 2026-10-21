import urllib.request,urllib.parse,pathlib,json,html,concurrent.futures
root=pathlib.Path(__file__).resolve().parents[1]
pages=json.loads((root/'docs/discovery.json').read_text(encoding='utf-8'))
urls=[]
for i in [4,5]:
 urls += [html.unescape(u) for u in pages[i]['links'] if 'web.archive' in u and 'index.php?' in u]
urls += ['https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v='+v+'&format=json' for v in ['b0vY-RJfuYE','mbzgyBeBwl8','kgNTHClpfXs','qs6ivv_QY2U','VU-qH1RFe-M','-KPyUMKAycs','8k126pPpp2I','e7jMQ6ub1Zw']]
def fetch(url):
 try:
  r=urllib.request.urlopen(url,timeout=12); data=r.read().decode('utf-8',errors='replace')
  return {'url':url,'status':r.status,'body':data}
 except Exception as e: return {'url':url,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool: result=list(pool.map(fetch,urls))
(root/'docs/secondary-audit.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
for x in result:print(x['url'],x.get('error',x.get('body','')[:250]))
