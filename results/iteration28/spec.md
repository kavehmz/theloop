# SILKLINE — spec

## (a) SKIN-FREE CORE
**The player's bet is** a *full predicted ordering (permutation)* of N competing entities — who finishes 1st, 2nd, 3rd … Nth — committed before the contest opens.
**Settled by** a *rank-distance payout*: the closer the realized finishing permutation is to the predicted permutation (measured by an inversion / Kendall-style rank-correlation, with a top-heavy bonus for nailing the leader and the podium triple in exact order), the larger the multiplier; a wildly wrong ordering pays 0.

This is a **predict-a-permutation, score-by-rank-distance** settlement. It matches **none** of the 21 kept primitives — none of them ask the player to commit an *ordering of multiple competitors* and pay by how well that ordering matches a realized ordering.

## (b) DE-SKIN TEST (all market/theme words stripped)
Strip every theme word. Bare statement:

> There are **N tokens**. Each token will end the round holding some **score** (a real number that drifts up and down during the round). At the end, the tokens are sorted by final score into a **realized ranking** — a permutation of 1..N. Before the round, the player submits a **predicted ranking** — another permutation of 1..N. Payout = f( rank-distance( predicted, realized ) ): a monotonic function of how few adjacent swaps separate the two orderings, plus a discrete bonus if the predicted top-1 / top-3 (in exact order) equal the realized top-1 / top-3.

Bare scoring rule = **a permutation-matching / rank-correlation score over N competitors.** Confirm it is NOT:
- **poker hand-ranking** — no; there are no suits/ranks/categories and no "best 5-card combination"; the input is an *ordering of all N items*, scored by positional agreement, not by forming a named combination.
- **a peak-combo streak (= PULSEPOINT)** — no; there is no streak that accumulates on consecutive hits and resets on a miss; there is no timing/tapping; the bet is committed once and scored once on a static comparison of two orderings.
- **a rising-multiplier cash-out (Crash)** — no; there is no scalar climbing while the player decides when to stop; the player never "banks"; the multiplier is computed *after* the race from a rank comparison, and there is no bust event the player must beat.
- **any of the 21 KEPT primitives** — checked one by one:
  1 inside-region containment — no region to stay inside. 2 accumulate-to-rupture/bank — no rupture, no bank. 3 share-of-territory — no claimed area; you predict an order, you don't own space. 4 distance-gate reached — no gate; the *winner* is whoever is relatively ahead, not whoever crosses an absolute distance (and you predict the *order*, not whether a line is crossed). 5 two-force tension redline — no. 6 survival/proximity piloting — no piloting. 7 timing/combo streak — no. 8 touch of claimed levels — no levels. 9 balance-before-topple — no. 10 orbit-band hold — no. 11 ordered-figure completion by rarity — no; STARFORGE pays for *assembling figures ranked by rarity*, not for predicting the *finishing order of racers*; there is no figure to complete and no rarity tier. 12 depth-extraction/winch — no. 13 routed-flow burst/dry — no. 14 path-fidelity to a lead trace — no; you are not tracing a path, you compare two *orderings*. 15 classification-throughput before overflow — no. 16 sustained phase-coherence — no. 17 packing-density before spill — no. 18 proportion-match to a drifting target — no; ASSAY matches a *ratio/proportion* to a moving target, this matches an *ordinal permutation*. 19 spread-capture vs inventory bleed — no. 20 surviving-HP fraction — no. 21 largest-connected-cascade — no.

**Verdict: skin-free core and de-skinned settlement match NONE of the 21, nor poker, PULSEPOINT, or Crash.**

---

## Name & pitch
**SILKLINE** — *"Six markets. One straightaway. Call the photo finish before the gun."*

Six "silks" (race lanes) sprint down a banked velodrome track. Each silk is one live Deriv synthetic index. You don't bet up or down — you call the **finishing order** of all six, then watch them trade places at full gallop. Get the podium right, get paid; nail the whole field, get paid huge.

## Core loop (second-to-second)
1. **Card up (8 s).** Six runners line up at the gate, each labelled with its live index (Volatility 75, Boom 500, Crash 1000, Step, Jump 100, Range Break). A live odds ticker shows each runner's recent form (its index's trailing momentum). The track is alive — silks shimmer, the crowd-line of micro candles scrolls beneath the rail.
2. **Place the order.** Drag the six silk cards into your predicted finishing order, 1→6. Lock it. (Or one-tap "podium only" for a lighter bet: just the top 3 in order.)
3. **The gun.** A ~20 s race. Each runner's **forward speed at every tick is its index's live signed momentum**, scaled — a runner whose synthetic is ripping upward surges; one whose index rolls over decelerates and gets swallowed. Positions are the *cumulative* of live momentum, so the field reshuffles constantly: lead changes, a back-marker storming late, a stumble at the rail.
4. **The wire.** When the leader hits the finish line the race freezes; a photo-finish lens snaps the exact crossing order. Your predicted permutation is compared to the realized one.
5. **Settle & feel it.** Your rank-distance score animates: correctly-ordered runners flash gold and lock; out-of-order ones grey out. The multiplier counts up from the matches. Win = confetti of silk + a payout chime; near-miss (podium right, field wrong) still pays. Then the gate resets — *one more race*.

## How the live market drives it (intrinsically)
Each runner is bound to a distinct synthetic index. **Speed is not decorative — speed *is* the signal.** At tick *t*, runner *i* advances by `vᵢ(t) = clamp( base + k · momentumᵢ(t) )` where `momentumᵢ` is the short-window rate-of-change of that index's price (a real, signed quantity from the live feed). A runner literally *is* its market's momentum integrated over the race window — so finishing position = which markets had the strongest net momentum during these 20 seconds. Because synthetic indices genuinely diverge, the lead changes are real, not scripted. The settlement (which permutation realized) is a pure read of relative market behaviour — you are betting on **cross-market relative momentum**, expressed as an ordering, which is something Deriv's product range (a basket of distinct synthetics) is uniquely positioned to offer.

## The bet & payout
- **Full-field bet:** submit a permutation of all 6. Score = number of correctly-ordered *pairs* (Kendall concordant pairs, 0–15) → maps to a multiplier curve; exact full order = jackpot (e.g. ×30). Top-heavy bonuses: exact 1st (+), exact podium 1-2-3 in order (++).
- **Podium bet (lighter):** call top-3 in order. Exact podium ×8; podium right but mis-ordered ×2.5; one of three correct & in slot ×1.3.
- A wrong-everywhere ordering pays 0 — the floor is real, the ceiling is dramatic. House edge sits in the multiplier curve vs. the combinatorial odds (6! = 720 full orderings).

## Why it's addictive
- **Photo finishes & lead changes** — the dopamine is in *watching*, not just the result; you're emotionally invested in your #1 silk holding the rail.
- **Graded outcomes** — you rarely get nothing; "podium right, order wrong" is a tantalising near-miss that screams *run it back*.
- **Skill ceiling** — reading which synthetics are trending lets a regular beat the naive bettor; a newcomer can still one-tap a podium.
- **Fast cadence** — ~30 s per race, instant reset, "I had it until the wire" regret loop.

## Visual / sensory intent
Dark velodrome at night, neon rail. Six luminous "silks" — ribbon-trail runners in saturated team colours — streak left-to-right across a banked, perspective track. Beneath the rail, a scrolling strip of live micro-candles (the actual feeds) gives market depth. A speed-blur and glow on the current leader; a trailing comet-tail per runner whose length = current speed. Photo-finish moment: time dilates, a vertical scan-line sweeps the wire, freeze-frame with rank numerals stamping in. Win feedback: silk-confetti burst + gold lock on correct slots; loss: greyout and a soft buzzer. The HERO frame is the full track mid-race — six trails, candle strip, leaderboard, photo-lens — dense and in motion on load.

## Why it fits Deriv
Deriv's edge is a *catalogue of distinct synthetic indices* with honest, continuous price feeds. SILKLINE turns that catalogue into a field of competitors and makes **relative cross-market momentum** the bet — a trading idea (which instrument outperforms) reframed as a race you can read. Real live feeds, real bet/payout, instant settlement, fully on-chart.

## Originality paragraph
Trading "races" usually mean a rising-multiplier wrapper or a two-horse up/down duel — a scalar climbing to a bust, or a binary direction call. SILKLINE is neither. It is an **ordinal-permutation bet over a field of live markets**, settled by **rank-distance** (how close your predicted finishing order is to the realized one), with a top-heavy podium bonus. The decision is "rank these instruments by who outruns whom," and the settlement is a permutation-matching score — a primitive absent from the saturated trading-casino canon (Crash/Plinko/Mines/Dice/Limbo/Wheel/HiLo/Towers/up-down) and absent from all 21 kept cores. The drama (lead changes, late charges, photo finishes) falls out *for free* from the genuine divergence of live synthetic momentum, not from scripting — which is what makes it both original and a true Deriv game.
