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
    { nazev: "Intervenční radiologie", nazevEN: "Interventional Radiology", budova: "3" },
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
    { nazev: "Neurologie", nazevEN: "Neurology Department", budova: "3" },
    { nazev: "Nutriční terapeuti", nazevEN: "Nutritional Therapists", budova: "18" },
    { nazev: "Národní jednotka dohledu na TBC", nazevEN: "National Tuberculosis Surveillance Unit", budova: "20" },
    { nazev: "Následná péče – rehabilitační oddělení", nazevEN: "Follow-up Care – Rehabilitation Department", budova: "9" },
    { nazev: "ORL – ušní, nosní a krční", nazevEN: "Otorhinolaryngology", budova: "3" },
    { nazev: "Odběrové pracoviště", nazevEN: "Central Sampling Department", budova: "8" },
    { nazev: "Onkologie", nazevEN: "Oncology Center", budova: "15" },
    { nazev: "Ortopedie", nazevEN: "Orthopedic Clinic", budova: "13" },
    { nazev: "Oční", nazevEN: "Ophthalmology Department", budova: "3" },
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
    { nazev: "Psychologie", nazevEN: "Psychology", budova: "3" },
    { nazev: "Radiodiagnostické oddělení", nazevEN: "Radiodiagnostic Department", budova: "1" },
    { nazev: "Radiofyzika", nazevEN: "Radiophysics", budova: "16" },
    { nazev: "Rehabilitace", nazevEN: "Rehabilitation", budova: "9" },
    { nazev: "Rentgen (RTG)", nazevEN: "X-ray (RTG)", budova: "1" },
    { nazev: "Sociálně zdravotní oddělení", nazevEN: "Social and Health Department", budova: "9" },
    { nazev: "Sonografie", nazevEN: "Sonography", budova: "1" },
    { nazev: "Soudní lékařství", nazevEN: "Forensic Medicine", budova: "17" },
    { nazev: "Toxikologie", nazevEN: "Toxicology", budova: "17" },
    { nazev: "Urgentní příjem", nazevEN: "Emergency Department", budova: "13" },
    { nazev: "Urologie", nazevEN: "Urology Department", budova: "3" },
    { nazev: "Ústav gastrointestinální onkologie", nazevEN: "Institute of Gastrointestinal Oncology", budova: "10" },
    { nazev: "Virologie", nazevEN: "Virology", budova: "8" }
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
    "b-03": { cislo: "3", nazev: "Budova 3", adresa: "Budínova 67/2, Prague", gps: { lat: 50.1109, lng: 14.4618 }, mhd: { zastavka: "Bulovka", vzdalenost: "150 m", linky: ["136", "140", "201"] }, poi: [] },
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
                <div class="flex-1" style="margin-right: 20px;">
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
        
        oddeleniContainer.innerHTML = oddeleniList.map(odd => `
            <div class="flex items-center py-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                <div class="flex-1">
                    <div class="text-sm text-gray-500 mb-2">
                        <span class="floor-chip">1. patro</span>
                    </div>
                    <div class="font-semibold">${odd.nazev}</div>
                </div>
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        `).join('');
        
        // POI
        const poiContainer = document.getElementById('tab-poi');
        poiContainer.innerHTML = buildingData.poi.map(poi => `
            <div class="flex items-center py-3 border-b border-gray-200">
                <div class="w-10 h-10 mr-3 flex items-center justify-center">
                    ${poi.typ === 'lekarna' ? 
                        '<svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' : 
                        '<div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">ATM</div>'}
                </div>
                <div class="flex-1">
                    <div class="font-semibold">${poi.nazev}</div>
                    <div class="text-sm text-gray-500">${poi.patro}. patro</div>
                </div>
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

