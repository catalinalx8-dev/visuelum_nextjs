import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { formatDate } from '@/lib/utils'

const posts = [
  {
    slug: 'cum-optimizezi-google-business-2025',
    title: 'Cum optimizezi Google Business Profile în 2025',
    excerpt: 'Ghid complet pentru optimizarea Google Business Profile. Apariție în Google Maps, recenzii, postări săptămânale — tot ce trebuie să știi.',
    date: '2025-01-15',
    readTime: '8 min',
    category: 'SEO Local',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=1400&q=80',
    imageAlt: 'Optimizare Google Business Profile — SEO local pentru afaceri din Constanța',
    content: `
Google Business Profile (fost Google My Business) este cel mai important instrument de marketing local gratuit disponibil în 2025. Dacă afacerea ta nu apare optimizat pe Google Maps, pierzi clienți în fiecare zi.

**De ce contează Google Business Profile?**

Studiile arată că 46% din toate căutările pe Google au intenție locală. Când cineva caută "restaurant Constanța" sau "salon de înfrumusețare lângă mine", Google afișează mai întâi rezultatele din Google Maps — nu site-urile web.

**Pașii cheie pentru optimizare în 2025:**

1. **Completează toate informațiile** — Adresă exactă, program de funcționare, număr de telefon, website, categorie principală și categorii secundare.

2. **Adaugă fotografii de calitate** — Minimum 10 fotografii: exterior, interior, produse/servicii, echipă. Profilurile cu fotografii primesc cu 42% mai multe cereri de indicații rutiere.

3. **Colectează recenzii constant** — Cere recenzii clienților mulțumiți imediat după serviciu. Răspunde la toate recenziile — pozitive și negative.

4. **Postează săptămânal** — Google Posts apar direct în panoul de cunoaștere. Promovează oferte, evenimente și noutăți.

5. **Monitorizează întrebările și răspunsurile** — Adaugă întrebările frecvente cu răspunsuri înainte ca altcineva să o facă.

**Erori comune de evitat:**

- Informații inconsistente față de website (NAP: Name, Address, Phone)
- Fotografii de calitate slabă sau prea puține
- Ignorarea recenziilor negative
- Categorii greșite sau prea generale

Aplicând acești pași, afacerea ta poate apărea în "Local Pack" — primele 3 rezultate care apar pe Google Maps — în 30-90 de zile.
    `.trim(),
  },
  {
    slug: 'cat-costa-website-restaurant-constanta',
    title: 'Cât costă un website pentru un restaurant din Constanța în 2025',
    excerpt: 'Analiză detaliată a costurilor pentru un website de restaurant profesional. De ce 0 RON investiție inițială este posibil și ce implică.',
    date: '2025-01-08',
    readTime: '7 min',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80',
    imageAlt: 'Website pentru restaurant — design profesional și meniu digital online',
    content: `
Un website profesional pentru un restaurant poate costa între 500 RON și 15.000 RON, în funcție de complexitate. Dar există o alternativă: 0 RON investiție inițială, cu un abonament lunar de administrare.

**Cât costă un website de restaurant tradițional?**

- **Freelancer începător:** 500–1.500 RON — risc ridicat, calitate variabilă
- **Freelancer experimentat:** 2.000–5.000 RON — 4–8 săptămâni livrare
- **Agenție mică:** 3.000–8.000 RON — mai multă siguranță, timp similar
- **Agenție premium:** 8.000–20.000+ RON — pentru proiecte complexe

La acestea se adaugă costuri anuale: hosting (200–800 RON/an), domeniu (50–150 RON/an), actualizări (500–2.000 RON/an).

**Modelul "website gratuit + abonament lunar"**

La Visuelum, construim website-ul gratuit și îl găzduim pe serverele noastre. Tu plătești un abonament lunar care include administrarea completă: actualizări de conținut, securitate, backup, plus serviciile de marketing.

**Ce include un website bun pentru restaurant?**

- Pagina principală cu atmosferă și call-to-action clar
- Meniu digital actualizabil (PDF sau pagini dedicate)
- Galerie foto profesională
- Sistem de rezervări (opțional)
- Pagina "Despre noi" — povestea restaurantului
- Contact cu hartă Google Maps integrată
- Optimizat pentru mobil (65%+ din trafic vine de pe telefon)

**Concluzie**

Pentru un restaurant din Constanța, investiția în website se recuperează rapid dacă este însoțită de strategie SEO locală și social media. Modelul cu abonament lunar elimină bariera investiției inițiale și asigură un site mereu actualizat.
    `.trim(),
  },
  {
    slug: 'social-media-afaceri-locale-constanta',
    title: 'Social media pentru afaceri locale din Constanța — ghid practic 2025',
    excerpt: 'Cum folosești Instagram, Facebook și TikTok să aduci clienți noi la afacerea ta locală. Strategii testate, nu teorie.',
    date: '2025-01-02',
    readTime: '9 min',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&q=80',
    imageAlt: 'Social media marketing pentru afaceri locale — Instagram, Facebook și TikTok',
    content: `
Social media nu mai este opțional pentru afacerile locale. Dacă nu ești prezent și activ pe Instagram, Facebook sau TikTok, concurența ta deja câștigă clienții pe care tu îi pierzi.

**Ce platforme contează pentru afacerile locale din Constanța?**

**Instagram** — ideal pentru afaceri vizuale: restaurante, saloane, pensiuni, magazine. Stories și Reels generează cel mai mult engagement organic în 2025.

**Facebook** — audiența 30-55 ani, grupuri locale active. Esențial pentru recenzii, evenimente și reclame targetate geografic.

**TikTok** — creștere explozivă la audiența 18-35 ani. Videoclipurile autentice "din culise" performează excelent pentru restaurante și saloane.

**Strategia de conținut care funcționează**

Nu posta aleatoriu. Fiecare postare trebuie să aibă un scop:

- **Luni:** Conținut educațional sau util (sfaturi, "știai că...")
- **Miercuri:** Prezentare produs/serviciu + beneficii concrete
- **Vineri:** Conținut uman — echipă, client fericit, "din culise"
- **Weekend:** Oferte, evenimente, reminder program

**Greșeli frecvente ale afacerilor locale**

1. Postări rare și inconsistente (o dată pe lună nu ajunge)
2. Fotografii de calitate slabă (lumina naturală face minuni)
3. Texte cu greșeli sau prea formale
4. Ignorarea comentariilor și mesajelor directe
5. Copy-paste din alte surse fără personalizare locală

**Cât timp durează să vezi rezultate?**

Cu o strategie consistentă (minimum 4 postări/săptămână), primele rezultate vizibile apar în 60–90 de zile: creștere organică a urmăritorilor locali, mai multe mesaje directe, mai multe rezervări.

Cheia este consecvența și autenticitatea. Clienții din Constanța vor să vadă oameni reali, nu conținut corporatist.
    `.trim(),
  },
  {
    slug: 'google-ads-afaceri-locale-constanta-2025',
    title: 'Google Ads pentru afaceri locale din Constanța — cum funcționează în 2025',
    excerpt: 'Ghid practic pentru rularea campaniilor Google Ads ca afacere locală. Cum setezi un buget realist, ce cuvinte-cheie alegi și cum eviți să arzi bani.',
    date: '2025-02-10',
    readTime: '9 min',
    category: 'Google Ads',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
    imageAlt: 'Google Ads campanii pentru afaceri locale din Constanța — reclame plătite Google',
    content: `
Google Ads este cel mai rapid mod de a apărea pe prima pagină Google — chiar și dacă ai deschis afacerea ieri. Dar fără o strategie clară, bugetul se epuizează rapid fără rezultate reale.

**De ce Google Ads funcționează diferit față de social media?**

Pe Instagram sau Facebook, întrerupi oamenii în timp ce se uită la conținut. Pe Google Ads, apari exact când cineva caută activ ceea ce vinzi. Diferența este uriașă: intenția de cumpărare este deja acolo.

Un utilizator care caută "salon de înfrumusețare Constanța" este gata să rezerve. Nu trebuie să-l convingi — trebuie doar să fii vizibil.

**Tipuri de campanii Google Ads potrivite pentru afaceri locale**

- **Campanii de căutare (Search)** — Anunțuri text care apar la căutări specifice. Ideale pentru servicii (avocați, instalatori, saloane, restaurante).
- **Campanii locale (Local campaigns)** — Promovează locația fizică pe Google Maps, YouTube și Display. Perfecte dacă ai un magazin sau restaurant.
- **Campanii de remarketing** — Redirecționezi vizitatorii site-ului tău care nu au convertit. Cost mic, eficiență mare.

**Cum alegi cuvintele-cheie potrivite pentru Constanța?**

Greșeala nr. 1 a antreprenorilor locali: licitează pe termeni prea generali. "Restaurant" poate aduce trafic din toată România — și te costă o avere.

1. **Folosește cuvinte-cheie cu localizare** — "restaurant cu terasă Constanța", "pizza delivery Mamaia", "salon manichiură Tomis Nord"
2. **Adaugă cuvinte negative** — Exclude termeni irelevanți: "rețetă", "job", "angajări", "gratuit"
3. **Prioritizează intenția de cumpărare** — "preț", "rezervare", "program", "ofertă" semnalează un client gata să acționeze
4. **Folosește potrivirea de expresie** — Evită potrivirea largă la început. Controlează mai bine unde apar anunțurile.

**Buget realist pentru Google Ads în Constanța**

Nu ai nevoie de mii de euro pe lună. Un buget de 300–600 RON/lună poate genera rezultate vizibile pentru o afacere locală, dacă campaniile sunt bine configurate.

Costul per click (CPC) pentru căutări locale în Constanța variază între 0,50 RON și 3 RON pentru majoritatea domeniilor. Calculează: cu 500 RON/lună și un CPC mediu de 1 RON, obții aproximativ 500 de vizitatori din căutări cu intenție ridicată.

**Greșeli comune care ard bugetul**

- Anunțuri care duc la pagina principală, nu la o pagină dedicată (landing page)
- Fără extensii de anunț (număr de telefon, adresă, link-uri suplimentare)
- Fără conversii configurate — nu știi ce funcționează
- Campanii lăsate fără monitorizare săptămânală
- Targetare geografică setată greșit (trafic din afara zonei)

**Cât timp până la primele rezultate?**

Google Ads oferă rezultate imediate — anunțurile pot apărea în câteva ore de la lansare. Dar optimizarea durează 2–4 săptămâni: testezi texte de anunț, ajustezi licitațiile, elimini cuvintele-cheie ineficiente.

O campanie bine gestionată lunar îți aduce un cost per achiziție predictibil și scalabil — știi exact cât cheltuiești pentru fiecare client nou.
    `.trim(),
  },
  {
    slug: 'fotografie-profesionala-restaurant-constanta',
    title: 'De ce fotografia profesională îți crește vânzările — ghid pentru afaceri din Constanța',
    excerpt: 'Fotografiile de calitate nu sunt un lux. Sunt instrumentul de marketing cu cel mai rapid ROI pentru restaurante, pensiuni și saloane din Constanța.',
    date: '2025-02-17',
    readTime: '6 min',
    category: 'Fotografie',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80',
    imageAlt: 'Fotografie profesională restaurant Constanța — meniu foto și galerie',
    content: `
Știai că restaurantele care folosesc fotografii profesionale pe Google Business și pe meniu primesc cu 35% mai multe rezervări decât cele cu fotografii de telefon? Vizualul vinde înainte ca clientul să citească un singur cuvânt.

**De ce fotografiile slabe te costă clienți**

Gândește-te cum alegi tu un restaurant sau o pensiune online. Primul lucru la care te uiți sunt fotografiile. Dacă sunt întunecate, neclare sau arate a "pus de urgență", închizi pagina și cauți altceva.

Concurența ta din Constanța și din Mamaia investește deja în fotografie profesională. Dacă tu nu o faci, pierzi în comparație vizuală directă — pe Google Maps, pe TripAdvisor, pe Instagram.

**Ce tipuri de fotografii contează cel mai mult?**

- **Fotografii de meniu/produse** — Fiecare fel de mâncare sau serviciu fotografiat apetisant, cu lumină corectă și styling minimal. Acestea influențează direct decizia de cumpărare.
- **Fotografii de ambient** — Interiorul și exteriorul localului, atmosfera, detalii de decor. Creează așteptări corecte și atrag clientul potrivit.
- **Fotografii de echipă** — Oamenii din spatele afacerii tale. Construiesc încredere și umanizează brandul.
- **Fotografii pentru AirBnb/cazare** — Apartamentele și camerele fotografiate profesional primesc cu 40% mai multe rezervări și pot fi listate la prețuri mai mari.

**Fotografia profesională vs. fotografia cu telefonul**

Telefoanele moderne fac fotografii bune — în condiții ideale. Dar un fotograf profesionist aduce echipament dedicat (obiective, lumini, reflectoare), cunoaștere tehnică și, cel mai important, **ochi pentru detalii**: unghiuri, culori, compoziție, post-procesare.

O sesiune foto profesională durează 2–4 ore și livrează 50–100 de imagini editite. Acestea se folosesc luni întregi pe toate canalele: website, social media, Google Business, meniuri tipărite, prezentări pentru parteneri.

**Când să investești în fotografie profesională?**

- La lansarea afacerii sau redeschiderea după renovare
- Când actualizezi meniul sezonier (primăvară/vară în Constanța)
- Înainte de sezonul estival — turismul litoral aduce trafic masiv
- Când lansezi un serviciu nou sau un produs de top
- Dacă fotografiile actuale au mai mult de 2 ani

**Calculul ROI simplu**

O sesiune foto profesională costă între 400–900 RON. Dacă din 100 de vizitatori suplimentari pe lună care vin atrași de fotografii calitative, 10 devin clienți cu o valoare medie de 100 RON, recuperezi investiția în prima lună.

Fotografia nu este un cost — este un activ de marketing care lucrează pentru tine 24/7, pe toate platformele, fără să plătești extra.
    `.trim(),
  },
  {
    slug: 'branding-identitate-vizuala-afaceri-mici-constanta',
    title: 'Branding și identitate vizuală pentru afaceri mici din Constanța — de unde începi',
    excerpt: 'Logo, culori, fonturi — cum construiești o identitate vizuală coerentă care face afacerea ta să pară profesională, chiar și cu un buget mic.',
    date: '2025-02-24',
    readTime: '7 min',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1400&q=80',
    imageAlt: 'Branding și identitate vizuală pentru afaceri mici din Constanța — logo și design',
    content: `
Brandul tău nu este doar logo-ul. Este totalitatea impresiei pe care o lasă afacerea ta — de la cum arată semnul de la intrare, la cum răspunzi la mesaje pe Instagram, la culoarea meniului. Consistența este totul.

**Ce înseamnă identitate vizuală, concret?**

Identitatea vizuală este sistemul vizual complet al afacerii tale:

- **Logo** — simbolul sau tipografia care identifică afacerea
- **Paleta de culori** — 2–4 culori principale folosite consistent pe toate materialele
- **Fonturile** — 1–2 tipografii care reflectă personalitatea brandului
- **Stilul fotografic** — tonul și atmosfera vizuală a imaginilor
- **Elementele grafice** — pattern-uri, linii, forme care susțin comunicarea

**De ce contează mai ales pentru afaceri mici locale**

Marile branduri câștigă prin buget. Afacerile mici câștigă prin consistență și autenticitate. Un mic restaurant din Constanța cu un branding coerent pare mai profesionist decât un lanț de restaurante cu materiale haotice.

Clienții asociază inconsistența vizuală cu lipsa de profesionalism. Dacă logo-ul de pe firmă diferă de cel de pe Facebook, iar culorile de pe website nu se regăsesc pe meniu, creezi confuzie inconștientă — și confuzia nu vinde.

**Pașii pentru a construi o identitate vizuală de la zero**

1. **Definește personalitatea brandului** — Cum vrei să te simtă clientul? Elegant și rafinat? Prietenos și accesibil? Energic și tânăr? Răspunsul determină toate alegerile vizuale.

2. **Alege culorile cu intenție** — Culorile transmit emoții. Albastru = încredere. Verde = sănătate, natural. Roșu = urgență, energie. Auriu = calitate, premium. Alege o culoare principală și 1–2 culori complementare.

3. **Selectează fonturile potrivite** — Un font serif (cu mici "picioare") comunică tradiție și eleganță. Un font sans-serif comunică modernitate și claritate. Nu combina mai mult de 2 fonturi diferite.

4. **Creează un logo versatil** — Logo-ul trebuie să arate bine în negru-alb, pe fundal alb și pe fundal închis. Trebuie să fie lizibil la dimensiuni mici (favicon) și la dimensiuni mari (banner).

5. **Documentează totul într-un brand guide** — Un simplu document de 2–3 pagini cu culorile (coduri HEX), fonturile, regulile de utilizare a logo-ului. Îl dai designerilor, tipografiei, persoanei care gestionează social media.

**Greșeli de branding care costă**

- Logo creat pe Canva cu font generic, fără unicitate
- Culori diferite pe fiecare material (50 de nuanțe de albastru)
- Logo prea complex care nu se vede pe mobil sau pe produse mici
- Schimbarea frecventă a identității vizuale (nu dai timp brandului să se sedimenteze)

**Cât costă un branding profesional?**

- **Identitate vizuală completă (logo + culori + fonturi + brand guide):** 800–2.500 RON
- **Logo simplu fără brand guide:** 300–800 RON
- **Rebranding complet (inclusiv materiale):** 2.000–6.000 RON

Investiția în branding se face o singură dată și durează ani. Un logo profesional din 2025 va reprezenta afacerea ta în 2030. Calculat pe 5 ani, costul zilnic al unui branding de calitate este sub 1 RON.
    `.trim(),
  },
  {
    slug: 'seo-local-constanta-ghid-complet-2025',
    title: 'SEO local pentru Constanța în 2025 — cum apari primul pe Google',
    excerpt: 'Strategie completă de SEO local: optimizare Google Business, cuvinte-cheie locale, link building și conținut care te urcă în topul rezultatelor Google.',
    date: '2025-03-05',
    readTime: '11 min',
    category: 'SEO Local',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?w=1400&q=80',
    imageAlt: 'SEO local Constanța — optimizare Google pentru afaceri din Dobrogea',
    content: `
SEO local este disciplina care face ca afacerea ta să apară pe Google când cineva din Constanța sau din împrejurimi caută serviciile tale. Nu este magie — este o metodă sistematică pe care orice afacere o poate implementa.

**Ce este SEO local și de ce diferă de SEO clasic?**

SEO clasic urmărește să apari în rezultatele Google la nivel național sau global. SEO local urmărește să apari în "Local Pack" — caseta cu hartă și cele 3 afaceri care apare în fruntea rezultatelor pentru căutări cu intenție locală.

Când cineva caută "dentist Constanța" sau "hotel lângă Mamaia", Google afișează mai întâi acest Local Pack — înainte de orice site web organic. Dacă nu ești acolo, ești invizibil pentru cei mai valoroși clienți potențiali.

**Pilonul 1: Google Business Profile optimizat**

Este fundația SEO local. Fără un profil complet și activ, șansele să apari în Local Pack sunt minime.

- Completează 100% din informații: adresă exactă, orar, telefon, website, categorie principală
- Adaugă minimum 3 categorii secundare relevante
- Încarcă fotografii săptămânal — Google favorizează profilurile active
- Răspunde la toate recenziile în maximum 48 de ore
- Postează actualizări de minimum 2 ori pe săptămână

**Pilonul 2: Consistența NAP (Name, Address, Phone)**

Google verifică dacă informațiile despre afacerea ta sunt identice pe toate platformele online. Orice inconsistență (o adresă scrisă diferit, un număr de telefon vechi) reduce autoritatea locală.

Verifică și actualizează: Google Business, Facebook, Instagram, TripAdvisor, booking platforms, directoare locale (Pagini Aurii, afacerilocale.ro), website-ul propriu.

**Pilonul 3: Cuvinte-cheie locale pe website**

Website-ul tău trebuie să conțină cuvintele-cheie pe care le caută clienții tăi — incluzând localizarea geografică.

1. Creează o pagină dedicată pentru fiecare serviciu major
2. Include "Constanța", "Mamaia", "Dobrogea" natural în texte, titluri și meta-descrieri
3. Adaugă o pagina "Zonele deservite" dacă lucrezi în mai multe localități
4. Integrează testimoniale cu mențiuni ale orașului

**Pilonul 4: Recenzii — cantitate și calitate**

Numărul și calitatea recenziilor este unul dintre cei mai puternici factori de ranking local. Google vrea să afișeze afacerile de încredere.

- Cere recenzii imediat după o experiență pozitivă (trimite SMS sau email cu link direct)
- Vizează minimum 1–2 recenzii noi pe săptămână
- Răspunde la recenzii negative cu calm și soluție concretă — Google și clienții văd cum gestionezi criticile
- Nu cumpăra recenzii false — Google detectează pattern-uri anormale și penalizează

**Pilonul 5: Conținut local relevant**

Un blog cu articole care răspund la întrebările clienților locali este un avantaj competitiv enorm. Majoritatea afacerilor locale nu îl au.

- Articole despre evenimentele sezoniere din Constanța (sezon estival, festivaluri)
- Ghiduri locale ("Cele mai bune restaurante din zona Peninsulei")
- Răspunsuri la întrebări frecvente specifice zonei
- Studii de caz cu clienți locali (cu acordul lor)

**Pilonul 6: Link building local**

Linkuri de pe site-uri locale relevante cresc autoritatea ta în ochii Google.

- Parteneriate cu afaceri complementare (restaurant + hotel + atracție turistică)
- Sponsorizări locale cu mențiune online
- Listare în directoare locale și de branșă
- Articole de presă locală (ziare și bloguri din Constanța)

**Cât durează SEO local să dea rezultate?**

SEO local este un maraton, nu un sprint. Primele îmbunătățiri în ranking apar în 2–3 luni cu o strategie consistentă. Rezultate solide și predictibile — în 6–12 luni.

Dar efectul este cumulativ și durabil. Spre deosebire de Google Ads (care se opresc când oprești bugetul), SEO local continuă să aducă trafic organic luni și ani după ce ai investit în el.
    `.trim(),
  },
  {
    slug: 'abonament-marketing-digital-constanta-cum-alegi',
    title: 'Abonament de marketing digital — cum alegi pachetul potrivit pentru afacerea ta',
    excerpt: 'Ce include un abonament de marketing digital, cum compari ofertele și ce rezultate realiste să aștepți. Ghid pentru antreprenori din Constanța.',
    date: '2025-03-12',
    readTime: '8 min',
    category: 'Marketing Digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80',
    imageAlt: 'Abonament marketing digital Constanța — pachet lunar administrare online',
    content: `
Tot mai multe agenții de marketing din Constanța și din România oferă servicii prin abonament lunar. Este modelul corect — marketingul digital nu este un proiect cu punct final, este un proces continuu. Dar cum alegi abonamentul potrivit?

**De ce abonamentul lunar bate proiectele punctuale**

Marketingul digital funcționează pe termen lung. Un website lansat și abandonat, o campanie de social media ținută o lună, un SEO făcut o singură dată — toate sunt bani aruncați.

Abonamentul lunar asigură continuitate: campaniile sunt monitorizate și optimizate săptămânal, conținutul este publicat constant, algoritmii platformelor sunt urmăriți și adaptați. Rezultatele cresc progresiv, nu stagnează.

**Ce ar trebui să includă un abonament complet de marketing digital?**

Un pachet solid pentru o afacere locală din Constanța include de obicei:

- **Website administrat** — actualizări de conținut, securitate, backup, optimizare viteză
- **SEO lunar** — optimizare tehnică, conținut nou, monitorizare ranking
- **Social media** — crearea și publicarea de conținut pe 2–3 platforme
- **Google Business** — actualizări, postări, gestionare recenzii
- **Raportare lunară** — ce s-a făcut, ce rezultate au adus acțiunile

Serviciile opționale, adăugate la cerere: Google Ads, Meta Ads (Facebook/Instagram), fotografie profesională, email marketing.

**Cum compari ofertele — 5 întrebări esențiale**

1. **Cine face munca efectiv?** — Agenția are echipă internă sau subcontractează totul? Subcontractarea nu este neapărat greșită, dar trebuie să știi.

2. **Cum arată raportarea?** — Primești rapoarte lunare cu date reale (trafic, poziții Google, engagement)? Sau doar o listă de activități efectuate?

3. **Care este perioada minimă de contract?** — Evită abonamentele cu contract pe 12 luni fără clauze de ieșire. Un minim de 3 luni este rezonabil — sub 3 luni nu ai timp să vezi rezultate reale.

4. **Ce se întâmplă cu conținutul la reziliere?** — Postările de pe social media, articolele de blog, fotografiile — rămân ale tale? Clarifica în contract.

5. **Au experiență cu afaceri similare din zonă?** — Un portofoliu cu restaurante, saloane sau pensiuni din Constanța este un indicator bun că înțeleg specificul pieței locale.

**Prețuri realiste pentru Constanța în 2025**

- **Pachet de bază (social media + Google Business):** 350–500 RON/lună
- **Pachet mediu (+ website + SEO de bază):** 650–900 RON/lună
- **Pachet complet (+ Google Ads sau Meta Ads):** 1.000–1.500 RON/lună

Atenție la prețurile foarte mici (sub 200 RON/lună): fie serviciile sunt superficiale, fie calitatea conținutului este scăzută. Marketingul digital de calitate necesită timp uman real.

**Ce rezultate realiste să aștepți**

- **Luna 1–2:** Organizare, audit, lansare. Nu există rezultate spectaculoase — este faza de fundație.
- **Luna 3–4:** Primele îmbunătățiri vizibile: urmăritori noi, trafic ușor crescut pe site, câteva poziții mai sus pe Google.
- **Luna 6+:** Rezultate consistente: trafic organic stabil, rezervări sau comenzi din online, recunoaștere locală crescută.

**Modelul Visuelum: website gratuit + abonament lunar**

La Visuelum, construim website-ul gratuit și gestionăm toată prezența online prin abonament lunar. Fără investiție inițială mare, fără contracte lungi blocante. Plătești lunar pentru rezultate reale, nu pentru promisiuni.

Înainte de a semna orice contract cu o agenție, cere un audit gratuit al prezenței tale online actuale. O agenție serioasă îți arată exact unde ești acum și ce îmbunătățiri concrete poate aduce.
    `.trim(),
  },
]

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const paragraphs = post.content.split('\n\n')

  return (
    <>
      <section className="bg-white relative overflow-hidden pt-32 pb-16 border-b border-stone">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 gold-glow" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="h-3 w-3" /> Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-gold bg-gold/5 border border-gold/20 px-3 py-1">
              {post.category}
            </span>
            <span className="font-mono text-xs text-muted">{formatDate(post.date)}</span>
            <span className="font-mono text-xs text-muted">· {post.readTime} citire</span>
          </div>
          <h1 className="font-head font-extrabold text-h1 text-navy mb-4">{post.title}</h1>
          <p className="font-body italic text-muted text-lg">{post.excerpt}</p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site max-w-3xl mx-auto">
          <div className="relative h-72 mb-12 overflow-hidden rounded-xl">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
            />
          </div>
          <article className="prose-custom">
            {paragraphs.map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h2 key={i} className="font-head font-bold text-navy text-2xl mt-10 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('- ') || paragraph.includes('\n- ')) {
                const items = paragraph.split('\n').filter((l) => l.startsWith('- '))
                return (
                  <ul key={i} className="space-y-2 my-6 pl-0">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 font-body text-muted">
                        <span className="text-gold mt-1">›</span>
                        <span dangerouslySetInnerHTML={{ __html: item.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                )
              }
              if (/^\d+\./.test(paragraph)) {
                const items = paragraph.split('\n').filter((l) => /^\d+\./.test(l))
                return (
                  <ol key={i} className="space-y-3 my-6">
                    {items.map((item, j) => (
                      <li key={j} className="font-body text-muted leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, '').replace(/\*\*(.+?)\*\*/g, '<strong class="text-navy">$1</strong>') }}
                      />
                    ))}
                  </ol>
                )
              }
              return (
                <p key={i} className="font-body text-muted leading-relaxed my-6"
                  dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.+?)\*\*/g, '<strong class="text-navy">$1</strong>') }}
                />
              )
            })}
          </article>

          <div className="mt-16 pt-8 border-t border-stone">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">Alte articole</p>
            <div className="flex flex-col gap-4">
              {posts
                .filter((p) => p.slug !== post.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex items-start gap-4 p-4 bg-white border border-stone hover:border-gold/30 transition-colors"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-gold bg-gold/5 border border-gold/20 px-2 py-0.5 flex-shrink-0">
                      {p.category}
                    </span>
                    <span className="font-head font-bold text-navy group-hover:text-gold transition-colors text-sm">
                      {p.title}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
