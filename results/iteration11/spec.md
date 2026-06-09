# STARFORGE

**One-line pitch:** Arm a constellation template over the live market, then watch the price-comet try to thread every star into the figure before the sky burns out — the rarer the constellation you complete, the bigger the payout.

---

## Core loop (second-to-second action)

The live price is rendered as a glowing **comet** crawling left-to-right across a dark star-field. Its trailing tail is the recent price path.

1. **ARM** — Before a round you pick one of several **constellation templates** stacked by rarity: COMMON (2-star line), RARE (3-star bend), EPIC (4-star zig), MYTHIC (5-star signature loop). When you arm one, its stars **materialize as a fixed pattern of nodes** scattered across the price/time plane ahead of and around the comet. Each star carries a **capture ring**.
2. **THREAD** — The comet flies. Whenever the live price path passes **through a star's capture ring in the correct sequence**, that star **ignites** and a bright **ley-line** snaps from the previous lit star to it — literally drawing the constellation edge. Out-of-order touches do nothing; you must light them in order.
3. **DECAY** — Every star has a **lifespan bar** that drains. Stars you haven't reached yet fade; if a star burns out before the comet threads it, the figure is **broken** and dead stars cannot be relit this round. The market's drift and volatility decide whether the comet can actually reach the next star in time — that's the whole tension.
4. **BANK or PUSH** — The moment you light enough stars to satisfy a **partial figure** (e.g. 3 of a 5-star Mythic), a **BANK** button arms: you can lock the current partial payout, or **PUSH** to chase the remaining stars for the full rarity multiplier. Lighting the final star **completes the constellation**: it flares, the figure's name stamps across the sky, and the full payout fires.

A round is short (~15–30s of market time). Lose a star to decay → the broken figure dims and you forfeit the unbanked stake. Complete it → the constellation joins your **Almanac** streak.

## How the live market drives it

- The **comet position is the live price** (a Deriv synthetic index / volatility feed in production; a GBM-style simulated tick stream in the prototype). X = time, Y = price.
- Star placement is seeded from **current volatility**: in calm markets stars cluster near the price rail (easy threads); in volatile markets they scatter wide, demanding big swings to reach — so the *same* template is harder or easier depending on live conditions, which is shown as a live **CONDITIONS** read.
- Whether the comet **reaches** a star before it decays is purely a function of real price movement — direction, speed, and the size of the next swing. Nothing is scripted; the market literally has to draw the shape.
- Volatility spikes are *good and bad*: they let the comet leap to far stars, but they also overshoot, and a missed far star burns out.

## The bet & payout

- **Stake** is set pre-round. **Multiplier = rarity of the figure actually completed.**
  - COMMON line: ~1.4×
  - RARE bend: ~2.6×
  - EPIC zig: ~5×
  - MYTHIC signature loop: ~12×
- **Partial bank:** each lit star unlocks an escalating partial cash-out (e.g. 3/5 stars on a Mythic banks ~3.5×) so you constantly weigh "take the sure thing vs. chase the loop."
- House edge lives in the decay rates and star spread vs. realized volatility — tuned so the headline rarities feel reachable but rarely land.
- **Almanac streak:** completing rarer figures in consecutive rounds builds a meter that boosts the next multiplier — a meta-hook that pulls "one more round."

## Why it's addictive

- **Near-miss engine:** you can be one star from a Mythic with a draining lifespan and a comet inches away — the most dopamine-dense moment in betting design, and here it's *visual and spatial*, not a number you watch tick.
- **Agency without control:** you chose the template and when to bank; the market does the drawing. You feel skilled when a swing lands the final star.
- **Collection drive:** the Almanac turns wins into a set to complete; rare constellations are trophies.
- **The bank/push fork** every few seconds keeps the hand on the trigger.

## Visual / sensory intent

Deep-space dark-fintech: near-black radial gradient, faint nebula haze, parallax star dust. The price comet is a hot white-cyan head with a fading plasma tail. Capture rings pulse; lifespan shows as the ring **thinning into an arc** like a countdown. Igniting a star = a sharp **flare + ley-line snap** with a chromatic bloom and a rising chime; the pitch climbs with each star so a near-complete figure is audibly tense. Completing a Mythic = full-screen constellation flare, the figure's name etched in starlight, gold particle burst. A broken figure crackles and dims to ash-grey. Everything glows; motion never stops.

## Why it fits Deriv

Deriv is built on live synthetic indices and fast option/multiplier bets with instant feedback on a moving chart. STARFORGE *is* the chart — the price line is the playfield — and the wager is a clean stake→multiplier contract with a cash-out fork, exactly the contract shape Deriv users know. Volatility, the thing Deriv traders already watch, is the literal difficulty dial. It rewards reading the market's character (calm vs. wild) without requiring any TA knowledge.

## What makes it original (one paragraph)

Most "pattern" trading games are technical-analysis indicators (head-and-shoulders detectors) or candlestick clickers — STARFORGE is neither. It is a **real-time spatial waypoint-chaining wager**: the player commits to an abstract named figure, and the *live price path must physically connect a sequence of decaying star-nodes in order to draw that figure within a time window*, with a partial-bank/push fork and a rarity-scaled payout. It is not a containment corridor (the price isn't kept inside anything), not territory painting, not energy harvesting, not a rising-multiplier crash. The fusion — constellation/figure templates + ordered node capture + per-node decay timers + rarity-priced completion, all driven by realized volatility deciding reachability — is, to my web search, not a game that exists.
