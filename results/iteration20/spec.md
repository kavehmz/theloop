# ASSAY — spec

## SKIN-FREE CORE (decision + settlement)
**The player's bet is the set of mixing ratios they assign across three live price-driven ingredients (the valve positions), settled by how closely the resulting blended compound matches a live-drifting target compound at the moment the round locks.**

Diffed against all 16 kept cores: none is a multi-input RATIO-matching loop. It is NOT OVERTONE (single-signal phase-lock), NOT SLUICE (routing a conserved fluid through a network / capacity), NOT TOLLGATE/RIPTIDE (claiming levels or bands), NOT DEADLOCK (a single two-force tension meter), NOT WAKELINE (reproducing a path), NOT FLUXYARD (classifying items into bins). The bet here is a vector of proportions, and the payout is a distance-in-blend-space metric against a moving target. Unique.

---

## Name & pitch
**ASSAY** — *Mix three living market metals into the master alloy before the crucible locks.*

A live "assay furnace" where three molten streams — each potency driven by a different facet of the market (TREND, VOLATILITY, MOMENTUM) — pour into a crucible. You set the three valves (your blend ratios). A glowing **target alloy** drifts as the market moves. Settle close to the target and the ingot rings pure; settle far and it cracks.

## Core loop (second-to-second)
1. **Three ingredient streams** glow above the crucible. Each has a live **potency** number that the market drives in real time (see below). Potency is what each stream contributes per unit of valve opening.
2. The player drags **three valves** (sum auto-normalises to 100%) — this is the bet vector: how much of each stream to pour. The resulting **blend point** is plotted live inside a triangular *alloy field* (a ternary/barycentric plot).
3. A pulsing **target marker** sits somewhere in the alloy field and **drifts** as price moves (target composition is computed from the live feed on a slower clock, so it wanders but is readable).
4. A **lock timer** (e.g. 12s) counts down with a sweeping ring. The player keeps nudging valves to chase the drifting target. The crucible's color is the *live mix of the actual poured streams* (weighted by potency × valve), so the player literally sees their alloy color converge toward the target swatch.
5. **At lock**: the round freezes. Distance between the blend point and the target point (in the alloy field) is measured. Small distance → high purity → big multiplier; large distance → impure → loss. A molten ingot is cast and either **rings/sparkles (win)** or **fractures (loss)**.
6. New target seeds, new round. Optional **streak bonus** for consecutive pure casts.

## How the live market drives it (intrinsic, not glued on)
A single live price feed is decomposed into three **facets**, each becoming an ingredient potency:
- **TREND potency** = sign+magnitude of a slow EMA slope (directional drift).
- **VOLATILITY potency** = rolling stddev of recent ticks (choppiness).
- **MOMENTUM potency** = short-window rate-of-change (acceleration).

The **target alloy** is derived from a *different, slower* transform of the same feed (e.g. normalised positions of longer-window versions of those three facets), so the market simultaneously (a) changes how powerful each of your streams is, and (b) moves the goal. A trending, calm market pushes both potencies and target one way; a volatile reversal yanks them apart. You are reading the market's *character*, not its direction — there is no up/down guess anywhere.

Because potencies shift live, the *same valve positions* produce a *different blend point* second to second — so holding still is not safe; you must actively re-balance as the metals' strength changes under you.

## The bet & payout
- **Stake** chosen before the round. The bet is the **valve vector** at lock.
- **Purity** P = 1 − (distance(blend, target) / maxDistance), clamped to [0,1].
- **Payout multiplier** is a convex function of purity above a threshold: e.g. miss zone (P < 0.55) → loss; P ≥ 0.55 pays `mult = base + k·(P−0.55)^1.6`, with a capped jackpot near P→1 ("**flawless ingot**", e.g. up to ~12×). A house edge sits in the threshold + curve.
- **Difficulty knob**: tighter target radius / faster drift = higher max multiplier (risk dial), all on the same core.

## Why it's addictive
- **Active convergence dopamine**: you watch your alloy color *crawl* toward the target swatch — a continuous "getting warmer / colder" signal, the strongest possible feedback loop.
- **Living goalposts**: the drifting target + shifting potencies mean it's never solved; near-misses ("0.93 purity!") scream *one more round*.
- **Legible mastery**: a newcomer groks "match the color"; a regular learns to *anticipate* potency swings from market character and pre-position valves.
- **Cast moment**: the lock → ingot ring (win) or fracture (loss) is a crisp, satisfying punctuation with particle/sound payoff.

## Visual / sensory intent
Dark furnace-fintech aesthetic. A crucible of liquid metal whose color is the live blend; three glowing molten streams pouring in; a **ternary alloy field** with a pulsing target halo and a comet-trailed blend point; a sweeping lock ring; heat-shimmer and ember particles; on win, a gold ingot rings with a shockwave of sparks; on loss, the ingot fractures with a dull crack and ash. A live market chart strip drives everything underneath. Glow, bloom, molten gradients.

## Why it fits Deriv
It is *entirely* a function of a live market feed and a real stake/payout, with a tunable risk dial — but it trades on **reading the market's texture** (trend vs vol vs momentum) rather than guessing direction. That is squarely Deriv's synthetic-indices, fast-round, risk/reward wheelhouse, and it teaches a genuinely useful market-literacy skill (decomposing price into facets) without being a candle-clicker.

## Originality (one paragraph)
ASSAY's core is a **vector-valued proportion bet**: you don't pick a level, draw a region, ride a multiplier, route a flow, or phase-lock a single wave — you set *ratios across multiple live signals* to match a *moving compound target* in a continuous blend space, and you're scored by *distance in that space*. Mixing/alloying games exist as crafting fantasies, and ternary plots exist in chemistry, but pinning ratio-mixing to *live market facets as ingredient potencies* with a *market-drifted target* and a *distance-to-target settlement* is a combination I could not find in the trading-game or casual-game world. It occupies the PROPORTION/BLEND-TO-TARGET family that none of the kept cores touch.
