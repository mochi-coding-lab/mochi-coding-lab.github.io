---
doc: prd
status: draft
updated: 2026-10-26
---

# Mochi — current product requirements

## Learning journey
Mission before code. Entry walks Mochi into the grounds without requiring unfamiliar game calls. Each activity shows its purpose, explains the concept with an example, then opens practice. Examples/hints never overwrite learner code. First guided print has a starter; independent greeting starts blank and requires different words. print writes actual Python output; this game maps it to a board. Later variable bindings and game-provided farm tools are explicitly explained.

## Chapter1 sequence and Topic1 coverage
1. Supported welcome: print, quotes, parentheses, case sensitivity.
2. Independent welcome: First Hello and flower pin.
3. Name the farm: string assignment, print with multiple items, assign before use.
4. Label supplies: identifiers, reserved keywords, meaningful names, case sensitivity.
5. Choose crop/quantity: strings/numbers, assignment/reassignment.
6. Measure area: variables/expressions/multiplication, bounded display dimensions1–6 by1–4.
7. Prepare ground: introduced game API arguments, scene response.
8. Plant chosen seeds: reuse values, positive count within area.
9. Morning script: comments/order/.py save/open/run; indentation introduction.
10. Inspect crop: object references and real id(), stable only during object lifetime.
11. Notebook-style two-cell Python session: first-cell value used by second, rerun, export .ipynb. Not falsely labeled Jupyter itself.
12. Workbench: Python history/features/CPython/portability/libraries, IDE/IDLE and examples, official Python/Anaconda/Jupyter installation/launch guide, recap. Installing software is optional and not claimed performed by game.

## Visual language and layout
Parchment workspace, forest-green panels, botanical gold accents and illustrated medallions are the approved journey direction. Use the approved close storybook composition and plush character; start with the neglected cottage, sad Mochi, dream bubble and guided visits before showing the full activity plan. The plot begins as wild ground. Sign/chest/current plant layers are functional vector art and subject to owner visual review. Farm remains focus: phone46% visible height, tablet62%, desktop large scene with right workspace. No all-ground grid/paving or movement prelude. Code LTR under Arabic RTL. Optional chime, mute and reduced-motion behavior. Captions convey success without sound.

## Rewards and progression
First Hello requires independent greeting. Other badges: A Name of Our Own, Supplies Sorted, Room to Grow, First Sprouts, First Morning Ready. Unlock once per stable activity ID. Repeating/resetting code does not farm XP; hints/retries never subtract it. Rank is a chapter milestone, not arbitrary XP. Later ranks show locks; only full Chapter1 awards Farm Newcomer. Flower pin can equip/unequip and survives reload. Reward card has Continue/Return/Close. Full chapter =500XP under current checkpoint scheme.

## State and map
Maintain existing old progress unchanged. New state includes completedIDs, drafts, values, output, world state, mute/language/pin. Homepage prefers valid new progress and scales restoration by12, not5. Signed-in merge preserves old fields under firstMorning; real-account verification pending. Storage errors visibly warn but do not block play. Other islands stay unavailable even after Chapter1 completes.

## Runtime behavior
Actual Python executes in a worker. Stop or timeout terminates execution and permits restart; notebook cells then need rerunning. Bound code/output; validate meaningful Python AST/value effects, not exact source answers. Failed runs show feedback and cannot earn rewards or commit farm changes. Browser-first Python load is about14MB, served with app assets; show loading/retry behavior.

## Verification and delivery
Automated real Chromium full chapter and edge tests, desktop/tablet/phone, Arabic/LTR, persistence/no duplicate XP, file export/import, worker stop/timeout and mocked auth merging. No real-account/native-device/learning outcome claim. Owner preview before publication. Historical PRD archived in archive/planning-before-first-morning-2026-10-26/.

## Release status
Owner explicitly requested publication on2026-10-26. Current Chapter1 application a8e2d28 deployed via release97518a7; GitHub Pages run40286599016 reports Success. Public build exactly matches tested a8e2d28, including activities5/6 visual feedback fixes. Manual-only publishing restored for future edits. Direct Pages HTTP verification from this cloud remains proxy-blocked; owner device review is next. Real-account/native-device/learning validation remains pending.

## Activities5–6 visible feedback correction — 2026-10-26
Owner reported missing visual results in activities5/6. Seed supplies previously only changed a tiny number. Added crop illustration/name, readable quantity and individual seed units beside the chest; supply text now remains visible alongside bed stats. Fixed measurement hidden-state toggle: undefined prepared state passed to toggleAttribute could alternate visibility on redraw. Added stable boolean visibility, full plot boundary and length/breadth/area labels, including1×1 (no interior lines) and replay after soil preparation. Success dialogue now describes chosen crop/count or dimensions/area. Planning outline is still not prepared soil; activity7 performs preparation. Browser regression covers crop/count changes, measured4×3,1×1, reload and prepared-bed replay. No learning checks, XP or progression changes. Committed/pushed only; not yet deployed.

## Activities5–6 fix published — 2026-10-26
Owner explicitly requested deployment of activities5 and6 corrections. Pages run40286599016 reports Success for release97518a7, application a8e2d28. Crop/seed display and persistent dimensioned measurement outline are now published. Restored workflow_dispatch-only after one-time exact-message-gated release. Earlier unpublished-fix note superseded; future edits still need explicit publication approval. Direct Pages cloud access remains restricted; owner device review is next.
Deployment: https://github.com/mochi-coding-lab/mochi-coding-lab.github.io/actions/runs/40286599016 . Review: https://mochi-coding-lab.github.io/first-lesson.html?v=a8e2d28 .

## Guided abandoned-farm opening — 2026-10-26 — current local review
The owner rejected the initial close-view implementation because the character, framing and static appearance differed from the approved storybook concept. The supplied video is a movement/personality reference, not a replacement activity. Current direction: matching plush Mochi/blue-ribbon straw hat, neglected cottage, sad arrival, a thought bubble showing the imagined green farm, then Mochi-led entry and visits to the sign, supply chest, wild garden patch and journal/workshop. The five-section plan lists all12 existing Topic1 activities before starting; explanation still precedes coding. No gate commands or new topics are required.

Implemented locally: six-pose transparent character atlas (sad, hopeful, alternating walk poses, working, celebration), timed walk/tool/action sequences after valid real Python, drifting leaves, swaying weeds, butterfly, opening door, illustrated dream bubble, and paced bilingual walkthrough with Back/Skip/replay. Garden creation removes weeds; measured area, chosen crop/count, planting and watering keep actual learner values. Notebook cells show the learner’s note on the journal. Replay retains earned XP/drafts/current activity; no duplicate reward. Phone/tablet controls remain beneath the scene; desktop uses the parchment sidebar. The first rough round-character close-view pass is superseded and was never deployed.

This is layered 2D illustration with six poses and procedural effects, not continuous video/3D character animation. The background cottage remains raster artwork; body poses/tools/effects/door and garden states move separately. Fine hand/facial animation, more pose frames and owner visual acceptance remain pending. Later islands stay locked. Saved progress uses the same v2 key; old progress retained. Current published app remains a8e2d28; this revision is commit/push only, no deployment requested.

## Open-eye Mochi replacement and authorized release — 2026-10-26
Owner approved the regenerated open-eye character sheet and explicitly requested replacing all closed-eye character instances, committing/pushing and deployment. All six live farm poses (sad, hopeful, two walk poses, working and celebrating) now use mochi-farm-poses-open.webp; reward portrait uses mochi-farm-happy-open.webp. New filenames avoid stale cached character art. Original generated art remains in workspace/history. Sheet is1536×1024 with transparency and512px cells; pose geometry, runtime and saved progress unchanged. Existing legacy round map character already has open eyes. Deployment includes the previously committed abandoned-farm walkthrough and motion build b37902d; publication is authorized for this release only. Verification and deployment evidence follow below.
