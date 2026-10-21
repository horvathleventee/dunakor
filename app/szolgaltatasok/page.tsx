import type {Metadata} from 'next';
import {PageIntro,ServicesGrid,CTA} from '@/components/ui';
import {reviewNote} from '@/lib/content';
export const metadata:Metadata={title:'Ipari szolgáltatások',description:'Hat ipari szakterület: felülettisztítás, ipari festés, betonvédelem, padlók, alpin technológia és kivitelezés.',alternates:{canonical:'/szolgaltatasok'}};
export default function Page(){return <><PageIntro label="Szolgáltatások" title="Az előkészítéstől a védelemig." description="Egymásra épülő megoldások beton- és acélfelületekhez, ipari létesítményekhez és speciális kivitelezési feladatokhoz."/><section className="wrap content-section"><ServicesGrid heading="h2"/><p className="notice">{reviewNote}</p></section><CTA/></>}
