'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight, Menu, X, Phone} from 'lucide-react';
import {navigation,company} from '@/lib/content';
export function Logo(){return <span className="brand-crop" role="img" aria-label="Dunakor — eredeti embléma"/>}
export default function Header(){const path=usePathname();const [open,setOpen]=useState(false);const dialog=useRef<HTMLDialogElement>(null);const toggle=useRef<HTMLButtonElement>(null);
useEffect(()=>{setOpen(false)},[path]);
useEffect(()=>{if(open){dialog.current?.showModal();document.body.style.overflow='hidden'}else{dialog.current?.close();document.body.style.overflow=''}return()=>{document.body.style.overflow=''}},[open]);
return <><div className="demo-bar">FÜGGETLEN KONCEPCIÓ <span>—</span> Nem hivatalos vállalati weboldal <Link href="/bemutato">A bemutatóról <ArrowUpRight size={12}/></Link></div><header className="site-header"><div className="nav-wrap"><Link className="brand" href="/" aria-label="Dunakor kezdőlap"><Logo/></Link><nav className="desktop-nav" aria-label="Fő navigáció">{navigation.map(([label,href])=><Link key={href} href={href} aria-current={path.startsWith(href)?'page':undefined}>{label}</Link>)}</nav><Link className="nav-cta" href="/kapcsolat">Ajánlatkérés <ArrowUpRight size={17}/></Link><button ref={toggle} className="menu-toggle" onClick={()=>setOpen(true)} aria-label="Menü megnyitása" aria-expanded={open} aria-controls="mobile-nav"><Menu/></button></div></header><dialog id="mobile-nav" aria-label="Mobil menü" className="mobile-dialog" ref={dialog} onCancel={()=>setOpen(false)} onClose={()=>{setOpen(false);toggle.current?.focus()}}><div className="mobile-head"><Logo/><button aria-label="Menü bezárása" onClick={()=>setOpen(false)}><X/></button></div><nav aria-label="Mobil navigáció"><Link href="/" onClick={()=>setOpen(false)}>Kezdőlap</Link>{navigation.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={20}/></Link>)}</nav><a className="mobile-phone" href={company.phoneHref}><Phone size={18}/>{company.phone}</a></dialog></>}
