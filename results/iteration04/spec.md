# SLINGSHOT VEGA — spec

## Name & pitch
**SLINGSHOT VEGA** — *Wind the bowstring with raw market momentum, hold your nerve as the band stretches, then loose a glowing slug across a tower of payout gates — but the shot is still in flight, and live price-velocity is the crosswind that bends it home or short.*

## The one-line core mechanic
The **live price's velocity continuously winds elastic tension into a drawn slingshot band**; you pick the **moment to RELEASE**, and the stored kinetic energy launches a slug whose arc — *still being bent in real time by live price momentum acting as crosswind/gravity* — has to carry far enough to clear the payout gate you bet on.

## Core loop (second-to-second action)
1. **CHARGE (you hold; price winds the band).** A slingshot sits at the left edge of the chart. Its band stretches not by a timer but by the **integrated momentum of the live tick stream**: when price is moving fast (big tick-to-tick deltas in either direction) the band rips backward and a **POWER gauge** climbs hard; when price stalls or reverses, the band *slackens* and power bleeds off. So charging is an active read of the tape — you want to hold through a burst of volatility and release at the crest, not during a lull. A taut band hums, glows hotter, and visibly vibrates; the slug at the pocket leaves a charge-trail.
2. **PICK YOUR GATE (the bet, set before/while charging).** A vertical tower of **payout gates** rises across the flight field — near gates (G1) are wide and pay small (~1.3×), far gates (G7+) are narrow slivers that pay big (~8×–40×). You tap the gate you're aiming to *clear* (reach or pass). Aiming farther = more multiplier but needs more stored power AND a kind tailwind.
3. **RELEASE.** Let go. The band snaps forward with a recoil whip; the slug launches with **initial speed = stored power** and an arc. This is the committed shot.
4. **FLIGHT (the live, sweated phase, ~3–5 s).** The slug flies left→right as a comet. Crucially it is **not ballistic-deterministic**: every frame, live price momentum is injected as force — upward price drift = lift/tailwind that extends the arc, downward drift = headwind/extra gravity that drags it short, chop = turbulence that jitters it. You watch your slug claw toward your gate as the market itself decides whether it makes it. Each gate the slug *punches through* lights up and bumps a live running multiplier.
5. **LAND / RESOLVE.** The slug arcs down and lands. **You win if it reached at least your bet gate** → `stake × that gate's multiplier`. Overshooting pays the *highest gate you cleared* (a far overshoot is a windfall, capped). Falling short of your gate = miss (0), but if it cleared at least G1 you can have opted into **SAFETY CATCH** beforehand to recoup a small consolation. A clean punch through your exact target gate triggers a "BULLSEYE" bonus glow + chime.
6. **CASH-IN-FLIGHT (the agony).** Mid-flight, once the slug has cleared *any* gate, a **CATCH** button arms: slam it to freeze the slug and bank `stake × (highest gate cleared so far)` — locking a sure win instead of gambling that the crosswind carries you to the next, richer gate before the arc falls. Hold for the far gate and a sudden price reversal can let you fall short between gates and lose the lot.

## How the live market drives it
Two different, both-intrinsic uses of the *same* live feed:
- **Charging** integrates **|price velocity|** (absolute tick-to-tick momentum) into stored launch energy — volatility literally is your power. A choppy/trending burst is fuel; a flat tape starves the band.
- **Flight** uses **signed price velocity** as a real-time force on the projectile — rising market = tailwind/lift (carries far), falling market = headwind/drag (falls short), volatility = turbulence. So the *direction* the market chooses during your 4-second flight is the difference between clearing G6 and dropping into the gap before it.
This rides Deriv's synthetic indices (Volatility 75/100, Boom/Crash, step indices) where the tick stream is fast and rich — the band charge and the flight wind are computed straight off the live deltas, no RNG layer bolted on.

## The bet & payout
- **Stake**: chosen pre-shot.
- **Target gate**: you bet which gate the slug will *reach or exceed*. Each gate carries a fixed multiplier scaled by distance and narrowness, e.g. G1 1.3× · G2 1.8× · G3 2.6× · G4 4× · G5 6× · G6 11× · G7 24× · G8 40×.
- **Win** = slug's landing distance ≥ target gate → `stake × multiplier of the *highest* gate cleared` (overshoot upgrades you, capped at G8).
- **Catch-in-flight** = `stake × highest gate cleared at the instant you catch`.
- **Miss** (lands short of target gate) = 0, unless **Safety Catch** opt-in (costs a small multiplier haircut on wins) returns a fixed fraction if you cleared ≥ G1.
- House edge lives in the power→distance and wind-force curves, priced off live realised volatility — exactly like vega/gamma on a momentum option.

## Why it's addictive
- **The release-timing nerve.** Charging is a live skill: ride a volatility burst, resist releasing in the lull, loose at the crest. Mastery is visible and felt — a perfectly-timed release at a momentum spike *feels* earned.
- **The flight you can't fully control.** Release isn't the end — it's the start of a 4-second breath-hold where the market is *actively* bending your shot. Near-misses (slug clipping the lip of your gate and falling back) are excruciating in the best way.
- **The catch-vs-hold fork.** Bank a sure mid-flight win or gamble the tailwind carries you one gate richer — Crash's signature dilemma, but spatial and physical, tied to a projectile *you* charged and aimed.
- **Continuous greed dials.** Two of them: how long you charge (power) and how far you aim (gate) — both reward boldness, both punish it.

## Visual / sensory intent
Dark fintech canvas, deep indigo-to-black, fine luminous grid receding into a horizon. Left edge: a neon slingshot — twin glowing pylons and an energy band that stretches, reddens and *vibrates* harder as power climbs, shedding sparks at high charge. The live price ribbon scrolls behind everything as a cyan filament whose slope literally tilts the on-screen wind vane. The payout gates are tall translucent neon arches stepping into the distance, far ones thin and gold. RELEASE: a snap-whip of the band, a screen-kick, the slug launches as a white-hot comet with a particle tail. FLIGHT: the comet leaves a glowing parabola; a wind streak field blows across the field tinted green (tailwind) or red (headwind) by live price direction; gates flash and ring as they're punched. BULLSEYE: gold shockwave + rising chime + slow-mo. MISS: the slug fizzles into grey ash and drops with a dull thud and a small dust puff. Everything at 60fps; the band hums even at rest.

## Why it fits Deriv
Deriv is live synthetic-index charts plus fast, gamified risk/reward. SLINGSHOT VEGA turns the two quantities a derivatives trader actually watches — **momentum (velocity)** and its **direction** — into the two physical forces of the game: charge and wind. It's effectively a **momentum option** dressed as a carnival slingshot: you're long volatility while charging and long/short the market's drift during flight, and the gate ladder is a strike ladder. Needs only the live tick feed Deriv already streams; legible to a newcomer in one shot ("pull back, let go, watch it fly") yet masterable by a regular reading the tape for the perfect release.

## What makes it original (one paragraph)
The kept and saturated games either bet a scalar (up/down, a level, a crash multiplier), draw a containment shape (THREADLINE), harvest volatility into a breach meter (REACTOR), or paint claimable territory (RIPTIDE). SLINGSHOT VEGA is none of these: it is a **two-phase kinetic projectile** where *one* live feed is used *two distinct physical ways* — **|velocity| integrated as stored launch energy** during a player-timed charge, then **signed velocity injected as live aerodynamic force** that bends the committed shot's arc through a distance-gated payout ladder, with a spatial catch-or-hold fork during flight. The novelty is not "a slingshot reskin of crash" — the band-tension is literally market momentum, and the post-release flight is *still* a live market bet because the price's direction is the crosswind deciding which gate you clear. Charge-timing skill + ballistic flight perturbed in real time by signed price drift + a gate-distance strike ladder is a combination none of the banned genres or kept families occupy.
