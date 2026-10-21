import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
const base=process.env.TEST_BASE_URL||'http://127.0.0.1:3000';
const slugs=['felulettisztitas','ipari-festes','betonvedelem','ipari-padlo','alpin-technologia','epitoipari-kivitelezes'];
const routes=['/','/cegunkrol','/szolgaltatasok',...slugs.map(s=>'/szolgaltatasok/'+s),'/geppark','/referenciak','/videok','/palyazatok','/kapcsolat','/bemutato','/adatkezeles','/impresszum'];
const results=[]; const titles=new Set();const internal=new Set();const images=new Set();
for(const route of routes){const res=await fetch(base+route);assert.equal(res.status,200,route);const html=await res.text();const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert.ok(title,route+' title');assert.ok(!titles.has(title),'unique title '+route);titles.add(title);assert.equal((html.match(/<h1[ >]/g)||[]).length,1,route+' h1');assert.match(html,/<meta name="description" content="[^"]+"/);assert.match(html,/<link rel="canonical"/);assert.match(html,/noindex/);for(const [,href] of html.matchAll(/href="(\/[^"#?]*)/g)){if(!href.startsWith('/_next'))internal.add(href)}for(const [,src] of html.matchAll(/src="([^\"]+)"/g)){if(src.startsWith('/_next/image'))images.add(src.replaceAll('&amp;','&'))}results.push({route,status:res.status,title});}
for(const route of internal){const res=await fetch(base+route);assert.ok(res.ok,route+' broken internal link')}
for(const src of images){const res=await fetch(base+src);assert.ok(res.ok,'Image '+src);assert.ok(res.headers.get('content-type')?.startsWith('image/'))}
for(const [legacy,target] of [['/index.html','/'],['/Dunakor kapcsolat.html','/kapcsolat'],['/felülettisztítás.html','/szolgaltatasok/felulettisztitas'],['/Dunakor géppark.html','/geppark']]){const res=await fetch(base+encodeURI(legacy),{redirect:'manual'});assert.equal(res.status,308,legacy);assert.equal(new URL(res.headers.get('location'),base).pathname,target)}
assert.equal((await fetch(base+'/nincs-ilyen-oldal')).status,404);
assert.match(await (await fetch(base+'/robots.txt')).text(),/Disallow: \//);
assert.match(await (await fetch(base+'/sitemap.xml')).text(),/szolgaltatasok\/betonvedelem/);
const report={testedAt:new Date().toISOString(),base,routes:results,internalLinks:internal.size,optimizedImages:images.size,redirects:4,notFound:404,robots:'noindex/disallow'};
await writeFile('docs/route-checks.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
