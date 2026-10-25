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
