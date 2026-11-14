import {readFile,readdir}from'node:fs/promises';
import {join}from'node:path';
import {root,init}from'../lib/enquiries.mjs';
await init();const leads=await Promise.all((await readdir(join(root,'enquiries'))).filter(x=>x.endsWith('.json')).map(async x=>JSON.parse(await readFile(join(root,'enquiries',x),'utf8'))));
const events=(await readFile(join(root,'metrics.jsonl'),'utf8').catch(()=>'')).split('\n').filter(Boolean).map(x=>JSON.parse(x));
console.log(JSON.stringify({generatedAt:new Date().toISOString(),genuineLeads:leads.filter(x=>!x.test).length,testLeads:leads.filter(x=>x.test).length,pendingDelivery:leads.filter(x=>x.status!=='sent').length,bySegment:Object.fromEntries([...new Set(leads.map(x=>x.queryType))].map(t=>[t,leads.filter(x=>!x.test&&x.queryType===t).length])),events:Object.fromEntries([...new Set(events.map(x=>x.event))].map(t=>[t,events.filter(x=>!x.test&&x.event===t).length]))},null,2));
