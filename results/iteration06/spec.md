# SLIPSTREAM

**One-line pitch:** Pilot a glider through a living canyon whose walls *are* the market's volatility envelope — dive to kiss the live price line for fat multipliers, pull away before a tick slams the wall shut on you, and cash out before you crash.

---

## Core loop (second-to-second action)

The screen is a side-on canyon scrolling right-to-left at a steady cadence. The **canyon walls are the live market**: the ceiling is the rolling upper volatility band, the floor is the rolling lower band, and a glowing **mid-rail is the live price line itself**. The gap between the walls breathes with real volatility — it yawns wide open when the market is choppy, and squeezes into a knife-thin slot when volatility contracts.

You fly a small glider on the **right edge** of the canyon (the "now" edge). You control **one axis — vertical thrust**: hold (or drag up) to climb, release to fall. That is the entire control surface; it's graspable in one second.

Three things are happening every tick:

1. **Survive.** Touch the ceiling or floor (a real band level) and you crash — round over, stake lost.
2. **Collect.** Glowing **spark crystals** spawn pinned to the live price mid-rail as it scrolls in. Crystals sit dead-center in the most dangerous part of the canyon. Flying through one banks a **collect-bonus** onto your multiplier. To grab them you must dive toward the live price — then peel away before the next tick reshapes the walls around you.
3. **Climb the multiplier.** A live payout multiplier rises continuously with **distance survived**, and accelerates while you're flying *close to the price line* (the "slipstream" — hugging the rail multiplies your gain rate). Hug the rail = earn fast but risk death; hug a wall = earn slow but live longer.

A **CASH OUT** button is always lit. Tap it and you bank `stake × current multiplier` instantly, glider peels up and out of the canyon in a victory arc. Wait too long and a volatility crush snaps the walls together onto you.

---

## How the live market drives it

Everything on screen is a transform of one real price feed:

- **Ceiling / floor** = upper / lower volatility bands (a rolling mean ± k·σ over the last N ticks). When realized volatility rises, the bands widen → canyon opens. When it falls, bands tighten → canyon narrows. This is *the* difficulty signal and it is 100% market-driven.
- **Mid-rail** = the live price (rolling mean / mid-band). It wanders up and down the screen as the market trends, dragging the safe slot with it.
- **Wall ripples & shocks** = each incoming tick's magnitude. A big tick punches a visible bulge/spike into the wall geometry just ahead of you — a real-time hazard you must react to.
- **Slipstream gain rate** = inverse distance from glider to the live price line, so the payout literally rewards proximity to the market's true value.
- **Volatility crush** (forced end) = a sustained vol-contraction collapses the slot toward the price line; sit too long and the walls pinch you out — a market-driven timer that punishes greed.

No RNG hazards. The obstacle course is the order book breathing.

---

## The bet & payout

- **Stake** chosen before launch (demo chips here).
- **Pre-flight wager modifier — "Trim":** pick a starting glide altitude band: **HIGH / MID / LOW**. MID launches you near the price line (high slipstream gain, high danger, +20% base rate); HIGH/LOW launch you near a wall (safe, slower). It's a single pre-commit risk dial layered on top of the live cash-out.
- **Payout** = `stake × multiplier` at the instant you cash out. Multiplier = `base_growth(distance) × slipstream_bonus × (1 + Σ crystals)`.
- **Bust** = touching a wall, or getting caught by a volatility crush → lose stake, multiplier zeroes.
- House edge sits in the growth curve calibration and the crush probability — same shape as Crash-style expected value, but the *agency* (where you fly, when you dive for crystals, when you bail) is genuine skill expression, not a passive wait.

---

## Why it's addictive

- **Continuous tension, not a single guess.** Every tick you're alive is a micro-decision: dive for that crystal or play safe? The number is always ticking up and the walls are always moving.
- **The greed knife-edge.** The biggest multipliers live closest to the price line — exactly where death lives. Slipstream makes the optimal line the scariest line.
- **Near-miss dopamine.** Threading a closing slot at the last pixel, grabbing a crystal and yanking away before the wall bulges — pure "one more round" fuel.
- **Skill ceiling.** Newcomers fly the safe wall for tiny wins; sharks ride the rail, read volatility regime shifts, and milk crush timing. Same loop, deep mastery.
- **Loss is felt, win is felt.** A crash shatters the glider with a screen-shake and red bloom; a cash-out launches it skyward in a gold streak with a rising chime.

---

## Visual / sensory intent

Dark fintech canyon at night. The walls are layered translucent gradient ribbons (deep teal → cyan glow at the lip) that ripple as ticks arrive. The live price mid-rail is a hot magenta/gold filament with a soft bloom and a trailing wake. The glider is a sleek neon delta with a particle thrust trail that brightens when climbing and a slipstream shimmer when it rides the rail. Crystals pulse and emit a collect-burst on grab. The multiplier readout is a huge tabular-figure number that scales and flares as it climbs; a faint heartbeat hum speeds up the closer you fly to the rail. Crash = shard particle explosion + chromatic-aberration shake. Cash-out = gold confetti streak + ascending arpeggio.

---

## Why it fits Deriv

Deriv is live synthetic indices and volatility products with instant risk/reward on a real chart. SLIPSTREAM is *literally a volatility instrument turned into a cockpit*: the player is trading proximity to price against realized volatility, cashing out a continuous multiplier — the same risk surface as Deriv's multipliers and Crash-adjacent products, but expressed as embodied piloting. It reads instantly as a trading game (bands, price line, live ticks, multiplier, cash out) while feeling like an arcade flight game. It maps cleanly onto Deriv's existing synthetic-index feeds and round-based stake/payout rails.

---

## What makes it original (one paragraph)

Trading games that use price as terrain almost always make the price line a **floor you run on top of** (an endless runner with a chart skin) or a corridor you draw. SLIPSTREAM inverts that twice: (1) the hazard is a **two-walled volatility canyon** generated from the *bands*, not the price, so the obstacle course *breathes* with realized volatility — widening and pinching as a direct, legible function of the market's mood; and (2) the reward gradient is **inverted toward danger** — the live price line is not a safe path but the single most lethal and most lucrative line on screen, because the "slipstream" payout-acceleration and all collectibles are pinned to it. You are not dodging the market; you are flirting with it, diving to kiss true value and peeling away before volatility closes the gap. That coupling — *survival driven by volatility width, reward driven by price proximity, forced-ending driven by volatility crush* — is a mechanic I could not find anywhere, and it is intrinsically a volatility/price instrument rather than a casino game with a chart glued on.
