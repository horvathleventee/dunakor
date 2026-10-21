# Ellenőrzési napló

2026. október 21. Windows, Node.js 22.11.0. A böngészős ellenőrzések a Codex beépített böngészőjében történtek.

## Elvégzett ellenőrzések

- Next.js production build: sikeres; TypeScript fordítás sikeres; 21 generált technikai és tartalmi oldal.
- `npm audit`: 0 sérülékenység. A kezdeti Sharp 0.34.x figyelmeztetést a 0.35.5-re frissítés megoldotta.
- 17 tartalmi útvonal: HTTP 200, egyedi cím, leírás és canonical, pontosan egy H1, noindex. A teljes útvonalteszt a végleges production builden, `next start` alatt is sikeresen lefutott a 3001-es porton.
- 28 belső link és 28 optimalizált kép-URL: sikeres HTTP-válasz.
- 4 mintavett történeti URL: 308 és helyes céloldal. A teszt feltárta a szóközös/ékezetes régi URL-ek kódolási problémáját; javítva.
- Ismeretlen oldal: valódi 404. Robots és sitemap elérhető.
- 54 reszponzív mérés: főoldal, hosszú című szolgáltatási oldal, géppark, referenciák, kapcsolat, pályázatok × 320, 360, 390, 430, 768, 1024, 1280, 1440, 1920 px. Minden esetben túlcsordulás nélkül, egy H1.
- További 6 oldal 320 px-en: videók, szolgáltatás-áttekintő, cégünk, bemutató, adatkezelés, impresszum — nincs vízszintes túlcsordulás.
- A 320 px-es videóajánló címtördelési hibája javítva. A mobil nyitóképen a munkavégzést szemléltető rész láthatósága javítva.
- Mobilmenü: megnyitás, dialog-fókusz, Escape bezárás, fókusz visszaadása a nyitógombra ellenőrizve.
- Gépszűrő: Padlótechnika kiválasztására két csoport; adatlap nyitás/zárás működik.
- Galéria: Ipari padlók szűrés, képnyitás, következő kép, bezárás; fókusz visszatér a kiinduló kártyára.
- Kapcsolati űrlap szándékosan letiltott; nincs küldési API, nincs hamis sikerkijelzés.
- Helyi fontok; nincs alapértelmezésben betöltött térkép vagy videólejátszó.

A részletes útvonaleredményeket a `route-checks.json` tartalmazza. A reszponzív mérés a DOM scrollWidth/clientWidth összehasonlításán alapul, vizuális nyitóoldal-ellenőrzéssel kiegészítve. Az elérhető szélesség a böngésző görgetősávja miatt 15 px-szel kisebb lehet a beállított viewportnál.

## Nem állítjuk igazoltnak

- Nincs mért Lighthouse-pontszám, axe-audit vagy képernyőolvasós teljes teszt. A WCAG 2.2 AA teljes megfelelése nem tanúsított.
- Nincs valódi forgalmon mért p75 LCP/CLS/INP; a briefben szereplő célértékek célok maradnak.
- Nincs végrehajtott külső telepítés, domainbekötés, éles e-mail-kézbesítés vagy adatgyűjtés.
- A térkép külső szolgáltató betöltése/címfeloldása nem igazolja a telephely koordinátáit.
- Az archív fotók publikálási engedélye, a mai gépkapacitások és a jelenlegi cégadatok vállalati megerősítésre várnak.

## Élesítéshez szükséges

1. A vállalat jóváhagyása, mai elérhetőségei és hivatalos cégadatai.
2. Jóváhagyott szolgáltatáslista, gépadatok, referenciák és nagyfelbontású fotók.
3. Képfelhasználási és videóbeágyazási engedélyek.
4. Pályázati közzétételi követelmények és hiányzó táblák felülvizsgálata.
5. Valós ajánlatkérési háttér, szerveroldali validálás, spamvédelem, adatkezelés és kézbesítési próbák.
6. Célkörnyezetben teljesítmény- és akadálymentességi mérés, majd csak jóváhagyás után indexelés.
