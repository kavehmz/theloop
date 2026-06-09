# DEADLOCK

**One-line pitch:** A knot on a taut rope is dragged left and right by live bull/bear price momentum — you don't bet *which* side wins, you stake a flag at *how far* the knot will travel toward your side, then decide mid-round whether to push your flag deeper for more multiplier or lock in the slack you've already earned.

---

## Core loop (second-to-second action)

The screen is a single horizontal rope stretched across the chart, with a glowing **knot** sitting near the center. Two forces yank the knot every tick:

- **BULL pull (right)** — fed by positive price momentum (the integral of recent upticks).
- **BEAR pull (left)** — fed by negative price momentum (the integral of recent downticks).

The knot's position is the *net settling point* of these two live forces. When the market rips up, the rope hauls the knot right; when it dumps, the knot snaps left; in chop, the knot hovers and trembles at center with visible rope-tension shimmer.

A round is ~20 seconds. The second-to-second loop:

1. **Pick a side** (BULL right / BEAR left) and **drag your flag** to a target displacement on the rope — near center = easy, low multiplier (e.g. 1.3×); far out near the post = hard, fat multiplier (up to ~12×). Placing the flag locks your stake and starts the round.
2. **Watch the knot get pulled.** Live momentum drags it. A taut rope-tension bar shows how hard each side is currently pulling. The closer the knot creeps to your flag, the louder the rope hums and the brighter your flag glows.
3. **Mid-round decisions, while the knot is still moving:**
   - **PUSH** — shove your flag further out toward the post for a higher multiplier (costs nothing but distance — the bar to clear gets harder). One-tap greed.
   - **LOCK** — cash out *now* for a guaranteed partial payout scaled to how far the knot has already traveled toward your flag (e.g. knot is 60% of the way → ~0.6× of your flag's multiplier on your stake). Bank the slack before momentum reverses.
4. **Resolution** — if the knot **touches your flag** before the round ends, you win the full flag multiplier and the rope SNAPS your side with a shockwave. If the timer expires with the knot short of your flag (and you didn't LOCK), the rope goes slack and the stake is lost.

## How the live market drives it

The pulling force *is* the price action — not a skin over a random number.

- Each tick computes price return `r`. A decaying **momentum accumulator** per side integrates positive vs negative returns: `bull += max(r,0)`, `bear += max(-r,0)`, both decaying ~6%/tick.
- Knot velocity = `k·(bull − bear)`; knot position is the running settling point clamped to the rope. So a sustained trend visibly *walks* the knot out; a reversal yanks it back through center.
- **Rope tension** = `bull + bear` (total contested energy) — high tension when both sides pull hard (volatile two-way markets), shown as rope shimmer/vibration and a tension gauge. Tension widens the knot's jitter, making far-out flags genuinely nail-biting.
- A real Deriv build maps these accumulators to live synthetic-index tick momentum and order-flow imbalance.

## The bet & payout

- **Stake** a chosen amount, choose a **side**, place a **flag** at displacement `d ∈ (0, 1]` of the rope half-length.
- **Multiplier** rises with `d` (further = riskier = bigger): roughly `1 + 11·d²`, so center-ish ~1.3×, mid ~4×, edge ~12×.
- **Win (knot reaches flag):** `stake × multiplier`.
- **LOCK (early settle):** `stake × multiplier × (knotProgress)` where progress is fraction of the way to your flag — always positive, reward for banking instead of holding.
- **PUSH:** moves your flag out, re-prices the multiplier upward, but raises the distance the knot must cover. Pure greed lever.
- **Loss:** timer expires with knot short and no LOCK → lose stake. House edge lives in the timer length, decay rate, and the multiplier curve.

## Why it's addictive

- **The lock dilemma is the dopamine.** You're 70% of the way there with 9 seconds left and the bull pull is fading — bank the partial now, or hold for the full 8× and risk the reversal? Every round is a live "press your luck" you *feel* through rope tension.
- **PUSH is the greed loop.** Knot reaches your flag early → "just push it one more notch" → bigger multiplier, more tension, one-more-round compulsion.
- **Reversals are gut-punches and miracles.** Watching the knot get hauled back across center, then a momentum flip slingshots it to your flag in the final second — pure slot-machine tease, but earned from real price.
- Sub-second feedback: rope hum pitch, knot glow, flag proximity flare, tension shimmer.

## Visual / sensory intent

Dark fintech canvas, deep navy-to-black radial. A single luminous rope of segmented chain-links spanning the width, sagging and snapping taut as tension changes. The knot is a hot core (cyan when neutral, shifting amber/red as one side dominates) with a particle aura. Two anchor posts at the rope ends pulse with their side's color (bull = mint/green, bear = magenta/red). A faint live price ribbon threads behind the rope so you see the cause. On a win: the rope whips, a shockwave ring fires from the flag, confetti sparks in your side's color. On a loss: rope goes limp with a low detune and ash particles fall. Tension gauge and momentum tug-meter framed in glass-morphism panels.

## Why it fits Deriv

Deriv is fast, gamified, real-money excitement layered on a live market chart. DEADLOCK is *built on* momentum/order-flow — the exact signal a multipliers/synthetics trader already reads — and turns the magnitude-and-timing decision (how far, how long to hold) into a 20-second instrument. The PUSH/LOCK pair mirrors leverage-up vs take-profit, so a Deriv regular intuits it instantly while a newcomer groks "rope gets pulled to your flag" in one sentence.

## What makes it original (one paragraph)

Most tug-of-war / bull-vs-bear games are binary up/down guesses with a tug animation glued on. DEADLOCK never asks *which side wins* — it asks *how far the contested settling point will travel toward the side you chose, and whether you can hold your nerve while live momentum keeps re-pulling it.* The bet is on **magnitude of displacement + timing of release**, with two distinct mid-round levers (PUSH for greed, LOCK for a continuous distance-scaled partial) operating on a settling point that is literally the integral of real price momentum. That combination — a single contested knot whose position is a live momentum integral, staked by displacement with a press-your-luck partial-settle on travel progress — is not a reskin of Crash, Plinko, Mines, Dice, Limbo, Wheel, HiLo, Towers, or up/down guessing, and it is mechanically distinct from a containment corridor (THREADLINE), a volatility-energy/breach meter (REACTOR), and price-path territory painting (RIPTIDE).
