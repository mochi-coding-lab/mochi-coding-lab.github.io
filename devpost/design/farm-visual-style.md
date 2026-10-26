# Chapter 1 visual reference — 2026-10-26

The owner's latest full-window screenshot supersedes the isometric island and pannable-world previews. Reference implementation: the close-farm composition in application 9837735, now restored with open-eye Mochi. Do not mix the isometric art into this chapter.

## Fixed visual foundation
- Background: `art/farm-abandoned-morning.webp`, warm illustrated cottage, lake, golden foliage and ground-level perspective, cropped with the scene rather than stretched.
- Character: `art/mochi-farm-poses-open.webp`; reward portrait `art/mochi-farm-happy-open.webp`. Keep eyes open across emotions and poses.
- Desktop: large farm on the left, cream parchment lesson panel on the right, rounded corners, forest-green frame; serif headings, green dialogue and muted gold buttons. Phone stacks farm above workspace; tablet retains the larger farm above controls.
- The reference includes foliage and an aged cottage. Earlier requests for bare trees and the newer isometric art are superseded for this reference-matching build.

## Lesson objects and materials
All new scene objects must belong to the same ground-level camera: consistent perspective, physical scale, warm light, brown outlines, gentle texture, and contact with the ground. Reuse existing objects as learner values change; do not add unrelated icon packs, screenshots, floating UI cards as substitutes for objects, or a second visual style.

| Object | Existing treatment | Lesson role |
| --- | --- | --- |
| Welcome/name board | Shared `signWood` material, warm brown outline, grain and vine details | Actual Python print output and chosen farm name |
| Supplies chest | Same `signWood` material and outline family, cream quantity label | Chosen identifier, crop and seed count |
| Garden | Existing textured soil, matching perspective, bounded dimensions | Area overlay → prepared bed → chosen plants → watered growth |
| Journal | Cream parchment, warm brown outline, muted ruling | Learner notebook note; actual Python identity shown by inspector |
| Tools/effects | Existing warm wood handles, muted watering can, restrained particles | Actions accompany successful execution; never grade code |

Current board/chest/journal are vector layers over the illustrated background; they are not newly generated painterly sprites. A fully painted prop replacement remains future polish and must preserve the same sizes, anchors and lesson states. No promise of a fully skeletal/3D character is implied.

## Learning and acceptance
Preserve all twelve activities and mission → explanation → practice → visual result. Learner choices remain editable; actual Python execution and validation decide success. No lesson is replaced with a screenshot or animation-only demonstration. Verify real Python, state transitions, no duplicate XP, persistence, Arabic and phone/tablet/desktop layouts. Exact visual acceptance belongs to the owner; physical-device performance remains unverified.
