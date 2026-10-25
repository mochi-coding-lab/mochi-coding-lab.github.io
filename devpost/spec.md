---
doc: spec
status: draft
updated: 2026-10-25
---

# Mochi — current technical plan

This current-state summary is reconciled from source, tests and owner decisions. Historical implementation notes remain in little-acres/spec.md below its current summary.

## Architecture and source of truth
- Framework-free HTML/CSS/JavaScript static site; no package installation or backend server is required for local guest development.
- Maintained site sources: devpost/little-acres/. Deployable files: public/.
- Regenerate public/ with node devpost/little-acres/build-public.cjs. Its explicit allowlist excludes planning documents and review screenshots.
- index.html is the single responsive living map for phone, tablet and desktop. phone.html only redirects legacy links to index.html; feature controllers are shared.
- first-lesson.html owns the existing five-activity lesson and bilingual UI; chapter-engine.js is a bounded print/assignment/arithmetic/comment interpreter, not general Python.

## Phone lesson and grid
lesson-phone.css supplies the approved farm-first phone split. The original optimized restoration-shell-1600.webp and play-mochi-512.webp remain in use. Image-relative coordinates and ResizeObserver/VisualViewport handling keep Mochi on the dirt path outside the entrance gate as the scene scales. The farm-square-grid is decorative, noninteractive and phone-scoped; its size follows artwork scale. There is no arrival controller, phone-walk.js, route/step parser, numbered movement path or generated paving asset in the active build.

## State and services
Existing lesson state and draft handling remain intact. Guest progress uses browser storage; auth-client.js provides the existing Supabase account/progress bridge with browser-safe public configuration. Do not add private credentials to repository files. OAuth/provider and real-account verification remain separate pending work.

## Validation commands
- node devpost/little-acres/check-public-map.cjs
- node devpost/little-acres/check-map-islands.cjs
- node devpost/little-acres/check-map-nature.cjs
- node devpost/little-acres/check-map-water-fallback.cjs
- node devpost/little-acres/check-chapter-flow.cjs and check-chapter-language.cjs cover the related earlier chapter runtime; they do not replace a first-lesson.html browser playthrough.
- Check the selected first lesson in a real browser at narrow phone widths and desktop: five activities, errors, Next/Finish, visible scene feedback and map return. Test language behavior when relevant. Keep physical-device/keyboard and assistive-technology outcomes separate from emulation.
- Legacy little-acres/check.cjs targets an obsolete homepage; do not call it proof of current homepage readiness.

## Local preview and publication
Serve public/ with python3 -m http.server 8080 --bind 127.0.0.1 --directory public from the repository root. A cloud loopback address is not a phone-accessible shared preview; use screenshots for review unless an actual accessible preview is provided.

Keep using the existing branch and push changes to main. .github/workflows/pages.yml has workflow_dispatch only. A commit or push must not publish the site. Run that workflow only after the owner explicitly requests publication. Preserve other concurrent repository changes; never force-push to work around them.

## Current limitations and next work
Lesson/grid design editing is paused; the desktop map sharpness correction is authorized. Grid use/movement remains deferred; no movement implementation is authorized by the presence of the grid. Native phone keyboard/touch/accessibility review remains pending. Real account/provider checks are not claimed passed. Later islands/finale, curriculum expansion and a general Python runtime are outside the current proof-of-concept.

## Desktop map sharpness — 2026-10-24
world-map-living.js now composites animated water only over the static original map. WebGL requests an alpha canvas with straight alpha and outputs the conservative water mask as alpha; dry land is transparent rather than resampled/repainted. The subtle foliage warp is removed from this canvas pass. Canvas2D clears to transparency each frame and draws only masked displaced water; fallback resolution increases from 960×640 to source 1536×1024. Existing visibility/pause/reduced-motion/vision behavior remains. Homepage script version v4 refreshes cached renderer code. No new/generated/upscaled art or phone/lesson design changes.

## Map audio startup — 2026-10-24
The unified homepage attempts playback immediately on load at all widths, using the existing recording bundle. This supersedes the former separate-page loading paths. Map controls are mounted first and remain usable while audio decodes. world-map-nature.js v5 tries AudioContext.resume immediately; browsers may require user activation, so trusted pointer/click/key and Sound presses retry then. First press when suspended/pending/failed enables playback rather than muting. Explicit mute, visibility suspend/resume and duplicate-loop prevention remain intact. Phone HUD exposes actual playback state. No browser-policy bypass or claim of guaranteed unprompted sound on every browser.

## Grounded outside-gate character — 2026-10-24
Use the same image-space ground point (54% across,70% down) on phone and desktop. Placement respects object-fit cover on phones, contain/letterboxing on desktop, and focus-mode scene resizing. Apply the sprite’s 13px bottom transparency correction at rendered scale, disable idle vertical bobbing on the scene character and add a small contact shadow. Preserve original image, square grid, lesson controls and logic. Tablet layout remains unchanged. Commit/push only.


### Approved responsive lesson release - 2026-10-24
Owner resumed layout editing and approved the current phone scene/sheet with compact controls and 56px Mochi, plus a separate sidebar from 760px upward (250-380px wide). This supersedes the previous design pause for these changes. Phone scene uses the owner screenshot reference; desktop image-grounded character remains. Existing manual-only publication policy, map/audio changes and lesson behavior retained. Owner explicitly requested commit, push and publish. Public checks pass; release verification pending.

## Unified responsive homepage — 2026-10-25
index.html owns one map DOM and loads each shared controller once. Responsive CSS and matchMedia at 680px choose presentation, with no navigation. A picture/source chooses existing phone WebP artwork while desktop uses the original full-resolution PNG; the restoration toggle also updates the phone source. world-map-mobile.js supplies pan/zoom and world-map-phone.js supplies the compact HUD using the same audio/progress controllers as desktop. phone.html is a query/hash-preserving compatibility redirect to index.html, with a fallback link. Close the phone island list on desktop transition; stop island-row click bubbling so its newly opened detail dialog stays open. Map completed-progress text to restored phone HUD state. Retain one renderer/player and native autoplay restrictions.

Origin remote now points to https://github.com/mochi-coding-lab/mochi-coding-lab.github.io.git. GitHub metadata confirms the root Pages URL. Preserve workflow_dispatch-only deployment. Real-account provider redirect allowlists for the new origin remain unverified; no configuration change or real sign-in is claimed.

## Tablet lesson controls below the farm — 2026-10-25
Owner requested tablet controls underneath the farm image. At viewport widths760–1199px, use a full-width contained farm above a lower workspace with lesson and code windows side by side. Keep the phone scene/sheet below760px and desktop sidebar from1200px. Anchor Mochi to the farm artwork on tablets as the scene changes size; keep speech and variable/area feedback in the farm region. Focus-on-farm expands the scene. This supersedes the earlier tablet-sidebar decision only. Existing five activities and homepage behavior remain unchanged. Commit/push only; not published.
