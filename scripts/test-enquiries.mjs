import assert from 'node:assert/strict';
import {mkdtemp,readFile,readdir}from'node:fs/promises';
import {tmpdir}from'node:os';
import{join}from'node:path';
process.env.BIZGENIX_DATA_DIR=await mkdtemp(join(tmpdir(),'bizgenix-queue-test-'));
const {validate,receive,limit,root,deliver}=await import('../lib/enquiries.mjs');
const input={id:crypto.randomUUID(),name:'Delivery QA',phone:'+91 87806 71906',email:'qa@example.com',company:'Test',queryType:'AI Product Demo',product:'Growth Intelligence',message:'Testing queue validation only',source:'linkedin',medium:'social',campaign:'qa'};
const data=validate(input);assert.equal(data.phone,'+918780671906');for(const phone of ['', '8780671906', '+0123456789', '+1234', '+1234567890123456', '+91abc8780671906'])assert.throws(()=>validate({...input,phone}));assert.equal(await receive(data),true);assert.equal(await receive(data),false);assert.equal((await readdir(join(root,'enquiries'))).length,1);await assert.rejects(()=>receive({...data,message:'A different payload here'}));assert.throws(()=>validate({...input,email:'x@example.com\nBcc: other@example.com'}));assert.throws(()=>validate({...input,product:'Unknown'}));assert.throws(()=>validate({...input,message:'short'}));assert.equal(await limit('test',1),true);assert.equal(await limit('test',1),false);const events=await readFile(join(root,'metrics.jsonl'),'utf8');assert.ok(!events.includes('qa@example.com'));assert.ok(!events.includes(input.message));assert.ok(!events.includes(data.phone));console.log('PASS durable save, duplicate protection, payload conflict, input validation, rate limits, no contact PII in metrics. No emails sent.');

const {SESv2Client}=await import('@aws-sdk/client-sesv2');
const original=SESv2Client.prototype.send;
SESv2Client.prototype.send=async()=>{throw Object.assign(new Error('test failure'),{name:'TestTransportFailure'});};
await deliver(data.id);assert.equal(JSON.parse(await readFile(join(root,'enquiries',data.id+'.json'),'utf8')).status,'queued');
SESv2Client.prototype.send=async(command)=>{assert.ok(command.input.Content.Simple.Body.Text.Data.includes('Phone / WhatsApp: +918780671906'));return {MessageId:'test-message-id'};};await deliver(data.id);assert.equal(JSON.parse(await readFile(join(root,'enquiries',data.id+'.json'),'utf8')).status,'sent');
let duplicate=0;SESv2Client.prototype.send=async()=>{duplicate++;return{};};await deliver(data.id);assert.equal(duplicate,0);SESv2Client.prototype.send=original;
console.log('PASS failed delivery retained; retry success saved; sent record not resent. SES mocked.');
