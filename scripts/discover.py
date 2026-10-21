import urllib.request, urllib.parse, re, json, pathlib, concurrent.futures
root=pathlib.Path(__file__).resolve().parents[1]
base='https://www.dunakor.hu/'
home=(root/'docs/original-home.html').read_text(encoding='utf-8')
links=list(dict.fromkeys(re.findall(r'href="([^"]+\.html)"',home)))
links=[urllib.parse.urljoin(base,x) for x in links if 'archive.org' not in x]
def get(url):
    return urllib.request.urlopen(urllib.parse.quote(url,safe=':/?=&%'),timeout=25).read()
def page(pair):
    i,url=pair
    try:
        raw=get(url); html=raw.decode('utf-8',errors='replace')
        (root/f'docs/source-{i}.html').write_text(html,encoding='utf-8')
        images=list(dict.fromkeys(re.findall(r'<img[^>]*src=["\']([^"\']+)',html,re.I)))
        frames=re.findall(r'<iframe[^>]*src=["\']([^"\']+)',html,re.I)
        allinks=list(dict.fromkeys(re.findall(r'href="([^"]+)"',html)))
        text=re.sub('<[^>]+>',' ',re.sub(r'<(script|style).*?</\1>','',html,flags=re.S))
        text=re.sub(r'\s+',' ',text)
        return {'url':url,'file':f'source-{i}.html','images':images,'frames':frames,'links':allinks,'text':text}
    except Exception as e: return {'url':url,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool: pages=list(pool.map(page,enumerate([base]+links)))
(root/'docs/discovery.json').write_text(json.dumps(pages,ensure_ascii=False,indent=2),encoding='utf-8')
for p in pages:
    print(p['url'],p.get('error',''), '\nIMAGES',p.get('images'), '\nFRAMES',p.get('frames'))
