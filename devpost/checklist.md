---
doc: checklist
status: draft
updated: 2026-10-25
---

# Mochi — current progress and remaining work

This is the consolidated current checklist. Older dated checklists are history and do not silently re-open superseded features. No full-phase approval is inferred just from files existing.

## Confirmed implementation and owner decisions
- [x] Existing five-island map with only Island 1 playable; later islands honestly upcoming.
- [x] Existing five-activity beginner lesson and learner-written code.
- [x] Farm-first phone lesson with visible Mochi/scene feedback and existing desktop right rail.
- [x] Original natural artwork restored; plain visual grid only.
- [x] Rejected paving/colored ground and added movement activity removed.
- [x] Latest grid-only implementation committed and pushed; design editing paused at owner request.
- [x] Deployment changed to manual-only; commit/push does not publish.

## Validation already recorded
- [x] Latest grid-only browser checks at 320×667, 390×720, 430×844 and desktop1440×1000 run all five activities to completion.
- [x] Current public asset check and source/public synchronization recorded.
- [x] Desktop before/after screenshot unchanged by phone/grid edits.
- [x] Earlier relevant phone-language and reduced-visible-height checks recorded; rerun affected checks when those behaviors change.
- [ ] Physical phone, real keyboard/touch and assistive-technology review.
- [ ] Signed-in cross-session progress and Google provider validation if included in the agreed demo.

## Phase 5 — Build: still in progress
- [ ] Owner resumes/reviews Lesson 1 and decides whether any further grid design is needed.
- [ ] Define movement only if explicitly requested later; no movement task is currently active.
- [ ] Finish the agreed proof-of-concept boundary; do not assume all five islands are required.
- [ ] Review updated planning documents as a consolidated whole where formal phase sign-off is needed.
- [ ] Complete the build learning wrap-up and app map required by the skills workflow.

## Phase 6 — Ship: not completed
- [ ] Check current hackathon requirements and agreed submission scope.
- [ ] Prepare and verify the required demo video.
- [ ] Review public repository/readme and release contents.
- [ ] Learner writes the required submission and any learner-authored reflection/feedback.
- [ ] Publish only when the owner says to publish; verify the requested deployment separately.
- [ ] Confirm submission is complete. Do not infer submission from having a live website.

## Current release distinction
Last confirmed application deployment:33d42e8 on2026-10-25, Pages run40224663297 Success. Public files match tested f82bf5a: original-detail full-resolution responsive map, plus previous unified homepage and tablet lesson. Manual-only publishing restored. Direct Pages cloud access blocked; owner device review pending.

## Desktop sharpness correction — 2026-10-24
- [x] Original sharp island art stays visible beneath water-only animation.
- [x] Canvas2D fallback uses 1536×1024 rather than 960×640.
- [x] Real Chromium 1440×1000 at 2× pixel density: WebGL and forced Canvas2D rendering; fallback dry-land pixel alpha is zero.
- [x] Both renderers: map assets, Island 1 entry/future-island restrictions, restoration view and pause behavior pass without JS errors.
- [x] Existing water-fallback, map-island and public asset checks pass.
- [x] Phone map and lesson source remain unchanged.
- [x] Published with explicit owner approval on 2026-10-24; Pages run 40091902792 succeeded.

## Background sound correction — 2026-10-24
- [x] Restore the missing player on the dedicated phone map.
- [x] Fix first Sound press enabling blocked audio rather than muting.
- [x] Real Chromium phone/desktop: actual AudioContext running, existing recordings decoded, two loop sources started, mute/resume without duplicate loops, no JS errors.
- [x] Updated startup behavior: recordings are requested before interaction; Chromium autoplay-allowed mode starts two ambience loops before any tap on phone and desktop.
- [x] Existing audio check includes first-press regression plus mute retention/visibility; public assets pass.
- [ ] Actual phone speaker/Safari listening remains unverified; browser playback checks do not establish physical device volume.
- [x] Owner requested publication on 2026-10-24; verified the successful Pages workflow. Future publishing still requires a new explicit request.

## Immediate map audio — 2026-10-24
- [x] Both screen sizes attempt background audio at startup, with asynchronous phone recording load.
- [x] Chromium autoplay-allowed: real audio runs before interaction on phone and desktop.
- [x] Chromium gesture-required: first Sound press starts audio; mute/resume works without duplicate loops on both pages.
- [x] Existing nature regression and public asset checks pass.
- [ ] Real browser policy may still require a first tap; do not promise universal forced autoplay.

## Outside-gate character placement — 2026-10-24
- [x] Character on dirt outside the farm entrance gate, not inside the cottage or over water.
- [x] Correct cover/contain image mapping for phone/desktop and grounded visible feet.
- [x] Remove floating bob; retain a small ground contact shadow.
- [x] Browser320×667/390×720/430×844/1440×1000 runs all five lesson activities through completion without JS errors; preview screenshots inspected.
- [x] Public asset and diff checks pass; scope/PRD/spec updated.
- [x] Owner requested publication; Pages run 40092748325 succeeded on 2026-10-24. Manual-only publishing restored for future edits.


### Approved responsive lesson release - 2026-10-24
Owner resumed layout editing and approved the current phone scene/sheet with compact controls and 56px Mochi, plus a separate sidebar from 760px upward (250-380px wide). This supersedes the previous design pause for these changes. Phone scene uses the owner screenshot reference; desktop image-grounded character remains. Existing manual-only publication policy, map/audio changes and lesson behavior retained. Owner explicitly requested commit, push and publish. Public checks pass; release verification pending.


### Approved responsive release verification - 2026-10-24
- [x] Commit/push approved layout and integrate latest main.
- [x] Manual Pages deployment 40095257989 succeeded for 80d3b82.
- [x] Live HTTP 200 and approved phone/tablet styling confirmed.
- [x] Public asset/progress, audio, water fallback and island checks pass.

## Unified responsive homepage — 2026-10-25
- [x] One responsive index.html; remove phone-size redirect and duplicated phone markup/scripts.
- [x] Preserve legacy phone.html links with query/hash forwarding.
- [x] Chromium 320,390,680,768,1440 widths: map loads, no page overflow or JS errors; existing phone/desktop layouts retained.
- [x] Phone island list/detail restrictions, pan/zoom, Start navigation and real browser sound mute/resume checked.
- [x] Desktop screenshots at 768px and 1440px pixel-identical under reduced motion before/after merge.
- [x] Phone→desktop→phone resize and old phone links checked.
- [x] Partial/full progress HUD and restoration image source across resize checked.
- [x] Public assets/progress, map-islands, nature-audio and water-fallback regression checks pass.
- [ ] Owner review and explicit publication of unified homepage.
- [ ] Real-device and signed-in/OAuth checks on the organization origin remain pending.

## Tablet lesson controls below the farm — 2026-10-25
- [x] Tablet760–1199px: full-width farm above lesson/code windows; phone and desktop retain their layouts.
- [x] Chromium760×900,820×1180,1024×768,1180×820,1199×820: farm above controls, no page overflow/JS errors, all five activities pass.
- [x] Speech stays in the scene and Mochi follows the artwork ground point after tablet resize.
- [ ] Owner review and explicit publication; GitHub push access remains to be resolved.

## Larger tablet farm — 2026-10-25
- [x] Tablet scene takes62% of viewport; farm fills the region, controls underneath scroll.
- [ ] Owner review and publication; organization push access remains blocked.
- [x] Chromium760×900,820×1180,1024×768,1180×820,1199×820: all five activities pass; Run remains clickable in shorter scrollable workspace.

## Responsive homepage/tablet deployment — 2026-10-25
- [x] Organization connector installed by owner; push access verified.
- [x] Push all three saved application commits and publish with explicit owner authorization.
- [x] Pages run40223906581 reports Success; source/public unchanged from tested dbb96b0.
- [x] Restore workflow_dispatch-only after one-time release.
- [ ] Owner live-device review and real account/OAuth checks.

## Full-resolution responsive map — 2026-10-25
- [x] Full1536px original-detail map and restoration layer at all viewport sizes.
- [x] Lossless pixel equality with original artwork verified.
- [x] Chromium320/390/680/768/1440 source selection, island controls, sound, Start and restoration/resize checks.
- [ ] Publish this image-quality correction only on explicit owner request.

## Full-resolution map release — 2026-10-25
- [x] Owner explicitly requested deployment; Pages run40224663297 reports Success.
- [x] Public asset and island-vision regression checks pass; release public files match tested f82bf5a.
- [x] Restore manual-only publishing for future changes.
- [ ] Owner live-device visual review.
