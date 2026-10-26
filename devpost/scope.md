---
doc: scope
status: draft
updated: 2026-10-26
---

# Mochi — current project scope

## Confirmed direction
The owner approved the parchment/forest-green storybook reward style for the journey and requested building Chapter1. Teach through mission→explanation→guided practice→visible result→independent practice. No unexplained gate/object commands as the opening. Keep learner choices for farm name, crop and quantities; editable artwork is authorized. Five-topic/five-island long-term blueprint remains in design/curriculum-rewards-master-plan.md, with later chapter details still proposals.

## Current build
- One responsive world map; only Island1 playable, four future islands locked/upcoming.
- Chapter1 at first-lesson.html now has12 activities: supported greeting, independent First Hello, farm name, supply identifiers, crop/seeds, area, prepare bed, plant, morning script/comments, object identity, notebook cells, tools/setup recap.
- Real browser-side Python via self-hosted Pyodide0.27.7 / Python3.12.7 in a terminable Worker. Existing bounded engine remains only for historical prototypes/tests.
- Scene: close storybook abandoned farm with matching plush Mochi, emotional arrival/dream and guided tour; learner actions prepare/plant/water the initially wild patch. Flower-pin reward, name sign and supply chest. Current sign/chest/plants use simple vector layers; richer standalone object art remains polish, not fully finished asset set.
- Phone visible farm above scrolling workspace; tablet760–1199px farm62% height with controls underneath; desktop sidebar. English/Arabic, Python LTR, visual-viewport sizing.
- First Hello after independent greeting:50XP once, illustrated badge, sound/sparkles, optional equippable flower pin. Six Chapter1 achievement statuses, current/locked rank collection. Eight50XP checkpoints plus100XP chapter completion bonus =500XP. Farm Newcomer requires all12 activities; later ranks locked.
- Guest progress/drafts/rewards persist separately under mochi.farm.chapter1.v2; old five-step saves remain intact. Account bridge merges firstMorning into prior progress record; actual real-account cross-session validation still pending.

## Boundaries
No new playable islands, full later-topic implementation, multiplayer, leaderboard, paid rewards, forced installs, generated voice acting, or automatic publication. No new movement curriculum; entry is narrative. No claim of measured learning or physical-device accessibility/speaker validation.

## Remaining review
Owner reviews art/layout/pacing; native keyboard/touch and real-account checks; real learner comprehension; finalized later curriculum/reward thresholds; demo and learner-authored submission. Existing isolated review pages remain excluded from deployment.

See prd.md, spec.md, checklist.md and resume.md. Earlier plans are preserved in archive/planning-before-first-morning-2026-10-26/.

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
