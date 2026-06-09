# WAKELINE

## Skin-free core (decision + settlement)
**The player's bet is a continuous line they steer in real time, attempting to reproduce the live price curve at a self-chosen LEAD (the player's stroke must arrive a fixed fraction of a second BEFORE the price does), and it is settled by the fidelity/similarity score between the player's traced path and the price's actual path — higher anticipatory fidelity pays more.**

Diffed against all 13 kept cores — matches none:
- Not THREADLINE (draw a *static* containment region and stay inside it) — WAKELINE is a *continuous live trace* scored by *similarity*, not a corridor with an inside/outside test.
- Not PULSEPOINT (discrete taps at reversals) — WAKELINE is one *continuous gesture*, scored every frame, not discrete timing events.
- Not RIPTIDE / TOLLGATE (claim spatial bands/levels, paid by share/touch) — no claiming, no touch, no territory.
- Not SLIPSTREAM (survival / proximity to a line while dodging terrain) — there is no hazard to avoid and no survival clock; you are *generating* a path that is compared to the price's path, and a perfect overlap is the goal, not avoidance.
- Not SLINGSHOT/APOAPSIS/BALLAST/COREBORE (physics: launch / orbit / balance / extract) — no projectile, no fuel, no mass.
- Not REACTOR/DEADLOCK (accumulate vs rupture / two-force tension to a redline) — no meter that blows; the only thing measured is shape fidelity.
- Not STARFORGE (capture ordered waypoints to complete a figure) — no waypoints; the target is the *unknown future* price curve, revealed as you trace.
- Not SLUICE (route a conserved fluid through a network) — no network, no conservation.

The unique pair: **decision = trace a leading echo of the live curve; settlement = anticipatory path-similarity score.**

---

## Name & pitch
**WAKELINE** — *"Don't follow the market. Get there first."* You ride a glowing cursor that must trace the price's path a half-second AHEAD of where price actually goes — paid by how faithfully your anticipatory wake overlaps the truth.

## Core loop (second to second)
1. The live price prints a glowing ribbon scrolling right-to-left across the chart. A vertical **NOW line** sits in the centre.
2. Ahead of NOW (to the right) is the **LEAD ZONE** — empty future. Your cursor lives there.
3. You drag your cursor (mouse / finger / arrow keys) up and down in the lead zone, **drawing where you predict price will be when it arrives at NOW.**
4. As the chart scrolls, your drawn wake reaches the NOW line at the same instant the real price does. The closer your wake sits to the real value at that instant, the more **fidelity** you bank for that slice.
5. A live **FIDELITY %** dial fills; a **STREAK** multiplier grows while you hold high fidelity, and resets on a big miss. Smoothness bonuses reward clean strokes over jittery ones.
6. The round runs a fixed window (e.g. 20s). At the bell, payout = stake × f(mean fidelity × peak streak × smoothness). You can **LOCK IN** early to bank your current curve-score and end the round (a skill choice, not a rising-multiplier cash-out — your number can go *up or down* if you keep playing).

## How the live market drives it
The price feed is the *target signal*. Every animation tick the engine samples real price, advances the ribbon, and — when a slice of your previously-drawn wake crosses the NOW line — computes the absolute error between your drawn value and the actual printed price at that exact x. That per-slice error is mapped through a tolerance band (tight band = high pay) into instantaneous fidelity. Volatility makes the curve harder to anticipate (bigger, faster moves), so payout scales naturally with how "alive" the market is. There is no up/down guess and no level to touch — only how well your *shape* tracks the market's *shape*, ahead of time.

## The bet & payout
- **Stake** chosen before the round.
- **LEAD setting** (e.g. 0.3s / 0.5s / 0.8s): a longer lead is harder (you must commit earlier, with less information) and carries a higher multiplier cap. This is the risk dial.
- **Settlement:** `payout = stake × clamp(meanFidelity^1.4 × (1 + 0.04×peakStreak) × smoothnessBonus × leadMultiplier)`. House edge lives in the fidelity→multiplier curve. A perfect anticipatory trace at max lead is a rare, big multiplier; sloppy tracking returns sub-stake.
- **LOCK IN** banks the running curve-score and ends the round early — used when you've had a great stretch and the market is turning chaotic.

## Why it's addictive
- **Pure skill-expression with instant feedback** — every millimetre of your stroke lights up green (lead, on-target) or red (missed) the instant it crosses NOW. You *feel* a good prediction.
- **The anticipation high** — guessing the future and watching the real price snap onto your line is a genuinely euphoric "I called it" hit, far stronger than reacting.
- **Flow state** — continuous tracing under time pressure is the same loop that makes rhythm games sticky; "one more round to beat my fidelity %" is built in.
- **A visible personal ceiling** — your best-ever fidelity % is a score to chase; the lead dial gives a self-set difficulty ramp.

## Visual / sensory intent
Dark fintech canvas. The price ribbon is a luminous cyan filament with a soft bloom and a trailing comet wake. Your cursor is a warm-amber orb with a glowing tail you paint into the future; where your wake matches, the gap between the two lines fills with a green light-weld and emits sparks; where you miss, a hot-red rift opens with a low static buzz. The NOW line is a bright scan-bar that pulses on every matched slice. A circular FIDELITY dial and a STREAK flame sit in the HUD. Win = a cascade of gold particles along the matched section and a chord swell; miss-heavy round = the screen desaturates and the rift glow lingers.

## Why it fits Deriv
Deriv is real-money excitement layered on a live market chart with instant settlement. WAKELINE is *intrinsically* about the price path — you cannot play it without reading and anticipating real market motion, which is exactly the literacy Deriv wants to gamify. Stake, a clean risk dial (lead), live in-round feedback, and discrete fast rounds map directly onto Deriv's contract model. It rewards reading volatility and momentum — trading intuition — rather than blind direction calls.

## What makes it original (one paragraph)
Trading games settle on *direction* (up/down), *touch* (does price hit a level), *distance* (how far it travels), *share* (territory), or *survival* (don't get hit). WAKELINE settles on none of these: it settles on the **geometric fidelity of a continuous gesture the player draws against the market's own future path**, with a built-in **anticipatory lead** that turns a copying task into a prediction task. The player is not betting *where* price goes or *whether* it survives — they are betting on *how precisely they can pre-trace the literal shape of price before it happens*. That decision+settlement pair (lead-echo trace → anticipatory path-similarity score) does not exist among the kept cores or in the saturated trading-casino canon, and it is mechanically distinct from rhythm-tap and static-corridor games that share surface vocabulary.
