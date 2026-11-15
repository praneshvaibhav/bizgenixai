import assert from 'node:assert/strict';
import {mkdtemp,readFile,readdir}from'node:fs/promises';
import {tmpdir}from'node:os';
import{join}from'node:path';
process.env.BIZGENIX_DATA_DIR=await mkdtemp(join(tmpdir(),'bizgenix-queue-test-'));
const {validate,receive,limit,root,deliver,phoneNumber}=await import('../lib/enquiries.mjs');
const input={id:crypto.randomUUID(),name:'Delivery QA',email:'qa@example.com',phone:'98765 43210',company:'Test',queryType:'AI Product Demo',product:'Growth Intelligence',message:'Testing queue validation only',source:'linkedin',medium:'social',campaign:'qa'};
const data=validate(input);assert.equal(data.phone,'+919876543210');assert.throws(()=>validate({...input,phone:''}));assert.throws(()=>validate({...input,phone:'12345'}));assert.throws(()=>validate({...input,phone:'0000000000'}));assert.equal(phoneNumber('+971 50 123 4567'),'+971501234567');assert.equal(phoneNumber('098765 43210'),'+919876543210');assert.equal(phoneNumber('91 98765-43210'),'+919876543210');assert.equal(phoneNumber('0044 20 7946 0958'),'+442079460958');assert.equal(phoneNumber('416 555 0123'),'4165550123');assert.equal(await receive(data),true);assert.equal(await receive(data),false);assert.equal((await readdir(join(root,'enquiries'))).length,1);await assert.rejects(()=>receive({...data,message:'A different payload here'}));assert.throws(()=>validate({...input,email:'x@example.com\nBcc: other@example.com'}));assert.throws(()=>validate({...input,product:'Unknown'}));assert.throws(()=>validate({...input,message:'short'}));assert.equal(await limit('test',1),true);assert.equal(await limit('test',1),false);const events=await readFile(join(root,'metrics.jsonl'),'utf8');assert.ok(!events.includes('qa@example.com'));assert.ok(!events.includes(input.message));assert.ok(!events.includes('9876543210'));console.log('PASS durable save, duplicate protection, payload conflict, input and phone validation, rate limits, no contact PII in metrics. No emails sent.');

const {SESv2Client}=await import('@aws-sdk/client-sesv2');
const original=SESv2Client.prototype.send;
SESv2Client.prototype.send=async()=>{throw Object.assign(new Error('test failure'),{name:'TestTransportFailure'});};
await deliver(data.id);assert.equal(JSON.parse(await readFile(join(root,'enquiries',data.id+'.json'),'utf8')).status,'queued');
let sentBody='',sentSubject='';SESv2Client.prototype.send=async(c)=>{sentBody=c.input.Content.Simple.Body.Text.Data;sentSubject=c.input.Content.Simple.Subject.Data;return{MessageId:'test-message-id'};};await deliver(data.id);assert.ok(sentBody.includes('Phone: +919876543210'));assert.ok(sentBody.includes('WhatsApp: https://wa.me/919876543210'));assert.ok(sentSubject.includes('AI Product Demo / Growth Intelligence from Delivery QA'));assert.equal(JSON.parse(await readFile(join(root,'enquiries',data.id+'.json'),'utf8')).status,'sent');
let duplicate=0;SESv2Client.prototype.send=async()=>{duplicate++;return{};};await deliver(data.id);assert.equal(duplicate,0);SESv2Client.prototype.send=original;
console.log('PASS failed delivery retained; retry success saved; sent record not resent. SES mocked.');
