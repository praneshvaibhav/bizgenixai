import { NextResponse } from 'next/server';
// Runtime module is shared with the background delivery worker.
// @ts-expect-error plain Node module
import { validate, receive, limit } from '../../../lib/enquiries.mjs';
export const runtime = 'nodejs';
export async function POST(request: Request) {
 if (!['https://bizgenix.ai','https://www.bizgenix.ai',...(process.env.NODE_ENV==='development'?['http://localhost:3120']:[])].includes(request.headers.get('origin') || '')) return NextResponse.json({error:'Invalid request origin'},{status:403});
 if(Number(request.headers.get('content-length')||0)>16000)return NextResponse.json({error:'Brief too large'},{status:413});
 try {
  const text=await request.text();if(text.length>16000)return NextResponse.json({error:'Brief too large'},{status:413});
  const body=JSON.parse(text);if(body.website)return NextResponse.json({error:'Unable to accept this enquiry.'},{status:400});
  let data;try{data=validate(body);}catch(e){return NextResponse.json({error:(e as Error).message},{status:400});}
  // Fixed recipient, bounded submissions and no reply-to autoresponse prevent an open relay.
  if(!await limit('email:'+data.email.toLowerCase(),4)||!await limit('global',100))return NextResponse.json({error:'Please contact info@bizgenix.ai directly or try again later.'},{status:429});
  await receive(data);
  return NextResponse.json({accepted:true,id:data.id},{status:202});
 }catch{return NextResponse.json({error:'We could not save your enquiry. Your brief remains here; please retry or email info@bizgenix.ai.'},{status:503});}
}
