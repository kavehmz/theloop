# TOLLGATE — spec

**One-line pitch:** A live, vertical auction where you *buy ownership of future price levels* like tollgates on the market's road — and get paid every time the live price drives through a gate you own; rent on each gate rises in real time as the price closes in, so you bid, defend, or flip your claims before the candle arrives.

---

## Core loop (second-to-second)

The live price runs left-to-right as a glowing comet on a chart. To the **right of the price**, in the direction it is heading, sits a vertical **ladder of price levels** — the *tollgates*. Each gate is a thin horizontal lane at a discrete price. Every gate shows a live, ticking **RENT** (its current bid price) and a **TOLL** (the payout you collect if the price touches that gate while you own it).

Second to second you are doing this:

1. **Scan the ladder.** Near gates (close to current price) are cheap to own but pay a small toll. Far gates are expensive in expectation and pay a fat toll — but the price has to *stretch* to reach them.
2. **Buy a gate** (one tap). You now OWN it. A little flag with your color plants on that lane.
3. **Watch demand move the rent.** As the live price drifts toward a gate, simulated rival bidders pile in and that gate's RENT inflates in real time (proximity demand). The gate you bought cheap is suddenly "hot".
4. **Decide, fast:**
   - **HOLD** for the touch — if the comet's price actually reaches your gate's lane, the gate *fires*: confetti, a shockwave, and the full TOLL pays into your stack.
   - **FLIP** — sell your ownership back into the inflamed market for the current (risen) rent, banking the spread instantly without waiting for the touch. Classic "buy the level cheap, sell it once everyone wants it."
5. Gates the price passes *without* you owning them flash and are gone. Owned gates the price never reaches before they scroll off-screen expire worthless — you ate the rent.

The whole thing is a rolling, never-resetting market microstructure: a continuous auction over where the price is about to go.

---

## How the live market drives it

Everything keys off the **real-time price series**:

- **Rent (bid price) of a gate** is a live function of (a) the *distance* from current price to that gate and (b) the *momentum/velocity* of the price toward it. Price accelerating upward => upper gates' rent spikes; a stall => rent bleeds back down. The order-book pressure you see is literally derived from price action, not random.
- **Touch payout** triggers on the actual price path crossing the gate's lane — the candle's high/low intersecting the level. No dice, no RNG resolution: the market decides.
- **Volatility** widens the ladder (more gates in play, bigger tolls) and makes far gates genuinely reachable, so the game's tempo breathes with real conditions.
- **Flip value** is the live mark-to-market of your claim: it IS the current rent. Selling is selling at the live bid.

So the player is reading momentum and mean-reversion to answer one question every second: *will the price come collect at this gate before it expires — and is the rent worth more now than the toll later?*

---

## The bet & payout

- **Stake:** you spend your balance to BUY gates (pay the rent). Multiple gates can be owned at once — you build a little portfolio of claims along the price's road.
- **Win condition A — TOUCH:** price reaches an owned gate's lane → you collect that gate's **TOLL**. Toll = stake × the gate's *odds multiplier*, where the multiplier scales with how far/unlikely the gate was when you bought it (e.g. near gate ×1.4, far gate ×12). Big payouts come from owning a far gate cheaply and watching the price stretch all the way to it.
- **Win condition B — FLIP:** sell an owned gate for its current rent. If rent rose above what you paid, you bank the spread risk-free. This rewards reading the *demand wave* even when you don't believe the touch will happen.
- **Loss:** an owned gate scrolls off the right edge un-touched and un-flipped → the rent you paid is lost. Over-buying far gates in a quiet market bleeds you.

House edge lives in the rent/toll spread and the demand curve, exactly like a real book — tunable, transparent, and intrinsic to the auction rather than bolted on.

---

## Why it's addictive

- **Two exits, constant tension.** Every owned gate is a live decision: ride for the toll or flip the spread? You are never idle; the rent ticker is a slot-pull that never stops.
- **The approach.** Watching the comet drift toward a gate you own — rent screaming up, the touch one tick away — is pure anticipation. The near-miss (price reverses one lane short) is devastating in the best way.
- **Compounding mastery.** A newcomer buys the cheap near gate and feels a quick toll. A regular front-runs the demand wave: buys a far gate before the momentum kicks, then flips into the frenzy. Skill ceiling is real (momentum + mean-reversion reading) but the floor is one tap.
- **Portfolio dopamine.** Owning several gates lights up the ladder like a board you control; multiple near-simultaneous touches cascade payouts.
- **Loss aversion engine.** Rent paid is sunk the instant you don't flip — so you keep leaning in to "make it back" on the touch.

---

## Visual / sensory intent

Dark fintech canvas. The price comet leaves a glowing tapered trail; a soft grid breathes behind it. The **tollgate ladder** stands to the right as stacked neon lanes, each a frosted-glass bar with a live RENT number that pulses and reddens as demand heats. Owned gates glow with your accent (cyan) and fly a tiny flag. When the price **touches** an owned gate: a horizontal shockwave rips across the lane, the gate detonates into particles, the toll counts up in big numerals, and the balance ticks. A **flip** is a crisp "sold" stamp and a coin-spray. Rival bid pressure shows as ghost order-book bars sliding up the lane. Everything eases, glows, and has weight — sound would be order-book clicks, a rising hum as price approaches, and a bell on touch.

---

## Why it fits Deriv

Deriv is options/multipliers/synthetics over a live chart — betting on *where price goes*. TOLLGATE is the purest possible expression of that: it turns "will price reach this strike" into a tactile, ownable, tradeable object. It mirrors real **strike/barrier** instruments and real **order-book microstructure** (bids inflating with demand, mark-to-market exits) — so it teaches and entertains the exact intuition Deriv traders live in, while staying a one-tap arcade game. The live chart is not decoration; it is the auctioneer.

---

## What makes it original (one paragraph)

Other games paint territory by area (coverage), draw corridors, or harvest volatility. TOLLGATE is an **auction over discrete future price levels with live demand-driven pricing and a dual exit (touch payout vs. mark-to-market flip)** — market microstructure turned into a game. The core verb is *own a level and decide between collecting the toll or flipping the inflamed claim*, with rent that moves in real time as a function of price distance and momentum. It is neither "guess up/down", nor a rising-multiplier cash-out (there is no single scalar climbing to a bust — outcomes are decided by whether the price path *spatially reaches* the levels you bought, and by a live bid you can sell into), nor coverage-of-space. The bidding economics — buying cheap far levels, front-running the proximity-demand wave, flipping before the touch — is a mechanic family no banned genre and no kept design occupies.
