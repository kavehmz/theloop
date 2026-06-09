# BALLAST

**One-line pitch:** Stack cargo onto a beam balanced on a single fulcrum while the live market price tips it left and right — counterweight the market's lean, keep the beam level, and build as high as you dare before it topples.

---

## Core loop (second-to-second action)

1. A heavy **beam sits on a single pivot (fulcrum)** in the center of the screen — a see-saw. Its tilt angle is governed by **net torque**.
2. The **live market price feeds a continuous "market torque"** onto the beam: when price ticks up the beam is pushed to lean **right**; when price ticks down it leans **left**; the *speed* of the move sets how hard. Volatility spikes arrive as **quakes** — sharp jolts that rock the beam.
3. You hold a glowing **cargo block** that slides left/right along the beam following your cursor/finger. A live **torque preview arc** shows exactly how much counter-lean that block will add at its current position (torque = mass × distance from the pivot — placing far out on a side is powerful but risky).
4. **Drop the block.** It lands, sticks to the beam, and its weight now permanently fights (or worsens) the lean. Each successful drop **raises your stack height → raises your multiplier.**
5. The market keeps shoving. You keep reading the lean and dropping blocks on the *uphill* side to bring the beam back toward level. The higher the stack, the more top-heavy and twitchy it becomes (center of mass rises → small tilts swing harder).
6. If the beam tilts past the **topple threshold**, the whole stack **slides off and collapses** — bet lost. **Bank (cash out)** at any moment to lock in your current height multiplier.

A newcomer groks it in one sentence ("keep the see-saw level by stacking on the high side"); a regular masters lever-arm placement, reading volatility regimes, and timing the bank.

## How the live market drives it

- **Price velocity → torque sign & magnitude.** The first derivative of the live price feed is mapped to an angular force on the beam. A strong rally physically pulls the beam right; a sell-off pulls it left. The beam is *literally* leaning the way the market is moving.
- **Realized volatility → quake amplitude.** A rolling volatility estimate scales random impulse jolts. Calm market = a gentle, manageable sway you can out-stack. A vol spike = violent quakes that can topple a tall, top-heavy stack in a heartbeat.
- **Price level relative to entry → a persistent baseline lean** (a slow "current") so even a sideways market has a drift you must read.
- There is no scripted difficulty curve — **the market is the difficulty.** The same beam is easy in a quiet tape and brutal in a breakout.

## The bet & payout

- **Stake** an amount, then build. Your **multiplier = f(stack height & balance quality)** — each block adds height; the longer you keep the beam near level, the more a small "balance bonus" accrues.
- **Bank** to settle at `stake × current multiplier`. **Topple** before banking = lose the stake.
- Optional pre-commit side bet: **"Reach Tier N"** (e.g. 8 blocks) pays a fixed higher multiple if you reach a height tier before toppling — a target to chase that is decided by *structure survival*, not a number you watch climb.
- House edge lives in the topple probability per added block under live vol, not in a hidden RNG bust — the player can genuinely reduce risk with skillful placement.

## Why it's addictive

- **Tactile near-miss dopamine:** the beam wobbling to the brink and you catching it with one perfect far-edge block is a visceral "I saved it" rush — the construction equivalent of a clutch.
- **Agency, not luck:** unlike a pure bust game, *where* you place mass changes survival odds, so each save feels earned and each topple feels like a fixable mistake → "one more round."
- **Escalating tension:** every block makes the next one more dangerous (rising center of mass), so the stack itself ratchets the stakes — and the bank decision gets harder the better you're doing.
- **Readable greed:** the multiplier and the lean are both on screen; the agonizing "bank now or place one more" choice is constant.

## Visual / sensory intent

- Dark fintech canvas, deep navy-to-black gradient, neon teal/amber accents. A live price line streams across the top, and its motion is *physically wired* to the beam's lean below — you can see cause and effect.
- The beam is a brushed-metal bar on a glowing pivot; blocks are translucent glass slabs with inner glow that tint **green when they reduce lean / red when they worsen it.** A live **torque arc** and a **bubble level** ("spirit level") give instant balance feedback.
- Quakes shake the whole stage with screen-shake + chromatic aberration; a topple is a satisfying slow-mo cascade of blocks tumbling off with particle dust and a low boom. A bank fires a confetti/coin burst and freezes the beam in a triumphant glow.
- Haptic-style feedback everywhere: blocks "thunk" on landing, the pivot creaks as torque mounts, a heartbeat thump when near the topple angle.

## Why it fits Deriv

Deriv is real-time trading on a live market chart with instant risk/reward. BALLAST turns the two quantities Deriv traders already live by — **direction (price velocity)** and **volatility** — into the physical forces of the game. Reading "is the market trending or choppy, calm or wild?" is *exactly* the trader's skill, here expressed as keeping a structure standing. The bet is a clean stake/multiplier/bank loop familiar to Deriv's multipliers product, and it runs on the same synthetic-index style live feed.

## What makes it original (one paragraph)

Most trading-casino games reduce the market to a scalar that rises until it busts (Crash/Aviator) or to a tile/grid guess (Towers/Mines/Grid). BALLAST instead makes the market a **two-directional physical torque acting on a balance system**, and the player's decision is **spatial and physical** — *where along a lever arm to deposit mass* — so the outcome is decided by the *shape and direction* of price action plus the player's structural engineering, not by a single number climbing to a hidden stop. It is not Towers (no safe-tile guessing, no row ladder; it is continuous rigid-body balance physics), and it is not Crash (no scalar bust — you fail by losing equilibrium, a state you actively defend with lever placement). Counterbalancing a fulcrum against live directional price torque, with volatility as quakes, is a construction/balance mechanic I could not find in the trading-game space.
