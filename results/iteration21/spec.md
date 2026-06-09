# EMBERWATCH

## Skin-free core (decision + settlement)

> **The player's bet is *how to divide one scarce, recharging "stoke" budget across N independent objects that each cool toward death on their own live-signal-driven clock* — choosing in parallel which dying object to revive — and it is settled by *how many objects are still alive at the moment the FIRST one goes dark, multiplied by a survival-time tier the whole set reached together*.**

Diffed against all 16 kept cores — matches **none**:
- Not THREADLINE (no containment region the price must stay inside), not REACTOR (no single rupture meter you bank against), not RIPTIDE/TOLLGATE (no claiming of spatial bands or price levels), not SLINGSHOT/APOAPSIS (no charge/aim/orbit of a single body), not DEADLOCK/BALLAST (no single two-force or balance beam), not SLIPSTREAM/COREBORE/WAKELINE (no single pilot/winch/follow-line), not PULSEPOINT/OVERTONE (no single timing stream or oscillator to phase-lock), not STARFORGE (no ordered-waypoint figure), not SLUICE (no routing a conserved fluid through a fixed network), not FLUXYARD (no classifying items into bins).
- The load-bearing novelty is **PARALLEL SUSTAIN under a shared scarce budget**: many independent live-driven decays at once, and the bet is the *triage allocation* across them — a mechanic no kept core occupies.

---

## Name & pitch

**EMBERWATCH** — *Six coals. Six markets. One pair of bellows. Keep them all glowing — the night ends the instant one goes dark.*

A row of six living embers sits over the live chart. Each ember is bound to a different synthetic market and cools at a rate driven by *that market's own behaviour* right now. You have a single, slowly-recharging breath of bellows. You cannot save them all forever — you triage, breathing life into whichever coal is closest to ashing out, and you decide the exact moment to **seal the hearth** and bank your fire before the first coal dies and the night collapses.

---

## Core loop (second-to-second)

1. **Six embers ignite** across the top of the chart, each tagged to a synthetic index (Volatility 10/25/50/75/100, Step, etc.). Each glows at full heat (100%).
2. **Each ember cools on its own clock.** The cooling *rate* is computed live from its bound symbol: a calm, drifting market cools slowly; a violently moving one cools fast; a sharp adverse tick can knock a chunk of heat off instantly. The six clocks are independent and constantly diverging — that's the whole tension.
3. **You have ONE bellows charge** (a glowing meter that refills over ~2.2s). Tap/click the ember you want to save to spend the charge: it surges back toward full heat with a shower of sparks. While the charge is spent, every ember keeps cooling — so you are always behind, always choosing.
4. **Heat banks into the hearth.** Every second alive, the *sum* of all lit embers' heat trickles into your **hearth pot** (your live winnings) at a rate that rises as you cross **survival-time tiers** (0:10 → ×1.4, 0:25 → ×2.0, 0:45 → ×3.2, 1:10 → ×5.0 …). More embers alive + longer set survival = faster banking and a higher locked tier.
5. **The night ends two ways.** *Either* the first ember goes fully dark — the hearth shatters and you keep only the tier you'd locked (not the live pot); *or* you hit **SEAL THE HEARTH** any moment to instantly cash the live pot. The knife-edge is: one more risky save for a bigger pot, or seal now?

A newcomer groks it in one sentence ("don't let any flame die"). A regular masters *which* market to ignore — reading volatility to predict which coal will crash next and pre-allocating the bellows.

---

## How the live market drives it

Nothing here is cosmetic — the market **is** the decay engine:

- **Cooling rate** of ember *i* = base + k₁·(rolling realised volatility of symbol *i*). High-vol markets burn down fast; you must babysit them.
- **Shock taps:** an absolute tick move beyond a per-symbol threshold instantly subtracts heat (a gust). Streaks of adverse ticks stack gusts — a trending burst can ash a coal in seconds.
- **Stoke efficiency:** a bellows breath restores *more* heat when the bound market is momentarily calm (mean-reverting tick) and *less* during a violent run — so timing your save to a market's micro-lull is the skill ceiling.
- **Tier banking rate** scales with the aggregate heat across all six, so a healthy, calm board literally pays faster.

Because each of the six synthetic indices has a genuinely different volatility signature, the six decay clocks are *structurally* different every round — the board is never the same twice, and it's driven by real-time data, not a script.

---

## The bet & payout

- **Stake** set before the round; it seeds the hearth's banking rate.
- **Live pot** = stake × accumulated banking (rises with embers-alive count and the current survival tier).
- **Settlement:**
  - **SEAL THE HEARTH** → pay the full live pot. Skill + nerve maximise this.
  - **First ember dies** → pay stake × the *locked tier multiplier* only (the highest survival tier you fully reached), forfeiting the un-banked surplus. So letting a coal die is a real, stinging loss — but never total: you keep your reached tier.
- **All-six bonus:** an escalating multiplier on banking while *all six* are still lit, decaying as you lose embers — rewarding the high-wire "keep the whole set" play over sacrificing coals early.

This is settled by **count-alive × survival-tier**, not by a single scalar climbing to a bust — deliberately not a Crash/cash-out reskin.

---

## Why it's addictive

- **Continuous triage pressure.** You are never idle and never safe; six clocks tick at once and the bellows is always a beat behind. Classic "just one more save" flow.
- **Loss aversion as a feature.** Watching a coal you neglected dim toward black while you're forced to choose creates real, physical dread — and the relief of a clutch save spikes dopamine hard.
- **The seal decision.** Every second is a fresh "bank it or push it" micro-bet, but driven by *board state you can read*, not blind luck — agency, not roulette.
- **Legible mastery curve.** Newcomers flail saving the brightest; experts sacrifice a doomed high-vol coal early to keep the calm five alive longer at a higher tier.

---

## Visual / sensory intent

Dark, warm-cold fintech: near-black charcoal background, the live chart as a faint cool-blue ribbon beneath. Six embers float as breathing orbs of fire — radial gradient cores, heat-haze shimmer, drifting sparks. Heat = brightness, size, and a rising plume; a cooling coal desaturates to deep crimson, then ember-grey, then a final ash-collapse with a puff of smoke and a low thud. A bellows breath fires a bright spark-burst and a satisfying *whoomph* of light. The hearth pot at the bottom glows brighter and pulses faster as banking accelerates; crossing a survival tier rings a warm flare across the whole board. SEAL THE HEARTH triggers a golden bloom and the embers freeze mid-glow.

---

## Why it fits Deriv

Deriv is built on a family of always-live synthetic indices with distinct, advertised volatility profiles — EMBERWATCH literally uses *six of them at once* as its engine, turning Deriv's signature product (many independent live markets) into the game's core tension. It's a real stake → live pot → settlement loop with instant feedback, short rounds (30s–2min), and an explicit risk/reward seal decision. It teaches volatility-reading viscerally: you *feel* which index is hot.

---

## Originality (one paragraph)

Plate-spinning and "keep-it-alive" arcade loops exist, but EMBERWATCH's core is a **parallel-sustain trading bet**: N independent objects whose decay is each driven by a *different live market signal*, mediated by a *single scarce shared intervention budget*, and settled by *how many survive × how long the whole set lasted*. The trading-game space is saturated with single-object loops (one multiplier, one pilot, one meter, one balance, one oscillator) — none put the player in real-time triage across many divergent live-driven decay clocks where the bet is the *allocation of attention itself*. The settlement (count-alive × survival-tier, with an all-set bonus) is structurally distinct from every cash-out, containment, claim-territory, or timing mechanic in the kept set.
