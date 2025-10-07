# 🏥 Interaktivní mapa nemocnice Bulovka

Webová aplikace pro vyhledávání a navigaci v areálu Fakultní nemocnice Bulovka.

https://ionfet.github.io/bulovka-digital-mapa-prototyp/

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
- **Informace o budově**: název, adresa, fotografie (formát 4:3)
- **Dopravní spojení**: nejbližší zastávka MHD a čísla linek
- **Navigace**: tlačítko pro otevření Google Maps s přesnou GPS lokací
- **Oddělení**: seznam všech pracovišť v budově seřazený podle pater
- **POI (Points of Interest)**: lékárna, bankomat, jídelna apod.

## 📸 Přidání fotografií budov

Aplikace podporuje fotografie jednotlivých budov. Všechny fotografie se zobrazují v **horizontálním formátu 4:3**.

### Postup přidání fotografie:

1. **Umístěte fotku** do složky `assets/photos/` (např. `budova-1.jpg`)
2. **Otevřete** soubor `app.js`
3. **Najděte** příslušnou budovu v objektu `budovyData` (např. `"b-01"` pro budovu 1)
4. **Změňte** `foto: null` na cestu k souboru:
   ```javascript
   "b-01": { 
       cislo: "1", 
       nazev: "Budova 1", 
       // ... ostatní vlastnosti ...
       foto: "assets/photos/budova-1.jpg"  // ← tady změňte
   }
   ```
5. **Uložte** soubor a fotka se automaticky zobrazí v detailu budovy

### Doporučení:
- ✅ Horizontální formát (šířka > výška)
- ✅ Ideálně poměr stran **4:3** (např. 1600×1200px, 1200×900px)
- ✅ Formáty: JPG, PNG, WebP
- ✅ Doporučená velikost: max 1600px šířka (pro rychlé načítání)

Pokud fotku nepřidáte (nebo nastavíte `foto: null`), zobrazí se placeholder s textem "Foto budovy".

---

**Vytvořeno**: Daniil Kuželev | Toman Design | 2025