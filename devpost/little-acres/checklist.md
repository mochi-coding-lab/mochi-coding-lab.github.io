# Current planning reference — 2026-10-23

Read [the consolidated checklist](../checklist.md) first. The active decision is the original farm plus the existing lesson and a visual-only square grid; movement is deferred, and publishing is manual-only. Older dated entries below are historical, not active instructions when contradicted by the current reference.

---

## Island map ? 2026-10-19

- [x] Owner selected restoration story; local map integrated with existing farm.
- [x] Five selectable chapter locations; future chapters labeled upcoming.
- [x] Syntax and existing farm regressions pass.
- [ ] Browser visual/interaction review at desktop and phone widths.
- [ ] Owner map review before introduction/animation/hint implementation.
- [ ] Detailed PDF coverage and exam-practice mapping.

# Little Acres build and review

## Next session — chapter preview review (saved 2026-10-18)

- [x] Read supplied Topic 1 PDF and inspect its embedded example screenshots.
- [x] Prepare separate five-activity interactive explanation and local chapter-preview.html link.
- [x] Verify demonstration examples and edits via output/visuals/check-chapter.cjs.
- [x] Save exact links, approval status and tomorrow's next step in devpost/resume.md.
- [ ] Owner reviews the one-chapter/five-activity structure and Arabic explanations.
- [ ] Agree scope before integrating print/variables/calculations into the actual farm.
- [ ] Implement and verify approved chapter; preview support is not current main-game support.

## Current owner correction — 2026-10-18

- [x] Ground/crop/bridge/café clicks inspect only; no gameplay mutation or code insertion.
- [x] Remove auto-walk from farm actions; enforce code source and actor proximity in engine.
- [x] Learner-written movement, then crop/special action, executed only through Run.
- [x] Visible grid, numbered route and one contextual next instruction.
- [x] Arabic default/RTL, working English switch, translated guidance/help/errors/controls.
- [x] Python editor/snippets stay LTR; switching preserves code and game state.
- [x] Remove direct tools, action shortcuts and long visible instructional panels.
- [x] Updated rule tests; actual Edge desktop 28 assertions and final narrow 30, with reviewed screenshots and visible actor.
- [ ] Owner reviews whether Arabic guidance and navigation are clear for a beginner.
- [ ] Separate bridge/café story gameplay remains unresolved; current tabs are farm variants.

The first-build checklist below is historical; its direct-click behavior has been replaced.

- [x] Read project rules, latest resume, planning/prototype context and actual entry files.
- [x] Report existing framework-free stack and entry points before building.
- [x] Preserve main prototype, movement study and prior concept comparison.
- [x] Build three selectable playable farm settings, using original vector placeholders.
- [x] Six plot actions, two crops, watering/growth/ready/harvest/replant cycle.
- [x] Animate character walking and acting; ambient world animation.
- [x] Code and click actions use same game state/controller.
- [x] Meadow harvest goal, river repair/neighbor, café delivery/guest.
- [x] Runtime feedback, invalid input protection, Stop, active-only Reset and session state per setting.
- [x] Engine tests: state transitions/duplicates, timings, pathfinding/collision, parser limits, all missions.
- [x] Actual Edge page: 19 UI/controller assertions pass at 1470px and 570px, without horizontal overflow.
- [x] Desktop and narrow completed-game screenshots visually reviewed.
- [x] Actual Edge grown-crop render: three ready plots, six successful code actions; carrot/strawberry art and ready sparkles visually reviewed.
- [ ] Owner reviews gameplay/art and chooses direction/refinements.
- [ ] Physical phone, pointer-targeted native interaction and audio/listening review.

Local only. Launch index.html directly; no build/install/server required. Full Python and permanent saving remain outside this prototype.

## Four art comparison options ? 2026-10-19
- [x] Generate/save four original concepts and separate comparison page.
- [x] Inspect generated images; verify scripts and local references.
- [ ] Owner chooses art direction; browser page interaction review pending.
- [ ] Convert selected direction into game-ready assets and actual scene interaction after scope review.

## Selected Colorful Farm - 2026-10-19
- [x] Record owner-selected art direction including Mochi.
- [x] Create referenced background and transparent character assets.
- [x] Build separate interactive print/movement/welcome/layered-help art scene.
- [x] Parser/controller simulation and existing farm checks pass.
- [ ] Browser desktop/mobile and owner visual/game-feel review.
- [ ] Extend approved art to farming/map after review; full chapter runtime pending.

## Chapter 1 correction - 2026-10-19
- [x] Empty neglected farm in selected art style.
- [x] Anchored story/workspace tour and chapter/activity progress.
- [x] Printing practice stays before variables; manual Continue.
- [x] Five supported activities with learner-written code and safe visible results.
- [x] Help directly under Run; hint panel directly under Help; three depths.
- [x] Moving-water effects and optional local ambience.
- [x] Meaningful new flow tests plus existing farm regressions.
- [ ] Desktop/mobile browser layout and pointer review; audio listening.
- [ ] Owner accepts explanation clarity and visual effects.
- [ ] Full PDF coverage mapping and exam-style independent checks.
- [ ] Later chapters and whole-island art implementation.

## English-first / activity trail - 2026-10-19
- [x] English default with full Arabic switch and LTR/RTL layout hooks.
- [x] Preserve learner code, output and progress on language change; tour-time switch.
- [x] Dimensional colorful badges, active Mochi marker and completion/lock states.
- [x] English five-activity flow and locale roundtrip automated checks.
- [ ] Browser desktop/mobile visual and pointer review.

- [x] Owner-directed unfinished cottage: remove door/windows/lights/front steps; inspect asset and update current/build-base references.
- [x] Lock page scrolling only during the walkthrough; Next/Back repositions the callout, and Skip/finish/Escape restores scrolling. Rebuild generated chapter files; browser review pending.
- [x] Separate concept, task and expected result into labeled cards; show line-specific actionable error warning under Run and clear it on edit/activity change. Bilingual fragments remain switchable; browser review pending.

## Completion and progress feedback - 2026-10-19
- [x] First-time activity completion opens a compact Mochi celebration with the supplied applause sound.
- [x] Dialog offers only Practice more or Next activity, reusing the existing progression controls.
- [x] Improve the original five-icon activity trail in place; keep Mochi marking the current activity.
- [x] Rebuild bilingual generated page and keep catalog/source references current.
- [ ] Review dialog, progress interaction, responsive layout and supplied sound in the browser.
## Concise task wording - 2026-10-19
- [x] Reduce each code task to a direct action with required steps only.
- [x] Keep identifier rules in the concept section and preserve expected-result guidance.
- [x] Rebuild English-default page and fill missing bilingual UI copy entries.
- [ ] Review the wording and layout in-browser with the owner.
## Tour placement on laptop viewports - 2026-10-19
- [x] Clamp tour bubble to visible viewport and keep it beside spotlight when space allows.
- [x] Let long bubble content scroll within the bubble while keeping page locked.
- [x] Reposition when browser/visual viewport size changes; set overlay stacking order.
- [ ] Owner review on laptop and short-height viewport.

### Progress trail correction - 2026-10-19
The five illustrated activity icons already were the chapter progress control. A duplicate numbered control row was mistakenly added and has now been removed. The original icon trail is the sole interactive progress navigation: its current Mochi marker, clickable unlocked icons, completion checks, connected fill and activity count are being polished in place. Browser review remains pending.

## Modern visual redesign - 2026-10-19
- [x] Add a presentation-only modern theme layer without changing IDs, lesson copy, parser, rules, audio or progression.
- [x] Modern app bar, type scale, compact activity rail, stage HUD caption, dark code editor and softer lesson cards.
- [x] Restyle tour, journey and completion dialogs; keep reduced-motion behavior.
- [x] Check English/Arabic layouts at 1440, 430 and 390 widths with no horizontal overflow.
- [x] Reposition the in-tour language pill and stop scroll-lock from re-applying after the tour ends.
- [x] Repair the English catalog (six missing template placeholders) and regenerate all 170 bilingual entries.
- [x] Update the stale regression harnesses and pass `check.cjs` plus `check-colorful.cjs`.
- [x] Save before/after, desktop, phone, Arabic and tour review images.
- [ ] Owner reviews whether the modern direction feels right; refine palette/density if needed.
- [ ] Then connect this chapter to the island or start Chapter 2.

## Playable modern-game prototype - 2026-10-19
- [x] Build a separate full-screen game screen without altering the Chapter 1 lesson.
- [x] Add mission HUD, Mochi movement, seed choice, contextual actions and a crop-growth loop.
- [x] Add plant → water → harvest states, completion card and a Python console with `go_to`, `plant`, `water`, `harvest`, line errors and Stop.
- [x] Verify the full loop and responsive layout in local Chrome at desktop and phone widths.
- [x] Save desktop, growing, mobile and completion screenshots.
- [ ] Owner plays it and confirms whether this game direction is right.
- [ ] If approved, integrate the direction into the chapter/island instead of keeping a separate experiment.

## Beginner Lesson 1 from Topic 1 - 2026-10-19
- [x] Build a separate five-step beginner lesson from the supplied PDF: print/string, variable, numbers/arithmetic, comments, combined program.
- [x] Explain each concept before asking for code; keep examples collapsed and never auto-inserted.
- [x] Reuse the safe bounded engine and validate the concept rather than an exact memorized answer.
- [x] Add friendly line errors, hints, manual progression and a completion card.
- [x] Run all five steps to completion in local Chrome.
- [ ] Owner reviews the sequence, wording and depth; adjust if setup/IDE material should become an explicit reference.
- [ ] Integrate the approved lesson into the actual chapter/island.

## Chapter select and entry wiring - 2026-10-19
- [x] Add `chapters.html` with all five planned chapters and clear availability status.
- [x] Link Chapter 1 to `first-lesson.html`; mark Chapters 2–5 as coming soon and non-clickable.
- [x] Add a Chapters link back from the lesson.
- [x] Wire the island map’s primary action to Chapter 1.
- [x] Save the chapter-select screenshot.
- [ ] Owner reviews chapter names, availability and entry flow.
- [ ] Add real unlock/progress only after the flow is approved.

## Spotlight tour and Arabic - 2026-10-19
- [x] Keep the existing chapter’s spotlight tour and Arabic switch.
- [x] Add a four-step intro spotlight tour to Lesson 1 with Back, Next, Skip and Escape.
- [x] Add a full English/Arabic switch to Lesson 1 (instructions, steps, hints, errors, feedback, completion, labels).
- [x] Keep Python code/examples LTR and preserve learner code, drafts and output across language changes.
- [x] Add English/Arabic switching to the chapter-select page.
- [x] Review English and Arabic tour layouts and rerun all five lesson steps to completion.
- [ ] Owner reviews tour order and bilingual wording; adjust if needed.

## Sign-in window - 2026-10-19
- [x] Add a Sign in entry on the chapter-select page.
- [x] Build the email/password/name window with Email and Google tabs, Create account, Forgot password and guest continuation.
- [x] Add English/Arabic translations for the whole window.
- [x] Make clear that no account is created, no data is sent and no backend exists.
- [x] Verify opening the window directly with `chapters.html#signin`.
- [ ] Owner reviews wording and chooses whether real authentication (and which service) is in scope.
- [ ] Implement real auth only after service/security/privacy approval.

## Unified home and mobile lesson - 2026-10-20
- [x] Make one home: `index.html` redirects to `chapters.html`, the island-map chapter list.
- [x] Match the map, lesson and farm visual system (farm art, dark glass, gold).
- [x] Open sign-in at the beginning with a guest option.
- [x] Link Chapter 1 to the lesson, the lesson back to the map, and the farm prototype back to the map.
- [x] Keep the farm background and a Mochi avatar visible on narrow lesson screens.
- [x] Update the public build and review screenshots.
- [ ] Owner enables GitHub Pages (Source: GitHub Actions) and pushes this commit for the stable link.

## Phone scene-first layout - 2026-10-20
- [x] Add a farm-and-Mochi hero before the chapter cards on phones.
- [x] Add the same scene-first hero to Lesson 1, with the background at full strength.
- [x] Keep a small Mochi in the lesson panel when the hero scrolls away.
- [x] Show the complete 3:2 farm scene on the phone farm prototype instead of a cropped slice.
- [x] Flow mission, controls and the Python console below the farm scene.
- [x] Capture phone review screenshots at 500x900.
- [ ] Owner reviews on an actual phone and confirms text sizing, scroll and touch targets.

## Real authentication and progress - 2026-10-20
- [x] Add the Supabase browser client and a shared auth/progress bridge.
- [x] Replace the preview sign-in with real email/password sign-in, account creation, reset email and sign-out.
- [x] Persist sessions and sync lesson progress for signed-in users.
- [x] Keep local progress for guests and show whether progress is local or synced.
- [x] Add Google OAuth initiation; provider still requires Google Cloud setup in Supabase.
- [x] Test a real invalid-credentials response and a local progress restore.
- [ ] Owner sets Supabase Site URL/redirect URLs and confirms the progress SQL/RLS.
- [ ] Owner enables Google provider and verifies Google sign-in.
- [ ] Owner creates a real account and confirms cross-device progress.
- [ ] Push the new commit so GitHub Pages serves this build.

## Standalone world-map review — 2026-10-21

- [x] Owner-approved separate five-island preview built; current home retained
- [x] Local assets, JS syntax, five selections and availability checked
- [x] Desktop rendering visually inspected at 1440×1250
- [ ] Phone rendered review and owner design acceptance
- [ ] Replacement/integration/publication: not authorized


### Abandoned-world map and beacon goal — 2026-10-21
Owner approved a second preview after requesting empty/old islands and a final target. Open devpost/little-acres/world-map-restoration.html. Original beautiful preview and current home preserved. New imagegen edit shows neglected islands; reversible vision button compares original art with starting ruins, explicitly not earned progress. Goal concept: restore all five islands, then relight the lighthouse to reconnect Mochi's home; repair during Island 4, final lighting after all five. No restoration runtime, finale, chapter unlocks, auth/progress or publishing changes. JS/assets/selection/availability/toggle checks pass; 430x1100 Chrome screenshot captured. Notes: world-map-restoration-notes.md. Exact art prompt: world-map-abandoned-prompt.txt. Owner visual acceptance pending.

### Island summaries and sequential lock preview — 2026-10-21
Owner authorized topic/restoration cards and dimmed future islands in the separate restoration preview. Open world-map-restoration.html. Inspectable Islands 2–5 have shaded art regions, lock labels and exact previous-island prerequisites; only Island 1 can be entered. Each selection separates What you will learn from What you will restore; restoration copy is labeled Story concept. Future chapter status explicitly remains in development. Art-vision toggle removes shading for comparison without unlocking entry or recording completion. Existing first lesson, current home, authentication, saved progress and original beautiful preview unchanged. Sequential earned unlocking and completed/revisit states remain unimplemented pending chapter integration; do not infer progress from inspection. Both runtime scripts tested together: five summaries, prerequisite text, entry restrictions and reversible comparison pass. Desktop review image: review-world-island-locks.png. Phone interaction review pending. Same ENG-006 design iteration, no new audience milestone or publication.

### Tap-to-open island summaries — 2026-10-21
Owner rejected the permanent summary below the map and authorized showing the popup alternative. world-map-restoration.html now opens its existing summary inside a native modal dialog only after an island marker is activated. Desktop centered popup; phone CSS bottom sheet; close button, backdrop click, native Escape/focus containment, return focus to triggering island. Existing lesson entry restrictions and learning/restoration copy retained. No saved unlocking or active-home changes. Added world-map-popup.css/js. Existing five-island selection/lock/comparison tests and JS syntax pass. Review screenshot: review-island-popup.png. Physical-phone and assistive-technology review pending. This is a refinement of the same ENG-006 preview, not a new marketing milestone.

### Compact island card, map stays visible — 2026-10-21
Owner approved replacing the large obscuring modal with a compact island-side card. world-map-popup.js now uses a nonmodal dialog positioned beside the selected marker, clamped to the desktop viewport and repositioned on scroll/resize. Phone styling uses a small bottom card capped at 45dvh. No blur, backdrop dimming or scroll lock; map remains interactive. Selecting another island updates/repositions the card. Outside click, close and Escape dismiss it; focus returns to the trigger. Topic/restoration copy and entry locks retained. JS syntax and existing island summary/availability/comparison tests pass; desktop screenshot review-island-tooltip.png captured. Phone native-device review pending. Same ongoing preview refinement, no new content checkpoint or publishing.

### Short playful island cards — 2026-10-21
Owner approved reducing dense text and increasing readability/fun. Existing compact card now uses emoji/place title, one-line invitation, a short Learn badge and concise Mission phrase; larger 22–23px title and 13–14px content. First island: First Steps / Give Mochis farm a fresh start / Python basics / Repair the cottage, revive the garden / Lets begin. Existing full lesson text unchanged; map preview still marks restoration as concept. All five cards shortened; original map/home unchanged. JS syntax and combined selection/prerequisite/entry/comparison checks pass. Desktop review: review-island-playful.png. Native phone visual review pending; no publication or earned progress changes. Same ENG-006 design refinement.

### Living-map demo with local coastal sound — 2026-10-21 — LATEST
Owner authorized code-based illustration motion and sound after declining video service costs. Separate entry: devpost/little-acres/world-map-living.html. Water pixels displaced/shimmered by WebGL, very subtle green-foliage sway; no generated video or subscription. Buildings remain fixed. Local synthesized surf/breeze with occasional gull-like call; Sound off by default, Pause motion and reduced-motion/visibility/fallback support. Current restoration preview and home unchanged. Real-time Chrome checks pass animation advancement, pause/resume, vision toggle, island summaries/locks and real-click sound activation. Desktop/430px screenshots inspected; no phone horizontal overflow. Listening/native performance still pending. Full limitations/rebuild/verification: world-map-living-notes.md. Same ENG-006 marketing package updated with complete animation-reveal script; local draft only, CAPTURE NOW / POST LATER. No publication or earned unlock changes.

### More visible water motion and 2D fallback — 2026-10-21
Owner reported no visible movement on living map and confirmed the button said Pause motion. Increased water displacement from .00165/.00115 to .0065/.004 and stronger ripple highlights. Added Canvas 2D water-strip fallback for unavailable/lost WebGL; samples existing raster through a water-color mask and destination mask, fixed terrain underneath. Frame-count dataset added for diagnostics; live page script version updated to avoid stale cache. Existing pause/visibility/reduced-motion/vision controls retained. JS syntax and existing island controls pass. Node runtime test with WebGL deliberately unavailable verifies fallback readiness, displacement changing between frames and pause/resume. Actual in-app visual result remains unverified: browser security policy rejected observation of file:// page; no alternate browser/CDP workaround attempted. Prior screenshots describe v1, not this revision. Owner should refresh and review visibly stronger waves. Updated still preview/current home unchanged. Routine correction of ENG-006, no new package or publication.

### Real nature audio, seabirds and GitHub save — 2026-10-21 — LATEST
Owner authorized free licensed recording downloads, default-on sound, birds and wind, then requested committing changes to GitHub. Downloaded CC0 Beach Ocean Waves by jasinski/qubodup and public-domain Gull 2 by avphillips plus Gentle breeze and birds singing by ezwa. Sources/license links in world-map-audio-credits.html. Replaced synthetic noise/oscillator calls with decoded field recordings, softened loop boundaries, and optional occasional recorded gull calls. Sound enabled by default; autoplay attempted, starts on first trusted interaction when browser blocks it; mute survives later interactions; hidden-tab audio pauses. Added three gliding/flapping vector seabirds, windborne leaves and faster drifting clouds, with pause/reduced-motion controls. Still map/home untouched; public/ deployment unchanged. Tests: real file signatures/local assets, default-on/gesture/mute/resume/visibility behavior, water fallback and island availability all pass in Node simulations; current audio listening/visual verification pending. Browser file:// security restriction remains respected. Source files and natural-audio data URLs kept local, no runtime downloads. Preserve raw recordings and credit file. Durable checks: check-map-nature.cjs, check-map-water-fallback.cjs, check-map-islands.cjs. Older tmp build scripts are historical intermediate generators and must not overwrite the current demo. GitHub target origin main, in sync before commit; push result will be reported separately.

### Approved map becomes public homepage — 2026-10-21 — LATEST
Owner approved the map and explicitly authorized making it the homepage and publishing a playable prototype. Source/public index.html now contain the living map. Island 1 enters the existing five-step Python lesson; map/lesson/completion/account flow connect back to index. Valid local or signed-in completion restores the first-island overlay in five increments, with Continue/Revisit and Restored states. Four future islands remain clearly upcoming and not enterable; no fabricated lesson unlock or finale. Guest progress flushes on pagehide and rejects out-of-range indices. Existing account page is retained with map-return routing; OAuth return targets index, provider configuration unchanged. build-public.cjs uses explicit asset allowlist. Public-map amendment: public-map-prd.md. Relevant map/audio/fallback/public-build/engine/language checks pass. Legacy check.cjs still expects the obsolete Arabic code-only index and is not a valid current-homepage check. GitHub Pages confirmed enabled and latest prior run succeeded. Publishing and live browser verification in progress. Unrelated tiktok-assets directory is outside this change.

### Public homepage verified end to end — 2026-10-21
Live URL: https://esra-alhussain.github.io/visual-coding-journey/ . Commit 426124f deployed successfully via Pages run 39669907818. In-app HTTPS browser test verified first-island entry, case error, all five successful learner-written programs, mid-lesson Map return with 3/5 saved and resumed code, final completion, return with Restored/Revisit, future island entry blocked, sign-in modal and guest return. No real account created or credentials entered; signed-in cross-device flow and actual audio listening not retested. Fixed completed prerequisite marker/aria text for Island 2 so it says Coming soon rather than telling completed users to finish Island 1 again. Source/public asset and progress tests pass. Marketing ENG-006 package updated with complete honest playable-release script; no social recording/posting. Unrelated tiktok-assets directory remains untouched.

### Separate scene-first phone preview — 2026-10-21
Owner authorized a quick separate phone-specific preview, not public replacement. Entry world-map-mobile.html; world-map-mobile.css/js only added. <=680px: full-height island art under slim header, larger map centered on first island, pointer drag, pinch/zoom buttons, all-five overview, Find Mochi, compact mission toggle and mirrored sound control. Existing summaries and entry/progress rules retained; desktop base remains as approved. JS parses; actual phone rendering/touch review pending due prior local file browser restriction. Public homepage and deployment files unchanged. This is a continuing design revision, not a new marketing milestone. Review/approve before integration or publication.

### Vertical phone-island trail preview — 2026-10-21 — LATEST
Owner rejected the zoom/drag phone preview and approved a separate vertical-trail alternative. Entry world-map-trail.html, new world-map-trail.css/js. <=680px: five large individual island views framed from existing approved art using code-native clipping, normal vertical scrolling and a connecting dotted route; no manual zoom or drag controls. First island playable/current or restored according to existing saved progress; future islands dimmed/upcoming. Cards show place/subject with tap-to-open existing compact summary and existing lesson entry rules. Sound control mirrored; long-term beacon goal at bottom. Approved desktop/public homepage unchanged, earlier phone preview preserved. JS syntax and existing island logic tests pass; actual phone render/touch review still pending under the local-file browser restriction. This is a refinement of the same design checkpoint; no new public deployment or marketing package.


## Phone-first world map — 2026-10-22 — LATEST

Owner rejected the desktop layout being squeezed into a 418px phone and chose the **full-screen map + bottom sheet** direction over the vertical trail. Source `index.html` now loads `world-map-mobile.css/js` plus the new `world-map-phone.css/js`; all phone rules are scoped to `max-width:680px`, so the approved desktop homepage is unchanged.

Phone composition:
- full-height pan/zoom island map under a slim Mochi header with Sign in;
- compact status card: Island 01 · in progress / First Steps / activity count;
- **Islands 5** button opens a bottom sheet list of all five islands;
- one primary gold action: **Start First Steps**;
- floating +/− zoom and a mirrored sound toggle;
- tapping an island opens the existing compact island summary as a bottom sheet;
- safe-area padding, no horizontal overflow, desktop HUD hidden with base CSS.

True mobile emulation checks at 360×800, 390×844 and 418×880 show `innerWidth === scrollWidth`, dock and header inside the viewport, Islands sheet and island summary opening. Desktop 1440×1000 remains the existing layout with phone controls hidden. Review images: `review-phone-home-fixed.png`, `review-phone-islands-sheet.png`, `review-phone-island-sheet.png`.

Public build and GitHub Pages phone assets are deployed; physical iPhone/Android touch and audio review remains pending. Progress, auth and lesson behavior are unchanged. This supersedes the earlier vertical-trail phone preview for the current integration decision, while preserving that file as an alternate concept.


### Phone map loading fix — 2026-10-22
Live phone testing showed the playable HUD blocked by the 4.6 MB decorative water-texture script loading before it. Source/public index now load the mobile scene, phone HUD and playable start action before water/living/nature payloads; the map uses a 900px phone JPEG via srcset (about 200 KB instead of 3.4 MB). Local 390px render shows the playable map and Start First Steps while heavy decoration finishes in the background. Public build allowlist includes both phone JPEGs. This is a publishing correction for the phone design, not a new design direction.


### Dedicated playable phone page — 2026-10-22 — LATEST
The live phone page was still able to show a half-loaded desktop shell when its account/media scripts stalled. Phones now redirect from index.html to a separate lean phone.html that loads only the map, pins, HUD, islands sheet, island summary and Start First Steps. No water canvas, nature audio, Supabase or auth scripts are on this page; it enters the existing playable first-lesson.html. Desktop index remains the full living map. Public allowlist includes phone.html and the 900px phone map artwork. Local 390px check passes; live deployment verification is in progress.


### Phone map image weight — 2026-10-22
Phone map was loading a 197 KB JPEG plus a hidden 206 KB restored overlay. Removed the unused overlay from phone.html, switched the visible map to responsive WebP (480/720/900 px), added a high-priority preload and removed the phone page's external heavy dependency. Phone render at 390px shows the map and HUD at 1.2s locally.


### Approved right-rail lesson layout — 2026-10-22
Owner selected the right-rail option over the bottom dock. Desktop lesson now uses a 380px full-height right workspace with Lesson above Code/Output; the farm fills the remaining area with object-fit: contain, so the stage is not overlaid or cropped. Focus mode expands the farm across the screen. Mobile keeps the stacked layout. Verified at 1862x946 and 1440x900. Source/public first-lesson updated; no lesson logic changes.


### Lesson scene asset weight — 2026-10-22
The approved right-rail lesson was still black on a cold live load because the scene used a 3.2 MB background PNG and a 1.4 MB Mochi PNG. Switched the scene to a 321 KB WebP background and 32 KB Mochi WebP; the layout is unchanged and the live lesson can render promptly.

### Phone lesson publication — 2026-10-23
- [x] Preserve latest main's dedicated phone homepage, optimized artwork and approved desktop rail.
- [x] Apply approved farm-first phone lesson to source/public build.
- [x] Chromium 320×667, 390×720, 430×844: all five programs, visible speech/variable/area feedback and completion, no horizontal overflow or JS errors.
- [x] Desktop 1440×1000 screenshot pixel-identical; public asset check passes.
- [x] GitHub Pages deployment for c5acc4e succeeded (run 39944639359). Direct live-page inspection remains blocked by cloud network HTTP 403.

### Real bridge-to-door movement — 2026-10-23
- [x] Restore original dirt/grass image; remove rejected colorful ground asset.
- [x] Bridge start, eight countable steps, door destination; actual code-driven movement.
- [x] Safe bounded command parser; no eval or arbitrary Python execution.
- [x] Partial moves, invalid/overshoot rejection, stop, reset cancellation and arrival handoff.
- [x] English/Arabic UI and reduced 390×320 viewport positioning.
- [x] Browser320×667/390×720/430×844: movement then all five original lesson activities complete without JS errors.
- [x] Desktop1440×1000 pixel-identical; public asset check and parser checks pass.
- [x] Keep publishing manual-only; commit/push without deployment.

### Owner correction: grid only — 2026-10-23
The earlier movement checklist is superseded. Removed all arrival/movement functionality; retained only visible square lines over original farm. Existing five-step lesson verified at 320×667/390×720/430×844 and desktop1440×1000; source/public match and public asset checks pass. Publication remains manual-only.


### Approved responsive lesson release - 2026-10-24
Owner approved tablet/desktop sidebar with full contained farm, and the screenshot-led phone layout: fixed farm scene above independent scrolling lesson/editor sheet, compact controls, 56px Mochi. Sidebar begins at 760px with 250-380px rail; below 760px uses phone scene/sheet. Supersedes older phone styling sizing in this release. Owner explicitly authorized commit, push and publish. Local Chrome reviewed at phone 466x790 and tablet 820x1180; public asset/script/progress checks pass. Remote manual-only Pages policy and other map/audio changes preserved during integration. Release verification pending deployment.

### Tablet layout update — 2026-10-25
See ../checklist.md for current tablet controls-under-farm layout and validation. This supersedes the prior tablet sidebar; desktop remains a sidebar.

## First Morning chapter implementation — 2026-10-26
The twelve-activity real-Python chapter supersedes the earlier five-step bounded lesson. Current architecture and validation: ../checklist.md. Original lesson archived at ../archive/lesson-before-first-morning/. Not yet deployed.
