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

// Синонимы для поиска
const synonyma = {
    "plicní": "pneumologie",
    "plicni": "pneumologie",
    "mr": "magnetická rezonance",
    "mri": "magnetická rezonance",
    "ct": "computed tomography",
    "rtg": "rentgen",
    "rentgen": "radiodiagnostické",
    "xray": "rentgen",
    "gyn": "gynekologicko",
    "deti": "pediatrické",
    "detske": "pediatrické"
};

// Mockup данные о зданиях
const budovyData = {
    "b-01": { cislo: "1", nazev: "Budova 1", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "lekarna", nazev: "Lékárna", patro: "1" }] },
    "b-02": { cislo: "2", nazev: "Budova 2", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-03": { cislo: "3", nazev: "Budova 3", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "kaple", nazev: "Kaple", patro: "-1" }] },
    "b-04": { cislo: "4", nazev: "Budova 4", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-05": { cislo: "5", nazev: "Budova 5", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-06": { cislo: "6", nazev: "Budova 6", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "lekarna", nazev: "Lékárna", patro: "2" }] },
    "b-07": { cislo: "7", nazev: "Budova 7", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-08": { cislo: "8", nazev: "Budova 8", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-09": { cislo: "9", nazev: "Budova 9", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-10": { cislo: "10", nazev: "Budova 10", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-11": { cislo: "11", nazev: "Budova 11", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-12": { cislo: "12", nazev: "Budova 12", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-13": { cislo: "13", nazev: "Budova 13", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "lekarna", nazev: "Lékárna", patro: "2" }, { typ: "atm", nazev: "Bankomat", patro: "1" }] },
    "b-14": { cislo: "14", nazev: "Budova 14", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-15": { cislo: "15", nazev: "Budova 15", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-16": { cislo: "16", nazev: "Budova 16", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-17": { cislo: "17", nazev: "Budova 17", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-18": { cislo: "18", nazev: "Budova 18", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-19": { cislo: "19", nazev: "Budova 19", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-20": { cislo: "20", nazev: "Budova 20", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-23": { cislo: "23", nazev: "Budova 23", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-26": { cislo: "26", nazev: "Budova 26", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-40": { cislo: "40", nazev: "Budova 40", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-42": { cislo: "42", nazev: "Budova 42", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-43": { cislo: "43", nazev: "Budova 43", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
    "b-jidelna": { cislo: "Jídelna", nazev: "Jídelna", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "jidelna", nazev: "Hlavní jídelna", patro: "1" }] },
    "b-secondary-lekarna": { cislo: "Lékárna", nazev: "Vedlejší lékárna", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [{ typ: "lekarna", nazev: "Vedlejší lékárna", patro: "1" }] }
};

// ===== ФУНКЦИИ =====

// Получение иконки POI по типу
function getPoiIcon(type) {
    const icons = {
        'lekarna': `<svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.9997 80C34.346 80 29.1161 79.0107 24.3105 76.8905C19.5049 74.9117 15.2646 71.9435 11.5897 68.41C7.91477 64.7351 5.08792 60.4948 3.10912 55.6892C1.13033 50.8835 0 45.6537 0 40C0 34.3463 0.988983 29.1165 3.10912 24.3108C5.08792 19.5052 8.05611 15.2649 11.5897 11.59C15.2646 7.91511 19.5049 5.08826 24.3105 3.10947C29.1161 1.13067 34.346 0 39.9997 0C45.6534 0 50.8832 0.989328 55.6888 3.10947C60.4945 5.08826 64.7347 8.05645 68.4096 11.59C72.0845 15.2649 74.9114 19.5052 76.8902 24.3108C78.869 29.1165 80 34.3463 80 40C80 45.6537 79.0103 50.8835 76.8902 55.6892C74.9114 60.4948 71.9432 64.8764 68.4096 68.41C64.7347 72.0849 60.4945 74.9117 55.6888 76.8905C50.8832 78.8693 45.6534 80 39.9997 80Z" fill="#029447"/>
            <path d="M32.807 63.9999H47.193V47.1926H64V32.8067H47.193V15.9999H32.807V32.8067H16V47.1926H32.807V63.9999Z" fill="white"/>
        </svg>`,
        
        'atm': `<svg width="40" height="40" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.7979 79.9998C62.8892 79.9998 80.7979 62.0914 80.7979 40C80.7979 17.9086 62.8892 0 40.7979 0C18.7065 0 0.797852 17.9086 0.797852 40C0.797852 62.0914 18.7065 79.9998 40.7979 79.9998Z" fill="#001829"/>
            <path d="M10.833 48.3395L17.9001 29.541H22.5645L29.6316 48.3395H25.5325L21.7163 37.3149C21.575 36.7495 21.2924 36.184 21.1511 35.6186C21.0097 35.0533 20.8682 34.4879 20.5855 34.0639C20.4442 33.4985 20.3031 33.0745 20.1618 32.5092C20.0204 32.9332 19.879 33.4985 19.7377 34.0639C19.5963 34.6293 19.4548 35.1948 19.1721 35.7601C19.0307 36.3255 18.8895 36.7495 18.6068 37.3149L14.7907 48.3395H10.833ZM14.9318 44.0992V41.131H25.2499V44.0992H14.9318Z" fill="white"/>
            <path d="M34.8616 48.3395V32.6505H29.0664V29.541H44.7556V32.6505H38.9604V48.3395H34.8616Z" fill="white"/>
            <path d="M48.2891 48.3395V29.541H54.0842L57.4763 39.1522C57.759 39.8589 58.0418 40.7071 58.3245 41.5551C58.6072 42.5445 58.8899 43.2512 59.0312 43.9579C59.0312 43.5339 59.3136 42.9685 59.455 42.4032C59.5963 41.8378 59.7379 41.2725 60.0206 40.7071C60.3032 40.1417 60.4445 39.5762 60.5858 39.1522L64.1194 29.6823H69.9145V48.4809H66.0984V33.4985C66.0984 33.7812 65.9567 34.2053 65.8154 34.6293C65.8154 35.0533 65.533 35.4774 65.3916 35.9014C65.3916 36.3255 65.1089 36.7494 64.9675 37.0321L60.7273 48.3395H57.3348L53.236 37.0321C53.236 36.7494 52.9533 36.3255 52.812 35.9014C52.6706 35.4774 52.5292 35.0534 52.3879 34.488C52.3879 34.064 52.2466 33.6399 52.1052 33.3572V48.3395H48.2891Z" fill="white"/>
        </svg>`,

        'kaple': `<svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.1594 80.002C62.2508 80.002 80.1592 62.0929 80.1592 40.001C80.1592 17.9091 62.2508 0 40.1594 0C18.0679 0 0.15918 17.9091 0.15918 40.001C0.15918 62.0929 18.0679 80.002 40.1594 80.002Z" fill="#001829"/>
        <path d="M42.8944 39.2533V27.2036H50.9649V21.7151H42.8944V13.6445H37.406V21.7151H29.3351V27.2036H37.406V39.2533C31.1697 40.5232 26.4713 46.0542 26.4713 52.6575C26.4713 60.1921 32.6087 66.3297 40.1431 66.3297C47.6775 66.3297 53.815 60.1921 53.815 52.6575C53.815 46.0542 49.1166 40.5373 42.8803 39.2533H42.8944ZM40.1573 63.4657C34.189 63.4657 29.3493 58.6118 29.3493 52.6575C29.3493 46.7032 34.2031 41.8496 40.1573 41.8496C46.1114 41.8496 50.9649 46.7032 50.9649 52.6575C50.9649 58.6118 46.1114 63.4657 40.1573 63.4657Z" fill="white"/>
        </svg>`,
        
        // Fallback для неизвестных типов
        'default': `<div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">?</div>`
    };
    
    return icons[type] || icons['default'];
}

// Нормализация текста (удаление диакритики)
function normalize(text) {
    return text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

// Поиск с синонимами
function search(query) {
    if (!query) return pracoviste;
    
    const normalized = normalize(query);
    
    return pracoviste.filter(p => {
        const nazevNorm = normalize(p.nazev);
        const nazevENNorm = normalize(p.nazevEN);
        
        // Прямой поиск
        if (nazevNorm.includes(normalized) || nazevENNorm.includes(normalized)) {
            return true;
        }
        
        // Поиск по синонимам
        for (const [key, value] of Object.entries(synonyma)) {
            if (normalize(key).includes(normalized)) {
                if (nazevNorm.includes(normalize(value)) || nazevENNorm.includes(normalize(value))) {
                    return true;
                }
            }
        }
        
        return false;
    });
}

// Отрисовка списка рабочих мест с алфавитным разделением
function renderWorkplaceList(items) {
    const list = document.getElementById('workplace-list');
    list.innerHTML = '';
    
    // Группировка по первой букве
    const grouped = {};
    items.forEach(item => {
        const firstLetter = normalize(item.nazev.charAt(0)).toUpperCase();
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(item);
    });
    
    // Сортировка букв по алфавиту
    const sortedLetters = Object.keys(grouped).sort();
    
    // Отрисовка по группам
    sortedLetters.forEach(letter => {
        // Квадратик с буквой
        const letterHeader = document.createElement('div');
        letterHeader.className = 'alphabet-header';
        letterHeader.innerHTML = `
            <div class="alphabet-badge">${letter}</div>
        `;
        list.appendChild(letterHeader);
        
        // Элементы группы
        grouped[letter].forEach(item => {
            const budovaId = `b-${item.budova.padStart(2, '0')}`;
            const div = document.createElement('div');
            div.className = 'workplace-item';
            div.innerHTML = `
                <div class="flex-1">
                    <div class="font-semibold text-gray-900">${item.nazev}</div>
                    <div class="text-sm text-gray-500">${item.nazevEN}</div>
                </div>
                <div class="workplace-badge">${item.budova}</div>
            `;
            
            div.addEventListener('click', () => {
                showBuildingDetail(budovaId);
            });
            
            div.addEventListener('mouseenter', () => {
                highlightBudova(budovaId);
            });
            
            div.addEventListener('mouseleave', () => {
                clearHighlight();
            });
            
            list.appendChild(div);
        });
    });
}

// Zvýraznění budovy - JEN OBRYS (path/rect element)
function highlightBudova(budovaId) {
    clearHighlight();
    
    const svg = document.getElementById('mapa-svg');
    if (!svg) return;
    
    const budova = svg.querySelector(`#${budovaId}`);
    if (budova) {
        // Najdi path nebo rect element (obrys budovy)
        const outline = budova.querySelector('path, rect');
        if (outline) {
            outline.classList.add('is-highlighted');
        } else {
            // Pokud je to přímo path/rect element
            budova.classList.add('is-highlighted');
        }
    }
    
    // Zvýraznění labelu
    const labelId = `lbl-${budovaId.replace('b-', 'b')}`;
    const label = svg.querySelector(`#${labelId}`);
    if (label) {
        label.classList.add('is-highlighted');
    }
}

// Очистка подсветки
function clearHighlight() {
    const svg = document.getElementById('mapa-svg');
    if (!svg) return;
    
    svg.querySelectorAll('.is-highlighted').forEach(el => {
        el.classList.remove('is-highlighted');
    });
}

// Zobrazit detail budovy
function showBuildingDetail(budovaId) {
    const buildingData = budovyData[budovaId];
    if (!buildingData) return;
    
    // OTEVŘI PANEL, pokud není otevřený
    const panel = document.getElementById('panel');
    const openButton = document.getElementById('open-panel-button');
    const wasClosed = !panel.classList.contains('is-open');
    
    // Функция для переключения содержимого панели
    const switchContent = () => {
        // Skryj seznam pracovišť a zobraz detail budovy
        document.getElementById('workplace-list').style.display = 'none';
        document.querySelector('#panel > div:first-child').style.display = 'none';
        document.getElementById('building-detail').classList.remove('hidden');
        
        document.getElementById('building-title').textContent = buildingData.nazev;
        document.getElementById('building-address').textContent = buildingData.adresa;
        document.getElementById('building-transport').textContent = `Linky: ${buildingData.mhd.linky.join(', ')}`;
        
        // Отделения в здании
        const oddeleniContainer = document.getElementById('tab-oddeleni');
        const oddeleniList = pracoviste.filter(p => p.budova === buildingData.cislo);
        
        // Группировка по этажам
        const groupedByFloor = {};
        oddeleniList.forEach(odd => {
            // Форматируем этаж: "-1" -> "-1. patro", "1" -> "1. patro", fallback -> "1. patro"
            const floorNum = odd.patro || '1';
            const floor = `${floorNum}. patro`;
            if (!groupedByFloor[floor]) {
                groupedByFloor[floor] = [];
            }
            groupedByFloor[floor].push(odd);
        });
        
        // Сортировка этажей (-1, 0, 1, 2, 3...)
        const sortedFloors = Object.keys(groupedByFloor).sort((a, b) => {
            const numA = parseInt(a);
            const numB = parseInt(b);
            return numA - numB;
        });
        
        // Отрисовка по этажам
        oddeleniContainer.innerHTML = sortedFloors.map(floor => `
            <div class="floor-section">
                <div class="floor-header">
                    <div class="floor-badge">${floor}</div>
                </div>
                ${groupedByFloor[floor].map(odd => `
                    <div class="flex items-center py-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                        <div class="flex-1">
                            <div class="font-semibold">${odd.nazev}</div>
                        </div>
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                `).join('')}
            </div>
        `).join('');
        
        // POI
        const poiContainer = document.getElementById('tab-poi');
        
        // Группировка по этажам
        const poiGroupedByFloor = {};
        buildingData.poi.forEach(poi => {
            const floor = `${poi.patro}. patro`;
            if (!poiGroupedByFloor[floor]) {
                poiGroupedByFloor[floor] = [];
            }
            poiGroupedByFloor[floor].push(poi);
        });
        
        // Сортировка этажей (1, 2, 3...)
        const poiSortedFloors = Object.keys(poiGroupedByFloor).sort((a, b) => {
            const numA = parseInt(a);
            const numB = parseInt(b);
            return numA - numB;
        });
        
        // Отрисовка по этажам
        poiContainer.innerHTML = poiSortedFloors.map(floor => `
            <div class="floor-section">
                <div class="floor-header">
                    <div class="floor-badge">${floor}</div>
                </div>
                ${poiGroupedByFloor[floor].map(poi => `
                    <div class="flex items-center py-3 border-b border-gray-200">
                        <div class="w-10 h-10 mr-3 flex items-center justify-center">
                            ${getPoiIcon(poi.typ)}
                        </div>
                        <div class="flex-1">
                            <div class="font-semibold">${poi.nazev}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');
        
        // Навигация
        document.getElementById('navigate-button').onclick = () => {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${buildingData.gps.lat},${buildingData.gps.lng}`;
            window.open(url, '_blank');
        };
        
        highlightBudova(budovaId);
        
        // ЗУМИРОВАТЬ на здание с небольшой задержкой, чтобы подсветка успела примениться
        setTimeout(() => {
            zoomToBuilding(budovaId);
        }, 50);
    };
    
    // Если панель была закрыта, ждем окончания анимации перед переключением содержимого
    if (wasClosed) {
        panel.classList.add('is-open');
        openButton.classList.add('hidden');
        smoothResizeMap();
        // Ждем окончания анимации (300ms) перед переключением содержимого
        setTimeout(switchContent, 300);
    } else {
        // Если панель уже открыта, переключаем содержимое сразу
        switchContent();
    }
}

// Закрыть детали здания
function closeBuildingDetail() {
    document.getElementById('building-detail').classList.add('hidden');
    document.getElementById('workplace-list').style.display = 'block';
    document.querySelector('#panel > div:first-child').style.display = 'block';
    clearHighlight();
    
    // Вернуть карту в начальное состояние (плавно)
    smoothResizeMap({ preserveView: false });
}

// ===== ИНИЦИАЛИЗАЦИЯ =====

let panZoomInstance = null;

// Функция для плавного изменения размера карты
function smoothResizeMap(options = {}) {
    if (!panZoomInstance) return;
    
    const { preserveView = true } = options;
    let startTime = null;
    const duration = 300; // Длительность анимации в мс
    
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        
        // Обновляем размер карты
        panZoomInstance.resize();
        panZoomInstance.updateBBox();

        if (!preserveView) {
            panZoomInstance.fit();
            panZoomInstance.center();
        }
        
        // Продолжаем анимацию, пока не истечет время
        if (elapsed < duration) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Функция для зума на конкретное здание с корректным центрированием
function zoomToBuilding(budovaId) {
    if (!panZoomInstance) return;

    const svg = document.getElementById('mapa-svg');
    if (!svg) return;

    const budova = svg.querySelector(`#${budovaId}`);
    if (!budova) return;

    // Bounding box здания в координатах viewBox
    const bbox = budova.getBBox();
    const buildingCenterX = bbox.x + bbox.width / 2;
    const buildingCenterY = bbox.y + bbox.height / 2;

    const sizes = panZoomInstance.getSizes();
    const currentZoom = panZoomInstance.getZoom();
    const currentRealZoom = sizes.realZoom; // px на единицу viewBox при текущем zoom
    const baseRealZoom = currentRealZoom / currentZoom; // px на единицу при zoom = 1

    // Фактические размеры контейнера карты на экране (учитывают открытую панель)
    const mapContainer = document.getElementById('map-container');
    const { width: viewportWidth, height: viewportHeight } = mapContainer.getBoundingClientRect();

    // Желательный реальный zoom (px на единицу viewBox)
    const padding = 1.5; // 50% отступа вокруг здания
    const desiredRealZoomX = viewportWidth / (bbox.width * padding);
    const desiredRealZoomY = viewportHeight / (bbox.height * padding);
    const desiredRealZoom = Math.min(desiredRealZoomX, desiredRealZoomY);

    // Конвертируем в zoom svg-pan-zoom и ограничиваем диапазон
    const minZoom = panZoomInstance.getMinZoom ? panZoomInstance.getMinZoom() : 0.5;
    const maxZoom = panZoomInstance.getMaxZoom ? panZoomInstance.getMaxZoom() : 8;
    const unclampedTargetZoom = desiredRealZoom / baseRealZoom;
    const targetZoom = Math.max(minZoom, Math.min(maxZoom, unclampedTargetZoom));

    const panel = document.getElementById('panel');
    const isPanelOpen = panel.classList.contains('is-open');
    
    // Центрируем здание в видимой части карты (легкий сдвиг вправо на десктопе при открытой панели)
    let viewportCenterX = viewportWidth / 2;
    if (isPanelOpen && window.innerWidth >= 1024) {
        // НАСТРОЙКА ЦЕНТРА: 0.5 = по центру, 0.6 = чуть правее, 0.55 = немного правее
        viewportCenterX = viewportWidth * 0.55;
    }
    const viewportCenterY = viewportHeight / 2;

    const startZoom = currentZoom;
    const startTime = Date.now();
    // НАСТРОЙКА СКОРОСТИ: в миллисекундах (600 = быстро, 1000 = медленно, 1500 = очень медленно)
    const duration = 1000;

    function step() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeInOutCubic
        const eased = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        // Интерполируем только zoom
        const currentAnimatedZoom = startZoom + (targetZoom - startZoom) * eased;
        
        // Пересчитываем правильный pan для текущего zoom
        // чтобы здание всегда было в центре viewport
        const currentRealZoom = baseRealZoom * currentAnimatedZoom;
        const correctPanX = viewportCenterX - buildingCenterX * currentRealZoom;
        const correctPanY = viewportCenterY - buildingCenterY * currentRealZoom;

        // Применяем zoom и правильный pan для этого zoom
        panZoomInstance.zoom(currentAnimatedZoom);
        panZoomInstance.pan({ x: correctPanX, y: correctPanY });

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
    // Отрисовка начального списка
    renderWorkplaceList(pracoviste);
    
    // Поиск
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const results = search(e.target.value);
        renderWorkplaceList(results);
    });
    
    // Кнопки открытия/закрытия панели
    const panel = document.getElementById('panel');
    const openButton = document.getElementById('open-panel-button');
    const closePanelButton = document.getElementById('close-panel-button');
    const closeDetailButton = document.getElementById('close-detail-button');
    
    // Открыть панель
    openButton.addEventListener('click', () => {
        panel.classList.add('is-open');
        openButton.classList.add('hidden');
        smoothResizeMap({ preserveView: false });
    });
    
    // Закрыть панель (из списка рабочих мест)
    closePanelButton.addEventListener('click', () => {
        panel.classList.remove('is-open');
        openButton.classList.remove('hidden');
        smoothResizeMap({ preserveView: false });
    });
    
    // Закрыть панель (из деталей здания)
    closeDetailButton.addEventListener('click', () => {
        panel.classList.remove('is-open');
        openButton.classList.remove('hidden');
        closeBuildingDetail();
        smoothResizeMap({ preserveView: false });
    });
    
    // Назад
    document.getElementById('back-button').addEventListener('click', closeBuildingDetail);
    
    // Табы
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            
            const tab = button.dataset.tab;
            document.getElementById('tab-oddeleni').classList.add('hidden');
            document.getElementById('tab-poi').classList.add('hidden');
            document.getElementById(`tab-${tab}`).classList.remove('hidden');
        });
    });
    
    // svg-pan-zoom инициализация (когда SVG загрузится)
    setTimeout(() => {
        const svg = document.getElementById('mapa-svg');
        if (svg && typeof svgPanZoom !== 'undefined') {
            panZoomInstance = svgPanZoom('#mapa-svg', {
                zoomEnabled: true,
                controlIconsEnabled: true,
                fit: true,
                center: true,
                minZoom: 0.5,
                maxZoom: 10
            });
            
            // Клик на здание
            svg.querySelectorAll('[id^="b-"]').forEach(budova => {
                budova.style.cursor = 'pointer';
                budova.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showBuildingDetail(budova.id);
                });
            });
        }
    }, 100);
});

