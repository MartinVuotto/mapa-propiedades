# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static web app (no build step) for mapping real-estate listings in GBA Norte (Argentina). Hosted on GitHub Pages, data stored in Firebase Realtime Database.

- **URL**: https://martinvuotto.github.io/mapa-propiedades/
- **Stack**: Vanilla HTML/CSS/JS · Leaflet.js · Firebase Realtime Database · SheetJS (XLSX)

## Deployment

No build required. Push to `main` and GitHub Pages auto-deploys within ~2 minutes:

```bash
git add .
git commit -m "description"
git push
```

There are no tests, no linter, and no package manager — this is a zero-dependency local project.

## Architecture

All application logic lives in **`js/app.js`** (single file, ~870 lines). `index.html` has the full markup and loads all CDN scripts. `css/style.css` has all styles.

### Core state (globals in `app.js`)

| Variable | Purpose |
|---|---|
| `properties` | `{ firebaseId → propertyObject }` — source of truth for all property data |
| `markers` | `{ firebaseId → L.marker }` — parallel map of Leaflet marker instances |
| `currentFilter` | `'all'` \| `'alquiler'` \| `'venta'` — drives both list and map marker visibility |
| `heatEnabled` | Boolean toggling the price/m² heatmap layer |
| `isAuthenticated` | Client-side auth flag (password checked against hardcoded constant) |

### Data flow

1. **Firebase real-time sync** (`setupFirebaseSync`) drives all updates via `child_added`, `child_removed`, `child_changed` listeners on `propsRef` (`db.ref('properties')`).
2. On each Firebase event, the handler updates `properties`, calls `addMarker`/`removeMarker`, then calls `renderList()`, `renderStats()`, and `updateHeatmap()`.
3. **`addMarker`** respects `currentFilter` — new markers are only added to the map if they match the active filter.
4. **`applyMarkerFilter`** iterates all `markers` and calls `marker.addTo(map)` or `map.removeLayer(marker)` based on the property's `tipo` vs `currentFilter`.

### Coordinates

Barrio coordinates are hardcoded in the `BARRIOS` constant (top of `app.js`). When a property is saved, a small random jitter (`±0.0025°`) is applied so multiple listings in the same barrio don't stack exactly.

### Auth model

Authentication is entirely client-side. The password is compared against the `PASSWORD` constant and stored in `sessionStorage` under `SESSION_KEY`. Authenticated users see the add-property form and delete buttons in popups/list.

### Heatmap

`updateHeatmap()` filters properties by the active type (`currentFilter`, defaulting to `'venta'` when `'all'`), normalizes `precio_usd / m2_cubiertos` values to `[0.1, 1.0]`, and renders a `L.heatLayer`.

## Excel import format

Required columns: `zona`, `barrio`, `tipo`, `precio_usd`, `expensas_ars`, `m2_totales`, `m2_cubiertos`, `ambientes`, `nombre`, `url`. Zona and barrio values must exactly match the `BARRIOS` constant keys/names.
