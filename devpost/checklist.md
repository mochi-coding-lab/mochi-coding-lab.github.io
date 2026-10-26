---
doc: checklist
status: draft
updated: 2026-10-26
---

# Mochi — implementation and delivery checklist

## Chapter1 implementation
- [x] Approved parchment/forest-green journey visual language in Chapter1.
- [x] Mission, explanation, supported practice and independent greeting before game APIs.
- [x] Twelve Topic1 activities and full supporting workbench/setup content.
- [x] Actual local Python runtime, meaningful validation and interruptible worker.
- [x] Editable farm name, crop, supplies and dimensions; create/plant/water bed.
- [x] First Hello, six achievement states,500XP maximum, chapter rank and locked later ranks.
- [x] Equippable persistent flower pin, optional chime/confetti and reduced motion.
- [x] Guest persistence, old progress retained, new map restoration count.
- [x] Existing account bridge retained with new nested state; mocked merge verified.
- [x] English/Arabic copy and LTR code, responsive phone/tablet/desktop.
- [x] Self-hosted runtime assets/licenses and explicit public build allowlist.

## Verified automatically
- [x] Real Chromium all12 activities and chapter completion.
- [x] Wrong capitalization and invalid/hardcoded learning answers cannot complete activities.
- [x] Real Python notebook values and id output; .py download/open and .ipynb export.
- [x] Reload, pin equipment, no duplicate XP, existing record preservation.
- [x] Worker Stop,7s timeout, restart and progress retention.
- [x]320/390 phone,820/1180 tablet,1440 desktop; no horizontal overflow, Arabic switch preserves code.
- [x] Mock account load/merge/save retains legacy fields; homepage reads new progress.
- [x] Storage-unavailable warning; guest can still enter/play.
- [x] Existing map assets/island availability/audio/water regression checks.

## Pending human review
- [ ] Owner reviews Chapter1 visual detail, pacing, new art and rewards.
- [ ] Actual phone keyboard/touch, assistive technology and device speaker review.
- [ ] Real signed-in cross-session progress and Google provider configuration/verification.
- [ ] Beginner comprehension observed independently; automation does not establish learning.
- [ ] Final art polish for vector sign/chest/plants if owner requests.

## Journey and shipping
- [ ] Implement next islands only after their curriculum/activity review; currently upcoming.
- [ ] Learning wrap-up/app map and learner-written hackathon submission.
- [ ] Demo recording and final submission verification.
- [x] Explicit owner publication request; Pages run40283388308 Success. Future publication still requires owner request.

Prior checklist/history preserved in archive/planning-before-first-morning-2026-10-26/.

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

Verification: check-farm-walkthrough.py passes sad→dream→entry→four locations→all12 plan, Skip/replay retention and phone/tablet/Arabic/reduced motion. check-first-morning.py passes all12 real Python activities, notebook/export/id, no duplicate XP, responsive/Arabic and Stop. Edge checks pass AST validation, timeout/restart, mock account merge, map progress and storage failure. Actual browser screenshots and walkthrough recording saved under /tmp/mochi-{abandoned,dream,tour-*} and /tmp/mochi-guided-farm-walkthrough.mp4; these are local build captures, not concept images. Local engagement capture draft saved as marketing/outputs/2026-10-26-checkpoint-mochi-farm-walkthrough.md; no social actions.

Motion-specific verification now passes: real Python success→chosen seed animation, invalid code triggers no success action, Stop cancels before world/XP commit, all12 action performances resolve, repeated practice does not duplicate XP, and320/390/820/1440 views keep the visible character frame above captions after viewport settling. Reduced-motion final states match. New walkthrough recording exported to /tmp/mochi-guided-farm-walkthrough.mp4.

## Open-eye Mochi replacement and authorized release — 2026-10-26
Owner approved the regenerated open-eye character sheet and explicitly requested replacing all closed-eye character instances, committing/pushing and deployment. All six live farm poses (sad, hopeful, two walk poses, working and celebrating) now use mochi-farm-poses-open.webp; reward portrait uses mochi-farm-happy-open.webp. New filenames avoid stale cached character art. Original generated art remains in workspace/history. Sheet is1536×1024 with transparency and512px cells; pose geometry, runtime and saved progress unchanged. Existing legacy round map character already has open eyes. Deployment includes the previously committed abandoned-farm walkthrough and motion build b37902d; publication is authorized for this release only. Verification and deployment evidence follow below.

Open-eye verification: all12 real Python activities, notebook/export/id, reload/equipment/no duplicate XP, responsive/Arabic and Stop pass. Guided walkthrough/replay/phone/tablet checks and existing map/island/audio/water checks pass. Atlas alpha/dimensions verified; active farm/reward HTML references only the new open-eye assets. Google sign-in/native-device learning validation remains separate.

## Open-eye Mochi and guided walkthrough published — 2026-10-26 — latest release
Owner explicitly requested commit, push and deployment. Application9837735 (including the previously unpublished guided abandoned-farm walkthrough) was deployed via release75f11e3. GitHub Pages run40308963207 reports Success: https://github.com/mochi-coding-lab/mochi-coding-lab.github.io/actions/runs/40308963207 . All six farm poses and the reward portrait use new open-eye assets; all12 activities, guided tour and saved progress remain active. Public files match tested application9837735. Restored workflow_dispatch-only after the one-time exact-message-gated release; future pushes do not deploy. Direct Pages access from this cloud still returns proxy403, so owner physical-device review is separate from Actions success.
Review: https://mochi-coding-lab.github.io/first-lesson.html?tour=1&v=9837735 . Earlier local-only/unpublished notes for the walkthrough are superseded by this release. Phase6 shipping actions completed for this release; final demo/submission and real-account/native-device/learner checks remain outstanding, not blanket phase completion.

## Standalone fluid-motion farm-name demo — 2026-10-26
Owner requested a single runnable HTML/CSS/JS file demonstrating a70%-height farm and30% dark parchment editor, offscreen arrival, smooth1.2s cubic-bezier walking with separate facing/waddle layers, sign action/reveal, star particles,50XP and glowing Chapter2 button. Implemented as little-acres/farm-motion-demo.html with embedded art and no dependencies/network. Narrow farm_name assignment validation is intentionally a demo check, never eval or a claimed Python interpreter. The existing12-activity Python chapter remains the live game. Chapter2 button opens an honest demo-completion dialog; Chapter2 gameplay is not implemented/unlocked. This isolated demo is excluded from the public build allowlist, not a replacement curriculum or authorized deployment.

check-farm-motion-demo.py passes actual state order/translation, invalid input/literal-text safety, delayed sign reveal,50XP/Continue, cancellation on replay, reduced motion and320/390/820/1440/landscape70:30 layouts without horizontal overflow. HTML tested offline via browser set_content (managed browser blocks file:// navigation); no HTTP requests or JS errors. High-refresh animation uses composited CSS transforms and one bounded-DPR, delta-time Canvas loop paused while hidden;60fps is a target, not verified on physical devices.

## Demo movement consistency correction — 2026-10-26
Owner reported that the pushed standalone demo’s recorded motion looked robotic and inconsistent. Corrected that demo only: replaced emotion/seated-pose switching with a dedicated9-frame standing walk atlas, packed by matching hat-band scale/position; distance-driven reversible gait; continuously blended frame opacity/body weight; quintic acceleration/deceleration with distance-based travel duration; much smaller1.35° tilt; smooth idle/action/celebration transitions on the same standing character. Removed all scaleX direction flips: the short return is a backstep. The70:30 layout, narrow farm-name demo check,50XP and continuation dialog remain.

check-farm-motion-demo.py now samples actual rAF positions, verifies progressive acceleration/deceleration and monotonic travel without instant jumps, gait blending and no mirror flip, alongside existing offline/layout/validation/XP/replay/reduced-motion checks. All pass. New actual demo recording: /tmp/mochi-smooth-walk-v2.mp4. This is still illustrated2D animation, not a fully articulated3D/skeletal character or evidence of owner acceptance. Active12-activity lesson/deployed build9837735 is unchanged; no new deployment authorized. Source demo remains excluded from public build.

## All12 activities in the fluid-motion layout — 2026-10-26
Owner requested all Chapter1 activities previewed in the latest70%-scene/30%-dark-editor design, explicitly with an abandoned farm. Added isolated little-acres/chapter1-all-activities-preview.html (self-contained embedded art/content). Boarded cottage/neglected vines/wild ground remain the background throughout; healthy farm is restricted to the thought bubble. Reuses the corrected9-frame, distance-driven smooth character controller with no mirror flips or seated-pose snaps. Five-section activity menu allows direct review of all12 tasks; each has mission/concept/example/hint via Mochi, explain.

Distinct scene results: greeting, independent welcome/FirstHello/pin, farm name, quantity label, chosen crop/count/seed units, measured area, soil preparation, planted quantity, watering/script, crop inspector, notebook note, workshop recap. Changes accumulate in the preview’s in-memory model; existing game/account/storage untouched. Inspector explicitly leaves id() to the full Python game rather than fabricating an identity. Preview results use a narrow supported-text simulation and an explicit Show sample result path; this is not a Python interpreter or learning assessment. Sample setup can supply missing earlier scene prerequisites without granting completion/XP. .py save/open and valid .ipynb export available. Later chapters remain upcoming; no pretend Chapter2 unlock.

check-chapter1-all-preview.py verifies all12 results,5 sections, exact abandoned-background bytes, chosen name/crop/count, bed dimensions/preparation/planting/watering, journal/inspector/workshop, FirstHello/equip and500XP maximum/no duplicates, file save/open/notebook export, literal-text safety and offline320/390/820/1440 layouts with70:30 split. Live-game assets and deployment workflow unchanged. This review file remains excluded from public build; commit/push only, no publication requested. Actual full-motion review recording and screenshots prepared separately under /tmp. Owner visual/learning acceptance and real-device performance remain pending.

## Clearly dirty abandoned cottage — 2026-10-26
Owner rejected the all12 preview’s cottage as too beautiful/clean. Generated a stronger neglect edit from the same reference: dirty/streaked peeling plaster exposing brick, cracked dusty windows and cobwebs, damaged/missing roof tiles, crooked splintered shutter, dead vines/weeds, broken fencing/pots and a tipped bucket. Removed decorative flowers; retained warm storybook style and clear central ground for the character/props. New preview asset art/farm-neglected-morning.webp replaces only the embedded farmArt background across all12 activities. The clean farm remains only in the dream bubble. Original farm-abandoned-morning.webp and published game retained. No movement, tasks, save state, rewards or deployment changes; isolated review correction, commit/push only. Owner visual acceptance remains pending.

## Leafless trees and refreshed screenshots — 2026-10-26
Owner requested that trees behind the house have no leaves and screenshots be updated. Edited the same dirty-cottage master into art/farm-neglected-bare-trees.webp: nearby trees behind/around the cottage and the foreground framing tree now have bare branching silhouettes. Cottage damage, grime, dead weeds/debris and central gameplay clearing retained. Embedded the new background in the all12 design preview; the healthy dream image remains unchanged. Replaced drifting leaf shapes with subtle dust particles to fit the bare setting. Original background versions retained. Screenshots for all12 activities plus phone/tablet/desktop and the overview are refreshed under /tmp/mochi-bare-trees-*. No live-site deployment or task/reward changes authorized.

## Reference-matched parchment panel — 2026-10-26
Owner approved the neglected/bare-tree farm but rejected the dark outer panel beneath it, requesting the original cream-parchment/forest-green/gold reference while retaining open-eyed Mochi. Restyled the isolated all12 preview accordingly: warm cream textured paper, rounded top corners, subtle botanical branches, stronger green serif headings, muted green body text, soft gold primary/Next buttons and cream secondary controls. The code/notebook editor boxes remain dark forest green with warm text, and simulated output sits on light parchment. Existing70:30 layout retained; no movement/task/reward changes. All embedded WebP character/background assets byte-identical before/after styling.

All12 preview checks pass, including rewards/exports/offline/custom choices and320/390/820/1440 layouts. Refreshed actual screenshot overview /tmp/mochi-parchment-all12-overview.jpg and reference-style Willow Farm captures /tmp/mochi-parchment-{phone,desktop}.png. Supersedes the earlier dark outer-editor theme for this preview only. Current published game and deployment workflow unchanged; commit/push only, no publication requested. Owner visual acceptance remains pending.

## Owner design decision — isometric farm — 2026-10-26
The owner rejected the separate pannable-world preview and chose the supplied isometric-island screenshot to finish Chapter 1. Applied this direction to the existing first-lesson.html: new outlined isometric cottage/island art, open-eye Mochi, parchment Tasks overlay, compact XP, forest-green workspace and gold controls. Preserved mission/explanation/practice flow, all twelve activities, real Python Worker, existing progress key and rewards. This supersedes the close-camera visual direction for the current source build; earlier previews remain historical references. Later chapters are still locked/upcoming. No deployment authorized by this request.
Validation: all twelve real-Python activities, notebook/export, rewards, reload/equip/no duplicate XP, responsive English/Arabic and worker Stop passed check-first-morning.py. Phone and desktop screenshots captured locally; owner visual acceptance and physical-device performance remain pending. The abandoned cottage/bare deciduous trees remain; the new composition is a warm isometric illustration, not a fully articulated 3D world. This is a reference restyle rather than a new learner-evidence/marketing milestone.

## Isometric Chapter 1 release authorized — 2026-10-26
Owner explicitly requested deployment and a nonempty farm background. Checked actual rendered phone390×844, tablet820×1180 and desktop1440×1000: farm SVG visible, new469310-byte art asset returns200, no failed resource responses. Chapter regression passed in the preceding change. Direct workflow dispatch API returns Forbidden even with escalation; use the established one-time exact-release-message-gated push workflow, then restore workflow_dispatch-only after the release completes. Only the reviewed Chapter1 build is included; rejected pannable prototype remains excluded. Deployment outcome pending Actions verification.

## Isometric Chapter 1 deployed — 2026-10-26
GitHub Pages run40372156414 reports Success (57s), publishing reviewed application46a8e3c via release133b533: https://github.com/mochi-coding-lab/mochi-coding-lab.github.io/actions/runs/40372156414 . Public lesson: https://mochi-coding-lab.github.io/first-lesson.html?v=133b533 . Farm backdrop included in artifact and locally verified on phone/tablet/desktop without missing resources. Direct public-site requests from this cloud are blocked by its network proxy (curl000); post-deploy browser rendering from this environment is unverified, separate from successful deployment. Workflow restored to workflow_dispatch-only; future pushes do not publish. Owner physical-device visual review remains pending.

## Latest owner reference — close storybook window — 2026-10-26
Owner explicitly selected the supplied full-window close-farm screenshot, superseding the isometric/pannable directions. Restored the earlier reference implementation in first-lesson.html, farm-chapter.css and farm-chapter.js: illustrated cottage/lake/golden foliage, large left scene, cream right lesson panel, green dialogue and gold buttons. Open-eye character and reward assets retained. Matched desktop tour heading/dialogue sizing to the reference. Sign and chest share the same timber gradient/outline; journal shares parchment/brown material family. See design/farm-visual-style.md for the canonical consistency rules and honest vector-versus-painted asset status. All twelve existing lessons, real Python, saves and rewards retained; no new deployment authorized by this request.
Validation: full first-morning regression passed all twelve tasks/notebook/rewards/reload/no duplicate XP/English-Arabic viewports/Stop. Reference-tour screenshot captured at1280×889 and phone/tablet, confirming the open-eye asset and close-farm background. Visual-feedback regression also passed: crop icon/count and seed units, measured dimensions/outline including1×1, replay after preparation and persistence. This is a reference restoration, not a new marketing milestone or a claim of exact pixel/physical-device acceptance. Published site remains the preceding isometric release until explicitly published.

## Approved close-storybook release — 2026-10-26
Owner reviewed the actual screenshot and explicitly requested deployment of application562b54e. All twelve lesson and visual-feedback regressions already passed. Direct manual dispatch remains Forbidden from this environment; using the established one-time exact-message release trigger, then restoring manual-only publishing. Only reviewed public build is deployed; rejected untracked world preview excluded. Actions outcome pending.

## Close-storybook release completed — 2026-10-26
Pages run40374283049 reports Success (52s): https://github.com/mochi-coding-lab/mochi-coding-lab.github.io/actions/runs/40374283049 . Releasead9f315 publishes approved application562b54e. Public lesson https://mochi-coding-lab.github.io/first-lesson.html?v=ad9f315 ; add tour=1 to replay the opening without resetting saved progress. Release HTML/CSS/JS, farm background and open-eye character bytes match approved source. Restored workflow_dispatch-only; future pushes do not deploy. Direct post-deploy public rendering remains unverified from this proxy-restricted cloud; Actions success verified.
