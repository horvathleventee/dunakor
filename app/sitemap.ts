import type {MetadataRoute} from 'next';
import {services} from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';return ['','/cegunkrol','/szolgaltatasok',...services.map(s=>`/szolgaltatasok/${s.slug}`),'/geppark','/referenciak','/videok','/palyazatok','/kapcsolat','/bemutato','/adatkezeles','/impresszum'].map(p=>({url:base+p,lastModified:'2026-10-21'}))}
