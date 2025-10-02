### Dokumentace struktury ID v SVG mapě areálu

Tento dokument popisuje organizaci a sémantiku `id` atributů použitých v SVG mapě. Mapa je vysoce strukturovaná a využívá logické seskupování a konzistentní konvence pojmenování, což usnadňuje programovou manipulaci a interakci s jednotlivými prvky.

#### 1. Celková struktura a princip vrstvení

Základním organizačním prvkem jsou skupiny `<g>`. Hlavní skupiny (vrstvy) jsou pojmenovány pomocí číselného prefixu, který určuje jejich pořadí vykreslování (podobně jako `z-index` v CSS). Vrstvy s nižším číslem jsou vykresleny dříve (více v pozadí).

**Hlavní vrstvy (Top-Level Groups):**

| ID | Popis |
| :--- | :--- |
| `_00-background` | Základní vrstva s pozadím celé mapy. |
| `_05-areal-obrys` | Vrstva obsahující hlavní obrys celého areálu. |
| `_10-road-network` | Komplexní vrstva se všemi komunikacemi (silnice, chodníky, mosty). |
| `_20-buildings` | Vrstva se všemi budovami, rozdělenými na hlavní a vedlejší. |
| `_30-entrances` | Skupina obsahující všechny vchody do budov. |
| `_40-parking` | Vrstva s vyznačeným parkovištěm (obsahuje vnořenou skupinu `parking-main`). |
| `_50-gates` | Skupina obsahující hlavní, vedlejší a servisní brány/vjezdy. |
| `_60-public-transport`| Vrstva se zastávkami veřejné dopravy. |
| `_70-helipad` | Vrstva obsahující heliport (obsahuje vnořenou skupinu `helicopter`). |
| `_80-poi` | Vrstva s body zájmu (Points of Interest), jako jsou lékárny, jídelna atd. |
| `_90-labels` | Vrstva s popisky (čísly) budov. Je vykreslena téměř jako poslední, aby byly popisky nahoře. |

---

#### 2. Detailní rozbor jednotlivých vrstev

##### `_20-buildings` (Budovy)
Tato vrstva obsahuje dvě podskupiny pro rozlišení důležitosti budov:
*   `_21-buildings-main`: Hlavní budovy.
*   `_22-buildings-secondary`: Vedlejší nebo menší budovy.

Uvnitř těchto skupin má každá budova unikátní `id`.

**Konvence pojmenování:** `b-<číslo>` nebo `b-<název>`
*   **Příklady:**
    *   `id="b-01"`
    *   `id="b-17"`
    *   `id="b-jidelna"`

##### `_90-labels` (Popisky budov)
Tato vrstva obsahuje textové prvky s čísly budov. ID těchto prvků přímo korespondují s ID budov z vrstvy `_20-buildings`, což umožňuje snadné programové propojení budovy s jejím popiskem.

**Konvence pojmenování:** `lbl-b<číslo/název>`
*   **Příklady:**
    *   `id="lbl-b01"` je popisek pro budovu s `id="b-01"`.
    *   `id="lbl-b15"` je popisek pro budovu s `id="b-15"`.

##### `_30-entrances` (Vchody)
Vchody jsou rozděleny do dvou kategorií:
*   `_31-entrances-main-accessible`: Hlavní a bezbariérové vchody.
*   `_32-entrances-side`: Vedlejší vchody.

**Konvence pojmenování:** `ent-b<číslo>-<typ>-<pořadové_číslo>`
*   **Příklady:**
    *   `id="ent-b01-main-accessible-01"`: První hlavní/bezbariérový vchod do budovy `b-01`.
    *   `id="ent-b09-side-01"`: První vedlejší vchod do budovy `b-09`.

##### `_80-poi` (Body zájmu)
Ikony a symboly pro specifická místa (Points of Interest). Jejich ID jasně definuje typ a často i příslušnost k budově.

**Konvence pojmenování:** `poi-<název_poi>-b<číslo_budovy>`
*   **Příklady:**
    *   `id="poi-jidelna-b-jidelna-main"`: Ikona jídelny u budovy `b-jidelna`.
    *   `id="poi-pohotovost-b02"`: Ikona pohotovosti u budovy `b-02`.
    *   `id="poi-lekarna-b01"`: Ikona lékárny u budovy `b-01`.

##### `_60-public-transport` (Veřejná doprava)
Každá zastávka je v samostatné skupině.

**Konvence pojmenování:** `pt-stop-<název_zastávky>`
*   **Příklady:**
    *   `id="pt-stop-bulovka-nemocnice-onkologie"`
    *   `id="pt-stop-rokoska"`
    *   `id="pt-stop-vychovatelna"`

##### `_50-gates` (Brány/Vjezdy)
Obsahuje skupiny pro jednotlivé vjezdy do areálu.

**Konvence pojmenování:** `gate-<typ>`
*   **Příklady:**
    *   `id="gate-main"`: Hlavní vjezd.
    *   `id="gate-sec"`: Vedlejší vjezd.
    *   `id="gate-service"`: Servisní vjezd.

##### `_10-road-network` (Komunikace)
Tato vrstva je dále členěna na podvrstvy, které zajišťují správné překrývání prvků.
*   `_11-street-names`: Názvy ulic.
*   `_12-bridges`: Mosty (obsahuje `id="Most"` a `id="Most-2"`).
*   `_13-roads-main`: Hlavní silnice.
*   `_14-roads-private`: Soukromé/areálové komunikace.
*   `_15-footways`: Chodníky a pěší zóny.
*   `_16-steps`: Schody.

