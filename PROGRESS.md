# Bulovka Map – CONTEXT (Short, LLM‑ready)

> Компактный контекст для Coding LLM (Cursor/AI), охватывающий функционал и инварианты проекта. Код‑фрагменты полные, без троеточий. Язык интерфейса — CZ, код/комментарии — EN/RU по смыслу.

---

## 1) Статус / One‑liner

**Статус:** Готово (MVP завершён + рефакторинг на модули, 7 окт 2025).

**Что делает:** Single‑file веб‑приложение интерактивной карты nemocnice Bulovka: inline‑SVG карта с pan/zoom, список pracovišť, поиск (диакритика/синонимы), деталь budovy с Oddělení/POI, плавные анимации, авто‑zoom на выбор, навигация в Google Maps, адаптивный UI (desktop/mobile, bottom sheet), переменный шрифт для надписей на карте, поддержка фото зданий и кастомных иконок POI.

---

## 2) Tech stack / Files

* **HTML:** `index.html` (главная разметка + inline SVG `id="mapa-svg"`).
* **JS (модули):**
  * `js/data.js` — данные (pracoviste, budovyData, synonyma)
  * `js/utils.js` — утилиты (normalize, search, getPoiIcon)
  * `js/map-controls.js` — управление картой (pan/zoom, highlight, resize)
  * `js/ui.js` — UI функции (renderWorkplaceList, showBuildingDetail)
  * `js/app.js` — инициализация приложения (event handlers, DOMContentLoaded)
* **CSS:** `style.css` (layout панели/карты, хинты для flex/scroll, анимации, вариативный шрифт).
* **Assets:** `assets/font-b.ttf` (Variable font), `assets/photos/*` (опционально).
* **SVG карта:** заменена на `Mapa-digi-v3.svg` (inline), `viewBox="0 0 1650 840"`.

> Приложение запускается локально из файловой системы или через простой HTTP‑сервер.
> JavaScript разбит на модули для лучшей читаемости и не забивает контекст LLM.

---

## 3) Ключевые инварианты (не менять без причины)

1. **SVG‑ID карты:** `id="mapa-svg"` обязателен для инициализации `svgPanZoom` и измерения bbox.
2. **Соответствие ID зданий:**

   * В SVG: `b-01`, `b-02`, … `b-19` (двузначный номер с ведущим нулём).
   * В данных: строки без нуля (`"1"`, `"2"`, … `"19"`).
   * Преобразование: `String(num).padStart(2, '0')`.
3. **viewBox SVG:** `0 0 1650 840`. Размеры используются в расчётах зума.
4. **Вариативный шрифт:** `@font-face` → `font-family: 'MapFont'` (+ диапазоны `font-weight: 100 900`, `font-stretch: 50% 200%`). Текстовые подписи карты рассчитывают `font-variation-settings` — не ломать имя шрифта и путь.
5. **Стили скролла в деталях:** контейнеры деталей используют `flex: 1; overflow-y: auto; min-height: 0;` и фиксированный header (72px) + sticky tabs.
6. **CSS класс подсветки здания:** `.is-highlighted` — stroke #16a34a, stroke-width 3, drop-shadow.
7. **Панель по умолчанию закрыта**, кнопки открытия/закрытия встроены в header’ы.

---

## 4) Данные: структуры, конвенции

### 4.1 Pracoviště (отделения)

```js
const pracoviste = [
  { nazev: "Anesteziologie a intenzivní medicína", nazevEN: "Anesthesiology and Intensive Care", budova: "3", patro: "4" },
  { nazev: "Oční oddělení", nazevEN: "Ophthalmology", budova: "3", patro: "1" }
  // ... остальные записи из buildings.md, сохранён формат
];
```

### 4.2 Budovy (карточки зданий)

```js
const budovyData = {
  "b-01": { cislo: "1", nazev: "Budova 1", adresa: "U Nemocnice 1", gps: { lat: 50.1109, lng: 14.4618 },
              mhd: { zastavka: "Bulovka", vzdalenostM: 150, linky: [136,140,201] },
              poi: [], foto: null },
  "b-03": { cislo: "3", nazev: "Budova 3", adresa: "U Nemocnice 3", gps: { lat: 50.1109, lng: 14.4618 },
              mhd: { zastavka: "Bulovka", vzdalenostM: 150, linky: [136,140,201] },
              poi: [ { typ: "lekarna", nazev: "Lékárna", patro: 0 }, { typ: "atm", nazev: "ATM", patro: 1 } ],
              foto: null }
};
```

### 4.3 POI иконки (централизовано)

```js
function getPoiIcon(type) {
  const icons = {
    lekarna: '<svg width="40" height="40" viewBox="0 0 80 80"><circle cx="40" cy="40" r="36" fill="#029447"/><rect x="36" y="20" width="8" height="40" fill="#fff"/><rect x="20" y="36" width="40" height="8" fill="#fff"/></svg>',
    atm: '<svg width="40" height="40" viewBox="0 0 81 80"><circle cx="40" cy="40" r="36" fill="#001829"/><text x="40" y="46" font-family="Arial" font-size="22" text-anchor="middle" fill="#ffffff">ATM</text></svg>',
    default: '<svg width="40" height="40" viewBox="0 0 80 80"><circle cx="40" cy="40" r="36" fill="#dddddd"/><text x="40" y="46" font-family="Arial" font-size="22" text-anchor="middle" fill="#333333">?</text></svg>'
  };
  return icons[type] || icons.default;
}
```

### 4.4 Фото зданий (4:3)

```js
// В budovyData: foto: "assets/photos/budova-3.jpg"   // если нет — null (покажется placeholder)
```

---

## 5) Поиск и нормализация

```js
function normalize(text) {
  return text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

const synonyms = [
  [/(plicni|plicní|pneumo)/g, 'pneumologie'],
  [/(mr|mri)/g, 'magneticka rezonance'],
  [/ct/g, 'ct'],
  [/rtg/g, 'rtg'],
  [/(gyn|gynek)/g, 'gynekologie'],
  [/(deti|děti)/g, 'detske']
];

function normalizeWithSynonyms(q) {
  let s = normalize(q);
  for (const [re, repl] of synonyms) s = s.replace(re, repl);
  return s;
}
```

---

## 6) Поведение UI и анимации

* **Панель слева (desktop) / bottom sheet (mobile).** По умолчанию — закрыта. Кнопки внутри header.
* **Плавное изменение ширины карты** при открытии/закрытии панели (`transition: all 0.3s ease`).
* **Auto‑zoom на выбор отделения/здания** с учётом 2/3 ширины при открытой панели.
* **Sticky tabs** в деталях, единый скролл контента (header фиксированный 72px).

### 6.1 Плавная перестройка карты

```js
function smoothResizeMap(opts = { preserveView: true }) {
  const start = performance.now();
  const dur = 300; // ms
  function step(ts) {
    const t = Math.min(1, (ts - start) / dur);
    const ease = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
    // Обновляем размеры SVG контейнера / панель уже анимируется CSS
    // На каждом кадре просим svg-pan-zoom подстроиться
    panZoomInstance.resize();
    if (!opts.preserveView) { panZoomInstance.fit(); panZoomInstance.center(); }
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
```

### 6.2 Зум на здание (центрирование с учётом панели)

```js
function zoomToBuilding(bid, { duration = 1000, desktopOpenPanelBias = 0.55 } = {}) {
  const el = document.getElementById(bid); // bid вида "b-03"
  if (!el) return;
  const bbox = el.getBBox();
  const sizes = panZoomInstance.getSizes();
  const pad = 1.5; // чем больше, тем больше поля вокруг
  const zx = sizes.width / (bbox.width * pad);
  const zy = sizes.height / (bbox.height * pad);
  const targetZoom = Math.min(zx, zy);

  const container = document.getElementById('map-container');
  const biasX = isPanelOpen() && isDesktop() ? desktopOpenPanelBias : 0.5;
  const viewportX = sizes.viewBox.x + sizes.viewBox.width * biasX;
  const viewportY = sizes.viewBox.y + sizes.viewBox.height * 0.5;
  const cx = bbox.x + bbox.width / 2;
  const cy = bbox.y + bbox.height / 2;

  const start = performance.now();
  const z0 = panZoomInstance.getZoom();
  function step(ts) {
    const t = Math.min(1, (ts - start) / duration);
    const ease = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
    const z = z0 + (targetZoom - z0) * ease;
    panZoomInstance.zoomAtPoint(z, { x: cx, y: cy });
    const real = panZoomInstance.getSizes();
    const panX = viewportX - cx * real.realZoom;
    const panY = viewportY - cy * real.realZoom;
    panZoomInstance.pan({ x: panX, y: panY });
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
```

---

## 7) Расширение (как добавлять/менять)

### 7.1 Добавить фото к зданию

1. Поместить файл в `assets/photos/` (горизонталь 4:3).
2. В `budovyData["b-XX"].foto = "assets/photos/budova-XX.jpg"`.

### 7.2 Добавить POI и иконку

1. Вставить `{ typ: "kavarna", nazev: "Kavárna", patro: 1 }` в `budovyData["b-XX"].poi`.
2. В `getPoiIcon` добавить ключ `kavarna` с полноценным SVG `40x40`.

### 7.3 Добавить этажи к отделениям

* В `pracoviste` добавлять `patro: "-1" | "0" | "1" | "2" ...`.
* Рендер группирует по этажам и сортирует по числу (`parseInt`).

### 7.4 Маппинг ID

* Для карточек и событий использовать `"b-" + String(num).padStart(2, '0')`.

---

## 8) Известные лимиты (MVP)

1. GPS у всех зданий MOCK (50.1109, 14.4618).
2. MHD MOCK (Bulovka 150m, linky 136/140/201).
3. Полная этажность проработана детально только для Budova 3.
4. Фото большинства зданий отсутствуют (есть placeholder).
5. Два отделения из `buildings.md` без привязки к номеру здания.
6. Некоторые отделения присутствуют в нескольких зданиях (пока сведены к одному).

---

## 9) Чек‑лист регрессии (выполнить после правок)

* [ ] `id="mapa-svg"` сохранён, `viewBox` = `0 0 1650 840`.
* [ ] ID зданий в SVG формата `b-XX` (две цифры), в данных — без нуля. Соответствие работает.
* [ ] Поиск игнорирует диакритику + синонимы (`mr/mri → magneticka rezonance`, `plicni → pneumologie`, `gyn → gynekologie`).
* [ ] Ховер/клик подсвечивает контур здания (`.is-highlighted`) и открывает детали.
* [ ] Панель по умолчанию закрыта; кнопки открытия/закрытия встроены в header; плавный ресайз карты активен.
* [ ] Auto‑zoom центрирует выбранное здание; при «Назад» карта возвращается к исходному виду плавно.
* [ ] Sticky tabs остаются видимыми при скролле; скролл един по всему контенту деталей.
* [ ] Фото 4:3 рендерится корректно (или placeholder), `object-fit: cover`.
* [ ] POI иконки рендерятся из `getPoiIcon`; fallback для неизвестных типов.
* [ ] Навигация в Google Maps открывает координаты budovy.

---

## 10) Быстрый старт / Run

### Браузер

```bash
open index.html
```

### Локальный сервер

```bash
python3 -m http.server 8000
# затем открыть http://localhost:8000
```

---

## 11) Примечания для LLM (важно)

* Не переименовывать `mapa-svg`, не менять формат `b-XX` в SVG и строковый номер в данных.
* При правках layout панели не убирать `min-height: 0` у скроллируемых flex‑контейнеров.
* Код примеров выше — эталон для модификаций; не заменять рабочие svg‑иконки на emoji в проде.
* Переменный шрифт должен грузиться локально через `@font-face` под именем `'MapFont'` (путь `assets/font-b.ttf`).
* **JavaScript модули:** Порядок подключения в `index.html` важен: data → utils → map-controls → ui → app. Глобальные переменные из модулей доступны во всех последующих.

---

## 12) Глоссарий (кратко)

* **Oddělení** — отделения/клиники.
* **POI** — точки интереса (лékárna, ATM и т.п.).
* **Patro** — этаж; `-1` подземный, `0` — přízemí, `1+` — надземные.
* **Zvýraznění** — подсветка контура здания на карте.

---

## 13) История изменений

### 7 октября 2025 — Рефакторинг на модули
**Что сделано:**
- Разбил монолитный `app.js` (654 строки) на 5 логических модулей:
  - `js/data.js` (134 строки) — все данные приложения
  - `js/utils.js` (53 строки) — утилиты и хелперы
  - `js/map-controls.js` (138 строк) — управление картой и подсветкой
  - `js/ui.js` (177 строк) — UI функции и рендеринг
  - `js/app.js` (58 строк) — инициализация и event handlers
- Обновил `index.html` для подключения всех модулей в правильном порядке
- Обновил секцию "Tech stack / Files" в PROGRESS.md
- Удалил старый монолитный `app.js`

**Зачем:**
- Упрощается навигация по коду
- Не забивается контекст при работе с LLM
- Легче поддерживать и расширять отдельные части приложения
- Каждый модуль имеет чёткую зону ответственности

**Как это работает:**
- Все модули используют глобальные переменные (const/let/function в глобальной области видимости)
- Порядок подключения важен: сначала данные, потом утилиты, потом функции, которые их используют
- Никаких изменений в функционале — только структурная реорганизация кода

**Известные проблемы:** Нет

---

### 7 октября 2025 — Navigace na hlavní parkoviště
**Co:**
- Přidáno tlačítko „Navigovat k hlavnímu parkovišti“ v detailu budovy.
- Handler otevírá Google Maps odkaz: https://maps.app.goo.gl/U87sfZzSznpMMQYz9

**Kde:**
- `index.html` — druhé tlačítko v sekci navigace detailu.
- `js/ui.js` — `onclick` pro `#navigate-main-parking-button` (otevírá statický odkaz).

**Poznámky:**
- Zachována původní funkce „Navigovat k budově“ dle GPS budovy.

**Конец файла** – этот документ предназначен для вставки в контекст Coding LLM. Содержимое кратко, но покрывает поведение, структуру данных, инварианты и регрессионные проверки.
