import type {Metadata} from 'next';
import '@fontsource-variable/manrope';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000'),title:{default:'Dunakor — Ipari megoldások. Biztos alapokon.',template:'%s | Dunakor · Bemutató'},description:'Dunakor 2002 Kft. független weboldalkoncepció: ipari felülettisztítás, korrózióvédelem, betonvédelem és ipari padlók.',robots:{index:false,follow:false},openGraph:{type:'website',locale:'hu_HU',siteName:'Dunakor · Weboldalkoncepció',images:[{url:'/images/hero-illustration.webp',width:1672,height:941,alt:'Ipari felülettisztítás – AI-illusztráció'}]}};
export default function RootLayout({children}:{children:React.ReactNode}){const structured={'@context':'https://schema.org','@type':'WebSite',name:'Dunakor — független weboldalkoncepció',url:process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000',inLanguage:'hu',description:'Független fejlesztési bemutató, nem hivatalos vállalati weboldal.'};return <html lang="hu"><body id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,'\\u003c')}}/><a className="skip-link" href="#main">Ugrás a tartalomhoz</a><Header/><main id="main">{children}</main><Footer/></body></html>}
