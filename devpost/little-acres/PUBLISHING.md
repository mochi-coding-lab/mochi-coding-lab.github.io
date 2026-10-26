# Publishing Mochi

Updated October 26, 2026.

Public URL: https://mochi-coding-lab.github.io/
Repository: https://github.com/mochi-coding-lab/mochi-coding-lab.github.io

GitHub Pages is enabled with Source: GitHub Actions. The workflow deploys `public/` only through manual `workflow_dispatch`. Committing or pushing to `main` does not publish. Run the workflow only when the owner explicitly asks to publish.

The owner approved the living world map as homepage and public publication. The working tree now has Island1’s twelve-activity First Morning chapter with self-hosted Python; it is not yet published. On the live release, the older five-activity lesson remains until deployment. four later islands are upcoming. Guest progress saves in the same browser/origin. The existing Supabase email authentication and signed-in progress bridge are retained. Google OAuth still needs provider configuration; it is not newly enabled here.

Build: `node devpost/little-acres/build-public.cjs`.
Verify: `node devpost/little-acres/check-public-map.cjs`, `check-map-nature.cjs`, `check-map-water-fallback.cjs`, and `check-map-islands.cjs` (all under the same directory).

Public build uses an explicit asset allowlist. Planning documents, marketing drafts, screenshots and raw audio source files are not added to the published directory; audio data is bundled for local-file compatibility. Existing separate farm prototype remains at write-code.html.

Source previews remain in devpost/little-acres for comparison. The temporary tunnel is no longer the intended public link. Public deployment success and live-browser checks are recorded in devpost/resume.md.

Homepage consolidation: index.html now adapts to phone and desktop. phone.html is a compatibility redirect only. These changes require a new explicitly authorized manual deployment. Verify configured account/OAuth redirect URLs for the organization origin before claiming real-account support is tested.

Before publishing this chapter run check-first-morning.py and check-first-morning-edge.py, plus existing map regression checks. Include all python/ files in the explicit public build. Initial Python runtime download is about14MB. New progress uses mochi.farm.chapter1.v2; old saves remain intact. Real-account end-to-end and native device checks remain separate.
