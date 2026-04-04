import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, TrendingUp, Users, Star, Phone } from 'lucide-react'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema } from '@/lib/structured-data'
import { industries } from '@/lib/industries'

// ----- Rich content per industry -----
const industryContent: Record<string, {
  metaTitle: string
  metaDesc: string
  heroSubtitle: string
  painPoints: string[]
  solutions: { title: string; desc: string }[]
  results: { value: string; label: string }[]
  process: { step: string; title: string; desc: string }[]
  faq: { q: string; a: string }[]
}> = {
  'restaurante-cafenele': {
    metaTitle: 'Marketing Digital Restaurante & Cafenele Constanța | Visuelum',
    metaDesc: 'Creștem rezervările și vizibilitatea restaurantului tău cu fotografii profesionale de meniu, social media activ și website cu rezervări online. Constanța, Mamaia, Dobrogea.',
    heroSubtitle: 'Clienții decid dacă vin sau nu la tine după ce îți văd meniul pe Instagram sau Google. Noi facem ca acea primă impresie să fie irezistibilă.',
    painPoints: [
      'Clienții nu știu că exiști sau uită de tine între vizite',
      'Competitorii cu un Instagram activ îți iau rezervările',
      'Nu ai timp să postezi zilnic și să răspunzi la comentarii',
      'Fotografiile pe care le-ai făcut tu nu arată la fel ca ale concurenței',
      'Google Business-ul tău are recenzii neactualizate sau fără răspuns',
    ],
    solutions: [
      { title: 'Fotografii profesionale de meniu', desc: 'Sesiune foto completă a meniului tău — preparate principale, deserturi, băuturi. Fotografii care fac clienții să comande mai mult și să distribuie pe social media.' },
      { title: 'Social media activ zilnic', desc: 'Postăm zilnic pe Instagram și Facebook: speciale ale zilei, behind-the-scenes, testimoniale, promoții. Creăm un comunitate activă în jurul localului tău.' },
      { title: 'Google Business optimizat', desc: 'Profil complet, fotografii actualizate, răspunsuri la recenzii, postări săptămânale. Apari primul când cineva caută "restaurant bun în Constanța".' },
      { title: 'Website cu rezervări online', desc: 'Site modern, rapid, cu meniu digital integrat, formular de rezervare și link-uri către platformele de delivery. Disponibil pe orice dispozitiv.' },
    ],
    results: [
      { value: '+40%', label: 'Rezervări noi' },
      { value: '3×', label: 'Engagament social media' },
      { value: 'Top 3', label: 'Poziție Google Maps' },
      { value: '5★', label: 'Rating mediu vizat' },
    ],
    process: [
      { step: '01', title: 'Audit & strategie', desc: 'Analizăm localul tău, competiția și publicul țintă. Stabilim ce funcționează și ce nu în zona ta.' },
      { step: '02', title: 'Sesiune foto profesională', desc: 'Fotografiem meniul, atmosfera și echipa ta. Producem conținut vizual pentru 3 luni de postări.' },
      { step: '03', title: 'Lansare website & social media', desc: 'Publicăm website-ul, optimizăm Google Business și lansăm primele campanii de social media.' },
      { step: '04', title: 'Administrare lunară', desc: 'Postăm zilnic, răspundem la comentarii, monitorizăm recenziile și raportăm rezultatele lunar.' },
    ],
    faq: [
      { q: 'Câte fotografii faceți la o sesiune foto?', a: 'Minimum 50-80 fotografii editiate profesional, suficiente pentru 2-3 luni de postări.' },
      { q: 'Pot să văd conținutul înainte să fie publicat?', a: 'Da, absolut. Tot conținutul trece prin tine pentru aprobare înainte de publicare.' },
      { q: 'Ce platforme de social media includeți?', a: 'Instagram, Facebook și, opțional, TikTok — în funcție de publicul tău țintă.' },
    ],
  },
  'saloane-barber': {
    metaTitle: 'Marketing Digital Saloane de Înfrumusețare & Barbershop Constanța | Visuelum',
    metaDesc: 'Social media, fotografii before/after și programări online pentru saloane și barbershop din Constanța. Creștem numărul de programări cu strategii digitale specializate.',
    heroSubtitle: 'Clienții noi te descoperă pe Instagram sau Google. Clienții actuali revin când îi reamintești că exiști. Noi facem ambele.',
    painPoints: [
      'Programările se fac în continuare doar prin apel telefonic sau recomandări',
      'Nu ai timp să postezi rezultatele muncii tale pe Instagram',
      'Clienții noi nu știu că ești mai bun decât salonul de lângă',
      'Fotografiile cu telefonul nu arată calitatea reală a muncii tale',
      'Competitorii cu mai mulți urmăritori pe Instagram îți iau clienții',
    ],
    solutions: [
      { title: 'Instagram & TikTok activ', desc: 'Postăm rezultatele muncii tale zilnic — tăieturi, colorări, tratamente. Reels virale care aduc clienți noi fără să plătești reclame.' },
      { title: 'Fotografii before/after profesionale', desc: 'Sesiuni foto lunare care documentează transformările. Conținut vizual care convinge clientele înainte să apeleze.' },
      { title: 'Website cu programări online', desc: 'Sistem de programare online integrat — clienții rezervă oricând, fără să te deranjeze prin apeluri. Reduce no-show-urile cu confirmare automată.' },
      { title: 'Google Maps top 3', desc: 'Optimizăm profilul tău Google Business pentru căutări locale. Când cineva caută "salon de înfrumusețare Constanța", tu apari primul.' },
    ],
    results: [
      { value: '+60%', label: 'Programări online' },
      { value: '2×', label: 'Clienți noi lunar' },
      { value: 'Top 3', label: 'Google Maps local' },
      { value: '-30%', label: 'No-show-uri' },
    ],
    process: [
      { step: '01', title: 'Audit & strategie', desc: 'Analizăm profilul tău actual, competiția locală și ce tip de clienți vrei să atragi mai mulți.' },
      { step: '02', title: 'Sesiune foto & video', desc: 'Fotografiem și filmăm lucrul tău — procesul, rezultatele, atmosfera salonului. Conținut autentic care convertește.' },
      { step: '03', title: 'Lansare digitală', desc: 'Activăm website-ul cu programări, optimizăm Google Business și lansăm conturile de social media.' },
      { step: '04', title: 'Creștere lunară', desc: 'Postăm constant, creștem urmăritorii organic și monitorizăm programările noi. Raport lunar cu cifre clare.' },
    ],
    faq: [
      { q: 'Sistemul de programări online este complicat de folosit?', a: 'Nu. Clienții programează cu 3 click-uri, tu primești notificare instant. Simplificat maximum.' },
      { q: 'Pot să aleg ce conținut se postează?', a: 'Da. Tot conținutul trece prin tine. Tu decizi ce se vede și ce nu.' },
      { q: 'Ce se întâmplă dacă nu am mulți urmăritori acum?', a: 'Pornim de la zero cu o strategie de creștere organică. Urmăritorii relevanți sunt mai valoroși decât mulți urmăritori inactivi.' },
    ],
  },
  'clinici-cabinete': {
    metaTitle: 'Marketing Digital Clinici Medicale & Cabinete Stomatologice Constanța | Visuelum',
    metaDesc: 'Creștem vizibilitatea clinicii tale cu SEO medical, Google Ads și website profesional. Pacienți noi din Google pentru cabinete medicale și stomatologice din Constanța.',
    heroSubtitle: 'Pacienții caută medici pe Google înainte să apeleze. Dacă nu apari în primele rezultate, nu exiști pentru ei. Noi te punem pe hartă.',
    painPoints: [
      'Pacienții caută pe Google și găsesc clinici cu mai multă vizibilitate',
      'Recenziile negative sau absente afectează decizia noilor pacienți',
      'Website-ul vechi nu inspiră încredere sau nu funcționează pe mobil',
      'Nu ai timp să gestionezi profilul Google Business și recenziile',
      'Competitorii cu Google Ads îți iau pacienții înainte să îi ai',
    ],
    solutions: [
      { title: 'Website medical profesional', desc: 'Site care inspiră încredere: echipa medicală, servicii, tehnologie, cabinet virtual. Optimizat pentru mobile și viteza de încărcare.' },
      { title: 'SEO local medical', desc: 'Apari când cineva caută "medic dermatolog Constanța" sau "stomatolog copii Constanța". Trafic organic fără să plătești per click.' },
      { title: 'Google Ads pentru pacienți noi', desc: 'Campanii precise care aduc pacienți cu nevoi specifice. Plătești doar când cineva dă click și ajunge pe site-ul tău.' },
      { title: 'Gestiune recenzii & reputație', desc: 'Monitorizăm și răspundem la recenzii pe Google și alte platforme. Strategie proactivă pentru un rating de 4.8+ stele.' },
    ],
    results: [
      { value: '+80%', label: 'Vizibilitate Google' },
      { value: '4.8★', label: 'Rating Google vizat' },
      { value: '+50%', label: 'Consultații noi' },
      { value: 'GDPR', label: '100% conform' },
    ],
    process: [
      { step: '01', title: 'Audit medical digital', desc: 'Analizăm vizibilitatea actuală, recenziile și cum apăreți față de competiție în Constanța.' },
      { step: '02', title: 'Website & conținut', desc: 'Construim sau redesenăm website-ul cu conținut medical de calitate, optimizat SEO.' },
      { step: '03', title: 'Campanii Google', desc: 'Lansăm campanii Google Ads și optimizăm SEO local pentru a aduce pacienți noi rapid.' },
      { step: '04', title: 'Monitorizare & raportare', desc: 'Raportăm lunar consultații noi din online, rating recenzii și poziție SEO. Optimizăm continuu.' },
    ],
    faq: [
      { q: 'Respectați confidențialitatea datelor pacienților?', a: 'Absolut. Lucrăm conform GDPR. Nu colectăm și nu stocăm date medicale ale pacienților.' },
      { q: 'Câți pacienți noi putem adăuga lunar?', a: 'Depinde de specialitate și buget, dar în general 10-30 pacienți noi/lună din Google Ads în primele 3 luni.' },
      { q: 'Putem crea conținut medical fără să greșim informații?', a: 'Da. Tot conținutul medical este revizuit de tine înainte de publicare. Noi creăm structura, tu validezi acuratețea.' },
    ],
  },
  'pensiuni-cazare': {
    metaTitle: 'Marketing Digital Pensiuni & Cazare Constanța, Mamaia, Dobrogea | Visuelum',
    metaDesc: 'Creștem rezervările directe ale pensiunii tale cu fotografii profesionale, website de rezervări și social media activ. Reduce comisioanele Booking.com cu rezervări proprii.',
    heroSubtitle: 'Fiecare rezervare prin Booking.com sau Airbnb îți ia 15-20% comision. Rezervările directe de pe site-ul tău sunt 100% ale tale. Noi îți aducem aceste rezervări.',
    painPoints: [
      'Plătești 15-25% comision la fiecare rezervare prin platforme externe',
      'Nu ai un website propriu care să accepte rezervări directe',
      'Fotografiile cu telefonul nu arată camerele la adevărata lor calitate',
      'În extrasezon, gradul de ocupare scade dramatic',
      'Nu ai o bază de clienți care să revină sau să recomande',
    ],
    solutions: [
      { title: 'Fotografii profesionale', desc: 'Sesiune foto completă: camere, exterior, piscină, mic dejun, zonele comune. Fotografii care fac vizitatorii să rezerve pe loc.' },
      { title: 'Website cu rezervări directe', desc: 'Site modern cu calendar de disponibilitate și rezervare online. Rezervările directe înseamnă zero comision plătit platformelor.' },
      { title: 'Social media sezonier', desc: 'Campanii de Instagram și Facebook adaptate sezonului: oferte speciale iarnă, pachete vacanță vară, weekend-uri tematice.' },
      { title: 'Google Business & vizibilitate', desc: 'Apari în rezultatele locale Google când turiștii caută cazare în zona ta. Profilul tău complet inspiră încredere și aduce rezervări.' },
    ],
    results: [
      { value: '+35%', label: 'Rezervări directe' },
      { value: '-20%', label: 'Dependență platforme' },
      { value: '12 luni', label: 'Ocupare extinsă' },
      { value: '0%', label: 'Comision rezervări directe' },
    ],
    process: [
      { step: '01', title: 'Audit & fotografiere', desc: 'Analizăm poziționarea ta actuală și facem sesiunea foto completă a proprietății tale.' },
      { step: '02', title: 'Website & rezervări', desc: 'Construim site-ul cu motor de rezervare integrat și optimizat pentru conversie maximă.' },
      { step: '03', title: 'Campanii sezoniere', desc: 'Lansăm campaniile de social media și Google Ads adaptate calendarului tău turistic.' },
      { step: '04', title: 'Management & optimizare', desc: 'Administrăm lunar social media, răspundem la recenzii și optimizăm campaniile pentru fiecare sezon.' },
    ],
    faq: [
      { q: 'Pot să folosesc fotografiile și pe Booking.com?', a: 'Da, fotografiile tale sunt ale tale și le poți folosi pe orice platformă.' },
      { q: 'Sistemul de rezervări funcționează și pe telefon?', a: 'Da, sistemul este 100% responsive. Clienții rezervă simplu de pe orice dispozitiv.' },
      { q: 'Cum gestionăm disponibilitatea pe mai multe platforme simultan?', a: 'Integrăm un sistem de sincronizare calendare care actualizează automat disponibilitatea pe toate platformele.' },
    ],
  },
  'fitness-sporturi': {
    metaTitle: 'Marketing Digital Săli de Fitness & Centre Sportive Constanța | Visuelum',
    metaDesc: 'Aducem abonați noi sălii tale de fitness cu Reels virale, Meta Ads și website cu programări. Marketing digital specializat pentru centre sportive din Constanța.',
    heroSubtitle: 'Membrii sălii tale de fitness decid să se aboneze după ce văd rezultatele altora pe Instagram. Noi creăm acel conținut motivațional care convertește spectatori în abonați.',
    painPoints: [
      'Sălile noi deschise recent îți iau membrii cu oferte de lansare',
      'Fluctuația de membri este mare — vin în ianuarie, pleacă în martie',
      'Nu ai conținut video motivațional care să atragă oameni noi',
      'Instagram-ul sălii tale este inactiv sau are conținut de slabă calitate',
      'Nu ai promoții sezoniere care să crească abonamentele vara',
    ],
    solutions: [
      { title: 'Reels & TikTok viral', desc: 'Producem video content motivațional: transformări membre, antrenamente intense, challenge-uri. Conținut care se distribuie și aduce vizibilitate gratuită.' },
      { title: 'Meta Ads pentru abonamente', desc: 'Campanii Facebook & Instagram targetate pe oameni din Constanța interesați de fitness. Cost per abonat nou calculat și optimizat lunar.' },
      { title: 'Website cu programări', desc: 'Site modern cu prezentare clase, antrenori, prețuri și sistem de programare pentru clase de grup sau antrenamente personale.' },
      { title: 'Campanii sezoniere', desc: 'Oferte speciale Ianuarie (rezoluții noi), Mai-Iunie (corp de vară), Septembrie (revenire după vară). Calendarul tău de marketing planificat anual.' },
    ],
    results: [
      { value: '+45%', label: 'Abonamente noi' },
      { value: '×3', label: 'Reach organic' },
      { value: '-25%', label: 'Rata abandon' },
      { value: '12 luni', label: 'Plan editorial complet' },
    ],
    process: [
      { step: '01', title: 'Strategie & calendar', desc: 'Planificăm campaniile anuale în funcție de sezonalitate și obiectivele tale de creștere.' },
      { step: '02', title: 'Producție conținut', desc: 'Sesiuni foto și video lunare în sală — antrenamente, transformări, behind-the-scenes.' },
      { step: '03', title: 'Lansare campanii', desc: 'Publicăm pe social media, lansăm Meta Ads și activăm website-ul cu programări.' },
      { step: '04', title: 'Optimizare continuă', desc: 'Monitorizăm costul per abonat nou și optimizăm campaniile pentru eficiență maximă.' },
    ],
    faq: [
      { q: 'Funcționează Meta Ads pentru o sală de fitness mică?', a: 'Da, targetarea locală permite bugete mici cu rezultate bune. Testăm cu bugete minime înainte să scalăm.' },
      { q: 'Pot să postez și eu conținut pe lângă ce postați voi?', a: 'Da, absolut. Conținutul autentic al antrenorilor tăi complement perfect ce producem noi.' },
      { q: 'Cum măsurăm că abonamentele noi vin din campaniile noastre?', a: 'Folosim tracking links, UTM-uri și întrebăm clienții noi la înregistrare. Raportăm sursa fiecărui lead.' },
    ],
  },
  'retail-magazine': {
    metaTitle: 'Marketing Digital Magazine & Retail Constanța | Visuelum',
    metaDesc: 'Aducem clienți noi magazinului tău cu fotografii de produse, Google Shopping și Meta Ads. Marketing digital pentru retail și magazine locale din Constanța.',
    heroSubtitle: 'Cumpărătorii din Constanța caută produse online înainte să vină în magazin sau comandă direct. Dacă nu ești vizibil digital, concurezi cu handicap.',
    painPoints: [
      'Clienții caută produsele tale pe Google și găsesc competitorii mai vizibili',
      'Fotografiile produselor de pe site sau social media nu fac dreptate calității reale',
      'Nu ai o prezență online coerenta care să construiască loialitate',
      'Promoțiile tale nu ajung la suficienți oameni în timp util',
      'Magazinele online mari (eMAG, Altex) îți iau clienții pentru produse comune',
    ],
    solutions: [
      { title: 'Fotografii profesionale produse', desc: 'Sesiuni foto de produs pe fundal alb, în context de utilizare și lifestyle. Fotografii care vând fără să ai nevoie de text persuasiv.' },
      { title: 'Catalog digital & Google Shopping', desc: 'Produsele tale listate pe Google Shopping — clienții care caută exact ce vinzi tu dau direct peste tine. Intenție maximă de cumpărare.' },
      { title: 'Meta Ads pentru promoții', desc: 'Campanii Facebook & Instagram pentru promoții, lansări de produse, reduceri de sezon. Ajungem la oameni din Constanța cu putere de cumpărare.' },
      { title: 'Social media & conținut', desc: 'Prezentare produse noi, testimoniale clienți, behind-the-scenes magazin. Construim o comunitate fidelă care cumpără în mod recurent.' },
    ],
    results: [
      { value: '+55%', label: 'Trafic organic' },
      { value: '×4', label: 'Reach promoții' },
      { value: '+30%', label: 'Vânzări lunare' },
      { value: 'Google', label: 'Shopping integrat' },
    ],
    process: [
      { step: '01', title: 'Audit & strategie', desc: 'Analizăm catalogul de produse, competiția și canalele cu cel mai mare potențial pentru afacerea ta.' },
      { step: '02', title: 'Producție vizuală', desc: 'Sesiune foto completă pentru produsele prioritare. Conținut de calitate profesională.' },
      { step: '03', title: 'Lansare campanii', desc: 'Activăm Google Shopping, Meta Ads și social media. Primele rezultate în 7-14 zile.' },
      { step: '04', title: 'Scalare & optimizare', desc: 'Creștem bugetul campaniilor care funcționează și oprim ce nu aduce ROI. Raport lunar detaliat.' },
    ],
    faq: [
      { q: 'Funcționează și pentru magazine online sau doar fizice?', a: 'Funcționează pentru ambele. Adaptăm strategia în funcție de canalul tău principal de vânzare.' },
      { q: 'Câte produse fotografiați la o sesiune?', a: 'Depinde de pachet, în general 20-50 de produse per sesiune, cu 3-5 unghiuri fiecare.' },
      { q: 'Google Shopping necesită un site de eCommerce?', a: 'Nu neapărat. Putem crea o pagină de prezentare cu catalog și contact pentru magazinele fizice.' },
    ],
  },
  'agentii-imobiliare': {
    metaTitle: 'Marketing Digital Agenții Imobiliare Constanța | Visuelum',
    metaDesc: 'Lead-uri imobiliare calificate din Google Ads și fotografii profesionale de proprietăți. Marketing digital pentru agenții imobiliare din Constanța și Dobrogea.',
    heroSubtitle: 'Cumpărătorii și chiriașii din Constanța încep căutarea pe Google. Agențiile care apar primele în reclame primesc apelurile. Noi te punem în față.',
    painPoints: [
      'Leads-uri slabe din platformele imobiliare gen imobiliare.ro sau Storia',
      'Proprietățile listate nu se vând rapid pentru că nu au fotografii profesionale',
      'Clienții potențiali nu știu de agenția ta sau preferă agenții mai vizibili online',
      'Nu ai un sistem digital eficient de generare lead-uri',
      'Competiția din Constanța e mare și vizibilitatea costă',
    ],
    solutions: [
      { title: 'Fotografii profesionale proprietăți', desc: 'Fotografii cu unghi larg, lumină naturală maximizată, exterior și interior. Proprietățile fotografiate profesional se vând cu 20% mai repede.' },
      { title: 'Google Ads pentru lead-uri', desc: 'Campanii Google Ads targetate: "apartament de vânzare Constanța", "casă de vânzare Mamaia". Lead-uri cu intenție reală de cumpărare.' },
      { title: 'Website de prezentare & listare', desc: 'Site profesional cu listare proprietăți, filtrare după criterii și formular de contact. Prima impresie care convinge să apeleze la tine.' },
      { title: 'Social media & vizibilitate', desc: 'Prezentăm proprietățile pe Facebook & Instagram cu video walkthrough. Extindem reach-ul fiecărei listări la mii de potențiali cumpărători.' },
    ],
    results: [
      { value: '+70%', label: 'Lead-uri calificate' },
      { value: '-20%', label: 'Zile pe piață' },
      { value: '×5', label: 'Vizibilitate proprietăți' },
      { value: 'CRM', label: 'Lead tracking' },
    ],
    process: [
      { step: '01', title: 'Audit & strategie', desc: 'Analizăm piața imobiliară locală, volumul de căutări și competiția pe Google pentru cuvintele cheie relevante.' },
      { step: '02', title: 'Website & fotografii', desc: 'Construim sau optimizăm site-ul și facem primele sesiuni foto pentru proprietățile prioritare.' },
      { step: '03', title: 'Campanii Google Ads', desc: 'Lansăm campanii plătite pentru lead-uri imediate în timp ce SEO organic se construiește.' },
      { step: '04', title: 'Optimizare & raportare', desc: 'Monitorizăm cost per lead, calitatea lead-urilor și ajustăm campaniile săptămânal.' },
    ],
    faq: [
      { q: 'Plătim per lead sau abonament lunar?', a: 'Abonament lunar fix, fără costuri per lead. Bugetul Google Ads se plătește separat, direct în platformă.' },
      { q: 'Puteți fotografia și în afara Constanței?', a: 'Da, fotografiem în toată Dobrogea. Costul de deplasare se stabilește transparent înainte.' },
      { q: 'Funcționează pentru vânzare și închiriere?', a: 'Da, adaptăm campaniile pentru ambele tipuri de tranzacții imobiliare.' },
    ],
  },
  'cabinete-juridice': {
    metaTitle: 'Marketing Digital Avocați & Cabinete Juridice Constanța | Visuelum',
    metaDesc: 'Creștem vizibilitatea cabinetului tău juridic cu SEO local, website profesional și Google Business. Clienți noi din Google pentru avocați din Constanța.',
    heroSubtitle: 'Clienții care au nevoie de un avocat caută pe Google. Primul cabinet care apare în rezultate primește apelul. SEO local este investiția cu cel mai mare ROI pentru avocați.',
    painPoints: [
      'Clienții noi vin exclusiv din recomandări, fără canal digital scalabil',
      'Website-ul vechi sau absent nu inspiră încredere profesională',
      'Competitorii mai tineri cu prezență online câștigă clienți care anterior mergeau la tine',
      'Nu știi cum să te promovezi în conformitate cu reglementările deontologice',
      'Nu ești vizibil când cineva caută "avocat drept penal Constanța"',
    ],
    solutions: [
      { title: 'Website juridic profesional', desc: 'Site elegant și demn care reflectă seriozitatea profesiei. Prezentare specialitate, echipă, experiență și formular de contact discret.' },
      { title: 'SEO local pentru avocați', desc: 'Apari în primele rezultate pentru căutări locale specifice: "avocat civil Constanța", "cabinet juridic drept muncii". Clienți care te caută activ.' },
      { title: 'Blog juridic educativ', desc: 'Articole care răspund la întrebările comune ale potențialilor clienți. Construiești autoritate și atragi trafic organic constant.' },
      { title: 'Google Business optimizat', desc: 'Profil complet cu recenzii, program, specializări și postări regulate. Vizibilitate maximă în Google Maps pentru zona ta.' },
    ],
    results: [
      { value: '+90%', label: 'Vizibilitate Google' },
      { value: '×3', label: 'Consultații noi' },
      { value: 'Top 3', label: 'Rezultate locale' },
      { value: '100%', label: 'Conform deontologie' },
    ],
    process: [
      { step: '01', title: 'Audit & pozitionare', desc: 'Analizăm cum apăreți online față de avocații competitori din Constanța și identificăm oportunități.' },
      { step: '02', title: 'Website & conținut', desc: 'Construim site-ul profesional și primele articole de blog optimizate pentru SEO.' },
      { step: '03', title: 'SEO & Google Business', desc: 'Optimizăm pentru căutările locale relevante și activăm profilul Google Business complet.' },
      { step: '04', title: 'Conținut & raportare', desc: 'Publicăm lunar articole de blog și raportăm creșterea vizibilității și a consultațiilor noi.' },
    ],
    faq: [
      { q: 'Publicitatea pentru avocați are restricții legale?', a: 'Da, cunoaștem reglementările deontologice. Tot conținutul respectă normele Baroului.' },
      { q: 'Câte articole de blog scrieți lunar?', a: 'Minim 2 articole/lună incluse în pachet, cu posibilitate de suplimentare.' },
      { q: 'Pot să apar și în reclame Google plătite?', a: 'Da, cu respectarea regulamentelor pentru servicii juridice. Recomandăm SEO organic ca fundament principal.' },
    ],
  },
  'educatie-cursuri': {
    metaTitle: 'Marketing Digital Cursuri Online & Centre Educaționale Constanța | Visuelum',
    metaDesc: 'Aducem cursanți noi cu landing pages de conversie, Google Ads și Meta Ads. Marketing digital pentru centre educaționale și cursuri online din Constanța.',
    heroSubtitle: 'Cursanții tăi potențiali caută pe Google sau văd reclame pe Facebook înainte să se înscrie. O strategie digitală bine construită umple cursurile tale în mod constant.',
    painPoints: [
      'Cursurile tale nu ajung la publicul potrivit în timp util',
      'Înscrierea se face greu — formulare complicate sau numai prin telefon',
      'Nu ai o pâlnie de marketing care să educe potențialii cursanți înainte de înscriere',
      'Sezonalitatea afectează dramatic numărul de înscrieri',
      'Facebook Ads cost-urile cresc fără să știi cum să le optimizezi',
    ],
    solutions: [
      { title: 'Landing pages de conversie', desc: 'Pagini dedicate fiecărui curs — informații clare, testimoniale, program și butoane de înregistrare. Optimizate să transforme vizitatorii în cursanți.' },
      { title: 'Google Ads pentru intenție directă', desc: 'Campanii pentru căutări active: "curs fotografie Constanța", "limba engleză copii". Oameni care caută exact ce oferi tu.' },
      { title: 'Meta Ads pentru conștientizare', desc: 'Reclame Facebook & Instagram care prezintă cursurile tale unui public larg din Constanța. Construiesc audiența înaintea perioadei de înscrieri.' },
      { title: 'Comunitate & retenție', desc: 'Strategie de social media care menține comunitatea cursanților actuali și transformă absolvenții în ambasadori care aduc colegi.' },
    ],
    results: [
      { value: '+65%', label: 'Înscrieri online' },
      { value: '×4', label: 'Reach campanii' },
      { value: '-40%', label: 'Cost per lead' },
      { value: '12 luni', label: 'Calendar editorial' },
    ],
    process: [
      { step: '01', title: 'Strategie & calendar', desc: 'Mapăm ciclurile de înscriere și planificăm campaniile cu 6-8 săptămâni în avans față de fiecare sesiune.' },
      { step: '02', title: 'Landing pages', desc: 'Creăm paginile dedicate fiecărui curs cu conținut persuasiv și formulare de înregistrare.' },
      { step: '03', title: 'Lansare campanii', desc: 'Activăm Google Ads și Meta Ads cu targetare precisă pe publicul tău țintă din Constanța.' },
      { step: '04', title: 'Optimizare & scalare', desc: 'Optimizăm costul per înregistrare săptămânal și scalăm campaniile eficiente. Raport detaliat post-sesiune.' },
    ],
    faq: [
      { q: 'Funcționează și pentru cursuri online, nu doar fizice?', a: 'Da, adaptăm strategia. Cursurile online pot fi promovate la nivel național, nu doar Constanța.' },
      { q: 'Cum gestionăm lista de așteptare dacă cursul se umple?', a: 'Includem funcționalitate de lista de așteptare și campanii de re-engagement pentru sesiuni viitoare.' },
      { q: 'Puteți crea conținul video pentru reclame?', a: 'Da, producem video pentru reclame — prezentare curs, testimoniale, preview lecții. Funcționează excelent pe Meta.' },
    ],
  },
  'constructii-servicii': {
    metaTitle: 'Marketing Digital Constructii & Servicii Profesionale Constanța | Visuelum',
    metaDesc: 'Aducem oferte solicitate firmei tale de construcții sau servicii cu website portofoliu, Google Ads și SEO local. Marketing digital pentru meseriași și antreprenori din Constanța.',
    heroSubtitle: 'Clienții care au nevoie de un constructor, instalator sau orice serviciu de casă caută pe Google. Prima firmă care apare cu un site profesional și recenzii bune câștigă contractul.',
    painPoints: [
      'Lucrezi exclusiv din recomandări, fără canal digital predictibil de clienți noi',
      'Nu ai un portofoliu digital cu lucrările finalizate care să convingă clienții noi',
      'Clienții nu pot vedea calitatea muncii tale înainte să te contacteze',
      'Competitorii mai mici cu prezență online mai bună câștigă oferte față de tine',
      'Nu apari în Google când cineva caută "firmă construcții Constanța"',
    ],
    solutions: [
      { title: 'Website portofoliu profesional', desc: 'Site cu galerie de lucrări, servicii detaliate, testimoniale clienți și formular de cerere ofertă. Portofoliul tău digital deschis 24/7.' },
      { title: 'Fotografii lucrări finalizate', desc: 'Documentăm before/after al lucrărilor tale. Fotografii profesionale care demonstrează calitatea și conving clienții să îți solicite oferta.' },
      { title: 'Google Local & SEO', desc: 'Apari când cineva caută "firma construcții Constanța" sau "instalator Constanța". Primele poziții în Google Maps pentru serviciile tale.' },
      { title: 'Recenzii & reputație online', desc: 'Construim un sistem de colectare recenzii de la clienți mulțumiți. Rating ridicat = mai multă încredere = mai multe contracte.' },
    ],
    results: [
      { value: '+75%', label: 'Oferte solicitate' },
      { value: 'Top 3', label: 'Google Maps' },
      { value: '×6', label: 'Vizibilitate locală' },
      { value: 'Zilnic', label: 'Lead-uri noi' },
    ],
    process: [
      { step: '01', title: 'Audit & fotografiere', desc: 'Inventariem lucrările tale finalizate și fotografiem cele mai reprezentative pentru portofoliu.' },
      { step: '02', title: 'Website & Google Business', desc: 'Construim site-ul cu portofoliu și optimizăm complet profilul Google Business.' },
      { step: '03', title: 'SEO local & Google Ads', desc: 'Optimizăm pentru căutările locale și lansăm campanii Google pentru lead-uri imediate.' },
      { step: '04', title: 'Creștere & recenzii', desc: 'Implementăm sistemul de colectare recenzii și monitorizăm și optimizăm lunar.' },
    ],
    faq: [
      { q: 'Funcționează și pentru meseriași individuali, nu doar firme?', a: 'Da. Un instalator sau zugrav independent beneficiază la fel de mult de o prezență Google bine optimizată.' },
      { q: 'Pot să am și reclame Google plătite în plus față de SEO?', a: 'Da, combinația SEO + Google Ads este cea mai eficientă. SEO aduce trafic pe termen lung, Ads aduce lead-uri imediat.' },
      { q: 'Cum fotografiați o lucrare — înainte de predare sau după?', a: 'Fotografiem înainte de predare sau imediat după — în ambele cazuri. Planificăm sesiile foto în avans.' },
    ],
  },
}

// ---- Page component ----
interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const content = industryContent[slug]
  if (!content) return {}
  const industry = industries.find((i) => i.slug === slug)

  return {
    title: content.metaTitle,
    description: content.metaDesc,
    alternates: { canonical: `${siteConfig.url}/industrii/${slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDesc,
      url: `${siteConfig.url}/industrii/${slug}`,
    },
  }
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export default async function IndustrieSlugPage({ params }: Props) {
  const { slug } = await params
  const content = industryContent[slug]
  const industry = industries.find((i) => i.slug === slug)

  if (!content || !industry) notFound()

  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Industrii', url: `${siteConfig.url}/industrii` },
    { name: industry.title, url: `${siteConfig.url}/industrii/${slug}` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="bg-white relative overflow-hidden pt-32 pb-20 border-b border-stone">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 gold-glow" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/industrii"
              className="font-mono text-[10px] uppercase tracking-widest text-muted hover:text-gold transition-colors"
            >
              Industrii
            </Link>
            <span className="text-muted/40 text-xs">›</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold">{industry.title}</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{industry.emoji}</span>
            <h1 className="font-head font-extrabold text-h1 text-navy">
              {industry.title}
            </h1>
          </div>
          <p className="font-body italic text-muted text-xl max-w-2xl mb-10">
            {content.heroSubtitle}
          </p>
          {/* Result stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.results.map((r) => (
              <div key={r.label} className="text-center">
                <div className="font-head font-extrabold text-3xl text-gold mb-1">{r.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-parchment py-16">
        <div className="container-site max-w-4xl mx-auto">
          <p className="eyebrow mb-4">Provocările tale</p>
          <h2 className="font-head font-extrabold text-h2 text-navy mb-10">
            Înțelegem cu ce te confrunți
          </h2>
          <ul className="space-y-3">
            {content.painPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 bg-white border border-stone p-4">
                <span className="text-gold font-bold mt-0.5 flex-shrink-0">✗</span>
                <span className="font-body text-muted">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-cream py-20">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Soluțiile noastre</p>
            <h2 className="font-head font-extrabold text-h2 text-navy">
              Cum te ajutăm concret
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {content.solutions.map((s) => (
              <div key={s.title} className="bg-white border border-stone p-8 hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <h3 className="font-head font-bold text-navy text-lg">{s.title}</h3>
                </div>
                <p className="font-body text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy py-20">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Procesul nostru</p>
            <h2 className="font-head font-extrabold text-h2 text-cream">
              Cum funcționează colaborarea
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.process.map((p) => (
              <div key={p.step} className="flex gap-5">
                <div className="font-mono text-4xl font-bold text-gold/20 leading-none flex-shrink-0 select-none">
                  {p.step}
                </div>
                <div>
                  <h3 className="font-head font-bold text-cream text-lg mb-2">{p.title}</h3>
                  <p className="font-body text-muted-l text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-parchment py-20">
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Întrebări frecvente</p>
            <h2 className="font-head font-extrabold text-h2 text-navy">
              Întrebările tale, răspunse
            </h2>
          </div>
          <div className="space-y-4">
            {content.faq.map((f) => (
              <div key={f.q} className="bg-white border border-stone p-6">
                <h3 className="font-head font-bold text-navy mb-3">{f.q}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA specific to industry */}
      <section className="bg-navy-deep py-20">
        <div className="container-site max-w-3xl mx-auto text-center">
          <span className="text-4xl block mb-6">{industry.emoji}</span>
          <h2 className="font-head font-extrabold text-h2 text-cream mb-4">
            Gata să crești cu Visuelum?
          </h2>
          <p className="font-body italic text-muted-l text-lg mb-10">
            Solicită un audit gratuit al prezenței tale digitale. Îți spunem exact ce lipsește și cum îl remediem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-4 text-sm">
              Solicită Audit Gratuit
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-l hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="bg-cream py-16">
        <div className="container-site">
          <h2 className="font-head font-bold text-navy text-xl text-center mb-8">
            Alte industrii pe care le servim
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries
              .filter((i) => i.slug !== slug)
              .map((i) => (
                <Link
                  key={i.slug}
                  href={`/industrii/${i.slug}`}
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-gold border border-stone hover:border-gold/30 bg-white px-4 py-2.5 transition-colors"
                >
                  <span>{i.emoji}</span>
                  {i.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
