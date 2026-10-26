# Mochi's Coding Lab

Mochi's Coding Lab is a browser-based, beginner Python learning adventure. Chapter 1 has ten farm tasks, real Python execution in a browser worker, visual feedback, rewards, and locally saved progress.

**Try the live app:** <https://mochi-coding-lab.github.io/>

## Run a local preview

The generated app files are in `public/`. Serve that folder over HTTP so browser workers can run:

```powershell
python -m http.server 8000 --directory public
```

Then open <http://localhost:8000/>. Progress is saved in the browser used for the preview.

## Build the public files

The source lesson and map files are in `devpost/little-acres/`. With Node.js installed, rebuild the explicit public asset list with:

```powershell
node devpost/little-acres/build-public.cjs
```

The generated site is in `public/`; GitHub Pages is published manually. No package installation is required for the static preview or build script.

## Project plan

- [Scope](devpost/scope.md)
- [Product requirements](devpost/prd.md)
- [Technical specification](devpost/spec.md)
- [App map](devpost/app-map.html)

The self-hosted Python runtime includes its own license notices under `public/python/`.

