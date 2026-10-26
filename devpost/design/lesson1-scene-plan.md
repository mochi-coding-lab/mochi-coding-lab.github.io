# Lesson 1 — master artwork and interaction placement

2026-10-26. Owner authorized choosing references and planning locations only. No new artwork generation, background replacement, gameplay implementation or publication in this step. Locations are proposed for review.

## Master references and art direction
- Farm master: ../little-acres/art/restoration-shell-1600.webp, 1600×1067. Retain this composition, elevated three-quarter view, warm afternoon light, painterly textures, muted green/gold palette, natural dirt and existing river/bridge/cottage/fence silhouettes. Use the original, not the simplified SVG objects in the earlier concept preview, as the visual reference.
- Character master: ../little-acres/art/play-mochi-512.webp. Rounded cream body, small face, straw hat with turquoise band, orange feet. No invented overalls, watering can or rabbit ears as permanent character features. Ground-contact shadow; size follows perspective and scene scale.
- New assets must match this camera/light/material style and cast compatible shadows. No change to seasons, camera angle, architectural style or color grading between activity states.

## Proposed locations (original 1600×1067 artwork coordinates)
1. Planting zone: lower existing bed, polygon(480,350),(700,305),(840,385),(650,438). Future edit removes/prepares ONLY this bed interior; preserve boundary/perspective/fence. States: unprepared natural earth, measured outline, prepared soil, seeds, sprouts, watered plants. Other bed remains scenery. No floating board or colored paving. Bed geometry stays fixed while learner dimensions subdivide it; larger values map to a bounded representation rather than stretching into paths.
2. Farm-name sign: bounds(950,365)–(1095,450), on bare courtyard ground to right of bed, below cottage; footprint/stake must not block doorway or gate. Small wooden sign using farm materials; blank art with runtime text, including Arabic. Dynamic text must follow board perspective in eventual implementation, not be generated into art.
3. Supply chest: bounds(1010,545)–(1120,620), inside fence, right of gate on courtyard dirt, away from river/bridge. Closed/open matching assets, inventory close-up for counting seeds; quantities in UI avoid displaying hundreds of tiny objects.
4. Gate: existing entrance around(800,450)–(1000,650). Keep existing arch/posts. Future moving gate sprite needs clean background behind it and perspective-consistent hinge motion. No second gate pasted beside it.
5. Mochi start ground anchor: (864,747), approximately54% across/70% down; outside entrance on dirt. After entry: suggested ground anchor(896,565), with sprite size adjusted for depth. Preserve clear walking corridor through gate toward bed.
6. Workbench/notebook/inspection: UI or small close-up, not three large extra props. Display explanation, object identity and setup guidance without cluttering landscape.

## Phone composition and responsive plan
Keep core interactions in central x30–73% region and y29–72% region; show only active marker/highlight during actual play. Existing phone top header and bottom lesson sheet must not cover required target. In this planning board use matching phone scene height46dvh, tablet62dvh, desktop farm left of370px workspace. Centered cover crop is checked at320×667,390×844,430×932 and tablet820×1180. A1600×1067 artwork and this scene aspect retain all three zones within viewport for these sizes. Actual generated object extents, speech and keyboard still require implementation review. If future aspect crops a target, adjust camera instead of relocating world objects per device.

## Layer plan after placement approval
Background without interactive bed/gate/chest/sign; separate soil state overlays, gate states, blank sign and runtime text, chest states, seed/plant sprites, separate Mochi, contact shadows and restrained effects. These are planned assets, not existing functionality. Owner can revise placements before any asset generation. Final artwork edits use image editing tooling with the master image as reference; do not use a whole new generated farm per activity.
