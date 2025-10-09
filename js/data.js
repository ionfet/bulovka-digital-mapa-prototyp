// ===== ДАННЫЕ =====

// Рабочие места из buildings.md (обновлено 3 октября 2025)
const pracoviste = [
    { nazev: "Anesteziologie a intenzivní medicína", nazevEN: "Anaesthesiology, Intensive and Emergency Medicine", budova: "13" },
    { nazev: "Biochemie a imunologie", nazevEN: "Biochemistry and Immunology", budova: "8" },
    { nazev: "Centrum porodní asistence", nazevEN: "Midwifery Center", budova: "15" },
    { nazev: "Centrum péče o ženu a dítě s podezřením na vrozenou vývojovou vadu", nazevEN: "Center for Care of Women and Children with Suspected Congenital Defects", budova: "5" },
    { nazev: "Centrální laboratoře", nazevEN: "Central Laboratories", budova: "8" },
    { nazev: "Centrální sterilizace", nazevEN: "Central Sterilization", budova: "13" },
    { nazev: "Cizinecké oddělení", nazevEN: "Foreigners' Department", budova: "1" },
    { nazev: "Chirurgie", nazevEN: "Surgery", budova: "5" },
    { nazev: "Dermatovenerologie", nazevEN: "Dermatovenerology", budova: "9" },
    { nazev: "Dětská chirurgie a traumatologie", nazevEN: "Pediatric Surgery and Traumatology", budova: "5" },
    { nazev: "Funkční diagnostika a Centrum preventivní péče", nazevEN: "Functional Diagnostics and Preventive Care Centre", budova: "1" },
    { nazev: "Gastroenterologické oddělení", nazevEN: "Gastrointestinal Department", budova: "10" },
    { nazev: "Gastrointestinální onkologie", nazevEN: "Gastrointestinal Oncology", budova: "10" },
    { nazev: "Gynekologie", nazevEN: "Gynecology", budova: "15" },
    { nazev: "HIV centrum", nazevEN: "HIV Center", budova: "7" },
    { nazev: "Hematologie a transfuze", nazevEN: "Hematology and Transfusion", budova: "8" },
    { nazev: "Infekční nemoci", nazevEN: "Infectious Diseases", budova: "7" },
    { nazev: "Interní klinika FNB a 3. LF UK", nazevEN: "Internal Medicine Clinic FNB and 3rd FM CU", budova: "10" },
    { nazev: "Intervenční radiologie", nazevEN: "Interventional Radiology", budova: "3", patro: "-1" },
    { nazev: "Klinická farmacie", nazevEN: "Clinical Pharmacy", budova: "8" },
    { nazev: "Komplexní centrum pro ortopedickou léčbu nádorů pohybového aparátu", nazevEN: "Comprehensive Centre for Orthopaedic Treatment of Musculoskeletal Tumours", budova: "13" },
    { nazev: "Komplexní onkologické centrum", nazevEN: "Comprehensive Oncology Centre", budova: "6" },
    { nazev: "Lékárna pro veřejnost I", nazevEN: "Public Pharmacy I", budova: "1" },
    { nazev: "Lékárna pro veřejnost II", nazevEN: "Public Pharmacy II", budova: "6" },
    { nazev: "Léčba bolesti", nazevEN: "Pain Treatment Center", budova: "9" },
    { nazev: "Magnetická rezonance MRI 1", nazevEN: "Magnetic Resonance Imaging – MRI 1", budova: "13" },
    { nazev: "Magnetická rezonance MRI 2", nazevEN: "Magnetic Resonance Imaging – MRI 2", budova: "16" },
    { nazev: "Mamodiagnostické centrum", nazevEN: "Mammography Centre", budova: "16" },
    { nazev: "Mikrobiologie", nazevEN: "Microbiology", budova: "8" },
    { nazev: "Neonatologie", nazevEN: "Neonatology Department", budova: "15" },
    { nazev: "Neurologie", nazevEN: "Neurology Department", budova: "3", patro: "4" },
    { nazev: "Nutriční terapeuti", nazevEN: "Nutritional Therapists", budova: "18" },
    { nazev: "Národní jednotka dohledu na TBC", nazevEN: "National Tuberculosis Surveillance Unit", budova: "20" },
    { nazev: "Následná péče – rehabilitační oddělení", nazevEN: "Follow-up Care – Rehabilitation Department", budova: "9" },
    { nazev: "ORL – ušní, nosní a krční", nazevEN: "Otorhinolaryngology", budova: "3", patro: "2" },
    { nazev: "Odběrové pracoviště", nazevEN: "Central Sampling Department", budova: "8" },
    { nazev: "Onkologie", nazevEN: "Oncology Center", budova: "15" },
    { nazev: "Ortopedie", nazevEN: "Orthopedic Clinic", budova: "13" },
    { nazev: "Oční", nazevEN: "Ophthalmology Department", budova: "3", patro: "1" },
    { nazev: "Patologie", nazevEN: "Pathology Department", budova: "17" },
    { nazev: "Parazitologie – NRL", nazevEN: "Parasitology – NRL", budova: "8" },
    { nazev: "Pediatrie (Dětské oddělení)", nazevEN: "Pediatric Department", budova: "15" },
    { nazev: "Plastická chirurgie", nazevEN: "Plastic Surgery", budova: "15" },
    { nazev: "Plicní – Pneumologie", nazevEN: "Pneumology", budova: "4" },
    { nazev: "Pohotovost", nazevEN: "Emergency Room", budova: "2" },
    { nazev: "Porodnice", nazevEN: "Maternity Ward", budova: "15" },
    { nazev: "Pracovní lékařské služby", nazevEN: "Occupational Health Services", budova: "1" },
    { nazev: "Protialkoholní záchytná stanice", nazevEN: "Alcohol Detoxification Station", budova: "19" },
    { nazev: "Protonové centrum", nazevEN: "Proton Therapy Center", budova: "42" },
    { nazev: "Psychologie", nazevEN: "Psychology", budova: "3", patro: "-1" },
    { nazev: "Radiodiagnostické oddělení", nazevEN: "Radiodiagnostic Department", budova: "1" },
    { nazev: "Radiofyzika", nazevEN: "Radiophysics", budova: "16" },
    { nazev: "Rehabilitace", nazevEN: "Rehabilitation", budova: "9" },
    { nazev: "Rentgen (RTG)", nazevEN: "X-ray (RTG)", budova: "1" },
    { nazev: "Sociálně zdravotní oddělení", nazevEN: "Social and Health Department", budova: "9" },
    { nazev: "Sonografie", nazevEN: "Sonography", budova: "1" },
    { nazev: "Soudní lékařství", nazevEN: "Forensic Medicine", budova: "17" },
    { nazev: "Toxikologie", nazevEN: "Toxicology", budova: "17" },
    { nazev: "Urgentní příjem", nazevEN: "Emergency Department", budova: "13" },
    { nazev: "Urologie", nazevEN: "Urology Department", budova: "3", patro: "-1" },
    { nazev: "Urologické oddělení", nazevEN: "Urology Ward", budova: "3", patro: "3" },
    { nazev: "Ústav gastrointestinální onkologie", nazevEN: "Institute of Gastrointestinal Oncology", budova: "10" },
    { nazev: "Virologie", nazevEN: "Virology", budova: "8" },
    
    // Budova 3 - doplňující služby po patrech
    { nazev: "Ambulance urologie", nazevEN: "Urology Outpatient Clinic", budova: "3", patro: "-1" },
    { nazev: "Dětská ORL", nazevEN: "Pediatric ENT", budova: "3", patro: "-1" },
    { nazev: "Logopedie", nazevEN: "Speech Therapy", budova: "3", patro: "-1" },
    { nazev: "Pohotovost oční", nazevEN: "Ophthalmology Emergency", budova: "3", patro: "1" },
    { nazev: "Lůžkové oddělení oční", nazevEN: "Ophthalmology Ward", budova: "3", patro: "1" },
    { nazev: "Všeobecná ambulance oční", nazevEN: "General Ophthalmology Outpatient", budova: "3", patro: "1" },
    { nazev: "Speciální poradny očního oddělení", nazevEN: "Special Ophthalmology Consultations", budova: "3", patro: "1" },
    { nazev: "Pohotovost ORL", nazevEN: "ENT Emergency", budova: "3", patro: "2" },
    { nazev: "Foniatrie", nazevEN: "Phoniatrics", budova: "3", patro: "2" },
    { nazev: "Lůžkové oddělení ORL", nazevEN: "ENT Ward", budova: "3", patro: "2" },
    { nazev: "Speciální poradny ORL", nazevEN: "Special ENT Consultations", budova: "3", patro: "2" },
    { nazev: "Pohotovost urologie", nazevEN: "Urology Emergency", budova: "3", patro: "3" },
    { nazev: "Lůžková část urologie", nazevEN: "Urology Inpatient Unit", budova: "3", patro: "3" },
    { nazev: "Centrum vysoce specializované onkologické péče", nazevEN: "Highly Specialized Oncology Care Center", budova: "3", patro: "3" },
    { nazev: "Pohotovost neurologie", nazevEN: "Neurology Emergency", budova: "3", patro: "4" },
    { nazev: "Chronická ambulance neurologie", nazevEN: "Chronic Neurology Outpatient", budova: "3", patro: "4" },
    { nazev: "Neurofyziologické laboratoře", nazevEN: "Neurophysiology Laboratories", budova: "3", patro: "4" },
    { nazev: "Duplexní sonografie", nazevEN: "Duplex Sonography", budova: "3", patro: "4" },
    { nazev: "Oddělení informační techniky", nazevEN: "IT Department", budova: "3", patro: "5" },
    { nazev: "Smíšené operační sály", nazevEN: "Mixed Operating Rooms", budova: "3", patro: "5" },
    { nazev: "Oddělení zdravotních pojišťoven", nazevEN: "Health Insurance Department", budova: "3", patro: "5" },
    { nazev: "Endoskopický sál", nazevEN: "Endoscopic Operating Room", budova: "3", patro: "5" }
];

// Синонимы для поиска (обновлено: расширенный список 9 октября 2025)
// Структура: "синоним" → "каноническое ключевое слово"
// Все синонимы уже нормализованы (lowercase, без диакритики)
const synonyma = {
  // ===== ZOBRAZOVÁNÍ / IMAGING =====
  "rtg": "rentgen",
  "rentgen": "rentgen",
  "xray": "rentgen",
  "skiagrafie": "rentgen",

  "ultrazvuk": "sonografie",
  "uz": "sonografie",
  "sono": "sonografie",
  "sonografie": "sonografie",

  "mr": "magneticka rezonance",
  "mri": "magneticka rezonance",
  "magnet": "magneticka rezonance",
  "rezonance": "magneticka rezonance",
  "magneticka rezonance": "magneticka rezonance",

  "ct": "radiodiagnosticke",
  "radiologie": "radiodiagnosticke",
  "radiodiagnostika": "radiodiagnosticke",
  "radiodiagnosticke": "radiodiagnosticke",

  "ir": "intervencni radiologie",
  "angiografie": "intervencni radiologie",
  "embolizace": "intervencni radiologie",
  "intervencni radiologie": "intervencni radiologie",

  "radiofyzika": "radiofyzika",
  "lekarska fyzika": "radiofyzika",

  // ===== GYN / POROD =====
  "gyn": "gynekologie",
  "gynda": "gynekologie",
  "gynekolog": "gynekologie",
  "gynekologie": "gynekologie",

  "porodnice": "porodnice",
  "porod": "porodnice",
  "maternity": "porodnice",

  "porodni asistentka": "centrum porodni asistence",
  "porodni asistence": "centrum porodni asistence",
  "centrum porodni asistence": "centrum porodni asistence",
  "prenatalni": "centrum pece o zenu a dite",
  "prenatalni diagnostika": "centrum pece o zenu a dite",
  "fetalni medicina": "centrum pece o zenu a dite",
  "screening down": "centrum pece o zenu a dite",
  "centrum pece o zenu a dite": "centrum pece o zenu a dite",

  "mamografie": "mamodiagnosticke",
  "mamo": "mamodiagnosticke",
  "prsa": "mamodiagnosticke",
  "screening prsu": "mamodiagnosticke",
  "mamodiagnosticke": "mamodiagnosticke",

  // ===== PED / NEO / ORL / OČNÍ =====
  "pediatr": "pediatrie",
  "pediatrie": "pediatrie",
  "detske": "pediatrie",
  "deti": "pediatrie",

  "neonatologie": "neonatologie",
  "novorozenecke": "neonatologie",

  "orl": "orl",
  "ent": "orl",
  "usni": "orl",
  "nosni": "orl",
  "krcni": "orl",
  "otolaryngologie": "orl",

  "ocni": "ocni",
  "oftalmologie": "ocni",
  "oko": "ocni",

  // ===== NEURO / URO / ORTOP =====
  "neurologie": "neurologie",
  "neuro": "neurologie",

  "urologie": "urologie",
  "uro": "urologie",
  "prostata": "urologie",
  "mocove cesty": "urologie",

  "ortopedie": "ortopedie",
  "ortho": "ortopedie",
  "klouby": "ortopedie",
  "kosti": "ortopedie",

  "onko ortopedie": "onko ortopedie",
  "nador kosti": "onko ortopedie",
  "ortopedicka onkologie": "onko ortopedie",

  // ===== CHIR / SÁLY =====
  "chirurgie": "chirurgie",
  "operace": "chirurgie",
  "chir": "chirurgie",

  "smisene operacni saly": "smisene operacni saly",
  "operacni sal": "smisene operacni saly",

  "detska chirurgie": "detska chirurgie a traumatologie",
  "detska traumatologie": "detska chirurgie a traumatologie",
  "trauma deti": "detska chirurgie a traumatologie",

  // ===== ONKO =====
  "onkologie": "onkologie",
  "rakovina": "onkologie",
  "chemoterapie": "onkologie",

  "koc": "komplexni onkologicke centrum",
  "komplexni onkologicke centrum": "komplexni onkologicke centrum",

  "gi onkologie": "gastrointestinalni onkologie",
  "gastro onkologie": "gastrointestinalni onkologie",
  "gastrointestinalni onkologie": "gastrointestinalni onkologie",
  "ustav gi onkologie": "ustav gastrointestinalni onkologie",
  "ustav gastrointestinalni onkologie": "ustav gastrointestinalni onkologie",

  "proton": "protonove centrum",
  "protonove centrum": "protonove centrum",
  "protonova terapie": "protonove centrum",
  "ozarovani protony": "protonove centrum",

  // ===== GASTRO / ENDO =====
  "gastro": "gastroenterologicke",
  "gastroenterologie": "gastroenterologicke",
  "zaludek": "gastroenterologicke",
  "streva": "gastroenterologicke",
  "jatra": "gastroenterologicke",
  "kolonoskopie": "gastroenterologicke",
  "gastroskopie": "gastroenterologicke",
  "gastroenterologicke": "gastroenterologicke",

  "endoskopie": "endoskopicky sal",
  "endoskopicky sal": "endoskopicky sal",

  // ===== INTERNÍ / BOLEST =====
  "interni": "interni klinika",
  "internista": "interni klinika",
  "vnitrni": "interni klinika",
  "interni klinika": "interni klinika",

  "bolest": "lecba bolesti",
  "centrum bolesti": "lecba bolesti",
  "algeziologie": "lecba bolesti",
  "lecba bolesti": "lecba bolesti",

  // ===== LÉKÁRNY =====
  "lekarna": "lekarna",
  "lekarny": "lekarna",
  "pharmacy": "lekarna",
  "apoteka": "lekarna",

  // ===== LAB / ODBĚRY =====
  "laborator": "centralni laboratore",
  "laboratore": "centralni laboratore",
  "centralni laboratore": "centralni laboratore",

  "biochemie": "biochemie a imunologie",
  "imunologie": "biochemie a imunologie",

  "mikrobiologie": "mikrobiologie",
  "parazitologie": "parazitologie",
  "nrl": "parazitologie",
  "virologie": "virologie",

  "hematologie": "hematologie a transfuze",
  "transfuze": "hematologie a transfuze",
  "krev": "hematologie a transfuze",

  "odbery": "odberove pracoviste",
  "odber krve": "odberove pracoviste",
  "odberove pracoviste": "odberove pracoviste",

  // ===== INFEKCE / HIV =====
  "infekce": "infekcni nemoci",
  "infekcni": "infekcni nemoci",
  "infekcni nemoci": "infekcni nemoci",

  "hiv": "hiv centrum",
  "aids": "hiv centrum",
  "hiv centrum": "hiv centrum",

  // ===== DÝCHACÍ =====
  "plicni": "pneumologie",
  "pneumologie": "pneumologie",
  "plice": "pneumologie",

  "tbc": "narodni jednotka dohledu na tbc",
  "tuberkuloza": "narodni jednotka dohledu na tbc",
  "narodni jednotka dohledu na tbc": "narodni jednotka dohledu na tbc",

  // ===== REHAB / NÁSLEDNÁ =====
  "rehabilitace": "rehabilitace",
  "fyzioterapie": "rehabilitace",
  "fyzio": "rehabilitace",

  "nasledna pece": "nasledna pece",

  // ===== MIND / SOC =====
  "psychologie": "psychologie",
  "psycholog": "psychologie",
  "terapie": "psychologie",

  "socialni": "socialne zdravotni",
  "socialni pracovnik": "socialne zdravotni",
  "socialne zdravotni": "socialne zdravotni",

  // ===== PATO / FORENS =====
  "patologie": "patologie",
  "histologie": "patologie",
  "biopsie": "patologie",

  "soudni lekarstvi": "soudni lekarstvi",
  "forenzni": "soudni lekarstvi",

  "toxikologie": "toxikologie",
  "otravy": "toxikologie",
  "tox": "toxikologie",

  // ===== URGENT / POHOTOVOST =====
  "pohotovost": "pohotovost",
  "lps": "pohotovost",

  "urgent": "urgentni prijem",
  "urgentni prijem": "urgentni prijem",
  "er": "urgentni prijem",
  "emergency": "urgentni prijem",

  // ===== ADMIN / STERIL / OSTATNÍ =====
  "it": "oddeleni informacni techniky",
  "oddeleni informacni techniky": "oddeleni informacni techniky",

  "pojistovna": "oddeleni zdravotnich pojistoven",
  "pojistovny": "oddeleni zdravotnich pojistoven",
  "oddeleni zdravotnich pojistoven": "oddeleni zdravotnich pojistoven",

  "centralni sterilizace": "centralni sterilizace",
  "sterilizace": "centralni sterilizace",

  "cizinecke": "cizinecke oddeleni",
  "foreigners": "cizinecke oddeleni",
  "expat": "cizinecke oddeleni",
  "cizinecke oddeleni": "cizinecke oddeleni",

  "pracovni lekar": "pracovni lekarske sluzby",
  "pracovne lekarske sluzby": "pracovni lekarske sluzby",
  "prohlidky do prace": "pracovni lekarske sluzby",
  "pls": "pracovni lekarske sluzby",
  "pracovni lekarske sluzby": "pracovni lekarske sluzby",

  "zachytka": "protialkoholni zachytna stanice",
  "protialkoholni": "protialkoholni zachytna stanice",
  "detox alkohol": "protialkoholni zachytna stanice",
  "protialkoholni zachytna stanice": "protialkoholni zachytna stanice",

  "centralni laboratore": "centralni laboratore",
  "klinicka farmacie": "klinicka farmacie",

  // ===== PODLAŽÍ / SPEC. AMB. V BUDOVĚ 3 =====
  "foniatrie": "orl",
  "logopedie": "logopedie",
  "duplex": "duplexni sonografie",
  "duplexni sonografie": "duplexni sonografie",
  "neurofyziologie": "neurofyziologicke laboratore",

  // Pomocné aliasy na konkrétní jednotky v budově 3
  "ocni pohotovost": "ocni",
  "ocni ambulance": "ocni",
  "vseobecna ocni": "ocni",
  "specialni ocni poradny": "ocni",

  "orl pohotovost": "orl",
  "specialni orl poradny": "orl",
  "luzkove orl": "orl",

  "urologie pohotovost": "urologie",
  "urologie luzkova cast": "urologie"
};

// Mockup данные о зданиях
const budovyData = {
    // Для добавления ссылки на страницу здания добавьте свойство `link` с URL.
    "b-01": { cislo: "1", nazev: "Budova 1", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11553515643098, lng: 14.464130713080111}, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "lekarna", nazev: "Lékárna", patro: "1" }], foto: null },
    "b-02": { cislo: "2", nazev: "Budova 2", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1150047883537, lng: 14.465049251168935}, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-03": { cislo: "3", nazev: "Budova 3", adresa: "Budínova 67/2, Prague", gps: { lat: 50.115284153158825, lng: 14.461749443702764}, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "kaple", nazev: "Kaple", patro: "-1" }], foto: "assets/photos/budova-3.jpg" },
    "b-04": { cislo: "4", nazev: "Budova 4", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11695860582284, lng: 14.465491331610686}, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-05": { cislo: "5", nazev: "Budova 5", adresa: "Budínova 67/2, Prague", gps: { lat: 50.115207616860395, lng: 14.463211243413037 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-06": { cislo: "6", nazev: "Budova 6", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11680272887604, lng: 14.4620822406263 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "lekarna", nazev: "Lékárna", patro: "2" }], foto: null },
    "b-07": { cislo: "7", nazev: "Budova 7", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11513807516061, lng: 14.459728985730758 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-08": { cislo: "8", nazev: "Budova 8", adresa: "Budínova 67/2, Prague", gps: { lat: 50.114597402597184, lng: 14.460264465903197 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-09": { cislo: "9", nazev: "Budova 9", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11477651831016, lng: 14.46320615734421 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-10": { cislo: "10", nazev: "Budova 10", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11574109005667, lng: 14.45786097331917 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-11": { cislo: "11", nazev: "Budova 11", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11620998297485, lng: 14.459399576964982 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-12": { cislo: "12", nazev: "Budova 12", adresa: "Budínova 67/2, Prague", gps: { lat: 50.116307933712605, lng: 14.460837154953804 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-13": { cislo: "13", nazev: "Budova 13", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11572232650191, lng: 14.463731548461164 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "lekarna", nazev: "Lékárna", patro: "2" }, { typ: "atm", nazev: "Bankomat", patro: "1" }], foto: null },
    "b-14": { cislo: "14", nazev: "Budova 14", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11525115455635, lng: 14.467166754072542 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-15": { cislo: "15", nazev: "Budova 15", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11566788075407, lng: 14.461178987670955 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-16": { cislo: "16", nazev: "Budova 16", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11686598552117, lng: 14.462975157899518 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-17": { cislo: "17", nazev: "Budova 17", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11438280949799, lng: 14.461130835356567 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-18": { cislo: "18", nazev: "Budova 18", adresa: "Budínova 67/2, Prague", gps: { lat: 50.115942171766946, lng: 14.45762302336432 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-19": { cislo: "19", nazev: "Budova 19", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11442018003582, lng: 14.462755828352092 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-20": { cislo: "20", nazev: "Budova 20", adresa: "Budínova 67/2, Prague", gps: { lat: 50.116357195497855, lng: 14.463886971262122 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-23": { cislo: "23", nazev: "Budova 23", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11475039643155, lng: 14.465018162180112 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-26": { cislo: "26", nazev: "Budova 26", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11491370152112, lng: 14.465653391553149 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-40": { cislo: "40", nazev: "Budova 40", adresa: "Budínova 67/2, Prague", gps: { lat: 50.115842659822775, lng: 14.458840316633564 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-42": { cislo: "42", nazev: "Budova 42", adresa: "Budínova 67/2, Prague", gps: { lat: 50.117141058458344, lng: 14.464601122019573 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-43": { cislo: "43", nazev: "Budova 43", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11534821781519, lng: 14.465457593198936 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [], foto: null },
    "b-jidelna": { cislo: "Jídelna", nazev: "Jídelna", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11510385947237, lng: 14.461799767540906 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "jidelna", nazev: "Hlavní jídelna", patro: "1" }], foto: null },
    "b-secondary-lekarna": { cislo: "Lékárna", nazev: "Vedlejší lékárna", adresa: "Budínova 67/2, Prague", gps: { lat: 50.11578299163188, lng: 14.466415785543576 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "lekarna", nazev: "Vedlejší lékárna", patro: "1" }], foto: null }
};