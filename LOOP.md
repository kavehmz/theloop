# LOOP.md — Orchestrator (run the experiment)

Follow this prompt to run the whole experiment **natively**: run batches of parallel
worker subagents until there are **3 keeper designs**, maintaining the gallery and
improving the worker brief as you go. You spawn subagents to invent, judge, and search —
your own job is control flow and deciding what happens next.

## Config
- **K = 3** workers per batch (spawned in parallel).
- **TARGET = 3** unique keepers, then stop.
- **MAX_BATCHES = 5** — safety cap; if reached without 3 keepers, stop and report rather
  than churn forever.

## State (all on disk)
- `results/iterationNN/` — every design produced (`spec.md`, `design.html`, screenshot, `originality.md`).
- `results/PROGRESS.md` — one line per design: name, core mechanic, status (KEEPER / DUPLICATE / BELOW_BAR).
- `index.html` — the gallery.
- `ITERATION.md` — the worker brief (its `§Tuning` section is yours to improve).
- `CRITERIA.md` — the fixed bar (**never edit**).

## Each batch
1. **Read the keepers so far** from `results/PROGRESS.md` (their names + core mechanics).
2. **Spawn K worker subagents in parallel** (K Task calls in a single step). Give each:
   its staging folder `results/.staging/bN-sK`, the instruction to read `ITERATION.md` and
   follow it, and the list of already-kept core mechanics it must differ from. Each worker
   invents one game, writes `spec.md` + `design.html` (hero view first) + a screenshot +
   `originality.md` into its staging folder, runs its own adversarial web originality
   check, and reports back its name, core mechanic, and originality verdict + closest link.
3. **Judge the batch** — spawn one fresh, impartial judge subagent. It reads `CRITERIA.md`
   and each staging folder, then assigns every design a status: **KEEPER** (clears every
   gate in `CRITERIA.md` AND has a distinct core mechanic from the kept designs and from
   other keepers in this batch), **DUPLICATE** (same core mechanic as a kept/other design),
   or **BELOW_BAR** (fails a gate). It also diagnoses the batch: did it underperform, and
   if so what is the systemic problem + one concrete lesson for the worker brief?
4. **Commit each design** — assign the next `results/iterationNN` (zero-padded), move its
   staging folder there, append its line to `PROGRESS.md`, and commit that iteration on its
   own (stage only that folder + `PROGRESS.md`) with a concise message naming the game and
   its design — **no attribution**. Then delete the now-empty `results/.staging`.
5. **Rebuild `index.html`** — a card per `results/iteration*/design.html`: each embedded in
   an `<iframe>` rendered at a fixed **1280×800** and **CSS-scaled to fit the card**
   (`transform: scale(...)`), with `scrolling="no"` and `loading="lazy"` so only on-screen
   games animate. Show each game's name + status badge (keepers highlighted) and a keeper
   count in the header. Commit it — concise, no attribution.
6. **Tune (only if the batch underperformed)** — edit **only** the `## §Tuning` section of
   `ITERATION.md` with the judge's lesson. Never touch `CRITERIA.md` or any other section.
   Commit `ITERATION.md` alone — concise, no attribution.

## Stop
- The moment there are **3 keepers** → stop, don't spawn another batch, and present the 3
  to the user for final sign-off.
- If **MAX_BATCHES** is reached first → stop, report what you have, and say why the space
  proved hard.

## Guardrails
- Workers run **in parallel within a batch**; batches run **sequentially** (each depends on
  all prior `results/`).
- Workers only *stage* files; only the commit step numbers folders and commits — so
  parallel workers never race on git or iteration numbers.
- Never edit a prior iteration. Never edit `CRITERIA.md`. Commits carry **no attribution**.
