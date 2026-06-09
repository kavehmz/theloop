# ECHO LADDER

> **SKIN-FREE CORE (decision + settlement):** The player's bet is to **reproduce, in
> order and from memory, a growing chain of price-authored steps** (each new step minted
> live by the market's latest swing) that was played to them and then hidden — settled by
> **how deep into the chain the player recalls correctly before a slip (recall depth ×
> per-step difficulty)**.

**Confirmed distinct from all 18 kept cores.** This is *memory / sequence recall / playback*.
It is NOT discrete reversal-timing (PULSEPOINT — that scores the *instant* you tap a live
reversal; here nothing is timed, the chain is hidden and replayed from memory). It is NOT
path-fidelity tracing (WAKELINE — that tracks a continuous line against a live lead in real
time; here you reproduce a *discrete, hidden* chain after it has gone dark). It is NOT
waypoint capture (STARFORGE — that captures live points as they appear to finish a figure
paid by rarity; here the points are shown, hidden, and must be replayed in order from memory).
No other kept core involves memorize-then-replay. See diff table at the bottom.

---

## One-line pitch
The live market hums a melody one note at a time — each price swing strikes a rung on a
glowing ladder — and you have to play the whole tune back from memory; every round the market
adds one more note, and you bet on how deep you can climb before your memory slips.

## Name & why
**ECHO LADDER.** The market *echoes* a phrase to you; you echo it back. The "ladder" is the
vertical stack of price rungs the swings land on — and "climbing the ladder" is the literal
feel of recalling deeper. Round counter is your *Echo Depth*.

---

## Core loop (second-to-second)

A vertical **rung ladder** sits over a live candle/line chart on the right. The price is
always moving. The game alternates two phases, each only a few seconds:

1. **COMPOSE (market's turn, ~2.5s).** The live price makes a swing. When it completes a
   **pivot** (a local high/low — a real turning point in the feed), the engine snaps that
   pivot to the nearest **rung** (a discrete price band). That rung **flashes and chimes** —
   a new note is appended to the *Phrase*. The full Phrase so far then **replays** fast,
   rung by rung, lighting up in order (a "Simon"-style playback, but every note was authored
   by an actual market reversal, and the pitch/colour encodes the swing's size).

2. **RECALL (your turn).** The ladder goes dark. You **tap the rungs back in the exact order**
   the market played them. Each correct tap lights green and banks **escalating value**
   (note 1 is cheap, note 8 is worth a fortune — value per correct note rises with depth).
   The instant you tap a wrong rung — or run out of the short recall clock — you **SLIP**:
   the round settles at your banked depth.

3. **EXTEND.** Survive the full phrase and the market immediately composes the **next** note,
   the phrase grows by one, and replays. The chain only ever gets longer and the per-note
   payout keeps escalating, so every extra rung is worth dramatically more than the last —
   and dramatically riskier to remember.

You may **LOCK IN** (bank) at any point after a clean recall to settle at your current depth
multiplier; or push for one more note. Slip and you keep nothing past your last banked lock.

---

## How the live market drives it (intrinsic, not glued on)

The sequence is **literally minted by real price motion** — this is the whole point:

- **Notes = pivots.** A note is appended only when the live feed prints a genuine local
  reversal (a swing high/low confirmed by a small retrace threshold). Choppy markets compose
  fast, dense, hard-to-recall phrases; trending markets compose sparse, "long-interval"
  phrases that are easier to hold but slower to grow. The market's *character* is the
  difficulty knob.
- **Rung = price band.** Which rung a note lands on is decided by where the pivot printed in
  price space — so the *shape* of the tune is the recent shape of the market.
- **Pitch / colour / "difficulty weight" = swing magnitude.** A violent swing mints a
  high-value, vividly-pitched note (worth more, but its big jump across the ladder is harder
  to encode in memory). A small swing mints a quiet, low-value adjacent note. So the payout
  table is written by realized volatility, tick by tick.
- Because the phrase is the market's own recent reversal structure, no two rounds are ever the
  same melody, and a player who "reads" the market's rhythm has a real, learnable edge.

---

## The bet & payout

- **Stake** is placed at round start. Your live **return = stake × Σ(note weights recalled)**,
  where each note's weight is set by its swing magnitude and its **depth bonus** grows
  super-linearly (e.g. weight × depth-curve). Concretely, recalling 8 notes pays far more than
  8× recalling 1, because deep notes carry escalating multipliers.
- **Cash-out / Lock-in.** After any clean full-phrase recall you may **Lock In** to settle at
  the displayed multiplier — or decline and let the market add another note. (This is a
  bank-or-push decision *layered on a memory core*, not a rising-scalar Crash frame: the number
  doesn't tick up on its own — it only advances when *you* successfully recall, so the agency
  is the recall, not a stop-button on an autopilot.)
- **Slip** (wrong rung or recall timeout): you forfeit everything above your last Lock-In.
- House edge sits in the recall clock length and the slip-forfeit, both tunable.

---

## Why it's addictive

- **The "I had it!" sting + the "one more note" pull.** Memory chains are the original
  just-one-more loop (Simon, Tetris). Layering escalating money on each rung turns recall depth
  into raw greed: note 9 is *right there* and worth triple note 8.
- **Skill that visibly compounds.** Players build chunking strategies (group the tune into
  bars), and feel themselves getting deeper — a real mastery curve, not luck.
- **Market literacy as edge.** Regulars learn to predict the *next* pivot rung from the chart's
  momentum, pre-loading their memory — the chart isn't decoration, it's a cheat sheet you earn.
- **Audio-tactile dopamine.** Each correct rung chimes up the scale; a full clean phrase plays
  a satisfying ascending arpeggio; a slip cracks the ladder with a dead-string thunk.

---

## Visual / sensory intent

Dark fintech glass. A tall **neon rung-ladder** (think a graphic-EQ column fused with a piano)
glows in the centre-left, each rung a thin horizontal light-bar with a price label; the **live
chart** streams behind/right of it with candles, a moving price line, gridlines, and a soft
volumetric glow that brightens on big swings. During COMPOSE the active rung **detonates** a
ring of particles and a colour pulse races up the ladder as the phrase replays. During RECALL
the ladder dims to embers and your taps bloom green ripples; the **Echo Depth** counter and
multiplier sit in a HUD with a subtle CRT scanline. Wins fountain gold sparks up the ladder;
slips shatter the active rung with a red glass-crack and screen-shake. Always in motion: the
chart never stops, ambient dust drifts, the idle ladder breathes.

## Why it fits Deriv
It rides a live market feed, settles a real stake/payout, delivers sub-10-second risk/reward
rounds, and turns *reading price reversals* into the core skill — squarely Deriv's
"trade the synthetic feed, fast" DNA, but as a memory game no one has shipped.

## Originality (one paragraph)
Generic memory games (Simon, "repeat the sequence") are ancient prior art, and trading games
are saturated — but the union is novel: a **wagered** memory chain whose notes are **minted
live by real market reversals**, whose **payout table is written by realized volatility**, and
which **grows by one market-authored note per round** so the bet is *recall depth*. The chart is
not a backdrop — it is the composer and the odds-maker, and skilled price-reading literally
front-loads your memory. No shipped game found that bets on memorizing-and-replaying a
price-authored, live-extended sequence (see `originality.md`).

---

## Skin-free diff vs the 18 kept cores
| # | Kept core (skin-free) | ECHO LADDER differs because |
|---|---|---|
| 1 THREADLINE | draw region, paid if price stays inside | no region; recall a hidden chain |
| 2 REACTOR | accumulate vs rupture meter, bank before blow | no meter; depth = correct recalls |
| 3 RIPTIDE | claim bands, paid by share of territory | no territory; ordered memory replay |
| 4 SLINGSHOT | charge+aim launch, paid by distance gate | no launch; memory chain |
| 5 DEADLOCK | two-force tension, push vs hold, redline | no tension meter; recall depth |
| 6 SLIPSTREAM | pilot terrain, paid by survival/proximity | no piloting; replay from memory |
| 7 PULSEPOINT | time taps to live reversals, paid by timing | **nothing is timed**; chain is hidden then replayed from memory |
| 8 TOLLGATE | claim priced levels, paid when price touches | you don't claim levels; you memorize then re-tap an order |
| 9 BALLAST | place mass to balance beam, bank height | no balance; sequence recall |
| 10 APOAPSIS | hold orbital band on fuel budget | no orbit/fuel; recall depth |
| 11 STARFORGE | capture ordered live waypoints, paid by rarity | points are **hidden then replayed from memory**, not captured live |
| 12 COREBORE | steer+extract on depth axis, winch out | no extraction; memory replay |
| 13 SLUICE | route fluid through network, burst/dry | no routing; ordered recall |
| 14 WAKELINE | steer a line to match price path at a lead | **no live continuous tracking**; discrete hidden chain replayed after it goes dark |
| 15 FLUXYARD | classify streaming items into bins | no classification; reproduce one order |
| 16 OVERTONE | tune oscillator to phase-lock price wave | no continuous tuning; discrete memory chain |
| 17 STOWLINE | pack forged pieces, paid by density | no packing; recall depth |
| 18 ASSAY | set mixing ratios to match target compound | no ratios; ordered sequence replay |
