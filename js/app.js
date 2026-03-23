'use strict';

/* ========================================
   FIREBASE CONFIG
   ======================================== */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBuCWrjTRBxomX_YHUpASYbVHXAojBO96E",
  authDomain: "mapa-propiedades-58210.firebaseapp.com",
  databaseURL: "https://mapa-propiedades-58210-default-rtdb.firebaseio.com",
  projectId: "mapa-propiedades-58210",
  storageBucket: "mapa-propiedades-58210.firebasestorage.app",
  messagingSenderId: "664863400787",
  appId: "1:664863400787:web:3304bc423811167252f7a6"
};

const PASSWORD = 'mapanorte2026';
const SESSION_KEY = 'mapa_norte_auth_v1';

/* ========================================
   ZONE COLORS
   ======================================== */
const ZONE_COLORS = {
  'San Isidro':  '#1565C0',
  'San Fernando':'#6A1B9A',
  'Tigre':       '#E65100',
  'Escobar':     '#2E7D32',
  'Pilar':       '#C62828',
};

/* ========================================
   BARRIOS POR ZONA (partido real)
   ======================================== */
const BARRIOS = {
  'San Isidro': [
    { nombre: 'Boating Club',                    lat: -34.4600, lng: -58.5150 },
    { nombre: 'Los Altos de San Isidro',         lat: -34.4580, lng: -58.5620 },
    { nombre: 'Newbery',                         lat: -34.4500, lng: -58.5500 },
    { nombre: 'La Horqueta',                     lat: -34.4680, lng: -58.5580 },
    { nombre: 'Beccar (abierto)',                lat: -34.4550, lng: -58.5450 },
    { nombre: 'Martínez (abierto)',              lat: -34.4883, lng: -58.5119 },
    { nombre: 'Acassuso (abierto)',              lat: -34.4633, lng: -58.5167 },
    { nombre: 'San Isidro Centro (abierto)',     lat: -34.4717, lng: -58.5271 },
    { nombre: 'Boulogne (abierto)',              lat: -34.4983, lng: -58.5633 },
  ],
  'San Fernando': [
    { nombre: 'San Isidro Labrador',             lat: -34.4050, lng: -58.6050 },
    { nombre: 'Altamira',                        lat: -34.4200, lng: -58.5900 },
    { nombre: 'El Remanso',                      lat: -34.4100, lng: -58.5900 },
    { nombre: 'Las Victorias',                   lat: -34.4420, lng: -58.5680 },
    { nombre: 'Windbells',                       lat: -34.4150, lng: -58.5780 },
    { nombre: 'San Fernando Centro (abierto)',   lat: -34.4436, lng: -58.5590 },
    { nombre: 'Victoria (abierto)',              lat: -34.4600, lng: -58.5200 },
    { nombre: 'Virreyes (abierto)',              lat: -34.4150, lng: -58.5800 },
  ],
  'Tigre': [
    { nombre: 'Nordelta',                        lat: -34.3950, lng: -58.6920 },
    { nombre: 'El Cantón',                       lat: -34.4050, lng: -58.6830 },
    { nombre: 'Puertos del Lago',                lat: -34.3720, lng: -58.7100 },
    { nombre: 'Santa Catalina',                  lat: -34.4200, lng: -58.6750 },
    { nombre: 'Santa Clara',                     lat: -34.4150, lng: -58.6800 },
    { nombre: 'San Isidro Labrador (Villanueva)',lat: -34.3900, lng: -58.7050 },
    { nombre: 'Santa María de Tigre',            lat: -34.4100, lng: -58.6700 },
    { nombre: 'Altamira (Eidico)',               lat: -34.4050, lng: -58.6650 },
    { nombre: 'San Sebastián',                   lat: -34.4350, lng: -58.6700 },
    { nombre: 'Álvanueva',                       lat: -34.3850, lng: -58.7150 },
    { nombre: 'La Querencia',                    lat: -34.4450, lng: -58.6500 },
    { nombre: 'El Conquistador',                 lat: -34.4200, lng: -58.6500 },
    { nombre: 'Santa Bárbara',                   lat: -34.4300, lng: -58.6600 },
    { nombre: 'Tigre Centro (abierto)',          lat: -34.4264, lng: -58.5797 },
    { nombre: 'General Pacheco (abierto)',       lat: -34.4540, lng: -58.6478 },
    { nombre: 'Benavidez (abierto)',             lat: -34.3780, lng: -58.7100 },
    { nombre: 'El Talar (abierto)',              lat: -34.4650, lng: -58.6350 },
  ],
  'Escobar': [
    { nombre: 'Puertos — sector Escobar',        lat: -34.3620, lng: -58.7480 },
    { nombre: 'Villanueva',                      lat: -34.3700, lng: -58.7200 },
    { nombre: 'Haras del Sur',                   lat: -34.3850, lng: -58.7300 },
    { nombre: 'Fincas de Maschwitz',             lat: -34.3750, lng: -58.7700 },
    { nombre: 'Grand Bell',                      lat: -34.3650, lng: -58.7850 },
    { nombre: 'Las Praderas de Escobar',         lat: -34.3600, lng: -58.8050 },
    { nombre: 'Los Robles de Escobar',           lat: -34.3550, lng: -58.8200 },
    { nombre: 'Acacias Blancas',                 lat: -34.3800, lng: -58.7650 },
    { nombre: 'Loma Verde',                      lat: -34.3500, lng: -58.7900 },
    { nombre: 'Belén de Escobar (abierto)',      lat: -34.3480, lng: -58.7960 },
    { nombre: 'Ingeniero Maschwitz (abierto)',   lat: -34.3900, lng: -58.7600 },
    { nombre: 'Maquinista Savio (abierto)',      lat: -34.3250, lng: -58.8200 },
    { nombre: 'Open Door (abierto)',             lat: -34.3100, lng: -58.8900 },
    { nombre: 'La Comarca',                      lat: -34.4600, lng: -58.6550 },
  ],
  'Pilar': [
    { nombre: 'Puertos — sector Pilar',          lat: -34.3580, lng: -58.8200 },
    { nombre: 'Highland Park',                   lat: -34.4250, lng: -58.8500 },
    { nombre: 'Tortugas Country Club',           lat: -34.4180, lng: -58.8450 },
    { nombre: 'San Sebastián',                   lat: -34.4500, lng: -58.9100 },
    { nombre: 'Santa Bárbara',                   lat: -34.4300, lng: -58.8800 },
    { nombre: 'El Cantón',                       lat: -34.3950, lng: -58.8950 },
    { nombre: 'Los Pilares',                     lat: -34.4400, lng: -58.9200 },
    { nombre: 'Estancias del Pilar',             lat: -34.4150, lng: -58.9200 },
    { nombre: 'Los Potrillos',                   lat: -34.4700, lng: -58.9450 },
    { nombre: 'Fincas de Santa Bárbara',         lat: -34.4200, lng: -58.8950 },
    { nombre: 'Terralagos',                      lat: -34.3680, lng: -58.8700 },
    { nombre: 'Pilar del Lago',                  lat: -34.3750, lng: -58.8850 },
    { nombre: 'Pilar del Este',                  lat: -34.4400, lng: -58.8700 },
    { nombre: 'Los Aromos',                      lat: -34.4100, lng: -58.9000 },
    { nombre: 'Ayres de Pilar',                  lat: -34.4350, lng: -58.9350 },
    { nombre: 'San Matías',                      lat: -34.4600, lng: -58.9250 },
    { nombre: 'Lagos del Norte',                 lat: -34.3800, lng: -58.9100 },
    { nombre: 'Lagoon Pilar',                    lat: -34.3900, lng: -58.9000 },
    { nombre: 'Pilar Centro (abierto)',          lat: -34.4588, lng: -58.9118 },
    { nombre: 'Del Viso (abierto)',              lat: -34.4050, lng: -58.9350 },
    { nombre: 'Derqui (abierto)',                lat: -34.4900, lng: -58.8800 },
  ],
};

/* ========================================
   STATE
   ======================================== */
let map         = null;
let heatLayer   = null;
let heatEnabled = false;

let properties  = {};   // { firebaseId: propertyObject }
let markers     = {};   // { firebaseId: L.marker }

let isAuthenticated = false;
let currentFilter   = 'all';
let currentTab      = 'add';

/* ========================================
   FIREBASE INIT
   ======================================== */
firebase.initializeApp(FIREBASE_CONFIG);
const db       = firebase.database();
const propsRef = db.ref('properties');

/* ========================================
   ENTRY POINT
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initForm();
  checkSession();
  setupFirebaseSync();
  setupImportInput();
  setupModalClickOutside();

  // Auto-prompt password on first load if not yet authenticated
  if (!isAuthenticated) {
    openModal();
  }
});

/* ========================================
   MAP INITIALIZATION
   ======================================== */
function initMap() {
  map = L.map('map', {
    center: [-34.44, -58.74],
    zoom: 11,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  // Price/m² legend
  const legend = L.control({ position: 'bottomleft' });
  legend.onAdd = () => {
    const div = L.DomUtil.create('div', 'map-legend');
    div.innerHTML = `
      <strong>USD/m² cubierto</strong>
      <div class="legend-row"><span class="legend-dot" style="background:#4CAF50"></span> &lt; 1.500</div>
      <div class="legend-row"><span class="legend-dot" style="background:#FF9800"></span> 1.500 – 2.500</div>
      <div class="legend-row"><span class="legend-dot" style="background:#F44336"></span> &gt; 2.500</div>
    `;
    return div;
  };
  legend.addTo(map);
}

/* ========================================
   HEATMAP
   ======================================== */
function toggleHeatmap() {
  // Guard: leaflet.heat must be loaded
  if (typeof L.heatLayer !== 'function') {
    showToast('Heatmap no disponible: leaflet.heat no se cargó', 'error');
    return;
  }

  heatEnabled = !heatEnabled;
  const btn = document.getElementById('btn-heatmap');
  btn.classList.toggle('active', heatEnabled);

  if (!heatEnabled) {
    if (heatLayer) {
      map.removeLayer(heatLayer);
      heatLayer = null;
    }
    return;
  }

  // Enabling: build and add layer
  updateHeatmap();
}

function updateHeatmap() {
  if (!heatEnabled || typeof L.heatLayer !== 'function') return;

  // Remove existing layer before rebuilding
  if (heatLayer) {
    map.removeLayer(heatLayer);
    heatLayer = null;
  }

  const points = Object.values(properties)
    .filter(p => p.lat && p.lng && p.precio_usd > 0 && p.m2_cubiertos > 0)
    .map(p => {
      // Normalize: USD 1500/m² → 0.5, USD 3000/m² → 1.0
      const pm2 = p.precio_usd / p.m2_cubiertos;
      return [p.lat, p.lng, Math.min(pm2 / 3000, 1)];
    });

  if (points.length === 0) {
    if (heatEnabled) showToast('Sin datos para el heatmap todavía', 'warning');
    return;
  }

  heatLayer = L.heatLayer(points, {
    radius: 40,
    blur: 25,
    max: 1.0,
    maxZoom: 17,
    gradient: { 0.0: '#4CAF50', 0.5: '#FF9800', 1.0: '#F44336' },
  }).addTo(map);
}

/* ========================================
   MARKER HELPERS
   ======================================== */
function priceM2Class(val) {
  if (!val || val < 1500) return 'green';
  if (val <= 2500)         return 'orange';
  return 'red';
}

function priceM2DotColor(val) {
  if (!val || val < 1500) return '#4CAF50';
  if (val <= 2500)         return '#FF9800';
  return '#F44336';
}

function formatARS(n) { return Number(n).toLocaleString('es-AR'); }
function formatUSD(n) { return 'USD ' + Number(n).toLocaleString('es-AR'); }

function createMarkerIcon(zona, pricePerM2) {
  const zoneColor = ZONE_COLORS[zona] || '#555';
  const dotColor  = priceM2DotColor(pricePerM2);
  const label     = pricePerM2
    ? `USD ${Math.round(pricePerM2).toLocaleString('es-AR')}/m²`
    : '';

  const hasLabel  = label.length > 0;
  const h = hasLabel ? 36 : 14;

  return L.divIcon({
    className: 'custom-marker',
    html: `<div class="marker-wrap">
      ${hasLabel ? `<div class="marker-label">${label}</div>` : ''}
      <div class="marker-pin" style="background:${dotColor};border-color:${zoneColor}"></div>
    </div>`,
    iconSize:    [110, h],
    iconAnchor:  [55, h],
    popupAnchor: [0, -(h + 4)],
  });
}

function buildPopupHTML(id, prop) {
  const pricePerM2 = prop.m2_cubiertos > 0 ? prop.precio_usd / prop.m2_cubiertos : null;
  const cls        = priceM2Class(pricePerM2);
  const zoneColor  = ZONE_COLORS[prop.zona] || '#555';

  return `<div class="popup-inner">
    <h4>${prop.nombre || prop.barrio || 'Sin nombre'}</h4>
    <span class="popup-tipo ${prop.tipo}">${prop.tipo === 'alquiler' ? 'Alquiler' : 'Venta'}</span>
    <p>
      <strong>Zona:</strong>
      <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${zoneColor};margin:0 4px 0 3px;vertical-align:middle"></span>
      ${prop.zona}
    </p>
    <p><strong>Barrio:</strong> ${prop.barrio}</p>
    <p><strong>Precio:</strong> ${formatUSD(prop.precio_usd)}</p>
    ${prop.expensas_ars ? `<p><strong>Expensas:</strong> ARS ${formatARS(prop.expensas_ars)}</p>` : ''}
    <p>
      <strong>m² tot.:</strong> ${prop.m2_totales || '—'} &nbsp;
      <strong>cub.:</strong> ${prop.m2_cubiertos || '—'}
    </p>
    <p><strong>Ambientes:</strong> ${prop.ambientes || '—'}</p>
    ${pricePerM2 ? `
      <div class="popup-price-m2 ${cls}">
        USD ${Math.round(pricePerM2).toLocaleString('es-AR')}/m²
      </div>` : ''}
    ${prop.url ? `<p style="margin-top:8px"><a href="${prop.url}" target="_blank" rel="noopener noreferrer">Ver publicación ↗</a></p>` : ''}
    ${isAuthenticated
      ? `<button class="popup-del-btn" onclick="deleteProperty('${id}')">🗑 Eliminar propiedad</button>`
      : ''}
  </div>`;
}

/* ========================================
   MARKER LIFECYCLE
   ======================================== */
function addMarker(id, prop) {
  if (!prop.lat || !prop.lng) return;
  const pricePerM2 = prop.m2_cubiertos > 0 ? prop.precio_usd / prop.m2_cubiertos : null;
  const icon       = createMarkerIcon(prop.zona, pricePerM2);
  const marker     = L.marker([prop.lat, prop.lng], { icon, title: prop.nombre || prop.barrio });

  marker.bindPopup(() => buildPopupHTML(id, properties[id] || prop), {
    maxWidth: 290,
    minWidth: 220,
  });
  marker.addTo(map);
  markers[id] = marker;
}

function removeMarker(id) {
  if (markers[id]) {
    markers[id].closePopup();
    map.removeLayer(markers[id]);
    delete markers[id];
  }
}

// Rebuild all popup content (e.g. after auth state change to add delete button)
function refreshPopups() {
  Object.entries(markers).forEach(([id, marker]) => {
    // popup content is built lazily, so just close any open popup
    marker.closePopup();
  });
}

/* ========================================
   FIREBASE REAL-TIME SYNC
   ======================================== */
function setupFirebaseSync() {
  propsRef.on('child_added', snapshot => {
    const id   = snapshot.key;
    const prop = snapshot.val();
    properties[id] = prop;
    addMarker(id, prop);
    updateCount();
    if (currentTab === 'list')  renderList();
    else if (currentTab === 'stats') renderStats();
    else { renderList(); renderStats(); } // keep both fresh
    updateHeatmap();
  });

  propsRef.on('child_removed', snapshot => {
    const id = snapshot.key;
    delete properties[id];
    removeMarker(id);
    updateCount();
    renderList();
    renderStats();
    updateHeatmap();
  });

  propsRef.on('child_changed', snapshot => {
    const id   = snapshot.key;
    const prop = snapshot.val();
    properties[id] = prop;
    removeMarker(id);
    addMarker(id, prop);
    renderList();
    renderStats();
    updateHeatmap();
  });
}

function updateCount() {
  const n = Object.keys(properties).length;
  document.getElementById('prop-count').textContent =
    `${n} propiedad${n !== 1 ? 'es' : ''}`;
}

/* ========================================
   PROPERTY CRUD
   ======================================== */
function addProperty(data) {
  if (!isAuthenticated) { showToast('Ingresá la contraseña primero', 'error'); return; }
  propsRef.push({ ...data, timestamp: Date.now() })
    .then(() => showToast('Propiedad agregada ✓', 'success'))
    .catch(err => showToast('Error al guardar: ' + err.message, 'error'));
}

function deleteProperty(id) {
  if (!isAuthenticated) { showToast('No autorizado', 'error'); return; }
  if (!confirm('¿Eliminar esta propiedad?')) return;
  propsRef.child(id).remove()
    .then(() => showToast('Propiedad eliminada', 'info'))
    .catch(err => showToast('Error: ' + err.message, 'error'));
}

/* ========================================
   FORM INITIALIZATION
   ======================================== */
function initForm() {
  const zonaEl = document.getElementById('f-zona');

  // Zone → barrio cascade
  zonaEl.addEventListener('change', () => {
    const zona     = zonaEl.value;
    const barrioEl = document.getElementById('f-barrio');
    barrioEl.innerHTML = '';

    if (zona && BARRIOS[zona]) {
      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = '— Seleccionar barrio —';
      barrioEl.appendChild(placeholder);

      BARRIOS[zona].map(b => b.nombre).sort().forEach(nombre => {
        const opt = document.createElement('option');
        opt.value = nombre;
        opt.textContent = nombre;
        barrioEl.appendChild(opt);
      });
      barrioEl.disabled = false;
    } else {
      const ph = document.createElement('option');
      ph.value = '';
      ph.textContent = '— Primero seleccioná la zona —';
      barrioEl.appendChild(ph);
      barrioEl.disabled = true;
    }
  });

  document.getElementById('prop-form').addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
  e.preventDefault();
  if (!isAuthenticated) { showToast('No autorizado', 'error'); return; }

  const f      = e.target;
  const zona   = f.zona.value;
  const barrio = f.barrio.value;

  if (!zona || !barrio) { showToast('Seleccioná zona y barrio', 'error'); return; }

  const coords = BARRIOS[zona]?.find(b => b.nombre === barrio);
  if (!coords)           { showToast('Coordenadas no encontradas', 'error'); return; }

  // Small random jitter so multiple props in same barrio don't stack exactly
  const jitter = () => (Math.random() - 0.5) * 0.005;

  const data = {
    zona,
    barrio,
    tipo:         f.tipo.value,
    precio_usd:   parseFloat(f.precio_usd.value)   || 0,
    expensas_ars: parseFloat(f.expensas_ars.value)  || 0,
    m2_totales:   parseFloat(f.m2_totales.value)    || 0,
    m2_cubiertos: parseFloat(f.m2_cubiertos.value)  || 0,
    ambientes:    parseInt(f.ambientes.value)        || 0,
    nombre:       f.nombre.value.trim(),
    url:          f.url.value.trim(),
    lat:          coords.lat + jitter(),
    lng:          coords.lng + jitter(),
  };

  if (!data.tipo) { showToast('Seleccioná tipo (alquiler / venta)', 'error'); return; }

  addProperty(data);

  // Reset form
  f.reset();
  document.getElementById('f-barrio').innerHTML =
    '<option value="">— Primero seleccioná la zona —</option>';
  document.getElementById('f-barrio').disabled = true;
}

/* ========================================
   PROPERTY LIST
   ======================================== */
function filterList(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.filter === filter)
  );
  renderList();
}

function renderList() {
  const listEl = document.getElementById('prop-list');
  const countEl = document.getElementById('list-count');

  let entries = Object.entries(properties)
    .filter(([, p]) => currentFilter === 'all' || p.tipo === currentFilter)
    .sort(([, a], [, b]) => (b.timestamp || 0) - (a.timestamp || 0));

  countEl.textContent = `${entries.length} resultado${entries.length !== 1 ? 's' : ''}`;

  if (entries.length === 0) {
    listEl.innerHTML = '<div class="empty-state">No hay propiedades en esta categoría.</div>';
    return;
  }

  listEl.innerHTML = entries.map(([id, prop]) => {
    const pricePerM2 = prop.m2_cubiertos > 0
      ? prop.precio_usd / prop.m2_cubiertos
      : null;
    const cls       = priceM2Class(pricePerM2);
    const dotColor  = ZONE_COLORS[prop.zona] || '#888';
    const m2label   = pricePerM2
      ? `USD ${Math.round(pricePerM2).toLocaleString('es-AR')}/m²`
      : '';

    return `<div class="prop-item" onclick="focusProperty('${id}')">
      <div class="prop-zone-dot" style="background:${dotColor}"></div>
      <div class="prop-info">
        <div class="prop-name">${prop.nombre || prop.barrio || '—'}</div>
        <div class="prop-sub">${prop.zona} · ${prop.barrio} · ${prop.tipo}</div>
      </div>
      <div class="prop-right">
        <div class="prop-price">${formatUSD(prop.precio_usd)}</div>
        ${m2label ? `<div class="prop-m2 ${cls}">${m2label}</div>` : ''}
      </div>
      ${isAuthenticated
        ? `<div class="prop-actions">
             <button class="btn btn-danger btn-sm"
               onclick="event.stopPropagation();deleteProperty('${id}')">✕</button>
           </div>`
        : ''}
    </div>`;
  }).join('');
}

function focusProperty(id) {
  const prop = properties[id];
  if (!prop || !prop.lat || !prop.lng) return;
  map.setView([prop.lat, prop.lng], 15, { animate: true });
  if (markers[id]) setTimeout(() => markers[id].openPopup(), 350);
}

/* ========================================
   STATS / COMPARISON TAB
   ======================================== */
function renderStats() {
  const el = document.getElementById('stats-content');

  // Build zone stats
  const zoneMap = {};
  Object.values(properties).forEach(prop => {
    if (!zoneMap[prop.zona]) zoneMap[prop.zona] = { alquiler: [], venta: [] };
    if (prop.m2_cubiertos > 0 && prop.precio_usd > 0) {
      const pm2 = prop.precio_usd / prop.m2_cubiertos;
      if (prop.tipo === 'alquiler') zoneMap[prop.zona].alquiler.push(pm2);
      else if (prop.tipo === 'venta') zoneMap[prop.zona].venta.push(pm2);
    }
  });

  if (Object.keys(zoneMap).length === 0) {
    el.innerHTML = '<div class="empty-state" style="padding:60px 20px">Cargá propiedades para ver estadísticas comparativas por zona.</div>';
    return;
  }

  const avg = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;
  const fmt = v => v != null ? `$${Math.round(v).toLocaleString('es-AR')}` : '—';

  const rows = Object.entries(zoneMap).map(([zona, d]) => ({
    zona,
    avgAlq:  avg(d.alquiler),
    avgVta:  avg(d.venta),
    overall: avg([...d.alquiler, ...d.venta]),
    cntAlq:  d.alquiler.length,
    cntVta:  d.venta.length,
  })).sort((a, b) => (a.overall ?? Infinity) - (b.overall ?? Infinity));

  const rankClass = i => ['rank-1','rank-2','rank-3'][i] || 'rank-other';

  el.innerHTML = `
    <div class="stats-heading">Comparativa por zona</div>
    <p class="stats-sub">Precio/m² cubierto promedio en USD · ordenado de más económico a más caro</p>

    <table class="stats-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Zona</th>
          <th>Alquiler</th>
          <th>Venta</th>
          <th>Cant.</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((r, i) => {
          const color = ZONE_COLORS[r.zona] || '#888';
          return `<tr>
            <td><span class="rank-badge ${rankClass(i)}">${i+1}</span></td>
            <td>
              <div class="zone-cell">
                <span class="zone-cell-dot" style="background:${color}"></span>
                <span class="zone-cell-name">${r.zona}</span>
              </div>
            </td>
            <td>${fmt(r.avgAlq)}${r.cntAlq ? `<br><small style="color:#9ca3af">${r.cntAlq} prop.</small>` : ''}</td>
            <td>${fmt(r.avgVta)}${r.cntVta ? `<br><small style="color:#9ca3af">${r.cntVta} prop.</small>` : ''}</td>
            <td>${r.cntAlq + r.cntVta}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>

    <div class="stats-separator">Leyenda de zonas</div>
    ${Object.entries(ZONE_COLORS).map(([zona, color]) => `
      <div class="zone-cell" style="margin-bottom:8px">
        <span class="zone-cell-dot" style="background:${color}"></span>
        <span style="font-size:12px">${zona}</span>
      </div>`).join('')}
  `;
}

/* ========================================
   EXCEL — IMPORT
   ======================================== */
function setupImportInput() {
  document.getElementById('import-file').addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) { importExcel(file); e.target.value = ''; }
  });
}

function importExcel(file) {
  if (!isAuthenticated) { showToast('Necesitás contraseña para importar', 'error'); return; }

  const reader = new FileReader();
  reader.onload = e => {
    try {
      const wb   = XLSX.read(new Uint8Array(e.target.result), { type: 'array' });
      const ws   = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws, { defval: '' });

      if (!rows.length) { showToast('El archivo está vacío', 'error'); return; }

      let imported = 0, errors = 0;

      rows.forEach(row => {
        const zona   = String(row.zona   || '').trim();
        const barrio = String(row.barrio || '').trim();
        const tipo   = String(row.tipo   || '').trim().toLowerCase();

        if (!zona || !barrio || !tipo)  { errors++; return; }
        if (!BARRIOS[zona])             { errors++; return; }

        const coords = BARRIOS[zona].find(b => b.nombre === barrio);
        if (!coords)                    { errors++; return; }

        const jitter = () => (Math.random() - 0.5) * 0.005;

        propsRef.push({
          zona,
          barrio,
          tipo:         tipo === 'alquiler' ? 'alquiler' : 'venta',
          precio_usd:   parseFloat(row.precio_usd)   || 0,
          expensas_ars: parseFloat(row.expensas_ars)  || 0,
          m2_totales:   parseFloat(row.m2_totales)    || 0,
          m2_cubiertos: parseFloat(row.m2_cubiertos)  || 0,
          ambientes:    parseInt(row.ambientes)        || 0,
          nombre:       String(row.nombre || '').trim(),
          url:          String(row.url    || '').trim(),
          lat:          coords.lat + jitter(),
          lng:          coords.lng + jitter(),
          timestamp:    Date.now(),
        });
        imported++;
      });

      showToast(
        `Importadas: ${imported}${errors ? ` · ${errors} con errores` : ''}`,
        imported > 0 ? 'success' : 'error'
      );
    } catch (err) {
      showToast('Error al leer archivo: ' + err.message, 'error');
    }
  };
  reader.readAsArrayBuffer(file);
}

/* ========================================
   EXCEL — EXPORT
   ======================================== */
function exportExcel() {
  const props = Object.values(properties);
  if (!props.length) { showToast('No hay propiedades para exportar', 'warning'); return; }

  const data = props.map(p => ({
    zona:          p.zona,
    barrio:        p.barrio,
    tipo:          p.tipo,
    precio_usd:    p.precio_usd,
    expensas_ars:  p.expensas_ars,
    m2_totales:    p.m2_totales,
    m2_cubiertos:  p.m2_cubiertos,
    precio_m2_usd: p.m2_cubiertos > 0 ? Math.round(p.precio_usd / p.m2_cubiertos) : '',
    ambientes:     p.ambientes,
    nombre:        p.nombre,
    url:           p.url,
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Propiedades');
  XLSX.writeFile(wb, `mapa-gba-norte-${new Date().toISOString().slice(0, 10)}.xlsx`);
  showToast('Exportado correctamente', 'success');
}

/* ========================================
   EXCEL — TEMPLATE
   ======================================== */
function downloadTemplate() {
  const example = [{
    zona:          'San Isidro',
    barrio:        'Boating Club',
    tipo:          'venta',
    precio_usd:    250000,
    expensas_ars:  120000,
    m2_totales:    120,
    m2_cubiertos:  100,
    ambientes:     4,
    nombre:        'Casa con jardín',
    url:           'https://ejemplo.com',
  }];

  const ws = XLSX.utils.json_to_sheet(example);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Propiedades');
  XLSX.writeFile(wb, 'plantilla-mapa-gba-norte.xlsx');
  showToast('Plantilla descargada', 'success');
}

/* ========================================
   AUTH / PASSWORD
   ======================================== */
function checkSession() {
  if (sessionStorage.getItem(SESSION_KEY) === PASSWORD) {
    authenticate(/* silent */ true);
  }
}

function promptPassword() {
  if (isAuthenticated) return; // already in
  openModal();
}

function openModal() {
  document.getElementById('pw-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('pw-input').focus(), 120);
}

function closeModal() {
  document.getElementById('pw-modal').classList.add('hidden');
  document.getElementById('pw-input').value = '';
}

function submitPassword() {
  const val = document.getElementById('pw-input').value;
  if (val === PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, val);
    authenticate(false);
    closeModal();
    showToast('Acceso concedido — podés agregar propiedades', 'success');
  } else {
    showToast('Contraseña incorrecta', 'error');
    document.getElementById('pw-input').value = '';
    document.getElementById('pw-input').focus();
  }
}

function authenticate(silent) {
  isAuthenticated = true;

  // Show form, hide notice
  document.getElementById('prop-form').classList.remove('hidden');
  document.getElementById('auth-notice').classList.add('hidden');

  // Update header button
  const btn = document.getElementById('btn-auth');
  btn.textContent  = '✓ Autenticado';
  btn.className    = 'btn btn-primary-white authed';
  btn.onclick      = null;

  // Refresh list to expose delete buttons
  renderList();
  refreshPopups();
}

function setupModalClickOutside() {
  document.getElementById('pw-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
}

/* ========================================
   TABS
   ======================================== */
function switchTab(tab) {
  currentTab = tab;

  document.querySelectorAll('.tab-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.tab === tab)
  );
  document.querySelectorAll('.tab-content').forEach(c =>
    c.classList.remove('active')
  );
  document.getElementById(`tab-${tab}`).classList.add('active');

  if (tab === 'stats') renderStats();
  if (tab === 'list')  renderList();
}

/* ========================================
   TOAST NOTIFICATIONS
   ======================================== */
function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast     = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    toast.style.opacity    = '0';
    toast.style.transform  = 'translateX(110%)';
    setTimeout(() => toast.remove(), 320);
  }, 3200);
}

/* ========================================
   KEYBOARD SHORTCUTS
   ======================================== */
document.addEventListener('keydown', e => {
  const modal = document.getElementById('pw-modal');
  const hidden = modal.classList.contains('hidden');
  if (e.key === 'Escape' && !hidden) closeModal();
  if (e.key === 'Enter'  && !hidden) submitPassword();
});
