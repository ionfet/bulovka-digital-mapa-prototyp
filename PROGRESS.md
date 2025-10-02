# ✅ Stav projektu: Mapa nemocnice Bulovka - DOKONČENO!

## 🎉 SHRNUTÍ:
Projekt je **kompletně funkční**! Vytvořena interaktivní webová mapa nemocnice Bulovka v jediném HTML souboru, který obsahuje vše potřebné - mapu, vyhledávání, detaily budov a navigaci.

### 📦 CO BYLO VYTVOŘENO:
- ✅ **index.html** - Kompletní webová aplikace (HTML + CSS + JavaScript + SVG mapa)
- ✅ **README.md** - Uživatelská dokumentace s návody
- ✅ **PROGRESS.md** - Technická dokumentace pro vývojáře

### 🚀 JAK SPUSTIT:
Jednoduše otevřete soubor **index.html** v prohlížeči (dvojklik nebo přetažení do browseru).

## ✅ Hotové úkoly
1. ✅ Vytvoření PROGRESS.md (tento soubor)
2. ✅ Vytvoření základní HTML struktury s Tailwind CSS a svg-pan-zoom
3. ✅ Načtení a vložení SVG mapy inline z mapa.svg.txt
4. ✅ Vytvoření datové struktury pracovišť z buildings.md
5. ✅ Implementace vyhledávání (normalizace textu, synonyma)
6. ✅ Implementace levého panelu (drawer) se seznamem pracovišť
7. ✅ Implementace zvýraznění budov při hoveru/výběru
8. ✅ Implementace detailu budovy s taby (Oddělení/POI)
9. ✅ Implementace pan/zoom funkcí pro SVG mapu
10. ✅ Implementace responzivního designu (desktop/mobil)

## 🚧 Aktuální úkol
✅ PROJEKT DOKONČEN!

## 📋 Zbývající úkoly
(vše hotovo)

## 🔧 OPRAVY (říjen 2024):

### ✅ Opraveno:
1. **Panel se automaticky otevírá** při kliknutí na budovu na mapě
2. **Zvýraznění jen obrysu budovy** - nyní se zvýrazní jen path/rect element (obrys), ne celý obsah
3. **CSS v separátním souboru** - vytvořen `style.css` pro lepší údržbu
4. **Všechny budovy mají data** - doplněno 13 chybějících budov (b-11, b-12, b-14, b-18, b-19, b-20, b-23, b-26, b-40, b-42, b-43, b-jidelna, b-secondary-lekarna)
5. **Opravena špatná ID v SVG**:
   - `b-15-2` → `b-16` (budova 16 měla špatné ID)
   - `b-019` → `b-19` (budova 19 měla nulu navíc)

## 🐛 Známé problémy / Limity MVP
1. **GPS souřadnice** - všechny budovy mají stejné mockup GPS (50.1109, 14.4618)
2. **MHD data** - zastávka a linky jsou mockup (Bulovka, 150m, linky 136/140/201)
3. **Patra oddělení** - zatím pevně nastaveno na "1. patro" pro všechna oddělení
4. **Fotky budov** - zobrazuje se placeholder (šedý obdélník)
5. **Některá pracoviště** nemají přiřazeno číslo budovy (v buildings.md "Neuvedeno")

## ✅ CO FUNGUJE:
- ✅ Vyhledávání s normalizací a synonymy
- ✅ Interaktivní SVG mapa s pan/zoom
- ✅ Levý panel (drawer) s animací
- ✅ Seznam pracovišť s real-time filtrováním
- ✅ Zvýraznění budov při hoveru
- ✅ Detail budovy s informacemi
- ✅ Taby: Oddělení a POI
- ✅ Tlačítko navigace → Google Maps
- ✅ Responzivní design (desktop/mobil)
- ✅ Klikání na budovy přímo na mapě

## 📝 Poznámky k implementaci

### ✨ CO BYLO VYTVOŘENO:

#### 1. **Hlavní soubor: index.html**
   - **Jediný HTML soubor** obsahující vše potřebné
   - **Tailwind CSS** načten přes CDN (https://cdn.tailwindcss.com)
   - **svg-pan-zoom** načten přes CDN (https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1)
   - **SVG mapa** vložena inline s id="mapa-svg" pro správnou funkčnost

#### 2. **Datová struktura**
   - **57 pracovišť** z buildings.md převedeno do JavaScript pole
   - Každé pracoviště má: `nazev` (CZ), `nazevEN` (EN), `budova` (číslo)
   - **Mockup data budov** v objektu `budovyData`:
     - Číslo budovy, název, adresa
     - GPS souřadnice (mockup: 50.1109, 14.4618)
     - MHD info (zastávka Bulovka, 150 m, linky 136/140/201)
     - POI (lékárna v budovách 1, 6, 13; bankomat v budově 13)

#### 3. **Vyhledávání**
   ```javascript
   function normalize(text) {
     return text.toLowerCase()
       .normalize('NFD')
       .replace(/[\u0300-\u036f]/g, '');
   }
   ```
   - Odstranění diakritiky (č→c, š→s, atd.)
   - Ignorování velikosti písmen
   - **Synonyma**: plicní→pneumologie, MR/MRI→magnetická rezonance, CT, RTG, gyn, děti
   - Filtrování seznamu v reálném čase při psaní

#### 4. **Levý panel (drawer)**
   - **Desktop**: Šířka 33.333%, vlevo
   - **Mobil**: Bottom sheet (50% výška), zespodu
   - Animovaný transition (transform 0.3s)
   - Tlačítko "☰ Seznam pracovišť" → "✕ Zavřít"

#### 5. **Seznam pracovišť**
   - Každá položka: název CZ + podtitul EN + černý badge s číslem budovy
   - Hover → zvýraznění budovy na mapě (zelený outline + drop-shadow)
   - Klik → otevření detailu budovy

#### 6. **Detail budovy**
   - **Hlavička**: "Budova X" + adresa
   - **Fotka**: Šedý placeholder (200px výška) s textem "Foto budovy"
   - **MHD info**: 
     - Nejbližší zastávka + vzdálenost (ikona polohy)
     - Linky MHD (ikona autobus)
   - **Tlačítko "Navigovat"**: Zelené, otevře Google Maps s GPS souřadnicemi
   - **Taby**: Oddělení (aktivní default) + POI
   
   **Tab Oddělení**:
   - Seznam pracovišť v budově
   - Chip "1. patro" (šedý)
   - Název oddělení + chevron "›"
   
   **Tab POI**:
   - Ikona lékárny (zelený kříž SVG)
   - Ikona bankomatu (šedý kruh s "ATM")
   - Název + číslo patra

#### 7. **Interakce s SVG mapou**
   - **svg-pan-zoom** inicializován s:
     - `fit: true, center: true`
     - `minZoom: 0.5, maxZoom: 10`
     - `controlIconsEnabled: true` (ovládací prvky)
   - Kliknutí na budovu (id^="b-") → detail budovy
   - Cursor: pointer při hoveru nad budovou
   - Zvýraznění: class `.is-highlighted` (zelený stroke + shadow)

#### 8. **Responzivní design**
   - **Desktop (>768px)**:
     - Panel vlevo, šířka 33.333%
     - Tlačítko menu se posune doprava když je panel otevřený
   - **Mobil (<768px)**:
     - Panel zespodu (bottom sheet), výška 50%
     - Border-radius 16px nahoře
     - Tlačítko menu zůstává vlevo nahoře

### 🔧 TECHNICKÉ DETAILY:

#### Mapování ID budov:
- **SVG ID**: `b-01`, `b-02`, ... `b-17` (s nulou vpředu)
- **Data ID**: "1", "2", ... "17" (bez nuly)
- **Konverze**: `.padStart(2, '0')` pro přidání nuly

#### Normalizace vyhledávání:
- Unicode NFD dekompozice + odstranění diakritiky
- Lowercase transformace
- Podpora více variant (plicní/plicni, MR/MRI/mri)

#### Zvýraznění budov:
- CSS class `.is-highlighted`:
  ```css
  stroke: #16a34a !important;
  stroke-width: 3 !important;
  filter: drop-shadow(0 0 10px #16a34a);
  ```
- Zvýrazní budovu + její label (lbl-bXX)
- Automatické odstranění při mouse leave nebo zavření detailu

### Responzivita:
- **Desktop (>768px)**: Levý boční panel (drawer), šířka 33%
- **Mobil (<768px)**: Bottom sheet (panel zespodu), výška 50%

## 🗂️ Struktura souborů
- ✅ `index.html` - **HLAVNÍ SOUBOR** - Kompletní aplikace (HTML + JS + SVG)
- ✅ `style.css` - **CSS STYLY** - Všechny styly aplikace
- 📄 `specs/mapa.svg.txt` - SVG mapa (vložena do index.html)
- 📄 `specs/buildings.md` - Data pracovišť (použito v JS)
- 📄 `specs/maps-id.md` - Dokumentace SVG struktury
- 📄 `specs/Project-info.md` - Zadání projektu
- 📄 `README.md` - Uživatelská dokumentace
- 📄 `PROGRESS.md` - Tento soubor (tracking pokroku)

## 🚀 JAK SPUSTIT PROJEKT:

### Varianta 1: Otevřít přímo v prohlížeči
```bash
# Jednoduše otevřete index.html v prohlížeči
open index.html
# nebo dvojklik na soubor
```

### Varianta 2: Lokální server (doporučeno)
```bash
# Python 3
python3 -m http.server 8000
# Pak otevřete: http://localhost:8000

# nebo Node.js
npx http-server -p 8000
```

## 📱 JAK POUŽÍVAT:

1. **Otevřít seznam pracovišť**: Klik na "☰ Seznam pracovišť" (vlevo nahoře)
2. **Vyhledávat**: Psát do pole "Hledat pracoviště..." (ignoruje diakritiku, podpora synonym)
3. **Zvýraznit budovu**: Najetí myší na pracoviště v seznamu
4. **Zobrazit detail budovy**: Klik na pracoviště nebo přímo na budovu na mapě
5. **Navigovat**: Klik na zelené tlačítko "Navigovat k budově" → otevře Google Maps
6. **Prohlížet oddělení/POI**: Přepínání mezi taby "Oddělení" a "POI"
7. **Pan/Zoom mapy**: Tažení myši, kolečko myši, nebo ovládací prvky svg-pan-zoom

