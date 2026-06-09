# FLUXYARD

**SKIN-FREE CORE:** The player's bet is **a real-time per-item classification decision — reading each live-tagged parcel's market glyph and routing it to the chute that matches its true regime** — settled by **the count of correctly-classified parcels banked (× a running accuracy multiplier) before the queue overflows.**

> Diff vs. the 13 kept cores: no kept core is a real-time per-item *classification/triage throughput* loop. TOLLGATE = own demand-priced levels paid on touch; RIPTIDE = own spatial bands paid by share; SLUICE = route ONE conserved fluid through an authored branching network (no discrete tagged items, no classification, lose by burst/dry — Fluxyard loses by *overflow + misreads*, and routing is correct/incorrect per item, not flow-balancing); PULSEPOINT = time taps to reversals (no items, no bins); COREBORE = steer+extract on a depth axis. The decision (classify-and-route each discrete arriving item) + settlement (correct-sort throughput before overflow) pair matches **none** of them.

---

## One-line pitch
A live market spits out a stream of "regime parcels" onto a conveyor — read each one's price-glyph and slam it down the right chute (BULL / CHOP / BEAR) before the yard backs up and overflows; your payout is how many you sort correctly before the jam.

## Core loop (second-to-second)
1. The live chart ticks. Every tick (faster when the market is hot) drops a **parcel** at the mouth of a conveyor belt that crawls left toward three sorting chutes.
2. Each parcel carries a **glyph** — a tiny sparkline of the *real recent price slope* at its spawn instant. Its TRUE class is the live market regime: **BULL** (rising/positive momentum), **BEAR** (falling), or **CHOP** (flat / low-vol).
3. The player reads the glyph and routes the parcel: **A / ← = BULL (left/green)**, **S / ↓ = CHOP (mid/amber)**, **D / → = BEAR (right/red)** — or click/drag it into a chute. Routing the *front* parcel pops it off the belt.
4. **Correct** → bank +1 throughput, green burst, accuracy multiplier ticks up, belt eases a touch. **Wrong** → red shatter, multiplier resets toward 1×, the belt jolts faster (mis-sorts cost you tempo). A parcel that rides off the belt end **unsorted** = an **overflow strike**.
5. Three overflow strikes (or a fully backed-up yard) **ends the round** and settles the bet. Optional **LOCK** button banks your current correct-count at any time for a guaranteed settle (skill discipline, not a rising-multiplier gamble).

The loop is "read → classify → flick → feel the burst," 2–4 times a second at peak. Easy to grok (3 colored chutes), hard to master (glyphs get ambiguous near regime transitions, belt accelerates with volatility, surges flood you).

## How the live market drives it
Everything the player reacts to IS the price feed — no glued-on chart:
- **Spawn cadence = volatility.** Hot, choppy tape drops parcels fast; quiet tape drips them slowly. The belt literally runs at the market's pulse.
- **Parcel class = live regime.** A rolling momentum/slope+vol calc on the actual feed labels each parcel BULL/BEAR/CHOP at birth. The player is classifying the *real* market state, just abstracted into a glyph.
- **Glyph = real recent slope.** The mini-sparkline on each parcel is the genuine last-N-ticks shape — so near regime flips the glyphs are honestly ambiguous, which is where skill lives.
- **SURGE = volatility spike.** A sharp range expansion on the chart triggers a surge: a burst of parcels floods the belt at once. High risk, high throughput.

## The bet & payout
- Stake before the round; choose a **belt speed tier** (Calm / Live / Storm) that sets base spawn rate and a payout coefficient.
- **Payout = stake × coeff × (parcelsCorrect / target) × accuracyMultiplier**, capped, settled when you LOCK or on the third overflow strike. Mis-sorts don't directly lose stake; they bleed your multiplier and accelerate the jam, so the *throughput* you can achieve drops — failure is overflow, exactly per the lane.
- No "number climbs until bust." Outcome is *how much correct work you got through under accelerating pressure* — a throughput score, not a scalar timer-gamble.

## Why it's addictive
- **Flow state.** A fast read-classify-flick rhythm with instant green/red feedback is intrinsically dopaminergic — the same loop that makes sorting/triage games (and rhythm games) sticky, here tied to your money.
- **Mastery curve.** Anyone groks "match color to chute" in 3 seconds; experts learn to pre-read regime transitions from the chart above the belt and stage their flicks.
- **Near-miss tension.** The yard visibly backs up; one strike from settling, multiplier glowing — "one more round" is the back-up clearing at the last second.
- **LOCK dilemma.** Bank a clean run now, or push through the surge for more throughput and risk the third strike.

## Visual / sensory intent
Dark fintech yard at night. Top third: a live neon price chart with a translucent regime band (green/amber/red wash) so you can *see* the regime you're about to be tested on. Middle: a metallic conveyor with parcels as glowing glass crates, each etched with its sparkline glyph and a faint class tint. Three chutes below with colored throats that flare and emit a particle gout on a correct catch and a red glass-shatter on a misread. A volatility "pulse bar" shows belt speed; surges darken the scene and strobe the belt. Score reads as **THROUGHPUT** with a multiplier ring. Sound-design intent: a soft mechanical thunk per sort, an ascending chime as the multiplier climbs.

## Why it fits Deriv
Deriv is about reading live market regime under time pressure and getting paid for being right, fast. Fluxyard turns the single most fundamental trading skill — *classifying the current regime (trend up / trend down / range)* — into a real-time arcade loop. It's a literal, gamified expression of "read the tape, act fast, get paid for accuracy," driven entirely by a real price feed, with a clean stake/payout.

## What makes it original (one paragraph)
The kept set and the saturated casino canon are all about *where price goes* (corridors, territory, levels, launches, orbits) or *cashing a rising number*. Fluxyard is the only loop whose decision is **classification throughput**: you aren't betting on price direction, you're being paid to *correctly identify the regime* of a fast stream of market-derived items and physically route them, with the *speed of the test* set by live volatility and *failure defined by overflow + misreads*. It fuses a real-time sorting/dispatch arcade mechanic (think a logistics conveyor) with live market-regime classification — a combination absent from both Deriv's genre canon and the trading-casino space. The market isn't decoration; it generates the items, labels them, sets the tempo, and triggers the surges.
