import { NextResponse } from 'next/server';
// @ts-expect-error plain Node module
import { metric, limit } from '../../../lib/enquiries.mjs';
export const runtime='nodejs';
export async function POST(request:Request){
 if(request.headers.get('origin')!=='https://bizgenix.ai')return new NextResponse(null,{status:403});
 try{const text=await request.text();if(text.length>1500)return new NextResponse(null,{status:413});const body=JSON.parse(text);if(!['contact_view','form_start','enquiry_error','email_click','whatsapp_click','phone_click'].includes(body.event))return new NextResponse(null,{status:400});if(await limit('metrics-global',2000))await metric(body.event,body);return new NextResponse(null,{status:204});}catch{return new NextResponse(null,{status:503});}
}
