# Vizuális rendszer és eszközleltár

## Vizuális döntések

A fő motívum a felület: beton, acél, víz és a beavatkozás nyoma. A nagy betűs nyitócím, a műszaki jelölések, a vékony elválasztók és a szögletes elemek ipari karaktert adnak. A sötét technológiai rész és a világos szolgáltatási/katalógus szakaszok ritmust váltanak. A narancs a cselekvési pontokra és egy-egy címsorra korlátozódik. Az eredeti kék márka nem kapott új színt.

Színek: #171e22 tinta, #222b30 grafit, #647078 másodlagos szöveg, #f5f6f3 törtfehér, #ef7928 narancs. A narancs gombon sötét betűk szerepelnek. Betű: Manrope Variable, helyben tárolt WOFF2.

## Eredeti eszközök

A teljes tételes URL- és letöltési leltár az `assets.json` fájlban található. A források az eredeti dunakor.hu nyilvános oldalai.

- `public/images/header.jpg`: változatlan 900×97 fejléc, benne az eredeti kék logó. CSS-nézetablak, aránytartó megjelenítés. A forrásfájl nincs szerkesztve.
- `mini-6.jpg`, `mini-p1070283.jpg`: az ipari festési oldal fényképei.
- `mini-dscn2456.jpg`, `mini-heves 071.jpg`, `felulettisztitas_kep.jpg`: a felülettisztítási oldal képei.
- `mini-dscn1807.jpg`, `mini-fnykp0140.jpg`, `betonvedelem.jpg`: a betonvédelmi oldal képei.
- `eml.video 163.jpg`, `mini-p1070340.jpg`, `mini-20130407042.jpg`, `iparipadlo_kep.jpg`: padlótechnikai anyagok.
- `alpin_tech.jpg`: kisfelbontású alpin kategóriakép; nagy felbontású helyettesítés szükséges.
- `mini-p1070943.jpg`, `mini-p1070949.jpg`, `mini-dscf0199.jpg`, `mini-img_20121130_115302.jpg`: az építőipari oldal képei.
- `blastrac_1-15ds_global.jpg`, `padlotisztitok.jpg`, `csiszolok.jpg`, `kompresszor.jpg`, `csavarkompresszor.jpg`: eredeti berendezés/kategóriafotók. A csoportképek nem állítanak konkrét egyedi gépazonosságot.
- `dlogo.png`, `nfu.jpg`, GINOP/finanszírozási képek: eredeti támogatási anyagok, szövegük és arányaik megtartva.

A 0 bájtos vagy 404-es letöltések nem szerepelnek az alkalmazásban. Két gépcsoport semleges szöveges képhelyet kapott. Az eredeti képeken nincs tartalmi manipuláció. A Next/Image csak kiszolgálási méretet/formátumot optimalizál. Nyilvános használat előtt tulajdonosi és képfelhasználási engedély szükséges.

## Új kép

- Beépített Imagegen eszközzel generálva, nem CLI/API-kulccsal.
- Eredeti: `public/images/hero-illustration.png`.
- Optimalizált webes változat: `public/images/hero-illustration.webp` (1672×941; WebP 85 minőség).
- A főoldalon és az Open Graph leírásában is AI-illusztrációként jelölt. Nem Dunakor-projekt, nem valós munkatárs és nem saját gép.
- Egyetlen új bitmap készült. Nincs generált logó, esettanulmány vagy előtte–utána kép.

### Végleges generálási prompt

> Use case: photorealistic-natural. Asset: cinematic wide website hero photograph for an industrial surface preparation demonstration, 16:9 landscape. Generic illustrative scene, NOT an actual company's project. A professional industrial technician operating a high-pressure water cleaning lance on a massive weathered concrete surface inside a European industrial structure. Worker on RIGHT third, in full appropriate waterjet protective suit, helmet with full face shield, hearing protection, protective gloves and boots, standing securely on ground, controlled jet pointed away from body toward concrete, hose behind operator. Strong plume of white water mist backlit by daylight from upper right, massive gray structural columns and steel diagonal beams, wet textured floor. Left half quiet dark charcoal atmospheric negative space for typography to be added in website. Premium editorial architectural photography, realistic natural proportions, sophisticated cool graphite palette, subtle warm orange protective clothing detail. Wide shot, impressive scale, believable industrial setting, photographic texture. No text, no logos, no watermark.
