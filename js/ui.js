// ===== UI ФУНКЦИИ (РЕНДЕРИНГ, ДЕТАЛИ ЗДАНИЙ) =====

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
        
        // Фото здания или placeholder (формат 3:2)
        const photoContainer = document.getElementById('building-photo');
        if (buildingData.foto) {
            // Есть фото - показываем картинку
            photoContainer.innerHTML = `
                <img src="${buildingData.foto}" 
                     alt="${buildingData.nazev}" 
                     class="w-full h-full object-cover"
                     style="aspect-ratio: 3/2;">
            `;
        } else {
            // Нет фото - показываем placeholder
            photoContainer.innerHTML = `
                <div class="w-full h-full flex items-center justify-center text-gray-500">
                    Foto budovy
                </div>
            `;
        }
        
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
        
        // Navigace
        const navigateButton = document.getElementById('navigate-button');
        navigateButton.onclick = () => {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${buildingData.gps.lat},${buildingData.gps.lng}`;
            window.open(url, '_blank');
        };

        // Navigovat k hlavnímu parkovišti (statický odkaz dle požadavku)
        const navigateMainParkingBtn = document.getElementById('navigate-main-parking-button');
        if (navigateMainParkingBtn) {
            navigateMainParkingBtn.onclick = () => {
                const url = 'https://maps.app.goo.gl/U87sfZzSznpMMQYz9';
                window.open(url, '_blank');
            };
        }
        
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
