# Mochi — five-topic curriculum and reward blueprint

2026-10-26. Proposed master plan from the five PDFs in resources/. Not a completed or published curriculum. Owner asked to plan beyond Topic1 and identified the existing resource folder. Topic1 full coverage, learner choices and editable farm remain confirmed; chapter names, exact rewards and thresholds below require review.

## Structure
One topic per existing island, several focused lessons per chapter, several short activities per lesson. Contextual goal→explanation→worked example→guided attempt→visible feedback→independent transfer→next story hook. No unexplained object calls as introductory task. Use genuine Python3 semantics and distinguish game APIs from built-ins. Source exercises inform objectives, not mandatory copy-and-paste solutions. Revisit familiar ideas at deeper difficulty instead of repeating the same task.

## Chapter1 / Farm / Topic1 — first morning
Story: welcome visitors, name farm, organize supplies, measure/create/plant a first bed, save morning script. Instruction groups: Python/workbench orientation; guided print greeting then independent message; naming/assignment/identifier rules; numeric supply and area; comments and script vs shell; Jupyter/setup/object-identity notebook and recap. All content in existing lesson1-first-day-plan.md remains covered except superseded gate-command opening. Resource pages3–8 features/history/CPython/high-level/free/open-source/platforms/libraries/case/indentation/IDE/IDLE;9–19 installation/launch/interpreter/prompt/modes/.py;20–27 keywords/identifiers/variables/expressions/comments;28 objects/id;29 recap. Gate entry is story, not coding requirement. Rank after chapter mastery: Farm Newcomer. Activity badges: First Hello, A Name of Our Own, Supplies Sorted, Room to Grow, First Sprouts, First Morning Ready. Cosmetic example: First Hello flower pin after independent greeting. Achievement is not full chapter rank.

## Chapter2 / Watermill / Topic2 — make the mill work
Story: inspect a broken processing routine and restore the right sequence.
Lessons: why programming/problem-solving matters; interpreter/compiler and source translation; input/output/sequence with preview of selection/repetition/reuse; diagnose syntax/runtime/logic/semantic problems; independent repair of a mill routine.
Source pages3–6 programming/story/problem-solving;7–13 translators/scripts;14–17 building blocks;19–28 errors/debugging/exercises. Selection/repetition/reuse are explained at overview level here, expanded in later chapters; no requirement to define functions without source instruction. Rank: Seed Keeper (milestone name proposed; cosmetic rank is journey-wide, not literal mill terminology). Badges: In the Right Order, Bug Finder, Mill Awakened. Cosmetic: small seed-pouch charm. Result: visible mill repair/working flow.

## Chapter3 / Glass garden / Topic3 — plan and stock a greenhouse
Lessons: values/constants/reassignment and prediction; numeric operators and precedence; data types/type()/conversion; strings/indexing/slicing; lists and append/insert/remove/pop; tuples and dictionary key-value operations; input() with int/float conversion; independent greenhouse order planner.
Source pages4–13 variables/naming/assignment/constants;14–25 arithmetic,precedence,assignment expressions,geometry/math.pi;26–30 types/mixed expressions;31–32 strings;33–37 lists;38 tuples;39–40 dictionaries/deletion;41–48 input/conversion/circle/temperature applications.
Story examples: compute greenhouse bed costs/areas, edit planting orders, store crop records, ask the learner for supplies, calculate settings. Rank: Garden Planner. Badges: Balanced Beds, Labels and Lists, Greenhouse Ready. Cosmetic: botanical notebook cover. Result: organized growing layout and populated supply displays. Topic1 variables are introduced simply; here they are extended, not re-taught as identical onboarding.

## Chapter4 / Lighthouse / Topic4 — guide and protect the islands
Lessons: sequence/selection/repetition comparison; booleans/comparisons and if; if/else; elif/nesting and indentation; and/or/not, truth tables and short-circuit guards; try/except/else/finally and recovery; independent safe lighthouse controller.
Source pages3–18 control/selection/branches/nesting;19–22 comparisons/logical operators/truth tables;23–31 exceptions;32–33 short circuit/guard evaluation.
Story examples: light changes by weather/visibility, resource thresholds, safe sensor input, restore operations after invalid values. Rank: Sprout Tender (journey-wide title; alternatives can be reviewed). Badges: Weather Wise, Safe Hands, Guiding Light. Cosmetic: tiny lantern charm. Result: repair/protect lighthouse; final island-wide beacon celebration still waits for full journey.

## Chapter5 / Orchard / Topic5 — grow a repeatable harvest
Lessons: while/counters/increment/decrement; stopping/infinite-loop diagnosis with bounded execution; break/continue and validation; for over sequences; range(start,stop,step), output layout and pass; accumulators/sum/min/max/None; nested loops for rows/columns; independent orchard routine.
Source pages3–13 loops/counter/no iteration/infinite loop;14–19 break/continue/input validation;20–26 for/sequences/sum;27–31 range/end/squares;32 pass;33–34 max/min;35–36 nesting.
Story: water rows, inspect plants, skip unsuitable harvest, total baskets, find smallest/largest harvest, repeat routines. Rank: Morning Maker. Badges: One Row at a Time, Basket Counter, Orchard in Rhythm. Cosmetic: sunrise hat ribbon.

## Final review / existing islands, not a sixth island
A combined independent restoration task draws only on taught topics. Learner can revisit farm/greenhouse/orchard and relight shared beacon after prerequisites. Rank: Farm Steward after final integrated challenge and chapter prerequisites, not simply XP. Badge: Islands Reconnected. Cosmetic: sunflower hat wreath. No function-definition curriculum invented: Topic2 mentions reuse and Topic3 uses built-ins/methods, but these resources do not supply a full def/functions unit. Such a future chapter requires a new resource or explicit scope decision.

## Reward rules — proposed defaults
- Rank = broad journey milestone unlocked by associated chapter + independent checkpoint. Six rank emblems span five chapters plus finale.
- Badge = specific accomplishment; unlock once by stable challenge ID, not source-text equality or pressing Run. Accept semantically valid solutions. First Hello follows independent print exercise, not guided copying. No irreversible lock-out if hints are used; offer a fresh transfer task.
- XP = feedback, not proof of mastery. Suggested50 per independent checkpoint; chapter bonus100; no XP for reopening, repetitive farming, intentional errors or purchases. Final thresholds/totals await activity catalog. Clearly label progress as e.g. chapter checkpoints completed, not a misleading XP threshold that unlocks a skill rank.
- Cosmetics do not affect correctness, progression or access to learning. Equip/unequip immediately, save state, usable on mobile; missing asset must not block Next Mission.
- Reward panel: current rank explicit, earned/locked statuses plus unlock explanations, badge condition, +XP once, equip state, primary Next Mission and dismiss/return. Hints/retries never subtract XP. Respect mute, captions and reduced motion. Do not use streak pressure or speed grading.
- Persistence: guest in same browser; signed-in cross-device only after actual integration/test. Define merge and duplicate-award handling before implementation. No new backend claims.

## Accuracy notes and limitations
Correct source simplifications while preserving objectives: exponentiation is **, not ^ (Topic2 area hint); runtime NameError is not SyntaxError; logic and semantic categories can overlap; range is a range object, not a materialized list; standard Python dictionaries preserve insertion order; variable names refer to objects, not fixed typed storage boxes. Compiler/interpreter comparison is conceptual; CPython can compile to bytecode before interpreter execution. Keyword overview is not mastery of every keyword. Do not require copying every PDF example or teach image-only examples without checking them when authoring activities.

## Build boundary
Only existing Island1 five-activity implementation is currently live. All other islands remain upcoming. Existing rank image is a concept board, not implemented reward assets. Current bounded runtime is insufficient for collections/input/branches/exceptions/loops/id; select real isolated Python execution with interruption/resource limits before promising these chapters. Today’s work is a coherent blueprint, not implementation/deployment authorization. Start by reviewing Chapter1 activity definitions and First Hello reward, while retaining full five-topic roadmap.
