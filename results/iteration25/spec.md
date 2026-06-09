# RICOCHET — spec

## Skin-free core (read first)
**The player's bet is the timing of paddle-strikes that deflect a live-price-driven ball back into a field of scoring rotors to keep an unbroken combo-chain alive, settled by the multiplier reached by the longest unbroken chain at the moment the ball drains.**

Confirmed distinct from all 20 kept cores:
- It is **not** "bank a meter before it blows" (REACTOR #2): there is no rupture meter and no banking decision — value is the *length of an unbroken rhythm*, which **resets to zero on a single miss** rather than being lost-if-not-banked. You never choose to "cash out"; you choose *when and how hard to strike*.
- It is **not** "one-shot charge+aim to a distance gate" (SLINGSHOT VEGA #4): there is no single launch and no distance gate. It is continuous multi-bounce skill across the whole round.
- It is **not** "time discrete taps to reversals" (PULSEPOINT #7): the player is not reading the price for reversals and tapping at them. The ball obeys live-price physics continuously; the player applies *aimed impulse* (paddle angle + power) to redirect a moving object through space — a spatial deflection skill, not a 1-D reaction-to-reversal tap.
- It is **not** "claim demand-priced levels paid on touch" (TOLLGATE #8): the player owns no levels and is not paid for the ball touching levels. Rotors are fixed targets; payout is the chain multiplier, not per-touch claims.
- Not RAMPART/RIPTIDE/THREADLINE/etc.: no territory, no corridor, no walls-with-HP, no orbital band. Decision = strike timing/aim; settlement = longest unbroken chain multiplier.

---

## Name & pitch
**RICOCHET** — *"The market is the ball. Your timing is the table."* A neon pinball arena where the live price literally throws the ball around the field; you snap two paddles at the perfect instant to keep it ricocheting through glowing price-rotors and build an unbroken combo-chain. Every clean hit ramps your multiplier; one miss and it drains — your payout is the highest chain you could hold.

## Core loop (second-to-second)
1. A luminous ball streaks across a dark arena. Its velocity, the table TILT, and gravity are **driven live by the price feed** (see below) — it is never on a scripted path.
2. Six **price-rotors** (spinning scoring bumpers) sit at fixed lanes. Hitting one mid-flight adds a link to your **combo-chain** and kicks the multiplier up (x1 → x1.2 → x1.5 → x2 …).
3. Two player paddles guard the drain at the bottom. You press **Left / Right (or click)** to flick a paddle. *When* you strike (the ball must be in the paddle's strike arc) and the *angle* you catch it at determine where the ball flies next — you are aiming it back up into the rotor field.
4. **Clean catch + a rotor hit within the next ~1.5 s = chain continues.** A muffed catch, or letting the ball idle without scoring, **does not break the chain immediately** — but a *drain* (ball past the paddles) ends the round, and a *broken rhythm* (ball bounces around without hitting a rotor before the chain timer lapses) **resets your chain to x1**, keeping the dopamine on a knife's edge.
5. Round ends when the ball drains. **Payout = stake × the highest chain multiplier you ever sustained.** (You are racing your own best chain, not banking a climbing number — a late drain after a broken chain pays nothing extra, so holding rhythm is everything.)

## How the live market drives it (intrinsic, not glued on)
The Deriv synthetic/forex feed maps to physics so the table *is* the market:
- **Price velocity (Δprice / tick) → launch power & ball speed.** A fast-moving market hurls the ball hard; a flat market makes it loll, easy to catch but slow to score.
- **Signed price drift → table TILT.** Up-trend tilts the field so the ball wants to climb into the rotors (generous); down-trend tilts toward the drain (you fight gravity to stay alive).
- **Volatility (rolling stdev) → rotor "liveliness."** High vol spins the rotors faster and widens their bounce kick, so each hit launches the ball further — bigger chains are *possible* but the ball is wilder and harder to read. Low vol = docile rotors, modest chains.
- **Tick cadence → the rhythm you must lock to.** Because the ball's re-entry into the paddle arc is paced by price ticks, your strike timing is literally timing to the market's heartbeat.

So a trader reads the chart the way a player reads a pinball table: a screaming bull run is a high-tilt, high-power table where huge chains are on offer if your hands are fast enough; a choppy flat market is a low, sluggish table where survival is easy but multipliers crawl.

## The bet & payout
- **Stake** chosen pre-round. **One ball per round** (round length is naturally market-paced, ~15–40 s).
- **Settlement = stake × peak sustained chain multiplier.** Multiplier ladder is bounded (e.g. cap x50) so the house edge is set by the ladder spacing + drain probability, not by an unbounded climb.
- No cash-out button. The skill expression is *how long you hold the rhythm*, and the outcome is locked the instant the ball drains. (This deliberately avoids the crowded "cash out before bust" frame.)
- Optional **LOCK side-bets**: lighting all six rotors once arms a "multiball" jackpot lane — a discrete bonus objective layered on top, never required.

## Why it's addictive
- **Pure flow-state skill ceiling.** Newcomers grok it in one ball; veterans chase frame-perfect catches that ride a volatile table to a x30 chain. The gap between "I survived" and "I *threaded* that run" is enormous and visible.
- **Loss aversion on the chain, not the wallet.** Watching a x18 chain you built over 12 seconds *reset to x1* on one missed rhythm is gut-punch dopamine — the "ONE more round" engine.
- **Market legibility = skill.** Players who read volatility/trend literally play better, so the chart-watching transfers to the game. That is the Deriv crossover.
- **Juicy feedback:** screen-shake, rotor bloom, chain-counter that grows and pulses, particle bursts scaling with multiplier, a low rising tone as the chain climbs that snaps silent on reset.

## Visual / sensory intent
Dark fintech neon. Full-bleed arena: a live price chart runs as the *back wall* of the table (the same data driving physics, so you see cause and effect), a glassy mid-layer of glowing rotors and lane guides, and a bright foreground of the ball + comet trail + paddles. Grid floor with parallax depth, volumetric glow, additive particle sparks on every rotor hit, a giant living chain-multiplier readout. Cyan/magenta/amber palette, CRT-ish bloom, motion everywhere — the first frame already looks like a busy table mid-rally.

## Why it fits Deriv
It is a trading instrument disguised as a pinball table: the *only* thing that moves the ball is the live market, the bet pays on a market-paced outcome, and reading volatility & trend is the dominant skill. It rewards exactly the instincts Deriv traders already have (is it trending? is it volatile?) and converts them into twitch-skill payout — fast, real-time, instant-feedback, repeatable.

## Originality (one paragraph)
Pinball is everywhere; *this* is not a pinball game with a chart pasted behind it. The ball has **no independent physics** — its speed, the table tilt, and the bumper energy are continuous functions of live price velocity, drift, and volatility, so the market is the literal motive force of play. The bet is settled by a mechanic absent from the kept set and from the trading-game market: the **peak length of an unbroken skill-rhythm chain that resets (not banks, not busts) on a broken beat**. Web search surfaced (a) "Momentum Pinball," a forex *indicator/strategy* with no game, (b) generic combo-streak skill games (e.g. Flipside) with no market data and no betting, and (c) generic paddle/pinball web games — none fuses live-price-driven ball physics, flipper-deflection skill, a reset-on-miss combo-chain, and a financial bet on the peak chain. The combination is, to the depth I searched, unoccupied.
