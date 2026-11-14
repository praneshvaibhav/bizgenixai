import { mkdir, readFile, writeFile, rename, readdir, rm, appendFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';
export const root = process.env.BIZGENIX_DATA_DIR || '/var/lib/bizgenix-website';
const leads = join(root, 'enquiries');
export const types=['Custom AI Solution','AI Product Demo','Corporate AI Training','Individual AI Learning','Other Enquiry'];
export async function init(){await mkdir(leads,{recursive:true,mode:0o700});}
export async function save(path,value){const tmp=path+'.tmp-'+process.pid;await writeFile(tmp,JSON.stringify(value),{mode:0o600});await rename(tmp,path);}
export function clean(value,max=200){return typeof value==='string'?value.trim().slice(0,max):'';}
export function campaign(value){return clean(value,100).replace(/[^a-zA-Z0-9_. -]/g,'');}
export async function metric(name,detail={}){await init();const row={at:new Date().toISOString(),event:name,segment:types.includes(detail.segment)?detail.segment:'',product:campaign(detail.product),source:campaign(detail.source),medium:campaign(detail.medium),campaign:campaign(detail.campaign),test:detail.test===true||detail.campaign==='delivery-test'};await appendFile(join(root,'metrics.jsonl'),JSON.stringify(row)+'\n',{mode:0o600});}
export async function limit(key,max=6){await init();const hour=new Date().toISOString().slice(0,13);const bucket=join(root,'limits');await mkdir(bucket,{recursive:true,mode:0o700});const name=createHash('sha256').update(hour+key).digest('hex');for(let n=0;n<max;n++){try{await writeFile(join(bucket,name+'-'+n),'',{flag:'wx',mode:0o600});return true;}catch(e){if(e.code!=='EEXIST')throw e;}}return false;}
export function validate(body){
 const name=clean(body.name),email=clean(body.email,254),company=clean(body.company),queryType=clean(body.queryType),product=clean(body.product),message=clean(body.message,4000),id=clean(body.id,36);
 if(!/^[a-f0-9-]{36}$/.test(id)||name.length<2||!/^\S+@[^\s@]+\.[^\s@]+$/.test(email)||/[\r\n]/.test(email)||!types.includes(queryType)||message.length<15)throw new Error('Please add your name, valid email, enquiry type and a brief of at least 15 characters.');
 if(queryType==='AI Product Demo'&&!['Growth Intelligence','Bizgenix AI CRM','Voice AI','BizChat','ScaleOS','Help me choose'].includes(product))throw new Error('Please select a product.');
 return {id,name,email,company,queryType,product:queryType==='AI Product Demo'?product:'',message,source:campaign(body.source),medium:campaign(body.medium),campaign:campaign(body.campaign),test:email.toLowerCase()==='info@bizgenix.ai'&&message.startsWith('[DELIVERY TEST]')};
}
export async function receive(data){await init();const path=join(leads,data.id+'.json');const hash=createHash('sha256').update(JSON.stringify(data)).digest('hex');try{await writeFile(path,JSON.stringify({...data,hash,createdAt:new Date().toISOString(),status:'queued',attempts:0}),{flag:'wx',mode:0o600});await metric('enquiry_received',{...data,segment:data.queryType});return true;}catch(e){if(e.code!=='EEXIST')throw e;const previous=JSON.parse(await readFile(path,'utf8'));if(previous.hash!==hash)throw new Error('This enquiry reference was already used. Reload the page before sending a different enquiry.');return false;}}
export async function deliver(id){const path=join(leads,id+'.json'),lock=path+'.lock';try{await mkdir(lock);}catch(e){if(e.code==='EEXIST')return;throw e;}try{
 const lead=JSON.parse(await readFile(path,'utf8'));if(lead.status==='sent')return;
 const client=new SESv2Client({region:process.env.AWS_REGION||'ap-south-1',maxAttempts:1});
 lead.attempts++;lead.lastAttempt=new Date().toISOString();await save(path,lead);
 try{const result=await client.send(new SendEmailCommand({FromEmailAddress:'Bizgenix Website <info@bizgenix.ai>',Destination:{ToAddresses:['info@bizgenix.ai']},ReplyToAddresses:[lead.email],Content:{Simple:{Subject:{Data:`${lead.test?'[TEST] ':''}Bizgenix website enquiry [${lead.id}]`,Charset:'UTF-8'},Body:{Text:{Data:`${lead.test?'DELIVERY TEST — NOT A SALES LEAD\n\n':''}Enquiry: ${lead.queryType}\nProduct: ${lead.product}\nName: ${lead.name}\nEmail: ${lead.email}\nCompany: ${lead.company}\nReceived: ${lead.createdAt}\nSource: ${lead.source}\nMedium: ${lead.medium}\nCampaign: ${lead.campaign}\n\nBrief (visitor-provided text):\n${lead.message}\n\nReference: ${lead.id}`,Charset:'UTF-8'}}}}}));lead.status='sent';lead.messageId=result.MessageId;lead.sentAt=new Date().toISOString();await save(path,lead);await metric('enquiry_email_accepted',{...lead,segment:lead.queryType});}
 catch(e){lead.status='queued';lead.lastError=e.name||'DeliveryError';await save(path,lead);}
 }finally{await rm(lock,{recursive:true,force:true});}}
export async function drain(){await init();for(const file of await readdir(leads)){if(!file.endsWith('.json'))continue;const p=join(leads,file),lead=JSON.parse(await readFile(p,'utf8'));if(lead.status==='sent')continue;if(lead.lastAttempt&&Date.now()-Date.parse(lead.lastAttempt)<Math.min(3600000,60000*2**Math.min(lead.attempts,6)))continue;const lock=p+'.lock';try{if(Date.now()-(await stat(lock)).mtimeMs>300000)await rm(lock,{recursive:true,force:true});}catch{}await deliver(lead.id);}
 // Rate-limit slots expire; lead records are retained for business follow-up.
 for(const f of await readdir(join(root,'limits')).catch(()=>[])){const p=join(root,'limits',f);if(Date.now()-(await stat(p)).mtimeMs>86400000)await rm(p);}
}
