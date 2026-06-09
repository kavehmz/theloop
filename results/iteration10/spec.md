# APOAPSIS — game design spec

## Name & pitch
**APOAPSIS** — *The live price is a star. Burn fuel to capture a satellite into your bet-ring and hold orbit, lap after lap, while the market's every tick warps the gravity under you.*

## Core loop (second-to-second)
The live market price **is** a star sitting at the center of the play-field. Its **mass**
(the size and pull of its gravity well) tracks the price *level*; its **lateral position**
drifts with price *velocity*; and **volatility flares** make it pulse — brief gravity
spikes that yank everything inward.

1. **Pick your ring.** Before launch you bet on one of three concentric **orbit bands**
   — INNER (tight, high pull, pays most), MID, or OUTER (loose, escape-prone, pays least
   per lap but safest). Stake your amount.
2. **Capture.** You launch a satellite; you have a short fuel budget to *capture* into the
   chosen band — too slow and you spiral into the star, too fast and you slingshot past
   escape velocity.
3. **Hold orbit.** Now the loop: every game tick the star's mass changes with the real
   price. A price surge fattens the star → your **periapsis decays**, the orbit tightens
   and threatens to crash. A price drop starves the star → your orbit widens toward
   **escape**. You counter with two taps:
   - **PROGRADE** (accelerate, costs fuel) → raises the far side of your orbit.
   - **RETROGRADE** (brake, costs fuel) → lowers it.
   Keep the satellite *inside your bet-band*. Each **completed lap fully within the band**
   ratchets your multiplier up; the tighter you hug the band's center line, the bigger the
   per-lap bonus (a live **PRECISION** read).
4. **Bank or push.** Every lap your **CAPSULE** value grows. Tap **EJECT** to bank it and
   end the round a winner — or stay in for another lap and a bigger ring streak, risking a
   crash or escape that voids the round.

## How the live market drives it (intrinsically — not glued on)
- **Price level → star mass → gravity strength.** This is the single most important coupling:
  the entire orbital field is literally the price. Higher price = heavier star = stronger
  inward pull = orbits decay faster and you burn prograde to survive.
- **Price velocity → star drift.** Fast moves slide the star sideways, so a stable orbit
  becomes an off-center one you must re-trim — the focus of your ellipse moves with the tape.
- **Volatility → gravity flares.** A spike in the price's short-term variance makes the star
  flare and briefly over-pull (a "mass pulse"), the classic moment that decays an inner
  orbit into a crash if you don't pre-burn.
- Because orbital period scales with radius (Kepler), the *rhythm* of the whole game — how
  often laps tick over — is set by where price has parked the star's mass. The market sets
  the tempo, not a fixed clock.

## The bet & payout
- **Stake** on launch, against a chosen band (INNER / MID / OUTER).
- **Base ring multipliers** per completed lap: INNER ×1.9, MID ×1.45, OUTER ×1.22 (illustrative).
- **Precision bonus**: laps flown within the band's tight center corridor add up to +35% to
  that lap's step — rewarding skillful trimming over brute survival.
- **Capsule** compounds across laps (lap1 → lap2 → …). **EJECT** banks `stake × capsule`.
- **Bust** conditions void the capsule: **CRASH** (periapsis touches the star's surface) or
  **ESCAPE** (apoapsis crosses the escape ring). Both are *geometric*, decided by where the
  craft is in space — never by a hidden RNG bust.

## Why it's addictive
- **Active survival, not passive watching.** You are constantly making micro-burns; the
  market is always nudging you off your line, so your hands never rest.
- **Two-sided tension.** Most bank-it games fear one direction (a bust). Here you can die by
  crashing *or* by escaping — every price move threatens you from one of two sides, doubling
  the read.
- **Visible skill ceiling.** Newcomers grok "stay in the ring." Regulars learn to *pre-burn
  before a volatility flare*, to ride a star-drift instead of fighting it, and to milk
  precision bonuses. Same loop, deep mastery.
- **The "one more lap" hook.** The capsule is right there, ejectable now — but one cleaner
  lap is worth more, and the ring is *currently* stable… push or bank is a live, spatial
  decision, not a number-go-up gamble.

## Visual / sensory intent
Dark-space fintech: deep indigo-to-black vignette, a starfield, faint grid. The price-star
is a molten core with a corona that breathes with volatility and reddens as mass (price)
climbs; a gravity-well mesh dimples the grid in real time. The satellite trails a glowing
orbital ribbon that paints the actual ellipse; the bet-band is a translucent neon annulus.
PROGRADE burns flare cyan thrust aft; RETROGRADE flares magenta forward. Completing a lap
sends a ring-pulse and a counter chime; a crash is a white flash + debris implosion into the
core; an escape is the craft redshifting and streaking off-frame. The HUD reads like a
mission console: FUEL bar, PERIAPSIS/APOAPSIS gauges, CAPSULE value, lap streak.

## Why it fits Deriv
Deriv is fast, gamified real-money trading on a live chart. APOAPSIS turns the chart's three
core signals — level, velocity, volatility — into the *physics* a player must trade against
in real time, with an explicit stake, a transparent multiplier, instant feedback, and a
genuine cash-out-or-push decision. It is unmistakably a market game: the price *is* the
gravity, and reading the tape is reading the field.

## What makes it original (one paragraph)
The crowded trading-casino canon is scalar — a number climbs until a bust, or a click guesses
up/down. APOAPSIS replaces the scalar with **continuous two-body orbital mechanics where the
attracting mass is the live price itself.** Survival is a *spatial* condition (stay inside a
ring; die by crashing inward or escaping outward), not a threshold on a rising counter, so it
sidesteps the Crash/Aviator frame entirely. It is also distinct from a one-shot ballistic
slingshot: the craft is in sustained flight for the whole round and the player actively trims
a decaying/widening orbit with a fuel budget against a star whose gravity *is* the tape,
tick by tick. The bet is on holding a chosen orbital band — a mechanic I could not find
elsewhere in trading games or arcade orbit games.
