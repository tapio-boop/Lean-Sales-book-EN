# AI Sales Pilot - Käytännön toteutusohje

## Pilotin perustiedot

| | |
|---|---|
| **Kesto** | 4 viikkoa |
| **Tiimi** | 2-3 SDR:ää + 1 vetäjä |
| **Tavoite** | Testata AI-avusteinen tutkimus + outreach |
| **Budjetti** | ~500-1000€/kk työkaluihin |

---

## Viikko 0: Valmistelu (1-2 päivää)

### Valitse pilotti-SDR:t

Valintakriteerit:
- [ ] Avoin uusille työkaluille
- [ ] Riittävä kokemus vertailun pohjaksi
- [ ] Valmis antamaan palautetta

**Suositus:** Valitse 1 kokenut + 1 keskitason SDR

### Asenna perustyökalut

#### Välttämättömät (ilmaiset/halvat)

| Työkalu | Käyttö | Hinta | Asennus |
|---------|--------|-------|---------|
| **Claude.ai** | Research Agent | $20/kk | [claude.ai](https://claude.ai) |
| **Apollo.io** | Yhteystiedot | Freemium | [apollo.io](https://apollo.io) |
| **Hunter.io** | Sähköpostien validointi | Freemium | [hunter.io](https://hunter.io) |
| **Google Sheets** | Seuranta | Ilmainen | - |

#### Suositeltavat (jos budjettia)

| Työkalu | Käyttö | Hinta |
|---------|--------|-------|
| **Instantly.ai** | Sähköpostisekvenssit | $37/kk |
| **Clay** | Data enrichment | $149/kk |
| **Fireflies.ai** | Puhelutallennukset | $10/kk |

### Dokumentoi baseline

**Kerää viimeisen 4 viikon data:**

```
SDR: _________________ Ajalta: ___/___/___ - ___/___/___

Soitot yhteensä:           ______
Tavoitettu (vastasi):      ______  → Kontaktiprosentti: ____%
Sovitut tapaamiset:        ______  → Konversio: ____%

Lähetetyt emailit:         ______
Vastaukset:                ______  → Vastausprosentti: ____%

Keskimäärin aikaa/prospekti tutkimukseen: ______ min
```

---

## Viikko 1: Research Agent -testi

### Päivittäinen rutiini

```
AAMU (30 min setup):
├── Valitse päivän prospektit (10-15 kpl)
├── Jaa 50/50: manuaalinen vs. AI-tutkimus
└── Aloita kellotus

TUTKIMUSVAIHE:
├── Manuaaliset: Tee normaalisti, kirjaa aika
└── AI-avusteiset: Käytä Research Agentia, kirjaa aika

SOITTOVAIHE:
├── Soita kaikille normaalisti
└── Kirjaa tulokset (vastasi/ei, tapaaminen/ei)

ILTA (10 min):
└── Täytä päivän seurantalomake
```

### Research Agent -prompti (kopioi Claude.ai:hin)

```
Olet B2B-myyntitutkija. Tehtäväsi on kerätä tietoa prospektista
tapaamisen sopimista varten.

YRITYS: [yrityksen nimi]
YHTEYSHENKILÖ: [nimi, titteli]
MYYMME: [asiakkaan tuote/palvelu lyhyesti]

Anna tiivistelmä (max 1 sivu):

1. YRITYKSEN TILANNE
   - Koko, toimiala, viimeaikaiset uutiset
   - Kasvusignaalit (rekrytointi, rahoitus, laajentuminen)

2. YHTEYSHENKILÖ
   - Tausta ja urapolku (LinkedInistä)
   - Todennäköiset prioriteetit roolissa

3. AJANKOHTAISET TRIGGERIT
   - Miksi JUURI NYT voisi olla hyvä hetki?
   - Uusi johtaja? Teknologiamuutos? Kasvu?

4. PERSONOINTI
   - 2-3 keskustelunavausta perustuen löytöihin
   - Mahdolliset vastaväitteet ja vastaukset niihin

5. SUOSITELTU LÄHESTYMINEN
   - Paras avauslause puheluun
   - Sähköpostin otsikkoehdotus

Pidä tiivistelmä sellaisena, että SDR voi lukea sen 2 minuutissa
ennen soittoa.
```

### Käyttöesimerkki

**Input:**
```
YRITYS: Wolt
YHTEYSHENKILÖ: Mika Virtanen, Sales Director
MYYMME: B2B-tapaamisten buukkauspalvelu teknologiayrityksille
```

**AI tuottaa:** Tiivistelmän Woltin tilanteesta, Mikan taustasta, ajankohtaisista uutisista (laajentuminen, rekrytointi), ja personoidut avauslauseet.

### Viikon 1 seurantalomake

Täytä päivittäin:

| Päivä | Manuaalisia | AI-avusteisia | Manuaali-aika (yht) | AI-aika (yht) | Tapaamiset (man) | Tapaamiset (AI) |
|-------|-------------|---------------|---------------------|---------------|------------------|-----------------|
| Ma | | | min | min | | |
| Ti | | | min | min | | |
| Ke | | | min | min | | |
| To | | | min | min | | |
| Pe | | | min | min | | |
| **YHT** | | | | | | |

---

## Viikko 2: Sähköpostien A/B-testaus

### Testattavat variantit

Luo 3 eri sähköpostiversiota samalle kohderyhmälle:

#### Versio A: Nykyinen (kontrolli)
```
Käytä normaalia sähköpostipohjaanne sellaisenaan
```

#### Versio B: AI-generoitu, ihmisen muokkaama
```
Prompti Claude.ai:lle:

Kirjoita lyhyt B2B-prospektointisähköposti:

VASTAANOTTAJA: [titteli] yrityksessä [yritys]
MYYMME: [palvelun kuvaus]
TRIGGER: [miksi nyt - tutkimuksesta]

Vaatimukset:
- Max 80 sanaa
- Ei liitteitä, ei linkkejä
- Yksi selkeä kysymys lopussa
- Ei myyntijargonia
- Personoitu triggerin perusteella

Anna 2 eri versiota.
```

#### Versio C: AI-generoitu, lähetetään sellaisenaan
```
Sama prompti, mutta lähetä suoraan ilman muokkausta
(testaa kuinka hyvä AI on suoraan)
```

### Sähköpostitesti käytännössä

```
Kohderyhmä: 90 prospektia (sama ICP)
├── 30 kpl → Versio A (kontrolli)
├── 30 kpl → Versio B (AI + edit)
└── 30 kpl → Versio C (AI only)

Seuraa 7 päivää:
├── Avausprosentti (jos seuranta käytössä)
├── Vastausprosentti
└── Positiivisten vastausten määrä
```

### Viikon 2 seurantalomake

| Versio | Lähetetty | Avattu | Vastauksia | Positiivisia | Tapaamisia |
|--------|-----------|--------|------------|--------------|------------|
| A (kontrolli) | 30 | | | | |
| B (AI+edit) | 30 | | | | |
| C (AI only) | 30 | | | | |

---

## Viikko 3: Monikanavainen sekvenssi

### Testattava sekvenssi

```
Päivä 1:  LinkedIn-profiilin katselu
          ↓
Päivä 2:  LinkedIn-yhteyspyyntö (personoitu)
          "Hei [nimi], huomasin että [trigger]. Kiinnostaisi
          kuulla miten [aihe] näkyy teidän arjessa."
          ↓
Päivä 3:  Sähköposti #1 (AI-generoitu)
          ↓
Päivä 5:  SOITTO (prospect on nähnyt nimesi 3x)
          ↓
Päivä 6:  (jos ei tavoitettu) Sähköposti #2 / LinkedIn-viesti
          ↓
Päivä 8:  SOITTO #2
          ↓
Päivä 10: Viimeinen sähköposti
```

### Vertailu

| Ryhmä | Prospekteja | Sekvenssi |
|-------|-------------|-----------|
| Kontrolli | 20 | Normaali prosessi (suora soitto) |
| Testi | 20 | AI-avusteinen monikanavasekvenssi |

### Viikon 3 seurantalomake

| Mittari | Kontrolli (suora soitto) | Testi (monikanava) |
|---------|--------------------------|-------------------|
| Prospekteja | 20 | 20 |
| Tavoitettu puhelimella | | |
| Tavoitusprosentti | % | % |
| Sovitut tapaamiset | | |
| Konversioprosentti | % | % |

---

## Viikko 4: Puheluiden tuki (Co-pilot)

### Yksinkertainen co-pilot -käytäntö

**Ennen jokaista soittoa (1 min):**
1. Avaa Research Agentin tuottama tiivistelmä
2. Lue 3 personointikohtaa
3. Katso suositeltu avauslause

**Soiton aikana:**
- Pidä tiivistelmä näkyvissä
- Jos vastaväite tulee, katso valmiit vastaukset

**Soiton jälkeen (2 min):**
- Kirjaa lyhyt muistiinpano: mitä opittiin?
- Päivitä CRM

### Vastaväite-tukikortti

Tulosta tai pidä auki:

```
┌────────────────────────────────────────────────────────────────┐
│ "Ei kiinnosta"                                                  │
├────────────────────────────────────────────────────────────────┤
│ → "Ymmärrän. Ihan lyhyesti - mikä on teidän isoin haaste       │
│    [aiheeseen liittyen] juuri nyt?"                            │
│                                                                │
│ → "Arvaa - useimmat sanovat niin aluksi. Pikakysymys:          │
│    käytättekö tällä hetkellä [kilpailevaa ratkaisua]?"         │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ "Lähetä sähköpostia"                                           │
├────────────────────────────────────────────────────────────────┤
│ → "Toki, lähetän. Että osaan lähettää relevantin -             │
│    oletteko tällä hetkellä [ongelman kuvaus]?"                 │
│                                                                │
│ → "Ehdottomasti. Laitetaanko samalla 15 min kalenteriin,       │
│    niin voitte perua jos email riittää?"                       │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ "Meillä on jo toimittaja"                                      │
├────────────────────────────────────────────────────────────────┤
│ → "Hyvä kuulla. Kenen kanssa teette yhteistyötä?               │
│    [kuuntele] Miten olette olleet tyytyväisiä?"                │
│                                                                │
│ → "Useimmat asiakkaamme sanoivat saman aluksi. Mikä sai        │
│    teidät alunperin valitsemaan heidät?"                       │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ "Ei ole aikaa / kiire"                                         │
├────────────────────────────────────────────────────────────────┤
│ → "Täysin ymmärrettävää. Koska olisi parempi hetki -           │
│    ensi viikolla vai kuun vaihteessa?"                         │
│                                                                │
│ → "Saan paljon saman vastauksen. 15 minuuttia riittää -        │
│    miltä näyttää [päivä] klo [aika]?"                          │
└────────────────────────────────────────────────────────────────┘
```

### Viikon 4 seurantalomake

| Mittari | Ilman tukikorttia (vk 1-2 data) | Tukikortin kanssa |
|---------|--------------------------------|-------------------|
| Soittoja | | |
| Tavoitettu | | |
| Keskustelun kesto (avg) | min | min |
| Tapaamisia | | |
| Konversio % | % | % |

---

## Päivittäinen check-in (5 min)

Pilotin vetäjä kysyy SDR:ltä päivän päätteeksi:

1. **Mikä toimi tänään?**
2. **Mikä ei toiminut?**
3. **Mitä opit?**
4. **Tarvitsetko jotain huomiseksi?**

Kirjaa vastaukset lyhyesti.

---

## Viikon päätteeksi: Retrospektiivi

### Agenda (30 min)

1. **Numerot läpi** (10 min)
   - Vertaa AI vs. manuaalinen
   - Mikä oli tilastollisesti merkitsevää?

2. **Kokemukset** (10 min)
   - Miltä AI-avusteinen työ tuntui?
   - Mikä oli hyödyllisintä?
   - Mikä ärsytti tai hidasti?

3. **Päätökset** (10 min)
   - Mitä jatketaan?
   - Mitä muutetaan?
   - Mitä lopetetaan?

---

## Pilotin onnistumiskriteerit

### Vihreä valo jatkaa (saavutettava):

- [ ] AI-tutkimus säästää ≥50% aikaa
- [ ] Konversio pysyy vähintään samana
- [ ] SDR:t haluavat jatkaa AI:n käyttöä

### Keltainen (lisätutkimusta tarvitaan):

- [ ] Aikasäästö 20-50%
- [ ] Konversio laskee hieman (<10%)
- [ ] SDR:t suhtautuvat neutraalisti

### Punainen (pivot tarvitaan):

- [ ] Ei merkittävää aikasäästöä
- [ ] Konversio laskee >10%
- [ ] SDR:t vastustavat käyttöä
- [ ] Asiakkaiden negatiivinen palaute

---

## Työkalut ja resurssit

### Ilmaiset promptit (kopioi ja käytä)

#### 1. Nopea yritystutkimus
```
Anna 5 bullet pointia yrityksestä [NIMI]:
- Koko ja toimiala
- Viimeisin iso uutinen
- Kasvusignaalit
- Kilpailijat
- Miksi he voisivat tarvita [PALVELUSI]
```

#### 2. LinkedIn-yhteyspyyntö
```
Kirjoita LinkedIn-yhteyspyyntö (max 200 merkkiä):
Vastaanottaja: [NIMI, TITTELI, YRITYS]
Konteksti: [TRIGGER/SYYT miksi otat yhteyttä]
Tyyli: Ammatillinen mutta rento, ei myyntipuhetta
```

#### 3. Follow-up sähköposti
```
Kirjoita follow-up email prospektille joka ei vastannut:
Alkuperäinen viesti: [LIITÄ EDELLINEN]
Sävytavoite: Avulias, ei painostava
Pituus: Max 50 sanaa
Sisällytä: Yksi uusi näkökulma tai arvo
```

#### 4. Soiton jälkeinen yhteenveto
```
Tein juuri prospektointisoiton. Tässä muistiinpanoni:
[LIITÄ MUISTIINPANOT]

Anna:
1. Tiivistelmä CRM:ään (2-3 lausetta)
2. Suositeltu seuraava askel
3. Paras ajankohta seurantaan
```

---

## Liite: Google Sheets -seurantapohja

Luo uusi Google Sheet näillä välilehdillä:

### Välilehti 1: Päivittäinen seuranta
```
| Päivä | SDR | Tyyppi (AI/Man) | Prospekti | Tutkimusaika | Soitto | Vastasi | Tapaaminen | Huomiot |
```

### Välilehti 2: Email A/B-testi
```
| Prospekti | Versio (A/B/C) | Lähetetty | Avattu | Vastaus | Positiivinen | Tapaaminen |
```

### Välilehti 3: Viikkotulokset
```
| Viikko | AI-tutkimuksia | Man-tutkimuksia | AI-aika (avg) | Man-aika (avg) | AI-tapaamiset | Man-tapaamiset |
```

### Välilehti 4: Opitut asiat
```
| Päivä | Oppi | Kategoria | Toimenpide |
```

---

## Seuraavat askeleet pilotin jälkeen

### Jos pilotti onnistui:

1. **Laajenna koko tiimiin** (viikko 5-6)
2. **Investoi työkaluihin** (Clay, Instantly)
3. **Rakenna omat promptit** asiakkuuskohtaisesti
4. **Mittaa ROI** euroissa

### Jos tulokset olivat epäselviä:

1. **Analysoi miksi** - oliko kyse toteutuksesta vai konseptista?
2. **Tee toinen 2 viikon pilotti** korjatulla lähestymistavalla
3. **Testaa eri AI-mallia** tai prompteja

### Jos pilotti epäonnistui:

1. **Dokumentoi opit** - mikä ei toiminut ja miksi
2. **Harkitse eri käyttötapausta** (esim. vain tutkimus, ei outreach)
3. **Odota 6kk** ja arvioi uudelleen teknologian kehittyessä

---

*Onnea pilottiin! Muista: tavoite on oppia, ei todistaa olevansa oikeassa.*
