# DETONATE — spec

## Skin-free core (read this first)
**The player's bet is *where to seed a fixed set of charges across price-space before the round*, settled by *the size of the single largest CONNECTED cascade the live price path detonates* — price entering a charge fires it, each firing chain-triggers every other charge within a blast radius, and payout scales with how many charges end up wired into one connected chain.**

This matches **none** of the 20 kept cores:
- It is **not TOLLGATE (8)** — TOLLGATE pays per independent touch of a priced level; here a single touch can ignite *dozens* of charges via neighbour-propagation, and payout is the connected-component size of the chain, not a sum of touches.
- It is **not STARFORGE (11)** — there is **no ordered figure and no waypoint sequence**; order is irrelevant, only spatial adjacency of detonations matters.
- It is **not RIPTIDE (3)** — no share-of-territory; charges are discrete and payout comes from chain connectivity, not area.
- It is **not REACTOR (2)** / not a rising-multiplier cash-out — there is no energy meter banked before a bust and no scalar climbing to a stop. The round is decided by the *spatial shape* the price draws through your seed field.

The detonation trigger **is intrinsically the real price path** — a charge fires only when live price physically passes through its zone. Nothing climbs; everything is geometry.

---

## Name & pitch
**DETONATE** — *Mine the chart. Light the fuse with price itself.*
Before the round you scatter a handful of charges across the price field. When the live market wanders, every charge it touches blows — and blasts its neighbours, which blast *their* neighbours. One well-placed touch can rip a chain across half your field. You're not predicting *where* price goes; you're predicting *how much of your wiring one path will set off*.

---

## Core loop (second-to-second)
1. **SEED (pre-round, ~8s).** You're given **N charges** (default 7) and a fixed **blast radius** ring shown around your cursor. You click anywhere on the price-space plane (vertical = price, horizontal = the upcoming time window) to drop each charge. Charges within a blast radius of each other are **wired** — a glowing link draws between them, previewing potential chains. The board shows your current *cluster map*: connected groups light up in a shared colour, and each cluster displays its **potential multiplier** (bigger connected group = bigger multiplier, super-linear).
2. **ARM.** Lock the layout. The live price line begins crossing the window left-to-right in real time.
3. **PROPAGATE (live, ~10s).** As price sweeps across, the instant its path enters any charge's zone, that charge **detonates** — a shockwave ring expands to the blast radius; any charge caught in the ring fires on the next tick, and so on, a visible cascade racing through the wiring. Charges price never reaches stay dark. Detonations are additive across the sweep: a second touch elsewhere can light a *different* cluster.
4. **SETTLE.** Payout = the multiplier of the **single largest connected cascade** that actually fired (connected = charges linked through the wiring AND ignited). A bonus **OVERLOAD** triggers if your largest fired cascade equals your largest *pre-armed* cluster (you called the shape perfectly).
5. **Repeat.** New window, new seed budget. "I had 6 wired and only caught 4 — next time I pull the cluster lower."

---

## How the live market drives it
- The horizontal axis is the **next ~10 seconds of live price**, scrolling under your seeded field. The vertical axis is **price level**.
- A charge detonates **iff the live price path passes within its zone** — pure price geometry, no RNG on the trigger. Volatility (wide swings) lets one sweep clip clusters at very different price levels; a calm trending market threads a narrow band, rewarding a tight horizontal cluster placed on the trend line.
- The whole skill is reading the market's likely *roam shape* — choppy/ranging vs trending vs spiky — and packing your wiring so the path you expect ignites the largest connected chain. Real price action (range width, drift, spikes) directly changes which seeding shape is optimal.

---

## The bet & payout
- **Stake** per round. You receive **N charges** and a fixed blast radius (both can be traded off in difficulty modes: more charges but smaller radius, etc.).
- **Payout = stake × multiplier(largest fired connected cascade).** Multiplier is super-linear in cascade size so chaining 6-in-one pays far more than two separate 3-chains:
  - 1 charge fired & isolated → 0.4×
  - 2-chain → 1.1× · 3-chain → 2.1× · 4-chain → 4.0× · 5-chain → 8.5× · 6-chain → 18× · 7-chain → 40×
- **OVERLOAD bonus** (largest fired cascade == largest armed cluster): ×1.5 on top — rewards precise reads, not just dense packing.
- House edge sits in the gap between *armed potential* and *fired reality*: dense clusters look juicy but need the price path to actually thread them; spreading wide is safe-ish but caps your ceiling. The tension is **clustering greed vs reach**.

---

## Why it's addictive
- **Visible potential vs realised loss.** You *see* a glowing 7-chain armed and pre-computed at 40×; watching price miss two charges and "only" pay the 5-chain is an exquisite near-miss that screams *one more round*.
- **The cascade is a fireworks payoff.** Chains propagate in ~120ms hops with shockwave rings, screen-shake on big chains, and a rising detonation-count tally — a built-in slot-machine "anticipation" beat, but earned by geometry you authored.
- **Mastery curve.** Newcomer drops charges anywhere; a regular reads range width and drift, then packs a cluster exactly on the channel so a single touch zips the whole chain. Same loop, deep skill.
- **Fast.** ~18s a round; tap-tap-tap to re-seed.

---

## Visual / sensory intent
- **Dark fintech.** Near-black radial-gradient field, cyan/teal price line with a comet glow head trailing motion blur, faint volume histogram and a second ghost depth-chart layer behind for parallax mass.
- **Charges** = pulsing hex nodes; **wiring** = animated dashed energy links that thicken/brighten with cluster size; **clusters** colour-coded (teal→amber→magenta as they grow).
- **Detonation** = expanding shockwave ring + particle burst + chromatic bloom; a chain reads as a wavefront of pops racing along the links, with a kinetic "ka-chunk" counter.
- **Win** = the fired cluster floods gold, screen pulse, payout slams up in a glassy panel. **Loss** = charges fizzle grey, links snap and fade.

---

## Why it fits Deriv
- Sits exactly on Deriv's spot: a **live market chart** + a **real bet/payout**, fast rounds, instant dopamine, gamified risk/reward.
- Reads price **action shape** (volatility / drift / spikes) — Deriv's synthetic indices are tuned exactly to vary these, so the game's skill ceiling maps onto Deriv's product.
- One-tap seeding, sub-20s rounds, mobile-friendly geometry — fits the multiplier/options cadence Deriv users already love.

---

## Originality paragraph
DETONATE's novelty is **player-authored chain topology settled by neighbour-propagation**. Existing "cascade" games (slot tumble engines like Reactoonz) cascade *RNG-generated symbols on a fixed grid* — the player authors nothing and price drives nothing. Mines pays *independent* tile reveals with no propagation and no player-chosen geometry. TOLLGATE-style level-touch games pay each touched level independently — they have no blast radius, no chain, no connected-component scoring. Here the player **designs a wiring graph in price-space**, the **live price path is the only ignition source**, and the payout is the **size of the largest connected component that actually ignites** — a graph-connectivity bet on real price geometry. The decision (spatial clustering for chain potential) and the settlement (largest fired connected cascade, order-irrelevant) appear in no kept core and, per the adversarial search in `originality.md`, in no shipped trading or casino game found.
