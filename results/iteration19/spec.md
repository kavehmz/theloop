# STOWLINE — spec

## Skin-free core (READ FIRST)
**The player's bet is: which orientation/position to place each market-generated shaped piece into a bounded vault — settled by the packed COVERAGE (% of vault area filled) reached at the moment a piece can no longer fit and forces a spill.**

Diff vs the 16 kept cores — matches NONE:
- Not THREADLINE (draw a corridor price stays inside) — there is no corridor; the player fits discrete solids.
- Not REACTOR (accumulate energy vs a rupture meter, bank before blow) — settlement is *spatial area filled*, not a scalar charge vs a breach gauge.
- Not RIPTIDE / TOLLGATE (claim spatial bands/levels, paid by share/touch) — the player does not claim regions the price then visits; the player physically *fits emitted solids* and is paid by how tightly they tessellate.
- Not BALLAST (place mass to keep a beam balanced) — there is no balance/torque axis; the loss condition is *geometric misfit*, not topple.
- Not FLUXYARD (classify streaming items into correct bins) — there are no correct/incorrect bins; every piece can go anywhere that physically fits, and payout is density, not throughput-correctness.
- Not SLUICE / STARFORGE / WAKELINE / COREBORE / etc. — no routing, waypoints, path-tracing, or depth winch.

This is the PACKING / TESSELLATION lane in its purest form: spatial fit + density, with loss by geometric spill.

---

## Name & pitch
**STOWLINE** — *"The market hands you the cargo. You decide how it stows."*
A live price feed forges glowing hex-cluster cargo pieces — big moves forge big, jagged pieces; quiet drift forges small, friendly ones — and you rotate and drop each into a honeycomb vault, racing to pack it dense before a piece won't fit and the hold spills.

## Core loop (second-to-second)
1. **A piece is forged.** Every ~1.4s the market tick closes a "cargo window." The window's price travel (range) sets the piece's SIZE (1–6 hexes), its volatility sets its JAGGEDNESS (compact blob vs spindly), and its net direction sets its COLOUR (green = up-run, red = down-run, amber = chop).
2. **You aim it.** The forged piece floats at the top of the vault. Drag left/right to choose a column, tap/press R to rotate through its 6 hex-orientations. A live ghost shows where it will lock and whether it fits.
3. **You drop it.** It snaps into the lowest legal hex slot. Filled cells glow; completing a fully-packed *ring* of the honeycomb flashes and locks that ring as permanent density (it can never spill).
4. **Coverage climbs.** A big radial COVERAGE dial shows % of vault filled. Your live payout = stake × (coverage% mapped on a steepening curve). Colour-matching a piece into its same-colour vault sector adds a density bonus.
5. **Bank or push.** A **STOW** button banks the current coverage payout any time. Or push for a denser pack and a fatter multiplier — but the next forged piece might be a monster that fits nowhere.
6. **Spill = bust.** If a forged piece has no legal placement anywhere in the vault, the hold spills: the round ends and unbanked coverage is lost (locked rings are still paid at a reduced salvage rate).

## How the live market drives it (intrinsic, not glued on)
The pieces ARE the price action — nothing is random skin:
- **Size** ∝ the high-low range of the cargo window (a 1.4s slice of ticks). Volatile bursts literally hand you big, hard-to-place cargo.
- **Jaggedness** ∝ intrabar path/whipsaw: a clean trending slice forges a compact cluster; a whippy slice forges a spindly, awkward one.
- **Colour** = sign of net move in the window (up=green, down=red, flat=amber), so a trending market streams same-colour cargo you can chain into a sector for bonuses; a choppy market mixes colours and sizes, raising spill risk.
- The chart and the forge are the same data: the candle that just printed is the piece now floating in your hold. Reading the tape = reading your next piece.

## The bet & payout
- **Stake** set pre-round. Live payout = stake × f(coverage%), where f steepens (e.g. coverage 40%→1.4×, 60%→2.3×, 75%→4×, 85%→7×, 92%→14×) so the last few percent of density are where the real money is — exactly where spill risk is highest.
- **Colour-sector bonus**: each piece dropped into its matching-colour vault sector adds +0.5% effective coverage to the dial.
- **Locked rings**: a fully-packed honeycomb ring is banked permanently; on a spill you still salvage locked-ring value at 50%.
- **STOW** banks live payout instantly. **Spill** forfeits unbanked coverage (keeps salvage). House edge tuned by the coverage→multiplier curve and forge size distribution.

## Why it's addictive
- **Tetris-grade compulsion** (fit the awkward piece) fused with **press-your-luck banking** — two of the most sticky loops in games, and neither is a Crash reskin.
- **Visible near-misses**: a vault that's 89% full with one annoying gap is *agonising* in the best way — you can SEE the money and the risk at once.
- **The market authors the tension**: a volatility spike forging a giant jagged piece into your nearly-full vault is a genuine "oh no" moment generated by real price, not an RNG bust.
- **Mastery curve**: novices pack loosely and bank early; experts leave deliberate negative-space "sockets" for expected piece sizes, reading the tape to pre-plan — deep skill ceiling, instant-grok floor.

## Visual / sensory intent
Dark fintech glass. A glowing amber honeycomb vault centre-stage, hex cells lighting as they fill. Pieces forged from the live candle with a brief "stamp" flash and a colour matching their price direction. A radial coverage dial that pulses and changes hue as it climbs toward the danger-money zone. Locking a ring sends a shockwave ripple through the comb. A spill cracks the vault and showers falling hex shards. Ticker tape and a mini price chart along the top feed the forge in real time. Sound-design intent: a satisfying magnetic "clunk" on lock, a rising harmonic as coverage climbs, a glassy shatter on spill.

## Why it fits Deriv
Driven entirely by a live market chart with a real stake/payout, fast rounds (30–90s), instant feedback, and a true risk/reward decision every second. The "read the tape to predict your next piece" layer rewards market intuition, aligning with Deriv's options/multipliers audience while feeling like a premium arcade game, not a casino table.

## Originality (one paragraph)
STOWLINE turns price action into *physical cargo geometry*: the bet is a spatial-fit decision and the settlement is packing density at the moment of geometric failure — a loop absent from the saturated trading-casino canon (no climbing-multiplier bust, no up/down guess, no level-claiming, no grid-buying) and distinct from every kept core (it is fit-and-density, not corridor-drawing, energy-banking, territory-share, balance, classification, or routing). The closest cultural touchstone is falling-block puzzles, but no falling-block game is driven by a live financial feed that *forges the pieces from real volatility* and settles a wager on packed coverage with a press-your-luck bank/spill. That fusion — market-forged tessellation as a real-money density wager — is the original kernel.
