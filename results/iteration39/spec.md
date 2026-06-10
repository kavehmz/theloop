# SENTE — Board Duel vs the Tape

**One-line pitch:** A live board-game duel where the market is your opponent: every candle
the tape closes *forces* it to drop stones onto a board hanging over the chart, and you answer
with just 9 stones of your own — flanking its runs to capture them, dodging its flanks, and
linking the longest battle-line you can before the bell.

## Skin-free core (diffed before building)

> The player's bet is **where to pre-place a small fixed supply of stones on a grid whose
> opponent-stones are forced moves printed by realized price action (one column per interval,
> rows = the candle's range)**, and it is settled by **a bidirectional custodial-capture +
> connectivity score: each market stone bracketed between two player stones flips to the player
> (and vice-versa removes the player's), and payout = a tier on the size of the player's largest
> connected component that is in contact with enemy stones, plus a fixed bonus per captured stone.**

Diff against all 30 kept cores:

- **THREADLINE / WAKELINE / SUMMIT FLAGS** — no corridor, no path-fidelity, no extremum-coordinate
  call. You are explicitly *not* paid for predicting where price goes; stones sitting ON the path
  get trapped. You are paid for out-maneuvering the path's printed pieces.
- **RIPTIDE** — settlement is capture/connection **topology**, not territory-area share. Two
  boards with identical owned-area can score wildly differently here.
- **TOLLGATE / CRUX / WINDLEASE** — no demand-priced levels, no touch payouts, no ratchet locks,
  no time-interval ownership. Market stones are adversarial *pieces that occupy, capture and get
  captured*, not payout triggers.
- **STARFORGE / DETONATE** — closest superficial neighbours, both "place/thread things in
  price-space". STARFORGE's nodes are a *target figure* to thread; DETONATE's charges are a
  *cooperative network* the path ignites (settled by largest cascade). SENTE's opponent stones
  are **adversarial state**: they block cells, they capture your pieces, and the score is a
  *duel comparison* (captures both ways + engaged-chain tier), not a cascade or pattern rarity.
- **REACTOR / DEADLOCK / BALLAST / APOAPSIS / EMBERWELL / RECOIL** — no accumulator, meter,
  integral or dwell-time of any kind.
- **PULSEPOINT / OVERTONE / FLUXYARD / SPREADKEEPER / ASSAY** — no timing/streak, no phase-lock,
  no sorting throughput, no quoting, no ratio matching.
- **SLINGSHOT / SLIPSTREAM / COREBORE / SLUICE / MURMUR / CAUSTIC** — no piloting, ballistics,
  routing, swarm steering or optics.
- **RAMPART / STOWLINE / HOTHOUSE / TOLLGATE** — no budget distribution over passive walls/slots.
  Every stone is an active piece in a capture topology, and the *engagement rule* (stones only
  score while touching enemy stones) has no analogue in any kept game.
- **SILKLINE / CRUX / SUMMIT FLAGS** — no rank/coordinate/level prediction settled by distance.
- De-skinned settlement check: "largest connected component tier + per-capture bonus in a
  bidirectional flanking game" is not poker ranking, not a streak that resets, not a rising
  scalar with a stop, not area share, not proximity distance. It survives de-skinning.

## Core loop (second-to-second)

1. **Stake** is committed at the round bell. A 14-column × 10-row board overlays the live feed;
   rows are price buckets around the open, columns are 2.2-second intervals.
2. **The market moves on a clock.** When the live column's candle closes, the tape *must* play:
   it prints a crimson stone in every row its high–low range touched. Quiet tape = thin walls;
   volatile tape = thick walls. The forming candle is shown as a pulsing threat-zone in the live
   column, and a drift-and-volatility cone projects where it is likely to print next.
3. **You move in between.** Click any empty cell in a column still ahead of the live one.
   Only 9 stones per round — skipping a turn is itself a decision.
4. **Captures, both ways.**
   - Bracket a contiguous run of market stones between two of yours — along a row, column or
     diagonal — and the whole run flips gold and joins your side (**+0.30× each**). This fires
     when you close the sandwich *and* when the tape prints into an **ambush** you pre-set
     (e.g. two stones straddling a row band: if the candle prints inside, you flip the wall).
   - Symmetrically, if the tape's prints bracket your stone, it is removed.
5. **The bell.** When column 14 closes, your largest 8-connected chain of cyan + gold stones is
   measured — but only **engaged** stones count (touching a crimson stone, or captured gold).
   Hiding in empty corners scores zero; you must fight where the tape fights, which is exactly
   where it can flank you back.

## Bet & payout

- Payout = stake × (chain tier + 0.30 × captures).
- Chain tier: 2→0.25×, 3→0.7×, 4→1.3×, 5→2.2×, 6→3.5×, 7→6×, 8+→10×.
- Tuned in autoplay QA to sit near breakeven with a fat right tail (occasional 4–20× rounds),
  i.e. a sane house profile with real jackpot moments.

## How the live market drives it

The market's *entire move set* is the chart: candle close position = which column-cells it
occupies, candle range = how many stones it drops, regime = the shape of its "strategy"
(trends print diagonal spears that cut your lines; consolidations print row-walls that are
ambush-bait). Reading momentum, mean-reversion and volatility expansion is literally reading
your opponent's next move. No market knowledge = blind play; chart literacy = board vision.

## Why it's addictive

- A capture is a visceral, slot-machine moment — a whole run of enemy stones flips gold with
  ring-bursts — but it was *earned* by a prediction you made 10 seconds earlier.
- The ambush mechanic creates "trap is set… will it walk in?" suspense on every candle.
- The engagement rule makes the last columns nail-biting: your chain *lights up* as the tape
  arrives at your formation — or guts it.
- 30-second rounds, a ladder always one rung away, and a visible "what if I'd placed there"
  counterfactual feed the one-more-round itch.

## Visual / sensory intent

Deep navy glass over a living chart: glowing price polyline threading between stones, crimson
market pieces with hot halos, cyan player stones linked by a pulsing chain-light, gold captured
pieces, a breathing threat-zone on the live column, a probability cone fanning into the future
columns, ring-burst capture FX, and a right-rail HUD (stake, stone pips, duel state, projected
payout, chain ladder, live tape log). Hero is a full-bleed 1280×800 battlefield, alive on load
via autopilot demo play.

## Why it fits Deriv

It is a stake-multiplier round game on a live synthetic-index feed — Deriv's home turf — but it
gives price action a *face*: the market is finally a visible opponent you outplay, not a line
you guess about. Volatility products map perfectly (V75's fat candles = aggressive opponent).
Round length, stake control and instant settlement match Deriv's fast-dopamine format.

## Originality paragraph

The mechanic family — "alternating-placement board duel where the opponent's moves are forced
by realized market data" — appears to be unoccupied: web searches for market-driven board
opponents, price-action Pente/Go/Reversi hybrids, and capture-by-flanking betting games surface
only (a) classic abstract games like Pente (human vs human, no market), (b) stock-themed board
games where price is a resource track, and (c) grid casino games (Mines, cluster-pays slots)
with no adversary and no placement strategy. The specific combination — forced market moves
printed from candle ranges, scarce pre-placed player stones, bidirectional custodial capture
including pre-set ambushes, and an engagement-gated connectivity settlement — was not found
anywhere (see originality.md).
