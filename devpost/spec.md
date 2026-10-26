---
doc: spec
status: draft
updated: 2026-10-26
---

# Mochi — current technical plan

## Source and build
Framework-free static site. Source devpost/little-acres/, deploy public/. build-public.cjs explicit allowlist copies runtime, art, licenses and game files; excludes PDFs, planning, screenshots and prototype review pages. first-lesson.html is the new scene/UI; farm-chapter.css, farm-chapter-content.js and farm-chapter.js own layout, bilingual authored tasks and orchestration.

## Python
farm-python-worker.js loads self-hosted Pyodide0.27.7 (CPython3.12.7) from python/. Bundled loader, asm JS, WASM, stdlib ZIP and lock metadata total about14MB; MIT/PSF license files included. Worker exchanges JSON serializable primitives/events/AST summaries. Not a server or JavaScript eval substitute. Farm methods prepare_bed/plant/water explicitly game-provided. AST checks require named values be used in print and area use a multiplication of dimensions; id task displays actual Python identity. Output bounded5000 chars, input12000, run timeout7s after45s initialization cap. Stop resets worker/pending requests. This prevents persistent UI blocking, not a multi-tenant security service; no server credentials in worker. Notebook uses a shared namespace within current worker; stop/reload requires rerunning cells.

## Progress and compatibility
Key mochi.farm.chapter1.v2, stable activity IDs, per-activity drafts/outputs, primitive Python values, world fields, equip/mute/language, timestamps. XP recomputed from unique completed IDs (8×50+100 full chapter), not mutable incremental counter. Old mochi.lesson1.progress.v1 remains untouched. Homepage supports either format and12-activity restoration; auth remote firstMorning imported without interpreting old5 as12. Existing auth bridge preserved; new state nested under firstMorning, previous remote fields retained. Completion union on merge, newer content preferred. Mocked auth merge/load/save verified; real account/OAuth not newly verified.

## Scene/assets
art/farm-first-morning.webp image edit removes lower bed; original master retained. Prepared soil reuses original image clipped to same bed polygon; plants/grid/dynamic text/chest/sign are SVG layers. art/farm-rewards.webp transparent three-cell atlas provides sprout rank, First Hello and daisy pin. farm-rank-gallery.webp supplies approved future medallion references rendered locked. Mochi separately grounded, shrinks on narrative entry, equipped pin rendered on hat. No per-activity whole-scene regeneration.

## UI
Focus-on-farm shows the full contained illustration; Escape returns to controls. Phone<760 scene46% available visual viewport. Tablet760–1199 scene62%, practice controls below in two columns. Desktop>=1200 sidebar350–430px. Viewport listener handles keyboard resize; native validation pending. Dialogs native modal/focus restoration, captions/live statuses, reduced motion and explicit mute. Actual effects are synthesized short chime/confetti; no recorded/pitched voice or unimplemented ambient crossfade claimed. English/Arabic authored copy, English badge identity labels, Python LTR.

## Checks
- python devpost/little-acres/check-first-morning.py (Python Playwright + Chromium): all12 activities, error case, file .py export/open, .ipynb export, no duplicate XP, reload/pin,320/390/820/1180/1440 widths, Arabic direction, Stop.
- python devpost/little-acres/check-first-morning-edge.py: hardcoded-answer rejection, timeout/restart, mocked account merge, new homepage progress, storage warning.
- node devpost/little-acres/check-public-map.cjs; check-map-islands.cjs; check-map-nature.cjs; check-map-water-fallback.cjs.
- Historical check-chapter-flow/check-chapter-language target old bounded prototypes; not proof of the new chapter.

## Publication
Repository mochi-coding-lab/mochi-coding-lab.github.io; existing branch pushes main. Pages deploys public/ only, workflow_dispatch-only. No publish authorized in this implementation step. Serve public/ locally for review. Original pre-redesign first-lesson preserved in archive/lesson-before-first-morning/; prior planning archived separately. Legacy helper files remain to avoid breaking older prototypes; new chapter does not load chapter-engine.js.

## Release status
Owner explicitly requested publication on2026-10-26. Chapter1 application f12ad5a deployed via release4b8f73f; GitHub Pages run40283388308 reports Success. Public build exactly matches tested f12ad5a. Manual-only publishing restored for future edits. Direct Pages HTTP verification from this cloud remains proxy-blocked; owner device review is next. Real-account/native-device/learning validation remains pending.
