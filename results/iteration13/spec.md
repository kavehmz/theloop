# PRISMA

**One-line pitch:** The live price is a single white beam of light; a prism shatters it into a spectrum whose *spread* is volatility and *tilt* is drift — you claim wavelength bands and get paid for the light that scatters into them.

---

## Core loop (second-to-second)

1. A horizontal **white price-beam** races in from the left edge of the field and strikes a **prism** mounted at the center. The beam's vertical entry point is the live price; its incoming angle is the price's short-term velocity.
2. The prism **refracts and disperses** the beam into a fanned **spectrum** (deep red at the bottom → violet at the top) projected onto a vertical **spectrum bar** on the right wall.
   - The **angular SPREAD of the fan = live volatility** (realized variance of the last N ticks). Calm market → a tight, near-white pencil of light hitting one or two bands. Wild market → a wide rainbow smeared across many bands.
   - The **CENTRE of the fan = drift/velocity** (the running mean tick direction). Rising price tilts the whole spectrum up toward violet; falling tilts it down toward red.
3. **Before the shutter opens** (a ~6s arming window) the player taps to **CLAIM** one or more of the 12 wavelength bands. Each band shows a live, demand-priced **payout multiplier**: bands the spectrum is currently *unlikely* to reach pay more; bands sitting under the beam pay less. Claiming costs stake per band.
4. The **shutter opens**, light floods through for a **3s exposure**, and a sensor measures the **integrated intensity** (how much light × for how long) that fell on each band. Bands flare and bloom as photons accumulate on them.
5. **Payout = stake × band-multiplier × (your band's captured share of total exposed light).** Land the fat middle of the fan on a high-multiplier band you claimed and it detonates in a bloom of color. The round resets; the beam re-fires.

## How the live market drives it

Nothing is cosmetic — the optics ARE the tape:

- **Entry height of the beam** = current price level (maps to the vertical axis).
- **Incoming beam angle** = price velocity (last-tick slope). Sharp moves cock the beam steeper.
- **Dispersion / fan spread** = realized volatility over the trailing window. This is the heart of the bet: you are really betting on *how volatile the market will be during the 3s exposure*, expressed as how wide the rainbow smears.
- **Fan centre tilt** = signed drift. Trend up = spectrum climbs; trend down = spectrum sinks.
- **Shimmer/flicker** of the beam = tick frequency (more ticks = busier sparkle).

So the winning question is intrinsically spatial-and-shape: *given live drift and volatility, which slice of the spectrum will the price-light pile up on?* — not "will a number go up."

## The bet & payout

- **Stake** per claimed band (claim 1–4 bands). Wider claims = safer but each pays less.
- **Multipliers** are live and demand-priced per band (0.0x baseline at the fan centre up to ~25x at the cold extremes), recomputed every tick from the predicted spectrum so the house edge holds.
- **Settlement:** captured-light share of each claimed band × its locked multiplier × stake. Partial fills are real — a band half-lit pays half. A "perfect focus" calm-market pencil landing dead-on a far band is the jackpot moment.
- Optional **LENS** power-up (earned, not bought): drop a converging lens before the prism to *narrow* the fan one notch — a skill lever that tightens variance on demand.

## Why it's addictive

- **Read-the-market skill express:** veterans learn to feel volatility regimes and pre-claim the cold bands right before a vol spike fans the light out to them — huge, legible edge.
- **Sensory payoff curve:** the slow bloom of photons piling onto your band during the 3s exposure is a built-in suspense ramp with a hard, bright climax.
- **Near-miss geometry:** watching the fan's edge lick the band *next to* yours is the classic almost-won dopamine, but here it's a visible beam of light, not an abstract line.
- **Fast cadence:** ~10s per full round, claim → expose → settle, endlessly.

## Visual / sensory intent

Dark obsidian optics-bench aesthetic — think a laser lab at night. A glowing volumetric white beam with bloom, a faceted glass prism that caustic-sparkles, a fanned rainbow that breathes with volatility, and a vertical spectrum bar of 12 glass band-cells that ignite with their own color as photons land. Wins detonate in a chromatic bloom + lens-flare; losses dim to a cold blue flicker. Particle photons stream along the beam. Everything reacts to the tape in real time.

## Why it fits Deriv

Deriv is built on **volatility indices** — synthetic markets defined by their volatility. PRISMA turns volatility itself into the thing you see and bet, because dispersion IS the fan width. It's a live-chart product (the beam's geometry is the chart), real bet/payout with live demand-priced odds, ~10s rounds, instant visceral feedback. It makes the most abstract Deriv quantity — variance — into a literal rainbow you can aim for.

## What makes it original (one paragraph)

Trading casinos universally bet on a *scalar*: a price, a multiplier climbing to a bust, a level being above/below. PRISMA bets on the **dispersion and tilt of a price-driven light spectrum** — a 2-D shape outcome where the player's edge is *forecasting the volatility regime* and claiming the wavelength bands the rainbow will smear onto. The prism's physical dispersion mapping (spread = variance, centre = drift) makes volatility the literal width of a rainbow you can pre-claim, which is mechanically unlike crash/plinko/dice/up-down and unlike every kept design: it is not a containment corridor (THREADLINE), not energy-vs-rupture (REACTOR), not painted territory (RIPTIDE), not steering a projectile/orbit to a gate (SLINGSHOT/APOAPSIS), and not tap-timing (PULSEPOINT). The core verb is "claim where the light scatters," and the scatter is volatility made visible.
