# RIPTIDE

**One-line pitch:** A real-time territory war where the live price line is the brush — you claim price-bands on a contested chart and the market *paints* whichever zone it sweeps through, second by second, while rival tides try to flood you out. Hold the most painted ocean when the tide locks and you cash the pool.

---

## Core loop (second-to-second action)

The play field is a living **price corridor**: the right edge is "now," and the chart scrolls left as time passes. The vertical axis (price) is the contested space — an *ocean* you and rivals are trying to ink.

1. **Stake & claim.** At the start of a 30-second tide you stake an amount and drop a **Claim band** — a horizontal price zone of your color, anchored at a price level you pick by dragging it up/down. You choose its *height* (a tighter band = higher reward density, a taller band = safer coverage). Two **rival tides** (house/AI bands, teal and magenta) drop their own claims.
2. **The market paints.** Every tick, the price line advances. Wherever the line currently sits, it lays down a trail of **ink** in the color of whichever claim band contains that price. The line is the brush; the market decides who gets painted. Watching your color bloom across the field as the price drifts into your band is the dopamine.
3. **Contest & surge.** While the tide runs you can spend a small slice of your stake on a **Surge**: instantly expand your band's height for 3 seconds to catch the price as it approaches, or **Riptide-pull** to nudge your band toward where momentum is heading. Rivals surge too — bands overlap, and in an overlap the price paints a *contested* shimmer that's split by who surged most recently.
4. **Lock & tally.** When the 30s tide locks, the field freezes and every painted pixel is counted. Your **coverage %** of the total inked area is your share. Payout = pool × your coverage share × the tide's volatility multiplier. The field drains in a satisfying wave; your winnings pour in.

A newcomer groks it in one tide ("get the price to live in my color"); a regular masters reading momentum, timing surges, and sizing band height vs. volatility.

---

## How the live market drives it

- The **price tick stream is the sole agent of capture** — nothing is painted unless the real price travels there. No dice, no RNG wheel: territory is won only by genuine price movement through your claimed levels.
- **Volatility = stakes.** A choppy, fast market paints more ground and sweeps across more bands (higher multiplier, more contested overlaps). A flat market barely paints — so reading the synthetic index's regime is the skill.
- **Momentum is legible.** The recent slope of the price line tells you where it's likely to keep painting, informing where to anchor and when to surge — exactly the intuition Deriv traders already have.
- Built for Deriv **synthetic indices** (always-on, tunable volatility) but works on any live feed.

## The bet & payout

- **Bet:** stake N + place a claim band (level + height). Optional in-tide spends: Surge, Riptide-pull (each consumes a fraction of stake).
- **Outcome:** spatial — your share of total painted area at lock (a continuous 0–100%, not a binary).
- **Payout:** `stake-adjusted pool × coverage_share × volatility_multiplier`. Dominating a quiet tide pays modestly; carving the majority of a wild, high-volatility tide pays big. House edge sits in the pool rake and the neutral "undertow" band that soaks up uncontested ink.

## Why it's addictive

- **Continuous tension, not a single reveal.** For 30 seconds you watch your color win and lose ground tick by tick — a live progress bar made of paint. Near-misses (price grazing your band's edge) are constant.
- **Agency mid-round.** Surges and pulls give you meaningful decisions *while the outcome forms*, not just before — defeating boredom and powering "I almost had it, one more tide."
- **Variable, legible reward.** Coverage % is a graded outcome, so you're rarely fully wiped and rarely fully safe — the slot-machine sweet spot, but driven by real price.

## Visual / sensory intent

Dark abyssal-fintech aesthetic: near-black ocean gradient, neon ink. The price line is a glowing comet with a trailing wake that *bleeds* its current claim color into the field as a soft, liquid bloom (additive glow, subtle turbulence). Your band glows gold/cyan; rivals pulse teal and magenta. Surges fire a shockwave ring; overlaps shimmer with interference patterns. On lock, the whole field ripples, coverage bars race to fill, and a win triggers a luminous tide-surge of particles; a loss drains to grey with a low undertow rumble. Everything pulses on the tick.

## Why it fits Deriv

It's intrinsically a chart game — the live market *is* the gameplay agent, not décor. It rewards the exact instincts Deriv cultivates (reading volatility regime, momentum, timing) while reframing them as a spatial conquest anyone can feel. Fast 30s rounds, graded real-money outcomes, tunable to synthetic-index volatility tiers.

## What makes it original (one paragraph)

RIPTIDE fuses three mechanics that, to my search, have never been combined on a live market chart: **ink-coverage territory control** (Splatoon-style "who painted the most area"), **Go-style contested-zone capture**, and **the price tick path itself as the painting agent**. The bet is not up/down, not a multiplier, not buying priced grid cells, and not a single reveal — it's *who dominates a 2-D area of the chart over time*, decided purely by where real price travels. The result is a real-time, graded, spatial outcome with mid-round agency: a category I could not find existing in the crypto/trading-game space.
