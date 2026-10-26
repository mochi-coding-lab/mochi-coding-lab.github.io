---
doc: scope
status: draft
updated: 2026-10-25
---

# Mochi — current project scope

This is the maintained record of current decisions, reconciled with the project and owner feedback. Confirmed decisions below retain their approval; unresolved items remain pending. Updating this document does not invent blanket phase sign-off or restart discovery.

## Purpose and audience
Help beginner learners connect small pieces of Python code with visible results in Mochi’s farm. Keep the natural illustrated farm and its character central, particularly on phones. This project remains separate from BubblyCue.

## Current proof-of-concept boundary
- A five-island world map; only Island 1 has the existing playable beginner lesson. Other islands remain explicitly upcoming.
- One five-activity introductory Python lesson, with learner-written code, Run, visible output, optional help and English/Arabic presentation.
- Activities: print a greeting; assign and print a greeting variable; calculate and print area; use a comment; combine a name variable, output, arithmetic and a comment.
- Phone lesson: farm and Mochi remain visible above the scrolling task/editor. Desktop keeps the approved right-side workspace.
- Original natural dirt/grass artwork and a simple noninteractive square grid. Keep Mochi standing on the dirt path outside the farm entrance gate in the current lesson.
- Preserve existing guest progress, account bridge and map-return behavior; do not treat an unverified signed-in flow as tested.

## Latest owner decisions
- Pause further lesson/grid redesign until the owner resumes it.
- Keep only the visual grid. Character movement and how the grid will be used are deferred decisions.
- Remove the extra bridge-to-door activity, move commands, route numbers and arrival gate.
- Reject decorative colored boards, paving patches and the repainted whole-ground artwork.
- Commit and push to the same existing repository branch/main workflow; publish only on explicit request.

## Outside the current agreed build
No new islands, movement curriculum, extra pre-lesson activity, full Python runtime, fabricated unlocks, new authentication providers or automatic publication. Earlier tiny-shop, pet-supplies, cosmic-egg and bottom-dock concepts are historical, not current requirements.

## Remaining work
Owner review/resumption of Lesson 1; any later movement requirements; physical-phone/keyboard/accessibility validation; targeted account/provider checks if included in the agreed demo; learning wrap-up/app map and Phase 6 submission preparation. A working agreed prototype is the release target, not implementation of all five islands.

## Related records
- [Current product requirements](prd.md)
- [Current technical plan](spec.md)
- [Current delivery checklist](checklist.md)
- [Session record](resume.md)
- [Historical planning archive](archive/planning-before-sync-2026-10-23/scope.md)


### Approved responsive lesson release - 2026-10-24
Owner approved tablet/desktop sidebar with full contained farm, and the screenshot-led phone layout: fixed farm scene above independent scrolling lesson/editor sheet, compact controls, 56px Mochi. Sidebar begins at 760px with 250-380px rail; below 760px uses phone scene/sheet. Supersedes older phone styling sizing in this release. Owner explicitly authorized commit, push and publish. Local Chrome reviewed at phone 466x790 and tablet 820x1180; public asset/script/progress checks pass. Remote manual-only Pages policy and other map/audio changes preserved during integration. Release verification pending deployment.

## Unified responsive homepage — 2026-10-25
Owner requested merging the approved phone and desktop homepage into one responsive page to eliminate duplicate feature maintenance. index.html now serves both layouts with shared map, audio, progress and account controllers; no screen-size redirect. phone.html remains only a compatibility redirect. Preserve the approved full-screen phone map and desktop presentation. Commit/push only; this merge is not yet published.

The owner transferred and renamed the repository to mochi-coding-lab/mochi-coding-lab.github.io. The configured public address is https://mochi-coding-lab.github.io/. Repository and address confirmed via GitHub; direct Pages access from this environment remains blocked. No two-repository publishing arrangement was configured.

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
