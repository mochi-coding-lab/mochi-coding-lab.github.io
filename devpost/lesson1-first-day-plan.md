# Lesson 1: first day on the farm — proposed activity design

Date: 2026-10-25. Direction approved; sequence and implementation proposed, not implemented or published.

## Confirmed owner decisions
Cover all topics in the supplied COMP106 Topic 1 PDF, using as many activities as needed. Allow farm name, crop and supply choices where the objective permits. Existing five exercises are not the target curriculum. Artwork may be edited: remove/add objects and begin with an unprepared area that code turns into a planting bed before adding seeds. Retain cozy farm atmosphere and responsive layout. Do not treat this as approval of every activity below.

## Proposed sequence and source coverage
1. Meet Mochi and the farm workbench (slides3–8): Python purpose/features, 1991/Guido, high-level/interpreted, CPython, free/open source, portability, libraries, case sensitivity, indentation preview. Short contextual intro, not a long coding gate. Define interpreter/IDE/IDLE and distinguish workspace from language; give current examples such as IDLE, PyCharm, Spyder and Jupyter. The slide8 logo collage includes non-Python tools, so do not present every logo as a Python IDE.
2. First shell action (slides6,11–15): >>> readiness, immediate one-statement execution; game-provided gate action, meaningful case/parentheses errors. The prompt is UI, not code the learner must type.
3. Welcome visitors (slides23–25): print a chosen greeting, quoted text, output appears in-world as speech/message rather than falsely implying print changes arbitrary objects.
4. Name the farm (slides23–25): farm_name string assignment, use-before-assignment and print multiple items; an explicitly documented game binding or command paints the sign.
5. Label supplies (slides20–22): meaningful valid identifiers, underscores/digits, case sensitivity and reserved names; no need to teach every keyword's behavior.
6. Choose seeds and inventory (slides23–25): chosen crop string and bounded numeric supply, assignment/reassignment, quantity visible in storage; accept valid alternatives.
7. Plan the new growing area (slide26): choose positive bounded length/breadth, calculate area by multiplication; preview dimensioned natural-ground cells with no decorative paving. Include the resource10×20 example as an available exercise/example, not a mandatory farm choice.
8. Prepare the bed (slides23–26 applied): use the calculated dimensions/area in a clearly introduced game action; soil visibly changes from unprepared to ready. No prior bed in this area.
9. Plant chosen seeds (assignment/expressions application): use saved crop/count in a game action, visually show planted positions and supply changes. No loops/conditions required beyond Topic1.
10. Save and run a first-day routine (slides13,16–18,27): multiline .py script, save/reopen/run, planting/watering sequence as supported, comments ignored during execution; compare with shell, with indentation introduced accurately without requiring advanced blocks.
11. Inspect stored values (slide28): values are objects, names refer to objects, pass values as function arguments, demonstrate actual id() with identity stable during an object's lifetime; never fabricate an ID or equate it with permanent inventory identity. Runtime choice is unresolved: current bounded interpreter cannot satisfy full Python claims.
12. Farm notebook and take-home workshop (slides9–10,19,29): execute/reexecute real notebook cells, explain .ipynb versus .py and shell/script distinction; guided Windows Python3 and Anaconda/Jupyter installation/launch instructions via official sites, with online alternative. In-game demo cannot count as a verified device installation. Finish with source recap questions tied to things learner did and first-day celebration.

## Implementation boundaries
No artwork edited and no new game commands/runtime implemented in this planning step. Farm APIs are not Python built-ins. Define visible effects explicitly; print writes output, assignment stores values, game calls change world state. Need runtime decision for authentic shell, Python semantics, notebook behavior and id(). Never invent or overstate these capabilities. Source slide15 statements not retained is simplified: distinguish durable scripts from shell history/session state. Preserve original resources outside public/; do not publish the lecture PDF as part of deployment.

## Delivery
Full coverage is owner requirement. Group into short farm-story chapters as useful, not a fixed five-exercise lesson. Proposed order and exact interactions remain for review; deadline does not silently remove topics. Commit/push planning only; no deployment without owner request.

## Opening revision — 2026-10-26
Owner rejects object-style game commands as first coding task and requires explicit mission, explanation and guidance before result. Earlier gate-command-first sequence is superseded. New opening preview in little-acres/lesson1-opening-preview.html demonstrates narrative entry then guided print() practice; final acceptance pending. Broader resource coverage remains required.
