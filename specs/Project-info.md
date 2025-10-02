# 📍 Shrnutí projektu: Digitální mapa nemocnice Bulovka (MVP)

---

## 🗺️ Mapa

* Mapa je už připravena v **SVG** formátu a má přiřazené ID. 
* Obsahuje vrstvy pro budovy, čísla budov, vchody, silnice a areálové prvky.
* Soubor svg se nazývá mapa.svg
* Soubor s použitými id v mapa.svg se nazývá mapa-id.md

---

## ✅ MVP Desing

1.	Základní mapa (full-width)
* Vlevo nahoře plovoucí tlačítko: „☰ Seznam pracovišť“. Člověk klikne a vyjede Vyhledávání + seznam (otevřený levý panel)
* Mapové plátno je pod tim

	
2.	Vyhledávání + seznam (otevřený levý panel)
* překrýva jednu třetinu obrazovky
* Horní vyhledávací pole: „Hledat pracoviště“ (s ikonou lupy a křížkem pro zrušení).
* Pod tím je seznam všech pracovišt na výšku:
	•	„Parazitologie – NRL“ (podtitul EN: „Parasitology – NRL“)
	•	„Pediatrie (Dětské oddělení)“ („Pediatric Department“)
	•	„Plastická chirurgie“ („Plastic Surgery“)
	•	„Plicní – Pneumologie“ („Pneumology“)
	•	U každé položky je kulatý černý badge s číslem budovy (např. 13, 15, 4).
	•	Mapa zůstává vpravo viditelná.
	
3.	Detail budovy — tab „Oddělení“ (aktivní)
	•	Velká karta s hlavičkou „Budova 13“, pod tím adresa „Budínova, 67/2, Prague“.
	•	Informační řádek: „Nejbližší zastávka: Bulovka (150 m)“ a „Linky: 136, 140, 201“.
	•	Primární zelené tlačítko „Navigovat“.
	•	Záložky (taby): „Oddělení“ (podtržený aktivní) a „POI“.
	•	V obsahu seznam s patry (chip „1. patro“) a položkou „Pediatrie (Dětské oddělení)“ s chevronem „›“.
	
	
		4.	Detail budovy — tab „POI“ (aktivní)
	•	Stejná hlavička karty „Budova 13“.
	•	Aktivní záložka „POI“ (podtržená).
	•	Seznam bodů v budově s ikonami:
	•	„Lékárna“ (zelený kříž), „2. patro“.
	•	„Bankomat“ (ikona „ATM“), „1. patro“.


Shrnutí struktur UI
	•	Pravý panel: mapa s budovami, vstupy a navigačními značkami.
	•	Levý panel (drawer):
	•	Stav 1: skrytý (jen tlačítko „Seznam pracovišť“).
	•	Stav 2: vyhledávací režim se seznamem (CZ titulky + EN podtitulky, badge s čísly budov).
	•	Stav 3: karta konkrétní budovy (adresa, MHD, Navigovat, taby Oddělení/POI, položky se štítkem patra).


## ✅ MVP funkce


### 1. Vyhledávání

* V levém rohu je tlačítko SEZNAM PRACOVIŠT. Po kliknutí vyjede boční panel. Nahoře je vyhledávací pole, pod nim je seznma všech pracovist. Člověk začné psát do vyhledávače a psotpně se mu bude ten seznam zužovat. 
* Když člověk navede myší nebo šipkami zvolí položku z vyhledávání tak se na mapě **zvýrazní budova** odpovídající výsledku.
* Fulltext s našeptávačem.
* Podpora **aliasů, synonym, zkratek a hovorových názvů** (např. „plicní“ = „pneumologie“, „MR“ = „magnetická rezonance“).
* Ignoruje diakritiku a malé/velké písmo.

---

### 2. Interakce s mapou

* Možnost posouvat a zoomovat (desktop i mobil).
* Responzivní zobrazení:

  * na mobilu **bottom sheet**,
  * na desktopu ** levý boční panel**.


---

### 3. Detail budovy

Kliknutí na budovu otevře panel s:

* Fotka budovy nebo hlavního vchodu (místo fotky dát place holder)
* Název a číslo budovy.
* **Doprava**: nejbližší zastávka MHD k budově
* **Tlačítko „Navigovat k budově“** → přesměruje na externí mapovou službu (Google Maps / Mapy.cz) s GPS konkrétního vchodu.
* **Seznam pracovišť (seřazené podle pater).
* Klik na oddělení → otevře novou stánku tohoto pracoviště
* POI uvnitř budovy - jako lékárna, wc, atm a jekich umístění na patře
---

### 4. Obsahové vrstvy

* **Vždy viditelné:** budovy, čísla budov, Bezbarierové vhcody a vedlejší vhcody, brány, parkoviště, MHD.


---

## 👥 Scénáře použití (persony)

### Pacient – poprvé na magnetické rezonanci

* Zadá „magnetická rezonance“ → mapa zvýrazní budovu 16.
* Klik → otevře menu buoduvy s už zvírazněným odělením a otevřenýma informacema o odělení.
* Klik na „Navigovat“ → otevře se Google Maps
* V areálu sleduje směrovky 

---

### Návštěvník – jde na internu

* Zadá „Budova 3“ → karta budovy se seznamem oddělení.
* Klikne na „Interna“ → zobrazí se informace a odkaz na stránku oddělení.

---

## 📌 Shrnutí

Digitální mapa Bulovka má fungovat jako **vyhledávač cílů a karta budovy/vchodu**, která uživatele připraví před návštěvou a pomůže mu najít správný vchod.
Jakmile vstoupí do areálu, **přebírá orientaci fyzický navigační systém**.

Mapa je **připravena v SVG**, obsahuje vrstvy pro budovy, čísla, vchody a cesty. 

--- KONEC ZADÁNÍ PROJEKTU ---

