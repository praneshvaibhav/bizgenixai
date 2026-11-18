'use client';
import {useEffect} from 'react';
export default function Attribution(){useEffect(()=>{try{const p=new URLSearchParams(window.location.search);const ref=document.referrer?new URL(document.referrer).hostname:'';if(p.has('utm_source')||(!sessionStorage.getItem('bizgenix-attribution')&&ref!==window.location.hostname)){sessionStorage.setItem('bizgenix-attribution',JSON.stringify({source:p.get('utm_source')||ref||'direct',medium:p.get('utm_medium')||'',campaign:p.get('utm_campaign')||''}));}}catch{}},[]);return null;}
