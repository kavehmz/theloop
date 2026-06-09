# EMBERWELL

## (a) SKIN-FREE CORE
> **The player's bet is choosing the vertical price-band where the live price will *linger longest* (and how narrow to make that band, trading width for rate), and it is settled by the time-integral of how many seconds the price spends inside the band during the round — narrower bands accrue at a higher rate per second — minus a continuous "cooling" decay that drains accrued value whenever the price is outside the band.**

This matches **none** of the 21 kept settlement primitives. It is **dwell-integral accumulation with two-sided erosion**, not containment, not touch, not territory share, not a streak, not a rising scalar you bank.

## (b) DE-SKIN TEST (all market/theme words stripped)
Strip every word — no "price", no "ember", no "well", no "heat":

> A moving 1-D point wanders along a number line under a random walk. Before the run, the player selects an interval `[lo, hi]` on the line and a width `w = hi − lo`. During a fixed window of duration `T`, a running score `S` evolves: while the point is inside the interval, `S` increases at rate `+k/w` per unit time (the prize for occupancy of a narrower interval is paid faster); while the point is outside, `S` decreases at rate `−d` per unit time (but never below 0). The player may pay a fixed fee to re-center or re-size the interval a limited number of times mid-run. Final payout = `min(S, cap) × stake`. There is **no** target sequence to complete, **no** peak value that gets locked, **no** number that climbs to a bust, **no** category/rank hand to assemble.

Confirm the bare rule is none of the forbidden:
- **Not poker hand-ranking** — no suits/ranks/sets; payout is a continuous occupancy integral, not a discrete categorical hand score.
- **Not a peak-combo streak (PULSEPOINT)** — PULSEPOINT rewards the *maximum length of an unbroken chain of timing hits* and resets to zero on a miss. Here there is **no chain and no reset-to-zero on a miss**: leaving the band *erodes* `S` continuously and gently (a leaky integrator), the point can re-enter and resume accruing, and the score is an *area under a curve*, not a longest-run counter.
- **Not a rising-multiplier cash-out (Crash)** — there is no scalar climbing toward a random bust you must bank before; `S` is bounded by occupancy of a *spatial* band you chose, can fall as well as rise, and settles automatically at `T`. The decision is *where in space price will dwell*, not *when to stop a climbing number*.
- **Not THREADLINE (#1, inside-region containment)** — THREADLINE is **binary**: price must stay inside the whole time or the bet dies. Here a single exit does **not** kill the bet; partial dwell banks continuously and a leak merely shaves it. You can spend half the round outside and still win.
- **Not TOLLGATE (#8, touch of claimed levels)** — TOLLGATE pays **once** the instant a claimed level is touched. Here a touch pays *nothing*; only sustained **duration** inside the band accrues, and brief touches that don't linger are worthless.
- **Not RIPTIDE (#3, share-of-territory)** — no division of a contested area into shares; payout depends on *your own* band's occupancy time, not a proportion of a whole the price paints.
- **Not APOAPSIS (#10, orbit-band hold with two-sided loss)** — APOAPSIS is a *hold* primitive: you must keep an orbiting body within an annulus and you *lose* (fail/bust) on either side. Emberwell never busts; both sides are symmetric only in that "outside = cool", and the settlement is an **integral of in-band seconds**, not a survive-the-hold pass/fail.
- Distinct from all others (#2 rupture-bank, #4 distance-gate, #5 redline tension, #6 survival pilot, #7 timing streak, #9 balance-topple, #11 figure-completion, #12 winch-before-hazard, #13 flow burst/dry, #14 path-fidelity, #15 throughput-before-overflow, #16 phase-coherence, #17 packing-density, #18 proportion-match, #19 spread-vs-bleed, #20 surviving-HP, #21 cascade-size): none is a chosen-band dwell-time integral with a leak.

**Verdict: the de-skinned settlement is a leaky time-integral of spatial occupancy — present in none of the 21, and none of the banned genres.**

---

## Name & Pitch
**EMBERWELL** — *Pick where the market will smoulder. Bank the heat it leaves behind.*

You drop a glowing **well** onto the price ladder — a horizontal band of "fuel." Wherever the live price *loiters* inside your well, it stokes an ember: heat pours in. When price wanders off, the ember **cools**. At the bell, you cash out the heat you accumulated. Narrow wells burn hotter per second but are harder to keep lit; wide wells are gentle but safe. The whole game is reading where price *wants to rest*.

## Core loop (second-to-second)
1. **Read the field.** A dense live chart streams in from the right. A faint **dwell-heatmap** on the right gutter shows where price has been loitering recently — your read on where it might rest.
2. **Place your well.** Drag a horizontal band onto the price ladder and pinch its height. A live readout shows **rate/sec** (inverse to height) and the implied **break-even dwell**.
3. **Arm** — the 30-second round begins. Price streams live through your band.
4. **Watch the ember.** Every tick the price spends *inside* the band, the ember core brightens and the **HEAT** gauge fills at `rate/sec`. Every tick *outside*, embers dim and HEAT **bleeds** down (never below zero) — you watch sparks drift away.
5. **Adapt (optional, costed).** Twice per round you may **re-cast** the well — drag it to follow where price drifted, or widen it to stop the bleed — each re-cast costs a flat HEAT tax. The agonising read: chase the price, or trust it to come back?
6. **Bell.** HEAT freezes, the well flares, and `payout = HEAT × stake` lands with a shower of sparks.

## How the live market drives it
Dwell is **intrinsic to real price behaviour**: markets consolidate, congest, and mean-revert around levels far more than they trend — price genuinely *loiters*. Emberwell makes that loitering the entire prize. The accrual rate is literally `k / band_height`, so a tick spent inside a tight band pays many times a tick spent inside a loose one — exactly mirroring how a trader who correctly calls a consolidation level is rewarded for precision. Volatility is the enemy of dwell: a choppy, trending tape sprays price out of any band and the ember cools, so the player is implicitly reading *regime* (range vs. trend) and *level* (where support/resistance will pin price) — both real market skills — without ever naming them.

## The bet & payout
- **Stake**: chosen pre-round.
- **Decision**: band centre + band height (width↔rate tradeoff), plus ≤2 costed re-casts.
- **Settlement**: `HEAT_final = clamp( ∫ inside(t)·(k/height) dt − ∫ outside(t)·decay dt − recastTax·casts , 0 , CAP )`. **Payout = HEAT_final × stake.**
- Tight band (e.g. height = 0.3× of loose) can pay **CAP = 9.0×** if price truly camps in it; a wide safe band tops out near **2.0×** but is far likelier to land something. House edge lives in `k`, `decay`, `CAP`, and the recast tax — all tunable scalars, no rule change.

## Why it's addictive
- **The agonising read** — every round you're betting on where price will *rest*, the most second-guessable call in markets. "It's coming back to my level… hold… HOLD."
- **Live erosion tension** — watching HEAT *bleed* while price strays creates loss-aversion pressure that the costed re-cast button weaponises: do you pay to chase?
- **Texture of partial success** — unlike binary stay-inside games, almost every round banks *something*, so near-misses feel like "so close to a monster" rather than zero — the classic variable-reward drip.
- **Mastery curve** — newcomers drop a fat safe well; pros snipe a razor band on a consolidation shelf and ride a 9× ember.

## Visual / sensory intent
Dark fintech obsidian. A dense candle+line tape scrolls right-to-left with a glowing price head and motion-blurred trail. The player's well is a **stained-glass ember band** — molten orange core, cooling-blue edges — that physically *brightens and roars* with embedded particle flux when price is inside and *dims to ash with drifting sparks* when price leaves. A right-gutter **dwell-heatmap** glows where price has recently loitered. The HEAT gauge is a vertical molten column. On the bell: the well detonates into a sustained spark fountain scaled to payout.

## Why it fits Deriv
Deriv is live synthetic indices + fast options with instant settlement. Emberwell is a 30-second round on a live tick stream, one crisp pre-round decision plus optional in-round adjustments, an explicit width↔payout risk dial, and an unmistakable trading read (where will price consolidate). It generalises across any Deriv synthetic or FX feed and the entire edge is a few server-side scalars.

## Originality paragraph
Most "zone" games in the trading-casino space are **binary**: price must stay inside a corridor the whole time (THREADLINE-style) or you lose, or they pay **once** when price touches a claimed line (TOLLGATE-style). Emberwell is neither. It is a **leaky time-integral of spatial occupancy**: dwell *accrues continuously*, leaving merely *cools* the ember rather than killing the bet, and the prize rate is *inversely scaled to band width*, so the player is paid for the *precision* of a consolidation call. The costed mid-round re-cast turns it into a live read-and-chase dilemma rather than a one-shot placement. No mainstream casino primitive — Crash, Plinko, Mines, Dice, Limbo, Wheel, HiLo, Towers — has a "bank the time price lingers in a band you sized" loop, and it occupies the DWELL/time-in-zone family that none of the 21 kept primitives touch.
