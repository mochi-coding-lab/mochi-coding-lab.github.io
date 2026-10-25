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
