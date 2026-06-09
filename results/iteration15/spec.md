# SLUICE

**One-line pitch:** The live market's *velocity* pours into your hydro network as real water — you throw the gates to route every surge down branching channels into multiplier basins, milking fat moves while keeping fragile conduits from bursting and shallow ones from running dry.

---

## Core loop (second-to-second)

1. **Build / pick a rig.** Before the round you have a small branching network: one **HEADRACE** (source spout at top) feeding 2–4 **CHANNELS** that fork through **JUNCTION GATES** down into **BASINS** (collectors) at the bottom. Each channel has a printed **RATED CAPACITY** (how much flow/sec it can carry before it bursts) and each basin a **MULTIPLIER** (fat basins pay big but sit behind narrow, fragile channels).
2. **The water is the market.** Every tick, the **absolute price velocity** (how hard/fast the live chart is moving right now) is converted into a **head of water** — litres/sec gushing out of the headrace. A flat market is a trickle; a violent move is a torrent. This volume is *not* a random number — it is literally the size of the current candle's move.
3. **Throw the gates.** You drag/tap **JUNCTION GATES** to split the incoming flow left/right between branches. Big incoming surge? Steer it toward the high-capacity trunk so it doesn't burst, or *gamble* it down a fragile high-multiplier channel and pray the surge eases before the pipe ruptures. Calm trickle? Open the narrow premium channels to sip the rare flow into the fat basins.
4. **Fill, burst, or starve.** Flow accumulates in basins as banked **YIELD = litres × basin multiplier**. Two failure modes, both decided by price *shape over time*:
   - **BURST** — if flow through a channel exceeds its rated capacity for too long, the conduit ruptures: that branch and everything below it is lost for the round (a spray-of-particles blowout).
   - **DRY** — if the round's **discharge window** (a fixed timer, e.g. 30s) closes with a basin below its **prime line**, that basin pays nothing (it needed a minimum fill to "prime").
5. **Discharge.** When the window closes (or you hit **DISCHARGE** early to lock in), every primed, un-burst basin pays out litres × multiplier × stake. Then a fresh head builds and the next round begins. One more surge.

## How the live market drives it

- **Flow rate = |price velocity|.** The instantaneous water volume out of the headrace is a direct function of the magnitude of the live price's per-tick change. Volatility regimes *are* the gameplay: chop = steady moderate flow you can route comfortably; a breakout = a torrent that overloads fragile channels unless you re-route in time; a stall = drought that starves your premium basins.
- **Direction tilts the split.** The *sign* of the move biases gravity in the channels: upticks lean the flow toward the right fork, downticks toward the left, so even with gates set you must actively counter-steer as the trend flips — the price's path shapes where the water *wants* to go.
- **Surges are events, not a meter.** There is no scalar climbing to a preset bust. Your outcome is dictated entirely by *what the price does in space and time* across your authored network — which branches the real volatility happened to flood.

## The bet & payout

- **Stake** per round. You may also stake a **RIG TIER** (bigger rigs = more/fatter basins but more fragile trunks).
- **Payout** = Σ over primed, un-burst basins of (litres_banked × basin_multiplier) × stake-unit. Basins range ~1.4× (wide/safe) to ~25× (needle-thin premium). A clean route of a big surge into a primed premium basin is the jackpot; a burst trunk can zero an otherwise great round, which is the tension.
- **Early DISCHARGE** locks current banked yield but forfeits any basins not yet primed — a real route-vs-risk decision rather than a cash-out-the-number reflex.

## Why it's addictive

- **You author the gamble, then watch the market test it.** Every round you place your bet *in space* (which channels feed which basins) and the live volatility either rewards or punishes your topology. It feels like building a contraption and pulling the lever.
- **Twitch routing under pressure.** A torrent arriving while your gate is set to a fragile channel is a 2-second "burst-or-bank" panic — drag the gate to save it, or hold and pray for the move to ease.
- **Loss aversion + near-misses.** "The premium basin was one second from priming when the trunk burst" is a perfect almost-won hook. Bursts are spectacular and *legible* (you see exactly which surge killed you).
- **Mastery curve.** Newcomers open everything and let it fill; experts read volatility regime, pre-position gates for an expected breakout, and harvest fat basins others daren't feed.

## Visual / sensory intent

- Dark slate-and-cyan fintech aesthetic: glowing glass conduits over a live candle chart faintly visible *behind* the pipework, so you always feel the market underneath the plumbing.
- **Water is luminous fluid** — animated flowing dashes/particles whose speed and thickness scale with live flow. Gates are chunky neon sluice-paddles that clunk when thrown.
- Channels glow green when comfortably under capacity, amber as they near rated load, and **strobe red + rupture into a particle spray** on burst. Basins fill with rising liquid and a "prime" line that flares gold when crossed.
- A **head gauge** up top pulses with the live velocity; discharge fires a satisfying golden flush down every primed basin.

## Why it fits Deriv

Deriv is volatility, velocity, and instant risk/reward on a live chart. SLUICE turns the *magnitude and direction of real price motion* into the literal resource you harvest — so reading volatility (Deriv's core synthetic-index skill) is the whole game. It is fast (30s rounds), legible, and stake-scaled, with a clean trading metaphor: position your capacity ahead of the move, manage the drawdown of a burst, bank before the window closes.

## What makes it original (one paragraph)

Most trading-casino games are a single scalar (a multiplier, a level, a guess) resolved against price. SLUICE makes the player **author a branching topology** and then routes the *live price velocity itself*, as a conserved fluid, through gated junctions into capacity-rated collectors — so the outcome is a function of *which branches the real volatility flooded*, balancing **two opposing failure modes at once** (burst from too much flow, dry from too little) in the same network. It is not containment (THREADLINE keeps price in one corridor), not territory painting (RIPTIDE), and not a rising-number cash-out (Crash/Aviator). The closest real-world cousins are pipe-routing puzzles and water-physics sandboxes — none of which are driven by a live market feed or carry a flow-vs-capacity *bet*. The novel combination — conserved price-velocity-as-fluid + authored multi-branch routing + dual burst/dry risk priced per branch — is, to our search, unoccupied.
