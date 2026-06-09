# RAMPART — spec

## SKIN-FREE CORE (decision + settlement)

> **The player's bet is how to distribute a fixed armor budget across a fan of price-levels (walls) and how to reinforce them in real time, settled by the fraction of total wall HP still standing when the timed siege ends — where every adverse price excursion onto a wall deals damage scaled by how hard and how far the price drives into it.**

This matches **none** of the 18 kept cores:
- Not THREADLINE (stay inside a drawn region) — there is no containment corridor; price is *expected* to attack your walls, and you profit by *absorbing* hits, not by avoiding a zone.
- Not REACTOR (accumulate energy vs a rupture meter, then bank) — there is no banking/cash-out, no single rising meter; you START with a stockpile and watch it get *spent down* by impacts across many independent walls.
- Not RIPTIDE / TOLLGATE (claim spatial bands/levels, paid by share or touch) — touching a level is *bad* here (it damages you), not a payout; you are not paid for territory owned or levels hit.
- Not DEADLOCK (one two-force tension meter, lose at a redline) — there is no single push/hold meter; damage is distributed across many discrete structures, each with its own HP, and you actively re-allocate between them.
- Not SLIPSTREAM / APOAPSIS / COREBORE (pilot/survive/winch through moving terrain) — nothing the player controls *moves through* the price; defenses are statically placed and the price comes to them. Survival is measured as *aggregate HP preserved*, not a craft's proximity to a line.
- Not BALLAST / STOWLINE (balance/pack mass) — no balance beam, no packing/coverage density; armor is consumed by damage, not arranged for fit.
- Not REACTOR/SLINGSHOT/OVERTONE/etc. — no charge-and-launch, no phase-lock, no classification, no mixing.

The novel pair is: **decision = real-time spatial allocation + reinforcement of a depletable armor budget across many independent fortified price-levels; settlement = surviving HP fraction after a fixed-duration assault.** That is a tower-DEFENSE damage-absorption loop, not on any kept list.

---

## Name & pitch

**RAMPART** — *"Fortify the price. Hold the line. The market is the siege."*

You build a fan of defensive **bastions** at chosen price levels around the live market. The market itself is the attacking army: every tick that drives the price *into* one of your bastions is an assault, and the harder/faster it slams (volatility × penetration depth), the more wall HP it tears off. You have a finite **garrison** of armor to pre-place and a trickle of **reinforcement** to repair the wall under fire. Survive the timed siege with enough rampart standing and you cash out a multiple of your stake scaled to the fraction held.

## Core loop (second-to-second)

1. **Deploy (pre-siege, ~6s):** A fan of 7 bastion slots is laid over the chart at evenly spaced price levels straddling the entry price. Drag your garrison budget onto slots — thicker walls cost more but soak more damage. Closer-in walls are cheaper but get hit first and hardest.
2. **Siege (live, ~45–90s):** The horn sounds. Price ticks stream in. Whenever the price crosses *into* a bastion's level and presses past it, that bastion takes damage = `volatility_of_move × penetration_depth`. Cracks spider across the wall; chunks spall off; the HP bar drains. A breached bastion (HP→0) collapses and the *next* wall behind it becomes the new front line.
3. **Reinforce (live):** A reinforcement meter refills slowly. Tap a bastion to pour reinforcement into it — patching cracks, raising HP. The tension is *triage*: do you shore up the wall taking fire now, or bank reinforcement for the wall the price is clearly charging toward?
4. **Settle:** When the siege timer hits zero, your payout = stake × `1 + (fraction of total wall HP still standing × level_multiplier)`. Hold everything → max payout. Lose your whole rampart before the horn → busted.

## How the live market drives it

- **The price IS the attacking army.** No RNG spawns. A wave is literally an adverse price excursion onto a wall.
- **Magnitude → damage.** A sharp, fast adverse move (high realized volatility over the last few ticks) is a *heavy assault* — it deals far more damage than a slow drift to the same price. Penetration depth (how far past the wall line the price pushes) scales the hit.
- **Volatility → siege tempo.** Choppy, high-vol markets mean near-constant battering on many walls at once (frantic triage). Calm markets mean long lulls punctuated by the occasional ram. The synthetic-index vol regime sets the entire feel of the round.
- **Direction → which front.** Up-moves attack the upper bastions, down-moves the lower ones. A trending market hammers one side relentlessly; a ranging market saws across the center walls — so reading the regime tells you where to put your garrison.

## The bet & payout

- **Stake:** fixed amount per siege.
- **Pre-bet choice:** garrison size tier (more armor = lower multiplier ceiling but safer) and wall placement.
- **Payout:** `stake × (1 + survivingHP_fraction × M)` where `M` is the round's level multiplier (set by chosen difficulty/spread of walls and siege length). Place walls tight to the entry (constantly under fire, high `M`) for big multipliers at high risk; place them wide (rarely hit) for a low-`M`, near-guaranteed small win. Full breach = total loss.
- **No cash-out ladder.** Outcome is decided by the *spatial state of your fortifications* at the horn — not by a scalar climbing until a bust.

## Why it's addictive

- **Triage panic.** In a volatile round you cannot save every wall — you must read the price's charge and pick which bastion lives. Every reinforcement tap is a felt micro-decision.
- **Tangible destruction.** Walls visibly crack, spall, and collapse. Watching your last bastion hold at 4% HP through the final horn is a heart-in-throat moment; watching it crumble on the second-to-last tick is agony you'll instantly re-buy to avenge.
- **Readable mastery.** A newcomer groks "build wall, market attacks, keep wall alive." A regular learns to read vol regime, pre-load the trending side, and feather reinforcement — deep skill ceiling.
- **Pre-commit + live agency.** The deploy phase is a strategy puzzle; the siege is reflex. Two dopamine systems in one round.

## Visual / sensory intent

- Dark fintech war-room: deep navy/obsidian, a luminous live candle/area chart sweeping right.
- The fan of bastions render as glowing crenellated energy-walls anchored at price levels, with HP shown as a charged bar across the wall face.
- Impacts: the price head is a comet; when it rams a wall, a shockwave ring, spalling shards, screen-shake, and a deep impact thud (visual). Cracks accumulate and glow hotter as HP drops; collapse = a cascade of debris and a red flare.
- Reinforcement pours as a rising tide of cyan light filling the wall. Surviving the horn triggers a golden "HELD" banner and a victory bloom.
- Dense, layered hero: parallax siege-sky, drifting embers, the chart grid, the bastion fan, the comet, the HUD — alive from frame 1.

## Why it fits Deriv

Built directly on a live synthetic-index / market chart with a real stake→payout mechanic. It rewards reading volatility and trend regime — the same skills Deriv's options/multipliers traders already use — but expresses them as a spatial siege instead of an up/down guess. Fast rounds (under 90s), instant settlement, clear risk/reward dial (tight walls = high multiplier).

## Originality (one paragraph)

The trading-game space is full of "rising multiplier you bank before a bust," tile-climb "Towers," and grid/level-claim games. RAMPART is none of these: it is real-time **spatial damage-absorption** where the player's only asset is a *depletable, re-allocatable armor budget* spread across many independent fortified price-levels, and the settlement is the *surviving fraction of total structure HP* after a fixed-duration assault driven intrinsically by adverse price excursions (volatility × penetration as damage). Nothing is "claimed" or "banked"; touching a level *hurts* you. The fusion of tower-defense triage with a live price feed as the literal attacking force — settled by fortification state rather than a scalar or a survival-time — is a combination I could not find in any existing trading/casino game (see originality.md).
