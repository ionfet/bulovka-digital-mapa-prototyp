// ===== УПРАВЛЕНИЕ КАРТОЙ (PAN/ZOOM, ПОДСВЕТКА) =====

let panZoomInstance = null;

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
