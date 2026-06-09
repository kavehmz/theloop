# ITERATION.md — Worker brief (design one game)

> This is the **tunable** creative brief handed to each worker agent. The fixed
> acceptance bar lives in `CRITERIA.md` — never restate or contradict it here. The
> orchestrator owns numbering, committing, and the gallery; you do none of that.

You are **one worker in a batch**. Produce **one** game design for Deriv, then return it.
At spawn the orchestrator gives you your **staging folder** and the **concepts already
kept** (which you must differ from). Everything else is below.

## Mission
Design a game for **Deriv.com** — online trading / gaming-fintech. Deriv users trade
options, multipliers, and synthetic indices: fast, gamified, real-money excitement on top
of a **live market chart**. The best Deriv games sit where real market price action meets
a betting/trading mechanic — real-time, risk/reward, instant feedback, dopamine.

## Genre anchor (context only — DO NOT copy)
*"GridGame"*: a rolling grid over a live market chart; cells priced by their distance from
the current price; players buy cells/rows. Use it only to grasp the genre and the visual
bar. **Do not reproduce it.**

## Originality discipline
Your first idea is something the training data — and the market — has already seen.
Brainstorm several, discard the obvious. The crypto/trading-casino space is **saturated**
with Crash, Plinko, Mines, Dice, Limbo, Wheel/Roulette, HiLo, Towers, candlestick-clickers,
and up/down guessing. Any of these reskinned is a copycat — don't submit it. Reach for
novel **combinations** of mechanics.

## What to produce (write all of these into your staging folder)
1. **`spec.md`** — name & one-line pitch; core loop (second-to-second action); how the
   live market drives it; the bet & payout; why it's addictive; visual/sensory intent; why
   it fits Deriv; and one paragraph on what makes it original.
2. **`design.html`** — a self-contained, runnable, high-fidelity prototype (single file;
   vanilla JS, or a chart/animation lib from a CDN). Real layout, CSS, animation, a
   live-ish market chart with simulated data, the game UI, interactive where feasible.
   - **Hero rule:** the **first viewport (above the fold) must be the game's hero view**,
     full-bleed, no scroll needed to see the essence. Controls/legend/explainer go below.
     This is so it renders correctly when embedded in the gallery iframe — and because a
     Deriv game should grab you in the first screenful.
   - Open it in Chrome and **screenshot it** into your staging folder. Look honestly and
     iterate the file until it genuinely looks beautiful.
3. **`originality.md`** — your adversarial web check: try to **disprove** your originality.
   Using Chrome (X is already logged in), search Google (web + images), Reddit, YouTube, X,
   app stores, itch.io, ProductHunt, and crypto/trading-game sites — use multiple phrasings
   of the *core mechanic*, not just your made-up name. Record every query, the closest
   matches **with links**, and an honest verdict: ORIGINAL or COPYCAT (+ why). Claim only
   what you actually searched.

Then return your result for the orchestrator to collect. Do **not** number folders, commit,
or edit any other file.

## Craft guidance — make it stand out
- Lead with motion and feedback: the chart should feel alive; wins and losses should be felt.
- Tie the mechanic **intrinsically** to price action — not a casino game with a chart glued on.
- One clear, legible core loop a newcomer groks in seconds but a regular can master.

## §Tuning
<!-- EDITABLE: the ONLY section the self-improvement step may change. Lessons learned
     across batches accrue here to steer future workers. Append or refine concise lessons;
     never delete the sections above, and never touch CRITERIA.md. Empty at the start. -->

- **We are building a set of MANY mutually-distinct games.** Beyond the saturated genres
  already banned, do NOT duplicate a mechanic *family* already kept. The orchestrator gives
  you the current kept list at spawn — treat it as a HARD exclusion: your CORE mechanic must
  not be a variation of any kept game. Kept families so far include: drawing a containment
  corridor the price must stay inside (THREADLINE); harvesting volatility magnitude as energy
  against a breach/rupture meter (REACTOR); the price path painting claimable spatial
  territory (RIPTIDE).
- **Reach into an UNDER-USED mechanic family** to stay distinct, then invent a novel mechanic
  inside it: physics/momentum (price velocity as kinetic force — slingshot, orbit, launch);
  two-force tug-of-war / settling-point tension; piloting or dodging through price-as-terrain;
  rhythm/timing/combo locked to price cadence; routing or waypoint-chaining a price-comet;
  auction/bidding over levels; construction/stacking stress-tested by live price;
  pattern/formation hunts. Pick a family no kept game occupies.
- **The gallery embeds your live `design.html` in a real-Chrome iframe at 1280×800** — that
  render is what gets judged and shown, NOT your `screenshot.png`. Make `design.html` flawless
  at 1280×800; the screenshot is archival. Note: html2canvas (a common screenshot fallback)
  mangles `background-clip:text` gradients into solid white boxes — don't let a bad screenshot
  fool you into thinking the real render is broken, and flag it if you used that fallback.
