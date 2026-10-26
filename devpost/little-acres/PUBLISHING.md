# Publishing Mochi

Updated October 26, 2026.

Public URL: https://mochi-coding-lab.github.io/
Repository: https://github.com/mochi-coding-lab/mochi-coding-lab.github.io

GitHub Pages is enabled with Source: GitHub Actions. The workflow deploys `public/` only through manual `workflow_dispatch`. Committing or pushing to `main` does not publish. Run the workflow only when the owner explicitly asks to publish.

The owner approved the living world map as homepage and public publication. The working tree now has Island1’s twelve-activity First Morning chapter with self-hosted Python; it was published with explicit owner approval on2026-10-26 (run40283388308, application f12ad5a). The original five-activity lesson remains archived. four later islands are upcoming. Guest progress saves in the same browser/origin. The existing Supabase email authentication and signed-in progress bridge are retained. Google OAuth still needs provider configuration; it is not newly enabled here.

Build: `node devpost/little-acres/build-public.cjs`.
Verify: `node devpost/little-acres/check-public-map.cjs`, `check-map-nature.cjs`, `check-map-water-fallback.cjs`, and `check-map-islands.cjs` (all under the same directory).

Public build uses an explicit asset allowlist. Planning documents, marketing drafts, screenshots and raw audio source files are not added to the published directory; audio data is bundled for local-file compatibility. Existing separate farm prototype remains at write-code.html.

Source previews remain in devpost/little-acres for comparison. The temporary tunnel is no longer the intended public link. Public deployment success and live-browser checks are recorded in devpost/resume.md.

Homepage consolidation: index.html now adapts to phone and desktop. phone.html is a compatibility redirect only. These changes require a new explicitly authorized manual deployment. Verify configured account/OAuth redirect URLs for the organization origin before claiming real-account support is tested.

Before publishing this chapter run check-first-morning.py and check-first-morning-edge.py, plus existing map regression checks. Include all python/ files in the explicit public build. Initial Python runtime download is about14MB. New progress uses mochi.farm.chapter1.v2; old saves remain intact. Real-account end-to-end and native device checks remain separate.

Current chapter deployment: https://github.com/mochi-coding-lab/mochi-coding-lab.github.io/actions/runs/40283388308 (Success). Direct Pages cloud check blocked; manual-only future publishing restored.

Latest deployment: activity5/6 visual correction a8e2d28, release97518a7, Pages run40286599016 Success. Future publishing remains manual-only.

## Open-eye Mochi and guided walkthrough published — 2026-10-26 — latest release
Owner explicitly requested commit, push and deployment. Application9837735 (including the previously unpublished guided abandoned-farm walkthrough) was deployed via release75f11e3. GitHub Pages run40308963207 reports Success: https://github.com/mochi-coding-lab/mochi-coding-lab.github.io/actions/runs/40308963207 . All six farm poses and the reward portrait use new open-eye assets; all12 activities, guided tour and saved progress remain active. Public files match tested application9837735. Restored workflow_dispatch-only after the one-time exact-message-gated release; future pushes do not deploy. Direct Pages access from this cloud still returns proxy403, so owner physical-device review is separate from Actions success.
Review: https://mochi-coding-lab.github.io/first-lesson.html?tour=1&v=9837735 . Earlier local-only/unpublished notes for the walkthrough are superseded by this release. Phase6 shipping actions completed for this release; final demo/submission and real-account/native-device/learner checks remain outstanding, not blanket phase completion.


## 10-task Chapter 1 release - 2026-10-26
Owner requested deployment. Commit a3d3376 was pushed to mochi-coding-lab/mochi-coding-lab.github.io main and manually deployed; Pages run40387188271 reports Success. Live HTML, manifest and runtime files checked against the public build. Four public-map/island/nature/water checks passed. The full Python/Chromium lesson regression could not run because the Python launcher was inaccessible; owner browser/device review remains pending. Pages remains manual-only. Review URL: https://mochi-coding-lab.github.io/first-lesson.html?v=a3d3376 .

## Demo-prep task-count correction - 2026-10-26
Updated the Island 1 map from12 activities to10 active tasks and filtered retired IDs from old Chapter1 saves. Manual Pages run40389206428 deployed commit6cb2e1a successfully. Live index.html and world-map-home.js return HTTP200 and match the deployed commit; public progress check passes for partial/full10-task saves and old numeric lesson progress.
