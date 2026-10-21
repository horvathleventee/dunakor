'use client';
import {m,LazyMotion,domAnimation,useReducedMotion} from 'motion/react';
export default function Entrance({children,className}:{children:React.ReactNode;className?:string}){const reduced=useReducedMotion();return <LazyMotion features={domAnimation}><m.div className={className} initial={false} animate={{y:reduced?0:[8,0]}} transition={{duration:reduced?0:.6}}>{children}</m.div></LazyMotion>}
