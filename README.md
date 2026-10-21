# Dunakor — prémium ipari weboldalkoncepció

Magyar nyelvű, többoldalas Next.js App Router weboldal. Független bemutató; nem hivatalos Dunakor-oldal, nincs éles adatgyűjtés vagy kiküldés. Az eredeti termelési honlaphoz nem történt módosítás.

## Helyi futtatás

Node.js 22 LTS és npm szükséges. A projektben rögzített package-lock.json használandó.

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Előnézet: http://127.0.0.1:3000

```powershell
npm run typecheck
npm run build
npm start
```

A `next start` előtt állítsuk le a fejlesztői szervert, ha ugyanazt a portot használjuk.

Útvonal- és képellenőrzés futó szerver ellen:

```powershell
node scripts/check-routes.mjs
```

Eltérő porthoz: `$env:TEST_BASE_URL='http://127.0.0.1:3001'`.

## Megvalósítás

- Next.js 16.4.2, React 19.3.1, TypeScript, Tailwind CSS 4, Motion, Lucide.
- Manrope változó font helyben kiszolgálva; nincs Google Fonts hálózati függőség.
- Grafitszürke, törtfehér és narancs rendszer; az eredeti kék logó változatlan.
- Szerkesztőségi elrendezés, aszimmetrikus szolgáltatási rács, nagy tipográfia, visszafogott mozgás.
- Natív dialog mobilmenü és galéria: fókuszkezelés, Escape, háttérgörgetés tiltása. A galéria nyilakkal is léptethető.
- Szűrhető gépkatalógus és archív fotógaléria. Next/Image, helyi WebP nyitókép, késleltetett alsó képek.
- Oldalankénti metaadatok, canonical, Open Graph, sitemap, robots és WebSite JSON-LD. A bemutató indexelése három szinten tiltott: metadata, robots és HTTP fejléc.
- Régi HTML-címek átirányításai a `next.config.ts` fájlban.

## Útvonalak

| Útvonal | Tartalom |
|---|---|
| `/` | Teljes főoldal, szolgáltatások, technológia, gép, archív képek, kapcsolati CTA |
| `/cegunkrol` | Cégbemutató forrásalapú tartalommal |
| `/szolgaltatasok` | Hat szakterület áttekintése |
| `/szolgaltatasok/felulettisztitas` | Vizes technológia, homokszórás, szemcseszórás, csiszolás, marás |
| `/szolgaltatasok/ipari-festes` | Korrózióvédelem és bevonatok |
| `/szolgaltatasok/betonvedelem` | Helyreállítás, hézagok, injektálás, megerősítés |
| `/szolgaltatasok/ipari-padlo` | Ipari padlórendszerek |
| `/szolgaltatasok/alpin-technologia` | Nehezen hozzáférhető felületek |
| `/szolgaltatasok/epitoipari-kivitelezes` | Építőipari szakterületek |
| `/geppark` | 7 archív gépcsoport, 12 megnevezett típus, források |
| `/referenciak` | 8 eredeti honlapfotó, kategóriaszűrés, nagyítás |
| `/videok` | 8 ellenőrzött eredeti YouTube-hivatkozás |
| `/palyazatok` | GOP és GINOP közlemények, eredeti táblák |
| `/kapcsolat` | Telefon, e-mail, útvonal, külön betölthető térkép, letiltott demóűrlap |
| `/bemutato` | Források, bemutatóstátusz és tartalmi korlátok |
| `/impresszum`, `/adatkezeles` | A bemutató működése, élesítés előtti hiányok |
| `/robots.txt`, `/sitemap.xml` | Technikai SEO |

Egyedi `/referenciak/[slug]` oldalak szándékosan nincsenek: megfelelően igazolt projektszintű adat nem áll rendelkezésre. Ismeretlen címek valódi 404 oldalt adnak.

## Tartalom szerkesztése

- `lib/content.ts`: központi elérhetőségek, navigáció, típusos szolgáltatások, gépkategóriák és képgaléria.
- `lib/source-data.json`: auditált videók, forrás-URL-ek, megőrzött pályázati szövegek és táblák.
- `public/images`: eredeti anyagok és egy AI-illusztráció; nincs külső képtár-függőség.
- `components`: közös felületi elemek, navigáció, galéria, kapcsolat.
- `app/globals.css`: méretek, rácsok, színek, töréspontok és csökkentett mozgás.

Az eredeti logó a `header.jpg` fejlécben szerepel. A `.brand-crop` CSS csak nézetablakot képez körülötte, a bitmap színe, aránya és rajzolata nem módosul. A bemutató kezdeti márkahelye is ezt használja.

## Tartalmi források és jogok

A részletes induló leltár: `docs/CONTENT-INVENTORY.md`.

- `docs/discovery.json`: a 14 feltárt nyilvános oldal teljes szöveges leltára, kép- és linklistája.
- `docs/secondary-audit.json`: archív gép- és referenciakísérletek, YouTube oEmbed-válaszok.
- `docs/assets.json`: eredeti eszközfájlok URL-je, letöltésének sikere vagy hibája.
- `docs/DESIGN-AND-ASSETS.md`: új kép, prompt, látványtervezési döntések.
- `docs/QA.md`, `docs/route-checks.json`: tényleges ellenőrzések és korlátaik.

Az eredeti szolgáltatásképek nem helyettesítik a projektek hitelesítését. A gépadatok 2022-es archív adatok, nem jelenlegi kapacitásígéretek. A korábbi 100–2500 bar tartományt nem használjuk jelenlegi állításként. A jelenlegi kínálatot, kontaktadatokat és képfelhasználási engedélyeket az élesítés előtt meg kell erősíteni.

## Kapcsolat és adatkezelés

Az űrlap letiltott, nincs API-végpont és nincs hamis sikervisszajelzés. Nem gyűjt valódi megkereséseket. A `tel:` és `mailto:` linkek a látogató saját kliensét nyitják meg. A térkép csak külön kattintásra töltődik be. A videók külső YouTube-linkek; új beágyazásra nincs igazolt engedély.

Éles űrlaphoz szükséges: megbízói jóváhagyás, címzett, kézbesítési szolgáltatás és titkos környezeti változók, szerveroldali validálás, spamvédelem és sebességkorlát, naplózási/megőrzési szabályok, jóváhagyott adatkezelési tájékoztató, valódi siker- és hibatesztek. Ezek nélkül az űrlap ne legyen engedélyezve.

## GitHub

A forráskód tárolója: https://github.com/horvathleventee/dunakor. Az alapértelmezett fejlesztési ág a `main`.

```powershell
git clone https://github.com/horvathleventee/dunakor.git
Set-Location dunakor
npm ci
npm run dev
```

Környezeti változókat és hitelesítő adatokat ne commitoljunk. A `.gitignore` kizárja a buildet, node_modules-t és helyi env fájlokat.

## Vercel

1. Importáljuk a saját GitHub-tárolót egy új Vercel projektbe.
2. Framework: Next.js. Root directory: a projekt gyökere. Install: `npm ci`. Build: `npm run build`. Output: alapértelmezett.
3. Node.js: 22.x. `NEXT_PUBLIC_SITE_URL`: az adott előnézet teljes originje, záró perjel nélkül.
4. Bemutatóhoz kapcsoljuk be a deployment protection lehetőséget. A noindex önmagában nem hozzáférés-védelem.
5. Deploy után ellenőrizzük az útvonalakat, canonical címeket, átirányításokat és képeket. Hivatalos domaint csak a vállalat engedélyével kössünk hozzá.

Nincs Vercel-fiókhoz vagy domainhez konfigurált hozzáférés; a projekt helyben futó, telepítésre előkészített átadás. A noindex eltávolítása, éles cégadatok beillesztése és a demo-jelölések módosítása csak a tartalmi/jogi jóváhagyás után indokolt.

## Teljesítmény és korlátok

A fő útvonalak statikusan generálódnak. A főoldali hero WebP, a többi kép Next/Image optimalizálást kap. A klienslogika a menüre, kis mozgásra, szűrésre, dialogokra és térképkapcsolóra korlátozódik. Lighthouse-pontszám és valódi p75 Core Web Vitals mérés nem áll rendelkezésre; ezeket nem állítjuk teljesítettnek.
