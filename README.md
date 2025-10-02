# 🏥 Interaktivní mapa nemocnice Bulovka

Webová aplikace pro vyhledávání a navigaci v areálu Fakultní nemocnice Bulovka.

## 📋 Přehled

Tento projekt je **MVP (Minimum Viable Product)** - minimální funkční prototyp interaktivní mapy, která:
- Pomáhá pacientům a návštěvníkům najít konkrétní pracoviště
- Zobrazuje informace o budovách, odděleních a službách
- Umožňuje navigaci k jednotlivým budovám přes Google Maps
- Funguje na počítačích i mobilních zařízeních

## ✨ Funkce

### 🔍 Vyhledávání
- **Fulltext vyhledávání** v českých i anglických názvech pracovišť
- **Ignoruje diakritiku** (můžete psát bez háčků a čárek)
- **Podpora synonym**: "plicní" najde "Pneumologie", "MR" najde "Magnetická rezonance"
- **Real-time filtrování** - výsledky se zobrazují při psaní

### 🗺️ Interaktivní mapa
- **Pan & Zoom** - posouvání a přibližování mapy pomocí myši/dotyku
- **Klikatelné budovy** - kliknutím zobrazíte detail budovy
- **Zvýraznění při hoveru** - najetím myši na pracoviště se zvýrazní budova na mapě

### 🏢 Detail budovy
- **Informace o budově**: název, adresa, fotka (placeholder)
- **Dopravní spojení**: nejbližší zastávka MHD a čísla linek
- **Navigace**: tlačítko pro otevření Google Maps s přesnou GPS lokací
- **Oddělení**: seznam všech pracovišť v budově seřazený podle pater
- **POI (Points of Interest)**: lékárna, bankomat, jídelna apod.

### 📱 Responzivní design
- **Desktop**: levý boční panel (drawer), šířka 33%
- **Mobil**: spodní panel (bottom sheet), výška 50%

## 🚀 Jak spustit

### Varianta 1: Otevřít přímo v prohlížeči
Jednoduše poklikejte na soubor `index.html` nebo ho přetáhněte do prohlížeče.

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Varianta 2: Lokální server (doporučeno)
Pro plnou funkčnost doporučujeme spustit lokální server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server -p 8000
```

Poté otevřete v prohlížeči: `http://localhost:8000`

## 📖 Jak používat

1. **Otevřít seznam pracovišť**
   - Klikněte na tlačítko **"☰ Seznam pracovišť"** vlevo nahoře

2. **Vyhledávat pracoviště**
   - Začněte psát do pole "Hledat pracoviště..."
   - Můžete psát bez diakritiky (např. "plicni" najde "Plicní")
   - Zkuste synonyma: "MR", "CT", "gyn", "děti"

3. **Zvýraznit budovu**
   - Najeďte myší na pracoviště v seznamu
   - Budova se na mapě zvýrazní zeleně

4. **Zobrazit detail budovy**
   - Klikněte na pracoviště v seznamu, nebo
   - Klikněte přímo na budovu na mapě

5. **Navigovat k budově**
   - V detailu budovy klikněte na zelené tlačítko **"Navigovat k budově"**
   - Otevře se Google Maps s GPS souřadnicemi

6. **Prohlížet oddělení a POI**
   - Přepínejte mezi taby **"Oddělení"** a **"POI"**
   - V tabu Oddělení najdete seznam všech pracovišť v budově
   - V tabu POI najdete lékárny, bankomaty a další služby

7. **Ovládat mapu**
   - **Posouvání**: táhněte myší nebo prstem
   - **Zoom**: kolečko myši nebo dvouprstový dotyk
   - **Ovládací prvky**: použijte ikony v pravém dolním rohu mapy

## 🛠️ Technologie

- **HTML5** - struktura aplikace
- **CSS3** - vlastní styly v `style.css`
- **Tailwind CSS** (CDN) - utility classes pro responzivní design
- **Vanilla JavaScript** - logika aplikace (bez frameworků)
- **svg-pan-zoom** (CDN) - interakce s SVG mapou
- **SVG** - vektorová mapa areálu

## 📁 Struktura projektu

```
digital-prototyp-v2/
├── index.html              # HLAVNÍ SOUBOR - HTML struktura a JavaScript
├── style.css               # CSS STYLY - všechny styly aplikace
├── README.md               # Tento soubor - dokumentace
├── PROGRESS.md             # Technická dokumentace vývoje
└── specs/
    ├── mapa.svg.txt        # SVG mapa (vložena do index.html)
    ├── buildings.md        # Data pracovišť
    ├── maps-id.md          # Dokumentace SVG struktury
    └── Project-info.md     # Zadání projektu
```

## 📊 Data

### Pracoviště
- **57 pracovišť** z buildings.md
- Každé má: český název, anglický název, číslo budovy

### Budovy
- **13 budov** na mapě (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 15, 16, 17)
- Mockup data: GPS souřadnice, MHD zastávka, linky

### POI (Points of Interest)
- Lékárna: budovy 1, 6, 13
- Bankomat: budova 13
- Jídelna: budova "b-jidelna"

## 🔍 Vyhledávací synonyma

| Hledáte | Najde |
|---------|-------|
| plicní, plicni | Pneumologie |
| MR, MRI, mri | Magnetická rezonance |
| CT, ct | CT (Computed Tomography) |
| RTG, rentgen, xray | Rentgen, Radiodiagnostické |
| gyn | Gynekologie |
| děti, dětské | Pediatrické oddělení |

## 🐛 Známé limity MVP

- GPS souřadnice budov jsou zatím **mockup** (všechny stejné)
- MHD zastávky a linky jsou **mockup** data
- Čísla pater u oddělení jsou zatím **pevně nastavena na "1. patro"**
- Fotky budov jsou **placeholder** (šedý obdélník)
- Některá pracoviště nemají číslo budovy (označeno jako "Neuvedeno")

## 📝 Poznámky

### Pro další vývoj:
1. Přidat **reálné GPS souřadnice** pro každou budovu
2. Mapovat **oddělení na konkrétní patra**
3. Přidat **skutečné fotky** budov a vchodů
4. Doplnit **více POI** (WC, výtahy, čekárny)
5. Implementovat **routing mezi budovami** uvnitř areálu
6. Přidat **jazykové mutace** (CZ/EN přepínač)

### Pro AI/programátora pokračujícího v projektu:
- Přečtěte si **PROGRESS.md** - obsahuje kompletní technickou dokumentaci
- SVG mapa má strukturu popsanou v **specs/maps-id.md**
- Data pracovišť jsou v **specs/buildings.md**
- Zadání projektu je v **specs/Project-info.md**

## 📄 Licence

Tento projekt je vytvořen pro Fakultní nemocnici Bulovka.

---

**Vytvořeno**: Říjen 2024  
**Verze**: 1.0 (MVP)  
**Status**: ✅ Funkční prototyp


