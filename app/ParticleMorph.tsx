'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useAnimationViewport } from './useAnimationViewport';

const WORDS = ['AI AUTOMATE', 'CUSTOM SOLUTIONS', 'GROWTH INTELLIGENCE', 'SCALE WITH AI'];
const COUNT = 6200;
// Keep every particle in the hero's light-green spectrum.
const palette = ['#35B85B', '#53C872', '#72D48A', '#93DFA3'].map(color => new THREE.Color(color).toArray());

const seededValue = (index:number,salt:number) => {
  const value=Math.sin(index*12.9898+salt*78.233)*43758.5453;
  return value-Math.floor(value);
};

function spherePositions(count:number){
  const output=new Float32Array(count*3);
  for(let i=0;i<count;i++){
    const u=seededValue(i,1),v=seededValue(i,2),theta=2*Math.PI*u,phi=Math.acos(2*v-1);
    const radius=2.08+(seededValue(i,3)-.5)*.16;
    output[i*3]=radius*Math.sin(phi)*Math.cos(theta);
    output[i*3+1]=radius*Math.cos(phi);
    output[i*3+2]=radius*Math.sin(phi)*Math.sin(theta);
  }
  return output;
}

function textPositions(text:string,count:number){
  const stacked=text==='CUSTOM SOLUTIONS'||text==='GROWTH INTELLIGENCE'; const width=stacked?1100:1300; const height=stacked?380:280;
  const canvas=document.createElement('canvas'); canvas.width=width; canvas.height=height;
  const ctx=canvas.getContext('2d')!; ctx.fillStyle='#FFFFFF'; ctx.font=`900 ${stacked?108:128}px Arial`; ctx.textAlign='center'; ctx.textBaseline='middle';
  if(stacked){const [top,bottom]=text.split(' ');ctx.fillText(top,550,112);ctx.fillText(bottom,550,258)}else{ctx.fillText(text,650,140)}
  const data=ctx.getImageData(0,0,width,height).data; const pixels:number[]=[];
  for(let y=3;y<height-3;y+=4) for(let x=3;x<width-3;x+=4) if(data[(y*width+x)*4+3]>100){pixels.push(x,y)}
  const out=new Float32Array(count*3); const scale=stacked?.0051:.0037;
  const pixelCount=pixels.length/2; const centerX=width/2; const centerY=height/2;
  for(let i=0;i<count;i++){const id=Math.floor(i*pixelCount/count)*2;out[i*3]=(pixels[id]-centerX)*scale;out[i*3+1]=(centerY-pixels[id+1])*scale;out[i*3+2]=(seededValue(i,text.length)-.5)*.13}
  return out;
}

function ParticleField(){
  const elapsed = useRef(0);
  const points=useRef<THREE.Points>(null); const pointer=useRef({x:0,y:0});
  const {sphere,states,colors}=useMemo(()=>{
    const sphere=spherePositions(COUNT); const states=WORDS.map(word=>textPositions(word,COUNT));
    const colors=new Float32Array(COUNT*3);
    for(let i=0;i<COUNT;i++){const roll=seededValue(i,9);const color=roll<.42?palette[3]:roll<.76?palette[2]:roll<.93?palette[1]:palette[0]; colors.set(color,i*3)}
    return {sphere,states,colors};
  },[]);
  const initialPositions=useMemo(()=>sphere.slice(),[sphere]);
  useEffect(()=>{const move=(e:PointerEvent)=>{pointer.current={x:(e.clientX/window.innerWidth-.5),y:(e.clientY/window.innerHeight-.5)}};window.addEventListener('pointermove',move,{passive:true});return()=>window.removeEventListener('pointermove',move)},[]);
  useFrame((_,delta)=>{
    elapsed.current += Math.min(delta, .05);
    const t=elapsed.current; const unit=3.9; const segment=Math.floor(t/unit)%8; const local=(t%unit)/unit;
    const isText=segment%2===1; const index=Math.floor(segment/2)%WORDS.length; const target=isText?states[index]:sphere;
    const eased=local<.2?local/.2:local>.82?(1-local)/.18:1; const amount=isText?eased:1-eased;
    const attr=points.current?.geometry.getAttribute('position') as THREE.BufferAttribute;
    const working=attr?.array as Float32Array | undefined;
    if(working){for(let i=0;i<working.length;i++) working[i]+=((sphere[i]+(target[i]-sphere[i])*amount)-working[i])*.075;attr.needsUpdate=true}
    if(points.current){if(isText&&amount>.96){points.current.rotation.set(0,0,0);points.current.position.set(0,0,0)}else{points.current.rotation.y=t*.17+pointer.current.x*.23;points.current.rotation.x=Math.sin(t*.22)*.12-pointer.current.y*.16;points.current.position.x=pointer.current.x*.22;points.current.position.y=-pointer.current.y*.16}}
  });
  return <points ref={points}><bufferGeometry><bufferAttribute attach="attributes-position" args={[initialPositions,3]}/><bufferAttribute attach="attributes-color" args={[colors,3]}/></bufferGeometry><pointsMaterial size={.06} sizeAttenuation vertexColors toneMapped={false} transparent opacity={1} depthWrite={false}/></points>;
}

export default function ParticleMorph(){
  const [reduce,setReduce]=useState(false);
  const { ref, visible, entered } = useAnimationViewport();
  useEffect(()=>{const query=matchMedia('(prefers-reduced-motion: reduce)');const change=()=>setReduce(query.matches);change();query.addEventListener('change',change);return()=>query.removeEventListener('change',change)},[]);
  return <div ref={ref} className={`particleMorph ${reduce?'calm':''}`} aria-label="Interactive particle system morphing from an intelligence sphere into Bizgenix capabilities">{entered&&<Canvas frameloop={visible && !reduce ? 'always' : 'demand'} dpr={[1,1.5]} camera={{position:[0,0,6.7],fov:48}} gl={{antialias:true,alpha:true,powerPreference:'high-performance'}}><ParticleField/></Canvas>}</div>;
}
