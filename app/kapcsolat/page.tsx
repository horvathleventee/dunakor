import {PageIntro} from '@/components/ui';
import Contact from '@/components/contact';
export const metadata={title:'Kapcsolat és ajánlatkérés',description:'Dunakor 2002 Kft., Baja. Telefon, e-mail és elérhetőségek az eredeti vállalati honlap alapján.',alternates:{canonical:'/kapcsolat'}};
export default function Page(){return <><PageIntro label="Kapcsolat" title="Minden megoldás párbeszéddel kezdődik." description="Ipari felülettisztítás, felületvédelem vagy speciális kivitelezési feladat? A pontos részletekhez közvetlen egyeztetés szükséges."/><section className="wrap content-section"><Contact/></section></>}
