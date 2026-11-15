import assert from 'node:assert/strict';
import {mkdtemp,readFile,readdir}from'node:fs/promises';
import {tmpdir}from'node:os';
import{join}from'node:path';
process.env.BIZGENIX_DATA_DIR=await mkdtemp(join(tmpdir(),'bizgenix-queue-test-'));
const {validate,receive,limit,root,deliver,phoneNumber}=await import('../lib/enquiries.mjs');
const input={id:crypto.randomUUID(),name:'Delivery QA',phone:'+91 87806 71906',email:'qa@example.com',company:'Test',queryType:'AI Product Demo',product:'Growth Intelligence',message:'Testing queue validation only',source:'linkedin',medium:'social',campaign:'qa'};
const data=validate(input);assert.equal(data.phone,'+918780671906');for(const phone of ['', '12345', '5551234567', '0000000000', '+0123456789', '+1234', '+1234567890123456', '+91abc8780671906'])assert.throws(()=>validate({...input,phone}));for(const [typed,saved] of [['8780671906','+918780671906'],['087806 71906','+918780671906'],['91 87806-71906','+918780671906'],['+971 50 123 4567','+971501234567'],['0044 20 7946 0958','+442079460958'],['+1 (416) 555-0123','+14165550123']])assert.equal(phoneNumber(typed),saved);assert.equal(await receive(data),true);assert.equal(await receive(data),false);assert.equal((await readdir(join(root,'enquiries'))).length,1);await assert.rejects(()=>receive({...data,message:'A different payload here'}));assert.throws(()=>validate({...input,email:'x@example.com\nBcc: other@example.com'}));assert.throws(()=>validate({...input,product:'Unknown'}));assert.throws(()=>validate({...input,message:'short'}));assert.equal(await limit('test',1),true);assert.equal(await limit('test',1),false);const events=await readFile(join(root,'metrics.jsonl'),'utf8');assert.ok(!events.includes('qa@example.com'));assert.ok(!events.includes(input.message));assert.ok(!events.includes(data.phone));console.log('PASS durable save, duplicate protection, payload conflict, input validation, rate limits, no contact PII in metrics. No emails sent.');

const {SESv2Client}=await import('@aws-sdk/client-sesv2');
const original=SESv2Client.prototype.send;
SESv2Client.prototype.send=async()=>{throw Object.assign(new Error('test failure'),{name:'TestTransportFailure'});};
await deliver(data.id);assert.equal(JSON.parse(await readFile(join(root,'enquiries',data.id+'.json'),'utf8')).status,'queued');
SESv2Client.prototype.send=async(command)=>{assert.ok(command.input.Content.Simple.Body.Text.Data.includes('Phone / WhatsApp: +918780671906'));assert.ok(command.input.Content.Simple.Body.Text.Data.includes('Open WhatsApp chat: https://wa.me/918780671906'));assert.ok(command.input.Content.Simple.Subject.Data.includes('AI Product Demo / Growth Intelligence from Delivery QA'));return {MessageId:'test-message-id'};};await deliver(data.id);assert.equal(JSON.parse(await readFile(join(root,'enquiries',data.id+'.json'),'utf8')).status,'sent');
let duplicate=0;SESv2Client.prototype.send=async()=>{duplicate++;return{};};await deliver(data.id);assert.equal(duplicate,0);SESv2Client.prototype.send=original;
console.log('PASS failed delivery retained; retry success saved; sent record not resent. SES mocked.');
