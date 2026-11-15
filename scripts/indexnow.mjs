// Tells Bing, Yandex, Naver and Seznam (through IndexNow) which URLs are new or changed.
// Bing's index is what ChatGPT search and Copilot read, so run this after every deploy
// that adds or changes pages:  node scripts/indexnow.mjs            (all sitemap URLs)
//                              node scripts/indexnow.mjs /guides /x (only these paths)
// The key is public by design: it is served at https://bizgenix.ai/968123604ee7506344a131d50fd74277.txt
const host='bizgenix.ai',key='968123604ee7506344a131d50fd74277';
const paths=process.argv.slice(2);
let urlList;
if(paths.length)urlList=paths.map(p=>'https://'+host+(p.startsWith('/')?p:'/'+p));
else{const xml=await (await fetch('https://'+host+'/sitemap.xml')).text();urlList=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);}
if(!urlList.length)throw new Error('No URLs to submit');
const response=await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json; charset=utf-8'},body:JSON.stringify({host,key,keyLocation:'https://'+host+'/'+key+'.txt',urlList})});
console.log('IndexNow',response.status,response.statusText,'for',urlList.length,'URLs');
if(!response.ok&&response.status!==202)process.exitCode=1;
