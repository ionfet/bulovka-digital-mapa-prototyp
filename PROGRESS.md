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
6. **Responzivní mapa** - mapa se automaticky přizpůsobuje při otevření/zavření panelu:
   - Panel zavřený: mapa zabírá 100% šířky
   - Panel otevřený: mapa zabírá zbývajících 66.666% (2/3 šířky)
   - svg-pan-zoom se automaticky přepočítá a vycentruje
7. **Улучшен скролл в панели деталей здания** (2 октября 2025):
   - Кнопка "Назад" вынесена в фиксированный header той же высоты (72px), что и панель поиска
   - Теперь скролится вся панель деталей (фото, информация, табы, отделения, POI)
   - Табы сделаны "липкими" (`sticky`) и остаются видимыми при скролле
   - Убран overflow только с внутренних блоков табов
   - Значительно улучшен UX на мобильных устройствах
8. **Встроенная кнопка закрытия панели** (2 октября 2025):
   - Убрана плавающая кнопка меню, которая висела над картой
   - Кнопка закрытия (крестик в кружочке) теперь встроена в header левой панели
   - В панели поиска: крестик справа от поля поиска
   - В панели деталей: крестик справа от кнопки "Назад"
   - Кнопка открытия панели появляется на карте когда панель закрыта
   - **Панель по умолчанию закрыта** при загрузке страницы - сначала видна только карта
   - Улучшен визуальный flow - все элементы управления на своих местах
9. **Плавное изменение размера карты** (2 октября 2025):
   - Добавлен CSS transition для контейнера карты (`transition: all 0.3s ease`)
   - Реализована функция `smoothResizeMap()` с использованием `requestAnimationFrame`
   - Карта плавно пересчитывается во время анимации открытия/закрытия панели (60fps)
   - Вместо одноразового пересчета через setTimeout, карта обновляется каждый кадр в течение 300ms
   - Устранен резкий "прыжок" карты - теперь всё плавно и визуально приятно
10. **Алфавитное разделение списка отделений** (2 октября 2025):
   - Список отделений теперь сгруппирован по первой букве названия
   - Каждая секция начинается с зеленого квадратика с буквой (36x36px)
   - Буквы отсортированы по алфавиту
   - Квадратики имеют зеленый цвет (#16a34a) с тенью для визуального акцента
   - Улучшена навигация по длинному списку - легко найти нужное отделение
11. **Автоматический зум на выбранное здание** (2 октября 2025):
   - При клике на отделение в списке карта автоматически зумирует на соответствующее здание
   - Здание центрируется в видимой области карты (2/3 экрана справа от панели)
   - Плавная анимация зума и панорамирования (1000ms с ease-in-out cubic)
   - Автоматический расчет оптимального масштаба с padding вокруг здания
   - Учитывается ширина открытой панели - центр смещается вправо (настраивается)
   - Работает как при открытой, так и при закрытой панели
   - Настройки скорости и центрирования вынесены в комментарии в коде
12. **Разделение кода на модули** (3 октября 2025):
   - JavaScript код вынесен в отдельный файл `app.js`
   - Улучшена структура проекта и читаемость кода
   - Упрощено обслуживание и отладка
   - Файл `index.html` уменьшен с 1950 до 1416 строк
13. **Обновление списка отделений** (3 октября 2025):
   - Список отделений полностью обновлен в соответствии с актуальным `buildings.md`
   - Добавлено 62 отделения с точными чешскими и английскими названиями
   - Обновлены названия: вместо "Klinika anesteziologie..." теперь "Anesteziologie a intenzivní medicína"
   - Добавлены новые отделения: "Cizinecké oddělení", "Národní jednotka dohledu na TBC", "Protialkoholní záchytná stanice", "Protonové centrum", "Gastroenterologické oddělení", "Ústav gastrointestinální onkologie"
   - Разделены "Lékárna pro veřejnost I" и "Lékárna pro veřejnost II"
   - Разделены "Magnetická rezonance MRI 1" и "MRI 2"
   - Все английские переводы взяты из официального списка buildings.md
14. **Обновление SVG карты** (7 октября 2025):
   - Заменена старая карта (mapa.svg) на новую версию (Mapa-digi-v3.svg)
   - Новый размер карты: `viewBox="0 0 1650 840"` (старый был `viewBox="0 0 1516.535 715.983"`)
   - Сохранен атрибут `id="mapa-svg"` для работы всего функционала
   - Все ID зданий (b-01, b-02, ... b-19) остались без изменений
   - Весь функционал приложения работает с новой картой
   - Создана резервная копия старой версии: `index.html.old-map-backup`
15. **Изменение цвета фона** (7 октября 2025):
   - Изменен цвет фона всего сайта на #f1f8f6 (светло-мятный оттенок)
   - Обновлен background для body и #map-container
   - Боковая панель осталась белой для контраста
16. **Группировка отделений и POI по этажам** (7 октября 2025):
   - **Tab "Oddělení"**: Убрана повторяющаяся информация об этаже у каждого отделения (был серый чип "1. patro" над каждым названием)
   - **Tab "POI"**: Убрана повторяющаяся информация об этаже под каждым POI объектом
   - Отделения и POI теперь сгруппированы по этажам - сначала показывается этаж, под ним список всех элементов
   - Дизайн секций этажей: серый badge с названием этажа, закругленный (border-radius: 40px)
   - Улучшена читаемость и визуальная иерархия - проще понять структуру здания
   - Код подготовлен для будущих реальных данных об этажах (пока используется mockup "1. patro")
   - Удален неиспользуемый CSS класс `.floor-chip`
   - Добавлены новые CSS классы: `.floor-section`, `.floor-header`, `.floor-badge`
   - Стиль `.floor-badge`: фон #dfdfdf (серый), padding 8x16px, полностью закругленные края (40px)
17. **Кастомные SVG иконки для POI** (7 октября 2025):
   - Добавлена функция `getPoiIcon(type)` для управления иконками POI
   - Интегрированы кастомные SVG иконки:
     * Зеленая иконка аптеки (круг с белым крестом) для типа `lekarna`
     * Темная иконка банкомата (круг с надписью "ATM") для типа `atm`
   - Размер иконок: 40x40px (оптимально для списка POI)
   - Fallback иконка для неизвестных типов POI (серый круг с "?")
   - Легко добавлять новые иконки - достаточно добавить SVG в объект `icons` внутри функции
   - Улучшен визуальный дизайн - профессиональные цветные иконки вместо простых символов
18. **Детальная информация о здании 3 по этажам** (7 октября 2025):
   - Добавлена полная структура здания 3 с разбивкой по этажам (от -1 до 5)
   - Обновлены основные отделения с указанием этажей:
     * Урология (-1 этаж)
     * Психология (-1 этаж)
     * Оčni (1 этаж)
     * ORL (2 этаж)
     * Urologické oddělení (3 этаж)
     * Neurologie (4 этаж)
   - Добавлено 24 дополнительных служб и подразделений:
     * -1 этаж: Ambulance urologie, Dětská ORL, Logopedie, Nemocniční kaple
     * 1 этаж: Pohotovost oční, Lůžkové oddělení oční, Všeobecná ambulance oční, Speciální poradny
     * 2 этаж: Pohotovost ORL, Foniatrie, Lůžkové oddělení ORL, Speciální poradny ORL
     * 3 этаж: Pohotovost urologie, Lůžková část, Centrum vysoce specializované onkologické péče
     * 4 этаж: Pohotovost neurologie, Chronická ambulance, Neurofyziologické laboratoře, Duplexní sonografie
     * 5 этаж: Oddělení IT, Smíšené operační sály, Oddělení pojišťoven, Endoskopický sál
   - Все записи с чешскими и английскими названиями
   - При открытии детали здания 3 теперь отображается полная информация по всем этажам
   - Группировка работает автоматически - отделения сгруппированы по этажам с отдельными заголовками

## 🐛 Známé problémy / Limity MVP
1. **GPS souřadnice** - všechny budovy mají stejné mockup GPS (50.1109, 14.4618)
2. **MHD data** - zastávka a linky jsou mockup (Bulovka, 150m, linky 136/140/201)
3. **Patra oddělení** - pouze budova 3 má detailní informace o službách na každém patře. Pro ostatní budovy zatím mockup "1. patro"
4. **Fotky budov** - zobrazuje se placeholder (šedý obdélník)
5. **Některá pracoviště chybí** - 2 oddělení z buildings.md ("Očkovací centrum", "Paliativní péče") nemají přiřazeno číslo budovy a nejsou v aplikaci
6. **Některá oddělení jsou ve více budovách** - "Rehabilitace" je v budovách 9, 1, 13, 7 - v aplikaci je uvedena jen v budově 9

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
- ✅ Automatický zoom na vybrané budovy s centrováním
- ✅ Plynulé animace zoomu a panování mapy

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

### Скролл в панели деталей (октябрь 2025):
**ПРОБЛЕМА**: Раньше скролился только внутренний список отделений/POI, что было неудобно на мобильных
**РЕШЕНИЕ**:
- Создан двухуровневый layout:
  1. **Фиксированный header** с кнопкой "Назад" (высота 72px = как панель поиска)
  2. **Скроллируемый контент** со всем остальным (заголовок, фото, транспорт, табы, списки)
- Табы сделаны "липкими" (`sticky top-0`) - остаются видимыми при прокрутке
- Убран `overflow-y-auto` с внутренних div'ов табов - теперь всё скролится единым потоком
- Переход между списком рабочих мест и деталями теперь плавный (одинаковая высота header'ов)
- **Критические CSS-правила для работы скролла**:
  - `#building-detail`: `flex: 1`, `overflow: hidden`, `min-height: 0` (важно для flexbox!)
  - Header с `flex-shrink: 0` чтобы не сжимался
  - Скроллируемый блок: `flex: 1`, `overflow-y: auto`, `min-height: 0`
  - Правило `min-height: 0` критично - без него flex-элемент не ограничивается по высоте!

### Встроенные кнопки управления панелью (октябрь 2025):
**ПРОБЛЕМА**: Кнопка меню висела отдельно над картой, что выглядело неопрятно
**РЕШЕНИЕ**:
- **Убрана плавающая кнопка** `#menu-button` с текстом
- **Кнопка закрытия встроена в header**:
  - В панели поиска: справа от поля поиска
  - В панели деталей: справа от кнопки "Назад" (`justify-between`)
  - Дизайн: крестик в круглой кнопке 40x40px с hover-эффектом
- **Кнопка открытия** `#open-panel-button`:
  - Текстовая кнопка "☰ Seznam pracovišť" как раньше
  - Показывается только когда панель закрыта (`hidden` класс)
  - Позиция: top-left угол карты (fixed)
- **JavaScript**:
  - 3 обработчика: `open-panel-button`, `close-panel-button`, `close-detail-button`
  - При открытии/закрытии панели вызывается `smoothResizeMap()` для плавного пересчета карты
  - Панель закрыта по умолчанию (без класса `is-open` при загрузке)

### Плавная анимация карты (октябрь 2025):
**ПРОБЛЕМА**: Карта резко "прыгала" при открытии/закрытии панели, выглядело топорно
**РЕШЕНИЕ**:
- **CSS transition** для `#map-container`:
  ```css
  transition: all 0.3s ease;
  ```
- **Функция `smoothResizeMap()`**:
  - Использует `requestAnimationFrame` для плавной анимации
  - Обновляет размер карты каждый кадр в течение 300ms
  - Синхронизирована с CSS transition панели (300ms)
  - Вызывает `resize()`, `fit()` и `center()` на каждом кадре
- **Отложенное переключение содержимого при клике на здание**:
  - Если панель была закрыта, сначала открывается панель с анимацией
  - Переключение с списка на детали здания откладывается на 300ms (после анимации)
  - Если панель уже открыта, переключение происходит сразу
  - Устранен резкий скачок при клике на здание на карте
- **Результат**: Карта плавно масштабируется и центрируется во время анимации панели
- Применяется во всех сценариях: открытие панели, закрытие панели, клик на здание на карте

### Алфавитное разделение списка (октябрь 2025):
**ПРОБЛЕМА**: В длинном списке отделений сложно найти нужное
**РЕШЕНИЕ**:
- **Группировка по первой букве**:
  ```javascript
  const firstLetter = normalize(item.nazev.charAt(0)).toUpperCase();
  ```
- **Алфавитные заголовки**:
  - Зеленый квадратик (36x36px) с буквой перед каждой группой
  - CSS: `background: #16a34a`, закругленные углы (6px), тень
  - Отступы между секциями для визуального разделения
- **Сортировка**: Буквы отсортированы по алфавиту
- **Результат**: Легко найти отделение, особенно на мобильных устройствах

### Автоматический зум на здание (октябрь 2025):
**ПРОБЛЕМА**: После выбора отделения нужно было вручную искать его на карте
**РЕШЕНИЕ**:
- **Функция `zoomToBuilding(budovaId)`**:
  - Получает координаты здания через `getBBox()` из SVG (всегда в SVG-координатах)
  - Использует `getSizes()` для получения реальных размеров viewport
  - Вычисляет оптимальный zoom с учетом размера здания (padding 1.5x)
  - **Плавная анимация без дерганья**:
    - На каждом кадре анимации пересчитывается правильный pan для текущего zoom
    - Формула: `panX = viewportCenterX - buildingCenterX * currentRealZoom`
    - Здание остается строго в центре viewport на протяжении всей анимации
    - Только zoom меняется плавно (интерполируется с ease-in-out cubic)
  - Длительность анимации: 1000ms (настраивается в строке 1832)
  - Настройки в коде с комментариями для легкой кастомизации
- **Центрирование**:
  - Десктоп с открытой панелью → центр смещен на 55% ширины карты (настраивается в строке 1825)
  - Остальные случаи → точно по центру контейнера карты
  - Здание всегда в оптимальном месте видимой области
- **Интеграция**:
  - Вызывается в `showBuildingDetail()` после отображения информации
  - Задержка 50ms для корректной подсветки здания
  - Работает синхронно с анимацией открытия панели
- **Результат**: Плавная, красивая анимация зума прямо на выбранное здание

### Кастомные SVG иконки для POI (октябрь 2025):
**ПРОБЛЕМА**: Использовались простые иконки (SVG path или текст "ATM"), не было единой системы
**РЕШЕНИЕ**:
- **Функция `getPoiIcon(type)`**:
  ```javascript
  function getPoiIcon(type) {
    const icons = {
      'lekarna': `<svg width="40" height="40" viewBox="0 0 80 80" ...>...</svg>`,
      'atm': `<svg width="40" height="40" viewBox="0 0 81 80" ...>...</svg>`,
      'default': `<div class="w-10 h-10 ...">?</div>`
    };
    return icons[type] || icons['default'];
  }
  ```
- **Кастомные иконки**:
  - Лекарня (lekarna): зеленый круг (#029447) с белым крестом, 40x40px
  - Банкомат (atm): темный круг (#001829) с белой надписью "ATM", 40x40px
  - Default fallback: серый круг с знаком вопроса
- **Как добавить новую иконку**:
  1. Получите SVG код вашей иконки
  2. Измените размер на 40x40px в атрибутах `width="40" height="40"`
  3. Добавьте в объект `icons` с нужным ключом (например, `'kavarna': '...'`)
  4. Используйте этот ключ в поле `typ` объекта POI
- **Преимущества**:
  - Централизованное управление иконками
  - Легко добавлять новые типы POI
  - Единообразный размер и стиль
  - SVG масштабируется без потери качества
  - Fallback для неизвестных типов

### Группировка отделений и POI по этажам (октябрь 2025):
**ПРОБЛЕМА**: Информация об этаже повторялась у каждого отделения и POI, что выглядело избыточно
**РЕШЕНИЕ**:
- **Группировка по этажам (Oddělení)**:
  ```javascript
  const groupedByFloor = {};
  oddeleniList.forEach(odd => {
    const floor = odd.patro || '1. patro';
    if (!groupedByFloor[floor]) groupedByFloor[floor] = [];
    groupedByFloor[floor].push(odd);
  });
  ```
- **Группировка по этажам (POI)**:
  ```javascript
  const poiGroupedByFloor = {};
  buildingData.poi.forEach(poi => {
    const floor = `${poi.patro}. patro`;
    if (!poiGroupedByFloor[floor]) poiGroupedByFloor[floor] = [];
    poiGroupedByFloor[floor].push(poi);
  });
  ```
- **Сортировка этажей по номеру**:
  ```javascript
  const sortedFloors = Object.keys(groupedByFloor).sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });
  ```
- **Визуальный дизайн**:
  - Серый badge с названием этажа (`.floor-badge`)
  - Padding 8x16px, полностью закругленные края (border-radius: 40px), тень для акцента
  - Цвет: `#dfdfdf` (светло-серый, нейтральный)
  - Убрана цветная информация "X. patro" под каждым элементом - теперь только в заголовке секции
- **Структура HTML**:
  - `.floor-section` - контейнер для всей секции этажа
  - `.floor-header` - заголовок с badge этажа (padding-right: 0px)
  - Под заголовком - список отделений/POI без дублирования информации об этаже
- **Преимущества**:
  - Улучшена визуальная иерархия - сразу видно структуру здания
  - Уменьшено визуальное "захламление" интерфейса
  - Единообразный дизайн в обоих табах (Oddělení и POI)
  - Код готов к реальным данным об этажах (когда появятся)
  - Легко масштабируется при добавлении зданий с множеством этажей

### Детальная структура здания 3 по этажам (октябрь 2025):
**КАК ДОБАВЛЯТЬ ИНФОРМАЦИЮ О ЭТАЖАХ**:
1. В массиве `pracoviste` добавьте поле `patro` к записям отделений:
   ```javascript
   { nazev: "Урология", budova: "3", patro: "-1" }
   ```
2. Поле `patro` может быть:
   - Отрицательное число для подземных этажей: `"-1"`, `"-2"`
   - Положительное число для надземных этажей: `"1"`, `"2"`, `"3"`, `"4"`, `"5"`
   - Если поле отсутствует, используется fallback `"1. patro"`
3. Система автоматически:
   - Группирует отделения по этажам
   - Сортирует этажи по номеру (от меньшего к большему: -1, 0, 1, 2, 3...)
   - Отображает badge с названием этажа перед группой
4. Пример для здания 3:
   - -1 этаж: Урология, Психология, Dětská ORL, Logopedie, Kaple
   - 1 этаж: Oční oddělení, Pohotovost oční, Lůžkové oddělení
   - 2 этаж: ORL, Pohotovost ORL, Foniatrie
   - 3 этаж: Urologické oddělení, Centrum onkologické péče
   - 4 этаж: Neurologie, Neurofyziologické laboratoře
   - 5 этаж: IT oddělení, Operační sály, Endoskopický sál

## 🗂️ Struktura souborů
- ✅ `index.html` - **HLAVNÍ SOUBOR** - HTML struktura + inline SVG mapa
- ✅ `app.js` - **JAVASCRIPT** - Veškerá logika aplikace (data, funkce, události)
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
   - 🆕 **Mapa se automaticky přiblíží a vycentruje vybranou budovu!**
5. **Navigovat**: Klik na zelené tlačítko "Navigovat k budově" → otevře Google Maps
6. **Prohlížet oddělení/POI**: Přepínání mezi taby "Oddělení" a "POI"
7. **Pan/Zoom mapy**: Tažení myši, kolečko myši, nebo ovládací prvky svg-pan-zoom

