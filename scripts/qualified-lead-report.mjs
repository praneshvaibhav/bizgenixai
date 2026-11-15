// Aggregate only. Never prints prospect names, phones, emails or briefs.
// Optional private qualification file: BIZGENIX_DATA_DIR/qualification.json
// {"lead-id":{"status":"qualified","reviewedBy":"sales-owner","reviewedAt":"ISO date"}}
// States: unreviewed, qualified, disqualified, spam. No auto-qualification.
import {readFile,readdir} from 'node:fs/promises';
import {join} from 'node:path';
const root=process.env.BIZGENIX_DATA_DIR || '/var/lib/bizgenix-website';
const [from,to]=process.argv.slice(2);
for(const value of [from,to]) if(value && !Number.isFinite(Date.parse(value))) throw new Error('Use ISO dates for from/to');
if(from && to && Date.parse(from)>=Date.parse(to)) throw new Error('from must precede to');
const inside=value=>Number.isFinite(Date.parse(value)) && (!from || Date.parse(value)>=Date.parse(from)) && (!to || Date.parse(value)<Date.parse(to));
let qualification={};
try {qualification=JSON.parse(await readFile(join(root,'qualification.json'),'utf8'));} catch(e) {if(e.code!=='ENOENT')throw e;}
const files=(await readdir(join(root,'enquiries'))).filter(f=>f.endsWith('.json'));
const records=await Promise.all(files.map(async f=>JSON.parse(await readFile(join(root,'enquiries',f),'utf8'))));
const cohort=records.filter(r=>inside(r.createdAt));
const nonTest=cohort.filter(r=>!r.test);
const states={unreviewed:0,qualified:0,disqualified:0,spam:0};
let invalidReviews=0;
for(const lead of nonTest){
 const q=qualification[lead.id];
 const valid=q && Object.hasOwn(states,q.status) && q.status!=='unreviewed' && typeof q.reviewedBy==='string' && q.reviewedBy.trim() && Number.isFinite(Date.parse(q.reviewedAt));
 if(q && q.status!=='unreviewed' && !valid)invalidReviews++;
 states[valid?q.status:'unreviewed']++;
}
const counts=key=>Object.fromEntries([...new Set(nonTest.map(r=>r[key]||'unattributed'))].map(k=>[k,nonTest.filter(r=>(r[key]||'unattributed')===k).length]));
// Segment labels are bounded by form validation; omit arbitrary source strings for privacy.
console.log(JSON.stringify({generatedAt:new Date().toISOString(),period:{fromInclusive:from||null,toExclusive:to||null},nonTestSubmissions:nonTest.length,testSubmissions:cohort.length-nonTest.length,qualification:states,invalidReviews,nonTestEmailAccepted:nonTest.filter(r=>r.status==='sent').length,nonTestPendingDelivery:nonTest.filter(r=>r.status!=='sent').length,bySegment:counts('queryType'),bookedMeetings:null,wonCustomers:null,revenue:null,notes:['Non-test submissions are not automatically genuine or qualified.','Email accepted means provider acceptance, not recipient read or inbox placement.','Meeting, win and revenue records are not integrated; null means unknown.','Qualification requires a private, dated human sales review.']},null,2));
