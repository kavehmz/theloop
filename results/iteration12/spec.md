# COREBORE

**One-line pitch:** Pilot a continuously descending drill bit down a living rock face where the live market price *carves glowing ore seams* into the strata ahead of you — steer to intersect the richest seams, dwell to extract, and winch out with your haul before a volatility-triggered cave-in buries it.

---

## Core loop (second-to-second action)

1. **The bit descends, always.** Your drill head sinks down the shaft at a steady rate. You don't control depth speed — gravity does. What you control is **lateral position** (drag / arrow keys) across the rock face, and one decision: **DWELL** (hold to extract) vs. **DRIFT** (keep sinking to reach deeper, richer strata).
2. **The price carves the seams.** Every tick of the live market draws a new horizontal slice of rock just below the bit. Where the price sits laterally on that slice, it deposits an **ore vein** — a glowing band. Strong directional moves lay long, rich gold seams; chop lays scattered low-grade scatter; the seam's *lateral X is the price's normalized level*. So to mine, you must keep your bit under where price is going.
3. **Extract by intersection + dwell.** When your bit physically overlaps a vein, an extraction beam fires and ore flows into your hopper — value proportional to vein grade × dwell time. Rich seams reward holding position; but holding burns your **descent budget** and lets pressure build.
4. **Pressure & hazards (volatility-driven).** Realized volatility fills a **PRESSURE** gauge. Spikes spawn hazards in the strata below: **gas pockets** (red, instant cave-in if struck), **fault lines** (shear your beam, halt extraction), and **floods** (rising water from the bottom that drowns the shaft on sustained high-vol). Pressure at max = cave-in: the shaft collapses and any **un-winched** ore is lost.
5. **The decision: WINCH or PUSH.** At any moment hit **WINCH** to retract — your bit rises and you bank your hopper at the current **depth multiplier** (deeper = bigger multiplier, because deeper strata are richer and riskier). PUSH to go deeper for a fatter multiplier and richer seams, gambling against the cave-in. Banked ore is yours; buried ore is gone.

A round is ~15–40 seconds of continuous steer-and-decide. Lose to a cave-in/flood, or bank and immediately re-bore.

## How the live market drives it

- **Price level → seam lateral position.** The normalized price (rolling window) sets the X-coordinate of each newly carved ore vein. Tracking price = staying over the gold.
- **Price direction & persistence → seam grade.** Sustained trends lay continuous high-grade gold seams (a "mother lode" run); reversals/chop fragment them into low-grade scatter. A trader reading momentum literally sees the gold forming.
- **Realized volatility → PRESSURE + hazard density.** Calm market = slow safe descent, sparse hazards. Vol spike = pressure surge, gas pockets and faults bloom below, flood line rises. The market's risk *is* the mine's risk.
- **Depth → the live price's distance travelled.** Cumulative absolute price movement winds the shaft deeper, so an active market literally drills faster and exposes richer-but-deadlier strata.

## The bet & payout

- **Stake** set pre-bore. Payout = **stake × depth-multiplier × hopper-fill-ratio** at the moment you WINCH.
- **Depth multiplier** scales with how deep you reached (e.g. 1.1× near surface up past 20× in the deep mantle), capped per session.
- **Hopper** is your extracted-ore meter (0–100%); fuller hopper = bigger slice of the multiplier realized. So payout rewards *both* going deep *and* mining well on the way.
- **Cave-in / flood = total loss** of the round's stake (un-winched). The tension is identical in feel to a real leveraged position: ride the trend deeper for more, or lock in the gain.

## Why it's addictive

- **Two live tensions at once:** the *spatial* chase (am I under the gold?) and the *meta* gamble (winch now or push deeper?). Both update every tick.
- **Visible, swelling reward:** the hopper fills with glowing ore and the depth multiplier ticks up — you watch your potential win grow as the danger does.
- **Near-miss theatre:** scraping past a gas pocket, the flood line creeping up, a mother-lode seam appearing two strata below just as pressure reddens — "one more strata" is irresistible.
- **Skill ceiling:** novices just steer toward gold; pros read momentum to pre-position under where price *will* carve the next rich seam, and time their winch to the vol curve.

## Visual / sensory intent

Dark, deep-earth fintech: a vertical cross-section borehole. Top = surface gantry/headframe with the live price ticker; below, layered strata scroll *upward* past the descending bit (parallax rock bands in slate/ochre/basalt). Ore veins glow molten-cyan→gold by grade, pulsing. The drill bit is a glowing tungsten head throwing sparks and a dust plume; the extraction beam is a bright tractor cone sucking ore particles up into a hopper bar. PRESSURE gauge breathes red; on a vol spike the whole shaft shudders, dust falls, gas pockets flicker menacingly below. Cave-in = screen-shake, rockfall particle burst, the shaft going dark. WINCH = a satisfying cable-zip upward, a coin-shower of banked ore, multiplier slamming into the bank. Sound design implied: low drill rumble that pitches with depth, ore-chime on extraction, alarm klaxon as pressure peaks.

## Why it fits Deriv

It is a leveraged trend-following position dressed as a dig. "Go deeper for more multiplier, but a vol spike can wipe you" is exactly the synthetic-multiplier risk profile Deriv clients live in — ride the trend or take profit. The seams forming from real price direction make momentum reading *the* skill, and volatility-as-hazard ties payout to the genuine market regime. It runs on any Deriv instrument (synthetic indices, FX, crypto) and the depth-multiplier maps cleanly to a configurable payout table.

## What makes it original (one paragraph)

Most trading-casino games are 1D scalars (a number rising until a bust) or grid-reveal gambles. COREBORE is a **2D spatial pursuit-extraction**: the core decision is *physically positioning a descending agent to intersect ore seams that the live price draws ahead of it in space*, while a second, orthogonal gamble (winch-or-push against a volatility-driven cave-in) layers on top. The win is not "a multiplier I let climb" — it is "the ore I actually steered onto," so two players watching the identical price feed earn different amounts based on spatial skill. Depth as cumulative price travel, seam-grade as trend persistence, and pressure as realized volatility make the entire mine an intrinsic, legible read-out of market state — not a casino game with a chart bolted on.
