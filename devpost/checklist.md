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
