# THREADLINE — spec

## Name & pitch
**THREADLINE** — *Draw a ribbon into the future and thread the live price through it like a needle through a moving eye; the thinner you draw, the bigger the win — but one nick and the thread snaps.*

## The one-line core mechanic
You **draw a freehand corridor (a "thread") of your chosen width into the next few seconds of chart-time**, then watch the live price-needle sweep through it in real time — you cash out only if the price stays *inside the entire ribbon* from end to end.

## Core loop (second-to-second action)
1. **DRAW (2–4 s, paused-ish "arming" window).** A faint forward grid extends to the right of the live price ("the future zone", e.g. the next 8 seconds). You press and drag from the current price tip to sketch the **centre-line of your thread** — the route you believe price will take. As you drag, a glowing ribbon of a set half-width inflates around your stroke. A **width dial** (mouse wheel / slider / pinch) lets you fatten or thin the ribbon live; a live **multiplier number** floats on the ribbon and updates every frame: thinner ribbon + longer reach + bolder slope = higher multiplier.
2. **COMMIT.** Release / hit COMMIT. The ribbon locks, freezes its multiplier, and turns into a translucent "tunnel" laid over the future grid. Your stake is set.
3. **THREAD (the live phase, ~8 s).** Time begins to sweep: a vertical **"now-line"** scans left→right across your committed ribbon at real speed while the live price prints new ticks. The price draws a bright filament. As long as the filament is inside the tunnel walls, a **tension/charge bar** fills and the ribbon glows hotter; every fraction of a second survived ticks the *live* payout up toward the locked multiplier.
4. **SNAP or LAND.** If the filament ever crosses a ribbon wall, the thread **SNAPS** with a recoil/whip animation — round lost. If the now-line reaches the far end with the filament still inside, the thread **LANDS** — it flashes gold, the charge discharges in a burst, and you're paid **stake × locked multiplier**.
5. **CASH EARLY (the agonizing choice).** During THREAD you may **cut the thread early** at any moment to bank `stake × (multiplier × fraction_of_ribbon_completed)`. This is the dopamine fork: hold for the full thinner-ribbon jackpot and risk a late snap, or snip now and keep the climbing partial.

## How the live market drives it
The ribbon is anchored to **real price + real time**: the X axis is wall-clock seconds, the Y axis is price. The mechanic is *entirely* a bet on the **path** of the live feed — not a level, not a coin flip. Volatility is the whole game: in calm tape you can draw a near-flat thin thread for a modest multiplier; in choppy tape a thin thread is suicidal, so you either draw fat (low multiplier) or draw a *bold sloped/curved* thread that matches a move you anticipate (high multiplier). On Deriv this rides synthetic indices (Volatility 75/100, Boom/Crash, step indices) whose tick stream is the literal needle. The payout math reads the realised path against the committed geometry tick-by-tick — pure price action, no RNG layer bolted on.

## The bet & payout
- **Stake**: chosen pre-draw.
- **Locked multiplier** at commit = `f(1/width, reach_length, slope_boldness, path_curvature)`. Tighter, longer, and more daring threads pay more. Indicative range ~1.05× (fat lazy thread) to ~25×+ (a hair-thin thread threading a sharp predicted swing).
- **Win**: filament stays inside walls for the full reach → `stake × multiplier`.
- **Early cut**: `stake × multiplier × completed_fraction`.
- **Loss**: filament touches/crosses a wall → 0.
- House edge sits in the width→multiplier curve (priced off live realised volatility), exactly like an option's implied vol.

## Why it's addictive
- **You author the bet.** Drawing your own route is expressive and personal — every round is a tiny prediction you *made with your hand*, so wins feel earned and losses feel like "I was so close."
- **The thinning trade-off.** The width dial is a continuous greed slider; the temptation to shave one more pixel for one more multiplier is relentless.
- **Live tension.** The now-line sweep + charge bar + hotter glow turn 8 seconds into a held breath. Near-misses (filament kissing a wall and surviving) spike adrenaline.
- **Early-cut fork.** The bank-now-or-hold decision recreates Crash's best moment but bound to *your own drawn geometry*, not a falling number.

## Visual / sensory intent
Dark fintech canvas, deep navy-to-black gradient, fine luminous grid. The live price line is a hot cyan filament with a comet glow at the tip. The future zone is a cooler, dimmer grid you "write" onto. The committed ribbon is a translucent neon tunnel (magenta→violet) with bright edge walls; surviving filament makes the walls pulse and bloom. **SNAP** = the ribbon whips and shatters into red shards with a screen shake and a low recoil thud; **LAND** = gold shockwave, particles, ribbon discharge, rising chime. The width dial is a glowing ring around the cursor while drawing. Everything reacts at 60fps; the chart never sits still.

## Why it fits Deriv
Deriv is live charts + fast risk/reward on synthetic indices and short-duration contracts. THREADLINE is literally a **path-shaped option**: it generalises Deriv's existing "stays-between / ends-between / touch" barrier contracts into a *freehand, time-varying corridor* the user authors themselves. It needs nothing but the live tick feed and a volatility model Deriv already runs, and it gives newcomers an instantly legible "keep the line in the tube" loop while letting pros express genuine path/vol views.

## What makes it original (one paragraph)
Every game in the saturated set bets a *scalar*: a number, a level, a side, a multiplier-before-crash. THREADLINE bets a **freehand 2D shape over future time** and scores it by *containment of the realised price path within a player-authored corridor whose width is a live, continuous risk dial*. It fuses three things that don't normally appear together: (1) expressive **freehand path drawing** as the wager itself, (2) **width-as-multiplier** continuous risk tuning, and (3) a **real-time containment sweep** with an early-cut bank — none of which is up/down guessing, crash, plinko, mines, dice, limbo, wheel, hilo, towers, or candlestick-clicking. You're not predicting *where* price ends or *whether* it crashes; you're predicting *the route it travels*, and betting your own hand-drawn geometry against the live tape.
