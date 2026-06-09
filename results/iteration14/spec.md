# DEEPLINE

**One-line pitch:** Cast a hook to a depth in a live-price water column, snag the price-quarry as it swims past, then win the *reel-fight* — feeding slack when the price runs and cranking the reel during the lulls — without snapping your tension line.

---

## Core loop (second-to-second)

A vertical **water column** fills the screen. The y-axis is **price level**; the live market price is a **quarry** (a fish marker trailing a luminous wake) that swims up and down the column exactly as the price moves. The surface (the boat) is at the top; the dark deep is at the bottom.

1. **CAST (≈1s).** While the quarry swims, the player drags a glowing **hook** to a target depth band and releases. The hook sinks and holds at that price level. Deeper, faster-moving water pays more (bigger fish live deep) but fights harder.
2. **HOOK (the strike).** When the price-quarry's path crosses the hook's depth — a *touch* of that price level — it **strikes** and is hooked. A miss (price never reaches the band before the cast timer expires) costs only the small cast fee. The instant of the strike sets the **fish size** = how violent the local price action is right then (recent volatility), which scales the whole payout.
3. **FIGHT (the heart, ~6–15s).** Now the hooked quarry pulls. The line has a live **TENSION** gauge.
   - Tension rises with **adverse price velocity** — how fast and how far the price (the fish) is moving *away* from the player's **reel handle** (a depth setpoint the player drags).
   - **REEL IN:** drag the handle toward the surface to gain **fight distance** (your payout meter). But reeling *against a run* (price sprinting away) spikes tension toward the **SNAP** redline.
   - **GIVE SLACK:** let the handle drift with the fish. Tension bleeds off, the line cools from red to cyan — but you make no progress and you risk the fish **diving** back to the deep (losing banked distance if the slack is sloppy).
   - The skill is the *rhythm*: pump-and-reel. Crank hard in the calm, feather the drag through the violent runs. The price's real micro-structure (bursts vs. drift) sets that rhythm — you are literally reading the tape.
4. **LAND or SNAP.** Reel the fish all the way to the boat → **LANDED**, bank the full payout (size × distance-multiplier × depth bonus). Let tension hit the redline → **SNAP**, the line breaks, the fish bolts in a particle-burst and the stake is lost. The player may also **NET EARLY** at any moment to bank the current fight distance at a haircut — a real decision, not a forced climb.

There is no number that simply rises on a clock. Your payout is *fight distance reeled*, which can go **up and down**; the outcome is decided by how the price moves in space and how well you manage the line against it.

---

## How the live market drives it

- **Quarry position = price level.** The fish *is* the price tick, mapped to depth. Its wiggle is the real tape.
- **Strike = a price-level touch.** Getting hooked is a genuine "did price reach this level" event — the bet you implicitly placed by choosing a depth.
- **Fish size = local realised volatility** at the moment of the strike (ATR of the last N ticks). Choppy moments hook bigger, more valuable, harder fish.
- **Line tension = adverse price velocity** relative to your handle. A sharp price spike = a hard run = tension surge. A flat tape = a calm you exploit to reel.
- **Dive risk = sustained move deeper** (price trending against the haul) while you hold slack.

So every dial in the fight is a transform of real price action: level (depth), volatility (size), velocity (tension), trend (dive). Nothing is a cosmetic overlay.

---

## The bet & payout

- **Stake** is set before the cast. A small non-refundable **cast fee** is taken on every cast (covers the misses, keeps the house edge honest and the casts deliberate).
- **Depth choice** is the pre-bet: deeper band = higher `depthBonus` multiplier but a faster, harder fish (higher tension slope).
- **Payout = stake × fishSize × (fightDistance / fullDistance) × depthBonus**, realised when you **LAND** or **NET EARLY**. Landing pays the full distance multiplier plus a *landed bonus*; netting early pays the banked distance minus a small drag haircut.
- **SNAP = total loss** of stake (cast fee already taken).
- Tunable so expected return sits at a fair-but-house-edged level; variance is steered by depth (shallow = frequent small landings; deep = rare trophy hauls).

---

## Why it's addictive

- **Two-phase tension.** The *strike* is a slot-pull spike of anticipation ("will it bite?"); the *fight* is a sustained skill-rush ("can I land it?"). Two dopamine events per round, not one.
- **A loss you can feel coming and fight.** The SNAP is not a random bust — you watch tension creep red and you *choose* whether to muscle through or feather off. Agency makes every loss replayable in your head ("I should've given slack").
- **The one-more-cast hook.** A trophy fish glimpsed deep, a near-snap you survived, a fish that bolted at the boat — all of it begs another cast.
- **Mastery curve.** A newcomer just yanks the reel and sometimes lands one. A regular learns to read price bursts and pump the lulls, raising their land-rate — visible skill expression on top of real variance.

---

## Visual / sensory intent

- **Dark fintech deep-sea.** Near-black navy gradient from a faintly lit surface to an inky abyss; volumetric god-rays near the top, drifting plankton particles, parallax depth haze.
- **The quarry** is a sleek bioluminescent fish whose body color = fish size (cyan minnow → molten-gold trophy), trailing a price-wake ribbon that *is* the recent price line.
- **The line** glows and changes color with tension: cyan (slack) → amber (working) → searing red with a high-frequency shudder near SNAP. A taut line visibly vibrates; slack line sags in a catenary curve.
- **Feedback:** strike = screen-flash + line-pluck + ripple ring. Landing = a triumphant surface splash, gold particle geyser, the fish breaching. Snap = the line whips back, a crack, the fish dissolves into a fleeing particle streak into the dark.
- **HUD:** tension gauge as a heat-bar with a redline; fight-distance as a rising water-line / depth ladder; live size and payout readouts.

---

## Why it fits Deriv

Deriv clients already trade **level touches**, **volatility**, and **fast in-the-moment risk** on a live chart. DEEPLINE makes those instincts physical: choosing a depth band *is* a touch bet, the fish size *is* a volatility read, and the reel-fight *is* active position management against velocity. It runs on any Deriv synthetic index or FX feed, ticks at trading cadence, and rewards reading the tape — a genuine trading game, not a casino game with a chart glued on.

---

## What makes it original (one paragraph)

The crowded trading-casino space decides outcomes with a scalar that rises on a clock until a bust (Crash/Aviator) or with a single timed tap. DEEPLINE's outcome is decided by a **continuous, two-sided tension fight** in which the player's only currency is *line discipline* against **real price velocity**: you gain distance by reeling, but every adverse price burst loads the line toward a snap, so you must read the tape's micro-rhythm and trade reeling for slack in real time. The payout (fight distance) can move *both directions* and is never on rails — it is sculpted live by what the price does in space. Combined with a strike that is literally a price-level touch and a fish whose value is the live volatility at that instant, the whole mechanic is a transform of price action with no rising-multiplier wrapper, no grid, no corridor, no orbit, and no passive level-ownership. It sits in the under-used "two-force tension / active load-management" family with a cast-hook-reel skin that nothing in the kept set occupies.
