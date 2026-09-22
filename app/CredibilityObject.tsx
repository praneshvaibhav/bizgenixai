'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useAnimationViewport } from './useAnimationViewport';

type Orbiter={radiusX:number;radiusY:number;depth:number;speed:number;phase:number;size:number;color:string};

const seededValue = (index: number, salt: number) => {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
};

function System({calm}:{calm:boolean}){
  const elapsed = useRef(0);
  const whole=useRef<THREE.Group>(null),core=useRef<THREE.Group>(null),rings=useRef<THREE.Group[]>([]),particles=useRef<THREE.Mesh[]>([]);
  const orbiters=useMemo<Orbiter[]>(()=>{const count=typeof window!=='undefined'&&window.innerWidth<700?20:42;const colors=['#FFFFFF','#FFFFFF','#5AAA6C','#5AAA6C','#FFFFFF'];return Array.from({length:count},(_,i)=>({radiusX:1.25+seededValue(i,1)*1.2,radiusY:.55+seededValue(i,2)*.65,depth:(seededValue(i,3)-.5)*1.25,speed:.28+seededValue(i,4)*.38,phase:seededValue(i,5)*Math.PI*2,size:.025+seededValue(i,6)*.052,color:colors[i%colors.length]}))},[]);
  useFrame(({pointer},delta)=>{elapsed.current+=Math.min(delta,.05);const t=elapsed.current,motion=calm?0:1;if(whole.current){whole.current.position.y=Math.sin(t*1.05)*.075*motion;whole.current.rotation.y=THREE.MathUtils.lerp(whole.current.rotation.y,t*(Math.PI*2/15)*motion+pointer.x*.13,.035);whole.current.rotation.x=THREE.MathUtils.lerp(whole.current.rotation.x,-pointer.y*.11,.035)}if(core.current)core.current.rotation.y=t*(calm?.025:.07);rings.current.forEach((ring,i)=>{if(ring){ring.rotation.z=(i%2?1:-1)*t*(.045+i*.012)*motion;ring.rotation.y=Math.sin(t*.13+i)*.18}});particles.current.forEach((particle,i)=>{const p=orbiters[i];if(!particle)return;const a=t*p.speed*motion+p.phase;particle.position.set(Math.cos(a)*p.radiusX,Math.sin(a*1.35)*p.radiusY,p.depth+Math.sin(a*.7)*.28);particle.scale.setScalar(1+Math.sin(t*1.7+i)*.16)})});
  return <group ref={whole} rotation={[.16,-.12,0]}><group ref={core}>{[0,.26,-.26].map((offset,i)=><mesh key={i} position={[offset,0,-Math.abs(offset)*.28]} rotation={[i*.2,i*.32,i*.16]}><boxGeometry args={[1.15-i*.1,1.15-i*.1,.12]}/><meshPhysicalMaterial color={i===0?'#FFFFFF':'#FFFFFF'} transparent opacity={i===0?.19:.13} roughness={.12} metalness={.18}/></mesh>)}<mesh rotation={[0,.3,0]}><boxGeometry args={[.62,.62,.62]}/><meshStandardMaterial color="#000000" metalness={.45} roughness={.2} emissive="#5AAA6C" emissiveIntensity={.35}/></mesh><mesh position={[0,0,.325]} rotation={[0,.3,0]}><planeGeometry args={[.34,.34]}/><meshBasicMaterial color="#5AAA6C" transparent opacity={.95}/></mesh><mesh position={[0,0,.34]} rotation={[0,.3,0]}><circleGeometry args={[.105,24]}/><meshBasicMaterial color="#FFFFFF"/></mesh></group>{[[1.28,.02,.56,0],[1.63,.01,-.48,.72],[1.96,.009,.24,-.42]].map(([radius,tube,tilt,turn],i)=><group key={i} ref={el=>{if(el)rings.current[i]=el}} rotation={[tilt,turn,0]}><mesh><torusGeometry args={[radius,tube,8,128]}/><meshBasicMaterial color={i===1?'#FFFFFF':'#5AAA6C'} transparent opacity={i===1?.55:.7}/></mesh></group>)}{orbiters.map((p,i)=><mesh key={i} ref={el=>{if(el)particles.current[i]=el}}><sphereGeometry args={[p.size,10,10]}/><meshStandardMaterial color={p.color} emissive={p.color} emissiveIntensity={p.color==='#FFFFFF'?.18:.42} roughness={.25}/></mesh>)}</group>;
}

export default function CredibilityObject(){const[calm,setCalm]=useState(false);const{ref,visible,entered}=useAnimationViewport();useEffect(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)'),update=()=>setCalm(q.matches);update();q.addEventListener('change',update);return()=>q.removeEventListener('change',update)},[]);return <div ref={ref} className="credibilityObject" aria-label="Interactive 3D Bizgenix AI intelligence system"><div className="credibilityCanvas">{entered&&<Canvas frameloop={visible&&!calm?'always':'demand'} dpr={[1,1.5]} camera={{position:[0,0,4.9],fov:43}} gl={{alpha:true,antialias:true,powerPreference:'high-performance'}}><ambientLight intensity={1.3}/><pointLight position={[2,3,4]} color="#FFFFFF" intensity={12}/><pointLight position={[-3,-1,2]} color="#5AAA6C" intensity={5}/><System calm={calm}/></Canvas>}</div></div>}
