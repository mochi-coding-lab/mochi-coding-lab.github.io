---
doc: prd
status: draft
updated: 2026-10-25
---

# Mochi — current product requirements

Current record as of 2026-10-24. This replaces the cosmic-egg document as the active requirements reference. Confirmed decisions, implemented behavior and pending choices are distinguished below; the consolidated document has not been given blanket phase approval.

## 1. Learning experience
For beginners, keep each task small and let learners write every line themselves. Run should show the result in Output and Mochi’s speech or existing scene feedback. Examples and hints support learning; they must not insert or repair learner code automatically. Do not imply that every print statement reconstructs the farm or that this bounded interpreter runs arbitrary Python.

## 2. Entry and map
- Desktop uses the existing living world map. Phones use the existing lean phone map, entered through the current mobile redirect.
- Island 1 enters first-lesson.html. Islands 2–5 stay upcoming and unavailable for lesson entry.
- Keep guest entry and map-return links. Account entry is optional; preserve the existing bridge without expanding authentication scope.
- The longer restoration story connects five islands and the beacon; later lessons and the finale are future work.

## 3. Existing Lesson 1 sequence
1. Say hello: learner writes print(...) with a nonempty string.
2. Give it a name: assign greeting and print that variable’s value.
3. Numbers and arithmetic: assign lengths, calculate area by multiplication and print it.
4. Leave a note: include a comment and a printed message.
5. Put it together: combine a name variable, output, arithmetic and a comment.

Preserve the implemented concept checks, manual Next/Finish progression, independent drafts, error handling, language switching, completion and saved progress. Code stays left-to-right in both languages. Do not conflate these five activities with five finished islands.

## 4. Scene and layout
- Keep the natural farm image, cottage, garden, bridge, water and Mochi; rejected paving artwork is removed.
- Phone: fixed visible farm/Mochi scene above a separately scrolling task/editor; compact controls; Run remains usable; explanations are available on demand.
- Desktop: preserve the approved right-side lesson/editor rail and focus mode.
- Mochi stands on the dirt path outside the farm entrance gate using image-relative placement that respects scaling/cropping on both phone and desktop. Its feet contact the ground; remove floating bobbing and account for transparent sprite padding.
- Show only a noninteractive square-line grid over the farm. Its current purpose is a visual reference, not a working movement system.

## 5. Explicitly deferred or rejected
Movement commands, bridge-start gameplay, exact movement counts, path/destination selection and any movement lesson remain undecided/deferred. The added arrival activity was rejected and removed. Do not add movement behavior merely because a grid is visible. Decorative colored square boards, the small paving patch and the repainted playground-like ground were rejected.

## 6. Progress, accounts and feedback
Guest progress remains browser-local. The existing Supabase integration supports account/progress behavior where configured; real signed-in cross-session validation and Google provider setup are not newly verified. Never create accounts, send reset emails or enter real credentials merely to demonstrate the interface. Preserve current local-save fallback/error behavior.

## 7. Acceptance checks
- Existing five activities run to completion with learner-shaped solutions; invalid input produces useful errors.
- Mobile farm, character, speech, variable and area feedback remain visible; controls and code editor work at narrow widths.
- English/Arabic switching preserves code/state; Python stays LTR.
- Grid is visual-only, original artwork is loaded, and no movement prelude or move command is present.
- Desktop remains visually unchanged by phone edits.
- Future islands do not unlock unsupported lessons; returning to the map preserves genuine progress.
- No deployment occurs during commit/push-only editing.

## 8. Review and delivery state
The owner has paused lesson/grid redesign; on 2026-10-24 they authorized a focused desktop map sharpness fix. The current map, grid-only lesson and background-audio changes were published at the owner’s explicit request on 2026-10-24. Further edits remain commit/push-only until another explicit publication request. Manual deployment is permitted only after an explicit owner request. Continue Phase 5 build/review, then Phase 6 demo/repository/submission work. Planning reconciliation does not imply all requirements or submission tasks are complete.

See [scope](scope.md), [technical plan](spec.md), [checklist](checklist.md) and [historical PRD](archive/planning-before-sync-2026-10-23/prd.md).

## Desktop map sharpness — 2026-10-24
Keep the original island artwork and layout. Animated water must not replace dry land with a lower-resolution full-scene canvas. Preserve source-resolution land detail; retain moving water, pause/reduced-motion behavior, restoration view and island entry restrictions. Phone map and lesson are outside this change. Commit/push only; do not publish.

## Map background sound — 2026-10-24
The phone map must actually initialize the existing coastal audio, not only show a music icon. Attempt background playback immediately when either map opens. Resume after the first trusted tap or Sound press only when browser policy blocks autoplay. A blocked first play must not be interpreted as mute. Explicit mute persists through later interactions; show the true playing/waiting/error state in accessible sound controls. Fetch the phone recordings asynchronously at startup so autoplay can begin as soon as decoding finishes; keep map controls usable while audio loads. Existing licensed wave, breeze and bird recordings/credits remain unchanged. Commit/push only; do not publish.


### Approved responsive lesson release - 2026-10-24
Owner approved tablet/desktop sidebar with full contained farm, and the screenshot-led phone layout: fixed farm scene above independent scrolling lesson/editor sheet, compact controls, 56px Mochi. Sidebar begins at 760px with 250-380px rail; below 760px uses phone scene/sheet. Supersedes older phone styling sizing in this release. Owner explicitly authorized commit, push and publish. Local Chrome reviewed at phone 466x790 and tablet 820x1180; public asset/script/progress checks pass. Remote manual-only Pages policy and other map/audio changes preserved during integration. Release verification pending deployment.

## Unified responsive homepage — 2026-10-25
Use one index.html for all screen sizes. At 680px and below retain the approved immersive phone map, pan/zoom, compact HUD, island sheet and Start action. Above that breakpoint retain the existing desktop presentation. Resize in place without navigation or duplicate controller initialization. Share progress, availability, sign-in and sound behavior; phone.html only forwards old links, preserving query/hash. Completed Island 1 must show restored state in the phone HUD. Scope is homepage consolidation, not lesson redesign. Commit/push only; owner publication approval is still required.

Current hosting is the organization repository mochi-coding-lab/mochi-coding-lab.github.io at https://mochi-coding-lab.github.io/. Live browser verification and real-account OAuth redirect configuration remain distinct from local tests.

## Tablet lesson controls below the farm — 2026-10-25
Owner requested tablet controls underneath the farm image. At viewport widths760–1199px, use a full-width contained farm above a lower workspace with lesson and code windows side by side. Keep the phone scene/sheet below760px and desktop sidebar from1200px. Anchor Mochi to the farm artwork on tablets as the scene changes size; keep speech and variable/area feedback in the farm region. Focus-on-farm expands the scene. This supersedes the earlier tablet-sidebar decision only. Existing five activities and homepage behavior remain unchanged. Commit/push only; not published.

## Larger tablet farm — 2026-10-25
Owner requested the tablet farm take more space than the controls. Tablet760–1199px scene now occupies62% of viewport height; the shorter lesson/code windows remain underneath and independently scrollable. The farm image fills the scene with a centered cover crop instead of portrait letterboxing; artwork-relative Mochi placement follows the crop. Focus-on-farm still reveals the full contained illustration. Phone and desktop layouts are unchanged. This supersedes the prior48%-height contained tablet scene. Commit only while organization push access is blocked; not published.

## Responsive homepage/tablet release — 2026-10-25
The owner approved publication of the unified homepage and larger tablet farm. Push succeeded after connector installation; Pages run40223906581 reports Success for release ae516f5 (application dbb96b0). Earlier unpublished/push-blocked notes are superseded. Future edits remain commit/push-only until publication is explicitly requested.

## Full-resolution responsive map — 2026-10-25
Owner reported poor live map quality. Removed the phone picture source advertised as360px: it selected480–900px artwork for a1120px pannable/zoomable scene. All viewport sizes now use1536×1024 original-detail lossless WebP for both abandoned and restored map imagery; partial restoration uses the same full-detail restored asset. Original artwork unchanged; lossless decoded RGB pixels verified against PNG sources. Vision toggle shares the same high-resolution paths. Build allowlist updated, phone/desktop source selection and interactions checked. Asset sizes are about2.6/2.8MB; no claim of added detail beyond the original resolution. Commit/push only; this correction needs explicit publication approval.

## Full-resolution map published — 2026-10-25
Owner explicitly requested deployment of the full-resolution map fix. Pages run40224663297 reports Success for release33d42e8; public files exactly match tested application f82bf5a. Both map states and the partial-restoration layer use original1536×1024 lossless artwork at all screen sizes. Used established one-time exact-message-gated release because deployment API remains cloud-network blocked; restored workflow_dispatch-only afterward. Future pushes do not publish. Cloud direct Pages access remains blocked, so physical-device visual review is still the owner’s next check.

## First-day farm curriculum direction — 2026-10-25
Owner approved covering every topic in the supplied COMP106 Topic1 resource, with as many farm-related activities as needed; learner choices for farm name/crop/supply quantities; editable scene objects, including creating a bed on unprepared ground before seeding. This supersedes the fixed-five-exercise target and original-artwork-only restriction for the proposed redesign. Existing published five-activity lesson remains current implementation until replaced and tested. Proposed sequence/source mapping: lesson1-first-day-plan.md. Sequence, APIs, runtime and individual activities remain proposals; no new gameplay/artwork implemented or published.

## All-activity design preview — 2026-10-25
A separate interactive design preview now covers all12 proposed activities: little-acres/lesson1-design-preview.html (excluded from public build). Navigation and before/after simulations support farm-name, crop, seed-count and bed-size choices. It does not execute Python or validate learning; APIs, gate/soil/sign/chest overlays, notebook and object inspector are concepts, not final features. Existing live lesson unchanged. Chromium checks cover all12 views, custom name/seed quantity and phone/tablet overflow without JS errors. Review export /tmp/mochi-first-day-interactive-preview.html embeds assets; two six-activity overview sheets and screen-size previews are local artifacts.


## Master references and placement plan — 2026-10-26
Owner authorized master-reference selection and interaction-location planning before art generation. Selected existing restoration-shell-1600.webp farm and play-mochi-512.webp character as visual masters. Proposed locations: reuse lower bed for editable planting patch; name sign on courtyard below cottage/right of bed; supply chest inside fence/right of gate; reuse existing entrance with Mochi outside. Preserve perspective, warm painterly style and natural ground; keep required targets within shared phone crop. Notebook/inspection remain interface/close-up rather than large landscape props. Full plan: design/lesson1-scene-plan.md; annotated reference: design/lesson1-scene-plan.html (not public). Chromium320/390/430 phones,820 tablet and1440 desktop: proposed zones retained inside crop; no overflow/JS errors. Locations need owner review; no final objects generated, original raster altered or live lesson changed. No publication.
