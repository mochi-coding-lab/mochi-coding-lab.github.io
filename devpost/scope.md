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
- Scene: same farm composition with lower bed initially unprepared; learner actions prepare/plant/water it. Original Mochi, flower-pin reward, name sign and supply chest. Current sign/chest/plants use simple vector layers; richer standalone object art remains polish, not fully finished asset set.
- Phone visible farm above scrolling workspace; tablet760–1199px farm62% height with controls underneath; desktop sidebar. English/Arabic, Python LTR, visual-viewport sizing.
- First Hello after independent greeting:50XP once, illustrated badge, sound/sparkles, optional equippable flower pin. Six Chapter1 achievement statuses, current/locked rank collection. Eight50XP checkpoints plus100XP chapter completion bonus =500XP. Farm Newcomer requires all12 activities; later ranks locked.
- Guest progress/drafts/rewards persist separately under mochi.farm.chapter1.v2; old five-step saves remain intact. Account bridge merges firstMorning into prior progress record; actual real-account cross-session validation still pending.

## Boundaries
No new playable islands, full later-topic implementation, multiplayer, leaderboard, paid rewards, forced installs, generated voice acting, or automatic publication. No new movement curriculum; entry is narrative. No claim of measured learning or physical-device accessibility/speaker validation.

## Remaining review
Owner reviews art/layout/pacing; native keyboard/touch and real-account checks; real learner comprehension; finalized later curriculum/reward thresholds; demo and learner-authored submission. Existing isolated review pages remain excluded from deployment.

See prd.md, spec.md, checklist.md and resume.md. Earlier plans are preserved in archive/planning-before-first-morning-2026-10-26/.

## Release status
Owner explicitly requested publication on2026-10-26. Chapter1 application f12ad5a deployed via release4b8f73f; GitHub Pages run40283388308 reports Success. Public build exactly matches tested f12ad5a. Manual-only publishing restored for future edits. Direct Pages HTTP verification from this cloud remains proxy-blocked; owner device review is next. Real-account/native-device/learning validation remains pending.
