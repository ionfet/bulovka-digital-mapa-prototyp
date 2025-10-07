// ===== ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ =====

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
