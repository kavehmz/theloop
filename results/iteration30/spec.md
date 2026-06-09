# SUMMIT FLAGS — *Plant your flag on the peak before it forms*

## (a) SKIN-FREE CORE
> **The player's bet is: pinpoint the (price, time) coordinate where the live price path will reach its single highest peak (and/or lowest trough) during an upcoming sealed window — by dropping one or more flags onto the chart's empty future. The payout rule is: a 2-D proximity score = how close, in BOTH price-level and time-of-occurrence, your flag lands to the realized extremum coordinate; nearer = bigger multiplier, a direct hit = jackpot, and flags outside a proximity radius expire worthless.**

This is **extremum-coordinate prediction settled by 2-D distance to the realized peak**.

## (b) DE-SKIN TEST (all market/theme words stripped)
Strip everything. A bounded sequence of numbers is generated over T steps. There is exactly one index `i*` at which the sequence attains its **maximum value** `v*` (and optionally one `j*` at its **minimum** `w*`). Before the sequence is revealed, the player names a guess pair `(î, v̂)`. Payout = `f( |î − i*| , |v̂ − v*| )`, a decreasing function of the two-axis error, paying max on an exact match and zero outside a tolerance box.

Now confirm the bare rule is **none** of the forbidden settlements:
- **Not poker hand-ranking** — no categories/ranks/sets are scored; it's a distance to one coordinate.
- **Not a peak-combo streak (PULSEPOINT)** — nothing accumulates and nothing resets on a miss; PULSEPOINT scores *consecutive well-timed hits*. Here a single ARGMAX/ARGMIN coordinate is the only thing measured. (Note the semantic trap: PULSEPOINT's "peak" = peak of a combo counter; my "peak" = the literal argmax of the price series. Different objects entirely.)
- **Not a rising-multiplier cash-out (Crash)** — there is no climbing scalar you bank before a bust; nothing is banked mid-round; the whole bet is locked before the window and settled once at reveal.
- **Diff vs all 21 kept primitives:**
  1. **inside-region containment (THREADLINE)** — I score one *point*, not "stayed inside a corridor for the duration." Being inside any region is irrelevant; only the single argmax coordinate matters.
  2. **accumulate-to-rupture then bank (REACTOR)** — no accumulation, no rupture meter, no bank.
  3. **share-of-territory (RIPTIDE)** — no area/share; a flag claims nothing spatial, it's measured by distance to one event.
  4. **distance-gate reached (SLINGSHOT VEGA)** — SLINGSHOT pays when price *travels a distance* (did it reach far enough?). I pay on *how near your guess is to where the max occurred* — error, not reach. The price reaching far is neither necessary nor sufficient.
  5. **two-force tension redline (DEADLOCK)** — no opposing forces, no redline.
  6. **survival/proximity piloting (SLIPSTREAM)** — no avatar to fly, no continuous control; you place a static marker and wait.
  7. **timing-accuracy/combo streak (PULSEPOINT)** — see above; no streak, no rhythm hits.
  8. **touch of claimed levels (TOLLGATE)** — TOLLGATE pays if price *ever touches* a claimed level (binary, any-time, any number of touches). I do NOT pay for a touch: a flag at your called price that the price brushes 40 times but where the *global max* is elsewhere pays based on distance to the max, not the touch. The settling event is the unique extremum, not a crossing.
  9. **balance-height before topple (BALLAST)** — no stacking/balance.
  10. **orbit-band hold w/ two-sided loss (APOAPSIS)** — no band to hold over time.
  11. **ordered-figure completion by rarity (STARFORGE)** — no figures, no ordering.
  12. **depth-extraction, winch before hazard (COREBORE)** — no extract-before-hazard timing.
  13. **routed-flow burst/dry (SLUICE)** — no routing of flow.
  14. **path-fidelity to a lead trace (WAKELINE)** — WAKELINE scores how well a *whole path* tracks a lead. I score distance to a *single point* (the extremum); the rest of the path is ignored.
  15. **classification-throughput before overflow (FLUXYARD)** — no sorting under a queue.
  16. **sustained phase-coherence (OVERTONE)** — no sustained coherence metric.
  17. **packing-density before spill (STOWLINE)** — no packing.
  18. **proportion-match to a drifting target (ASSAY)** — ASSAY matches a *ratio/mix* to a moving target value. I match a *2-D location of an event*, not a proportion.
  19. **spread-capture vs inventory bleed (SPREADKEEPER)** — no spread/inventory.
  20. **surviving-HP fraction (RAMPART)** — no HP/damage.
  21. **largest-connected-cascade size (DETONATE)** — no cascade/cluster size.

**Verdict:** the settlement — *minimize 2-D error to the realized argmax/argmin coordinate* — matches none of the 21, none of the banned genres, not poker, not PULSEPOINT's combo, not Crash. **Distinct.**

---

## Name & Pitch
**SUMMIT FLAGS** — *The peak hasn't happened yet. Plant your flag where you think it will.*

A 30-second window of live market is about to play out. Somewhere inside it the price will carve a single highest peak and a single lowest trough — but nobody knows *where* in price or *when* in time. You plant flags onto the empty future of the chart, calling the exact coordinate of the summit (and, if you dare, the abyss). Then the window unseals and the price climbs, fakes, retraces, spikes — and the real peak forms live under a roaming crosshair. The closer your flag is to where the summit actually lands, the bigger your multiplier. Nail the exact tick and price: **SUMMIT** jackpot.

## Core loop (second-to-second)
1. **READ (≈6 s, "open" phase):** The chart is alive — a dense candle/line history scrolls in, an order-book heat ribbon pulses on the right, ghost-replays of recent windows fade behind. A translucent **window pane** slides over the empty right third of the chart: that's the sealed future you're betting on. A live "tension" reading shows current volatility and trend lean to inform your call.
2. **PLANT (the decision):** You drag a glowing **▲ summit flag** onto any (time-column, price-row) cell inside the pane — committing both *when* you think the high hits and *at what level*. Optionally drop a **▼ abyss flag** for the low, and spend a token to add a 2nd/3rd flag (spreads your bet, shrinks each flag's payout). A shrinking **lock ring** counts down; flags lock when it closes.
3. **FORM (≈22 s, the drama):** The pane unseals left-to-right. The live price feeds in tick by tick. A **roaming crosshair** tracks the *current running maximum* — it physically jumps up and parks whenever a new high is set, dragging a "current peak" beacon with it. Your flag sits there, waiting. Every time a new high forms elsewhere, your distance recalculates and your **live proximity gauge** swings. Near-misses are agonizing: the peak forms two ticks from your flag, then a late spike steals it away.
4. **REVEAL & SETTLE:** Window closes. The true argmax tick freezes with a golden burst; the true argmin with a blue implosion. Lines snap from each flag to its target showing the 2-D error. Multiplier counts up from your best flag. Win → confetti of flag-shards + screen-shake; a SUMMIT exact-hit fires a full-screen flare. Loss → flags wilt and sink.
5. **REPEAT:** New window pre-loads instantly; your last result ghosts behind the new one. "Plant again" is one tap.

## How the live market drives it
The entire outcome is the **realized high/low of the real price path** in the window — pure price action, nothing synthetic bolted on. The window is fed by Deriv's tick stream (synthetic indices or FX). The extremum coordinate is literally `argmax` / `argmin` over the window's ticks, so:
- A trending market makes the peak land late and high (right edge) — read the lean.
- A choppy/mean-reverting market scatters the peak early and shallow.
- Volatility sets the proximity tolerance (a wilder window = wider scoring radius, smaller multipliers; calm window = tight radius, fat multipliers) — so the *market's own state* tunes risk/reward honestly.
- Players who learn a symbol's microstructure (where it tends to top out relative to the open) get a genuine read edge — skill, not just luck.

## The bet & payout
- **Stake** per round; choose 1–3 flags (summit and/or abyss). More flags = wider coverage, each scaled down so house edge holds.
- **Settlement:** For your best-scoring flag, compute normalized errors `eT = |flag_time − true_extremum_time| / W` and `eP = |flag_price − true_extremum_price| / R` (W = window width, R = window price range). Combined error `e = sqrt(wt·eT² + wp·eP²)`. Payout multiplier `M = Mmax · max(0, 1 − e/τ)^γ`, where τ is the volatility-set tolerance and γ shapes the falloff (steep, so precision pays). `e = 0` → **M = Mmax (SUMMIT jackpot)**; `e ≥ τ` → flag expires at 0×. With multiple flags only the best counts toward the headline, but each can independently clear its own mini-threshold (configurable).
- **Edge:** house edge lives in τ and Mmax calibration vs. the true distribution of where extrema land for that symbol — fully de-skinnable and auditable.

## Why it's addictive
- **The near-miss engine.** Proximity scoring is a slot-machine's "two cherries" turned into pure skill drama — the peak forming *one tick* from your flag, live, is unbearable in the best way. You *saw* how close you were; you want it back immediately.
- **The forming-live tension.** Unlike a static guess, you watch the running-max crosshair stalk toward (or away from) your flag for 20 seconds. Hope and dread oscillate tick by tick.
- **Mastery curve.** Newcomers drop one flag near the middle. Regulars read trend lean + vol to call late-trending vs early-choppy peaks, hedge summit/abyss, and place tight for the jackpot. Clear skill ceiling.
- **Instant re-entry & ghosts.** Your last call ghosts behind the next window so you feel your improvement.

## Visual / sensory intent
Dark fintech canvas (deep navy→black vignette). A dense live chart: layered area-fill price line with neon-cyan glow, faint historical candles behind, an animated **order-book heat ribbon** on the right edge, and 2–3 translucent **ghost windows** of prior rounds drifting back into depth so the frame is full of motion on load. The betting pane is a frosted-glass rectangle with a fine coordinate grid. Flags are emissive triangles casting soft light cones onto the grid. The running-max **crosshair** is a hot-white reticle that physically *snaps and recoils* when a new high prints, trailing a comet streak. Win: golden volumetric flare at the true summit, flag-shards confetti, subtle screen-shake; jackpot: full-bleed radial bloom. Loss: flags desaturate and sink with a low thud. Everything pulses to the tick cadence.

## Why it fits Deriv
Deriv is live-chart, fast-round, real-money trading-gamified. SUMMIT FLAGS is *entirely* a price-action read: you're forecasting the extremum of a real market window — a real trading intuition (where will this top out?) turned into a 30-second instrument. It needs only a tick stream and settles deterministically on `argmax/argmin`, so it's trivially provably-fair and auditable. It's a new instrument shape next to multipliers/options, not a casino game with a chart glued on.

## Originality paragraph
The crowded trading-casino canon bets on *direction* (up/down), *survival of a climb* (Crash), *whether a level is touched* (TOLLGATE/barriers), or *containment* (THREADLINE). SUMMIT FLAGS bets on a coordinate that doesn't exist yet: the **location in price-and-time of the window's global extremum**. The settlement is a 2-D proximity-to-argmax score — a target you can only *aim at*, never *steer toward*, and that the market itself draws live. Touch-of-level games pay on any crossing; distance-gate games pay on reach; I pay on *how near your called peak is to the one peak that actually forms*. That extremum-coordinate-proximity settlement, with volatility setting the scoring radius and the running-max crosshair turning the reveal into a stalking-the-peak drama, is the novel combination — a "call the summit" instrument I found nothing equivalent to in the search.
