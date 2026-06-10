# RECOIL — Pair Tether Harvest

**One-line pitch:** Two coupled market runners stream live; you anchor an elastic tether
on the *gap between them* and get paid every time the spread whips back through your
anchor — stiffer tethers harvest violently more energy per recoil, but snap on smaller
divergence.

---

## Skin-free core (state it, then diff it)

> **The player's bet is an anchor value + an elasticity threshold placed on the GAP
> between two correlated live instruments; it is settled by the accumulated sum of
> squared peak-deviations, harvested each time the gap re-crosses the anchor, paid in
> full at the bell — floored to a 25% salvage if the gap ever exceeds the threshold.**

The bet object is the **spread between two assets** — a dimension no kept game uses.
The settlement is **oscillation energy** (paid per re-crossing, scaled by how far each
excursion peaked), not territory, touch, tension, rank, dwell-time, or a rising scalar.

### Diff vs. every kept core
| # | Kept core (skin-free) | Why RECOIL differs |
|---|---|---|
| 1 | THREADLINE — draw corridor price must stay inside | No corridor on a price; bet is on a 2-asset gap, paid by oscillation, not containment survival |
| 2 | REACTOR — accumulate vs rupture meter, bank before blow | No banking decision mid-round; payment is per re-crossing event of a gap; snap is a placement-time risk choice, not a timing race |
| 3 | RIPTIDE — price paints claimable territory | No spatial claiming or share |
| 4 | SLINGSHOT VEGA — momentum charge → ballistic distance gate | No launch, no distance gates |
| 5 | DEADLOCK — one two-force tension meter, PUSH/LOCK verbs | No in-round verbs at all; decision is fully pre-committed; object is a spread between two priced instruments, settled by crossings not displacement |
| 6 | SLIPSTREAM — pilot through vol terrain | No piloting |
| 7 | PULSEPOINT — tap reversals, streak multiplier | No taps, no streak; reversals pay quadratically by excursion size, no reset-on-miss |
| 8 | TOLLGATE — own demand-priced levels, paid on touch | Anchor isn't a priced level on a price; payment is per re-crossing of a *gap* weighted by excursion², not per touch |
| 9 | BALLAST — stack vs topple | No stacking |
| 10 | APOAPSIS — hold orbital band, bank per lap | No band-holding or laps; gap may drift anywhere inside the snap limit |
| 11 | STARFORGE — thread ordered nodes | No nodes/ordering |
| 12 | COREBORE — steer drill, extract, winch out | No steering or extraction timing |
| 13 | SLUICE — route flow through pipes to basins | No routing |
| 14 | WAKELINE — pre-trace path, paid by fidelity | No path prediction; anchor is one scalar on a derived series |
| 15 | FLUXYARD — classify parcels, throughput pay | No classification |
| 16 | OVERTONE — tune freq/phase to lock ONE wave, Q compounds | No frequency/phase matching, no lock state; pay is discrete per-crossing energy on the relationship of TWO instruments |
| 17 | STOWLINE — pack cargo for coverage | No packing |
| 18 | ASSAY — set mixing ratios to match target at lock | No target-matching at a lock instant |
| 19 | SPREADKEEPER — quote bid/ask, capture spread on round-trips | Shares the word "spread" only: no quoting, no inventory, single pre-committed anchor; pay is oscillation energy of an inter-asset gap, not per-fill margin |
| 20 | RAMPART — armor budget across walls, surviving HP | No budget allocation across levels |
| 21 | DETONATE — seed charges, cascade size | No charges/cascades |
| 22 | SILKLINE — rank order of N runners | Two runners but NO ranking; their order is irrelevant — only the gap's oscillation matters |
| 23 | EMBERWELL — leaky dwell-time heat in a placed band | Payment is per crossing event × excursion², the opposite of dwell: a gap that *sits* near the anchor earns nothing |
| 24 | SUMMIT FLAGS — call extremum coords, 2-D proximity pay | No extremum prediction |
| 25 | CRUX — irreversible ratchet-locks at live level vs final | No locks, no final-level settlement |
| 26 | MURMUR — steer swarm, headcount tiers | No steering/swarm |
| 27 | WINDLEASE — buy time windows, paid by travel inside | No time-interval ownership |

Also clearly not Crash (nothing rises toward a bust; harvest only grows on discrete
recoil events and the snap is a pre-chosen divergence threshold, not a timed cash-out),
not HiLo/up-down (direction of either runner is irrelevant), not any of the rejected
families.

## Core loop (second-to-second)

1. **AIM (idle, ~3s+):** Watch the two runners (AURUM X / ARGENT X) breathe on the pair
   chart; their live gap streams on the spread oscilloscope below. Drag the gold anchor
   line to the gap value you read as the pair's equilibrium — or leave it on FOLLOW LIVE.
   Pick a stake and a **tether stiffness** (1–9).
2. **DEPLOY:** Stake is committed. Anchor and stiffness freeze. The 30s round runs.
3. **HARVEST:** Every excursion of the gap away from your anchor charges the tether
   (charge ∝ excursion², × the stiffness recoil-power Q). The moment the gap whips back
   through the anchor, the charge **releases**: golden orbs fly into the collector, the
   harvested multiplier ticks up, the floaters show +0.18×, +0.42×…
4. **BELL or SNAP:** At the bell you bank `stake × harvested multiplier`. If the pair
   decouples and the gap ever exceeds your snap limit, the tether tears mid-round —
   screen shake, debris — and only 25% of the harvest is salvaged.
5. Results chip lands in LAST ROUNDS; next round is two clicks away.

## How the live market drives it

The two runners are a synthetically coupled pair: a shared common factor plus an
Ornstein–Uhlenbeck spread (θ=0.035, σ=0.6) whose own mean slowly random-walks, with
rare decoupling ramps (p≈0.0007/tick) that send the spread trending hard — the events
that snap tethers. Every payout event is a direct property of realized price action:
no crossings ⇒ no pay; calm drift ⇒ no pay; mean-reverting chop around your anchor ⇒
rich harvest. Reading *where the equilibrium sits* and *how violently the pair reverts*
is the entire skill surface — the same read a real relative-value/pairs trader makes.

## Bet & payout (house math)

- Stake: $10/$25/$50/$100. Stiffness κ ∈ 1..9 sets snap limit W = 15.5 − 1.15κ and
  recoil power Q(κ).
- Each anchor re-crossing pays `Q · (peak excursion since last crossing)² / 100` into
  the multiplier (excursions under 12% of W are ignored — no dust farming).
- Bell: win = stake × multiplier. Snap: win = stake × multiplier × 0.25.
- Q was tuned by Monte Carlo (20,000 rounds per κ, `tune.js`) so **EV = 0.95× at every
  stiffness** — soft tethers pay small and steady (snap ~16%), κ=9 is a 97%-snap
  lottery with Q≈7. House edge 5% across the whole slider.

## Why it's addictive

- **Constant near-miss texture:** the stretch meter climbs toward the snap line on every
  excursion — big stretch is simultaneously your biggest pending payout and your death.
- **Dopamine per event, not per round:** 5–15 harvest pops per 30s round, each with orbs,
  rings and a rising counter — then one terminal moment (bell or snap).
- **A real skill illusion ladder:** anchor placement (read the equilibrium) and stiffness
  (read the regime: choppy = stiff, trendy = soft) both visibly change outcomes.
- **Snap salvage (25%)** keeps losses stinging but never feels like theft — "one more
  round" is structurally cheap.

## Visual / sensory intent

Dark fintech-neon: crimson + cyan runner pair joined by a living coupling ribbon and a
coiled spring that tightens and recolors green→amber→red with stretch; a gold spread
oscilloscope with hazard-red snap zones and a draggable anchor; a glowing collector orb
that swells as energy lands; floaters, expanding rings, sparks at high stretch, debris
and screen-shake on snap. Hero is fully in motion at load via a pre-rolled auto-demo
(AUTO-DEMO · CLICK TO TAKE OVER).

## Why it fits Deriv

It is relative-value trading made arcade: Deriv users already trade multipliers and
synthetics on one chart; RECOIL hands them the *second* dimension every desk trades —
the spread — with a one-slider risk dial that is exactly the leverage/knock-out tradeoff
they know from multipliers (stiffness = leverage, snap = knock-out barrier), and a fixed
30s cadence built for repeat rounds.

## What makes it original

The bet object is the *relationship between two instruments*, which no kept game and no
found market game uses as the playing field; and the settlement is *oscillation energy*
— paid per re-crossing, quadratically in excursion size — which is neither touch-pay,
dwell-pay, territory, rank, fidelity, nor a rising bust scalar. The closest real-world
neighbors are pairs trading (a strategy, not a game) and barrier options (a knock-out,
but with no per-crossing harvest); the closest games found are binary "BTC vs ETH —
which wins?" props, which share only the cast, not the bet or the payout (see
`originality.md`).
