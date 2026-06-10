# CRUX — Ratchet Climb on the Vol-75 Wall

**One-line pitch:** The live market chart *is* a mountain face. Stake a climb, ride the price
up the wall, and spend a strictly limited rack of **4 pitons** to one-way ratchet-lock altitude
floors before the storm front — the round timer itself, sweeping visibly across the chart —
slams into you and settles the climb.

---

## Skin-free core sentence (the diff gate)

> The player's bet is **when to spend each of a small, fixed supply of irreversible
> ratchet commitments, each lockable only at the live price's *current* level during a
> fixed-length window**, and it is settled **at the window's bell by the highest committed
> level (or the final price, if higher) mapped through a convex altitude-payout curve,
> multiplied by a bonus for commitments left unspent**.

### Diff against all 24 kept cores

| Kept core (skin-free) | Why CRUX differs |
|---|---|
| 1 THREADLINE — draw a corridor price must stay inside | No corridor, no containment; nothing is drawn in advance. |
| 2 REACTOR — accumulate vs rupture meter, bank before it blows | No rupture/bust exists. The round always runs to the bell; falls are survivable down to the last piton. Nothing is "banked to end exposure". |
| 3 RIPTIDE — price paints claimable territory, paid by share | No territory, no spatial claiming, no share. |
| 4 SLINGSHOT VEGA — charge momentum, launch, bet distance gate | No charging, no launch, no gate bet. Decision is ratchet timing, not a projectile. |
| 5 DEADLOCK — two-force tension meter, PUSH/LOCK, lose at redline | No tension integral, no redline loss. CRUX's "lock" is a level floor under a price you already reached, not a stake-displacement on a meter. |
| 6 SLIPSTREAM — pilot through vol terrain, hug rail for multiplier | No piloting, no continuous steering. |
| 7 PULSEPOINT — tap reversals, graded into streak/combo | No timing-accuracy grading, no streak that resets. A piton is never "missed"; it always sets exactly where you are. |
| 8 TOLLGATE — claim demand-priced levels, paid on touch | Critical diff: pitons **cannot be pre-placed at chosen levels**. You can only commit *the level the price is at right now*, and payment is not "on touch" — it's the max committed level at the bell. No demand pricing, no level selection in space. |
| 9 BALLAST — stack cargo on a tilting beam, bank height before topple | No physics stack, no topple-bust, no banking. |
| 10 APOAPSIS — hold an orbital band, bank per lap | No band-holding, no laps, no crash/escape loss. |
| 11 STARFORGE — price threads ordered decaying nodes | No nodes, no ordering, no rarity. |
| 12 COREBORE — steer drill, extract, winch out before cave-in | No steering, no extraction, no cave-in bust, no leave-before-disaster decision — the bell is fixed and always reached. |
| 13 SLUICE — route velocity-fluid through pipes into basins | No routing, no network. |
| 14 WAKELINE — pre-trace the path, paid by fidelity | Nothing is pre-traced; no fidelity score. |
| 15 FLUXYARD — classify parcels, paid by sort throughput | No classification. |
| 16 OVERTONE — tune to phase-lock the wave, Q compounds | No tuning/locking onto a signal. |
| 17 STOWLINE — pack shaped cargo for density, bust on spill | No packing, no bust. |
| 18 ASSAY — set ratios to match drifting target, paid by closeness | No target-matching, no closeness score. |
| 19 SPREADKEEPER — quote bid/ask, capture spread | No quoting, no inventory. |
| 20 RAMPART — distribute armor across walls, paid by surviving HP | Superficially "limited resource across levels", but RAMPART allocates a *budget across pre-chosen price levels in advance* and is paid by what survives bombardment. CRUX commits *sequentially, only at the current level, only on the way up*, and is paid by the **max** committed level, not surviving mass. Decision shape (irreversible sequential stopping vs upfront allocation) and settlement (max-level curve vs surviving HP) both differ. |
| 21 DETONATE — seed charges, cascade size pays | No seeding in space, no cascade. |
| 22 SILKLINE — predict finishing order, rank-distance pays | No ranking. |
| 23 EMBERWELL — placed band accrues leaky dwell-time heat | No band, no dwell accrual, no leak. Settlement is a level max, not a time integral. |
| 24 SUMMIT FLAGS — call the extremum's price+time coordinate | Nothing is predicted in advance; no proximity scoring. |

**Crash check:** Crash/Aviator = "a scalar rises; cash out once before a random bust ends
everything." CRUX has **no bust** (the timer is fixed and visible as the approaching storm),
**no cash-out** (a piton does not end the round or stop exposure — the climb continues and the
final price can still beat your pitons), **multiple sequential commitments** with an explicit
opportunity cost (each spent piton forfeits part of the unused-rack bonus), and a settlement
that is `max(top piton, final price)` — pitons are *insurance with a price*, not an exit.
The decision structure is a multi-stop sequential secretary/ratchet problem, not a single
optimal-stopping exit.

---

## Core loop (second-to-second)

1. Pick a stake, hit **START CLIMB**. Entry price = Base Camp. The climber stands on the
   right edge of the live chart; everything the price has drawn behind it is solid rock.
2. The tick stream moves the climber: price up = climbing, price down = sliding. Altitude is
   measured in meters above Base Camp (1 tick-point = 20 m) and maps to a live multiplier
   shown beside the climber.
3. At any instant you may **DRIVE A PITON** (button / spacebar) — it sets *at your current
   altitude*, irreversibly. From then on you can never fall below your highest piton: if
   price drops under it, the climber hangs from the rope at the piton line until price
   recovers. You have exactly **4 pitons**; each one spent shrinks your unused-rack bonus.
4. Telegraphed market weather forces the decision: **SQUALLS** (2.6 s warning, then a sharp
   down-shock) make you want to spend a piton *now*; **THERMALS** (updrafts) tempt you to
   hold the rack and ride higher.
5. The **storm front is the round timer**: a wall of cloud and lightning that crosses the
   chart left-to-right over 45 s and settles the climb the moment it reaches the climber.

## Bet & payout

- Stake: 10 / 25 / 50 / 100 (demo balance 1,000).
- At the bell: `settled altitude A = max(highest piton, final altitude)` in meters.
- Base multiplier: `(A / 50 m)^1.2` (convex — 50 m ≈ 1.0×, 100 m ≈ 2.3×, 200 m ≈ 5.3×),
  zero if A ≤ 0 (storm takes the wall: stake lost — but only if you never secured altitude).
- Rack bonus: `× (1 + 0.12 × unspent pitons)` — up to ×1.48 for a clean free-solo.
- Payout = stake × base × bonus. The whole tension of the game is piton-now (lock less,
  keep less bonus, sleep at night) vs hold (more bonus, higher line, exposed to squalls).

## How the live market drives it

The mountain *is* the chart: the area under the live price path is rendered as the rock
face, the path itself is the glowing climbing route, and altitude = signed price excursion
from your entry. Volatility is literally the terrain; squalls/thermals are regime shifts in
the same tick stream (not cosmetic), and every piton is a timestamped commitment pinned to a
real price level you watch the market fight around for the rest of the round.

## Why it's addictive

- A 45 s round with a visible doom-clock (the advancing storm) creates a natural tension arc.
- Every squall warning is a 2.6-second micro-dilemma with a button under your thumb.
- "I held the rack and the thermal carried me to 140 m" and "I pitoned 1 second before the
  squall" are both braggable; "I spent all 4 pitons at +12 m" is a lesson. Regret is legible
  and immediate — the classic one-more-round engine — yet a bad round usually pays
  *something*, so it never feels like a coin-flip bust.

## Visual / sensory intent

Alpine night-climb: indigo sky, parallax ridgelines, drifting fog, snowfall that shears
sideways in squalls. The price route glows gold over teal strata rock; pitons spark when
driven and stretch bright secured-lines to the right edge; the storm front crawls in with
internal lightning. Dense HUD: altitude bands with multiplier rungs, live price tag, secured
line labels, rack icons, storm countdown.

## Why it fits Deriv

It is a pure volatility product with a UI: the player is long the excursion of a synthetic
index over a fixed window and is buying discrete floor-locks — recognizably kin to lock-in /
ratchet (cliquet) option features, but as a tactile arcade decision under a clock. Stake,
multiplier, settlement at the bell: instantly legible to a Deriv client.

## Originality paragraph

The under-used family here is *vertical ascent with committed, irreversible resource
placement*. No kept game — and no found live game — settles on "max committed level vs final
level with an unspent-resource bonus". The nearest real-world relatives are the trailing
stop-loss and the cliquet option's automatic ratchet; CRUX turns that automatic feature into
a manual, scarce, sequentially-timed decision with a visible weather system pressuring each
spend, which is exactly the kind of decision (a multi-stop optimal-stopping problem) the
crypto-casino canon (Crash, Towers, Mines, HiLo) does not contain. See `originality.md` for
the adversarial search log.
