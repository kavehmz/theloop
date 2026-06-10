# RECOIL — adversarial originality check

Goal: **disprove** that "anchor an elastic tether on the gap between two correlated live
instruments; harvest energy per anchor re-crossing (∝ excursion²); knock down to 25%
salvage if the gap exceeds a chosen elasticity threshold" already exists as a game.
Searches ran via web search on 2026-06-10, phrased around the *mechanic*, never the name.

## Queries & closest matches

**Q1. "betting game bet on spread between two correlated assets oscillation"**
Closest: [Correlated Markets | Spread Betting](https://www.spreadbetting.com/improve-your-skills/advanced/correlated-markets) —
educational content about UK-style spread betting on correlated *single* markets;
[Same-Game Parlays: The Mathematics of Correlation](https://wizardofodds.com/article/same-game-parlays-the-mathematics-of-correlation/) —
sports parlay math. No game where the wagered object is an inter-asset gap, and nothing
pays per oscillation. **No hit.**

**Q2. "pairs trading game gamified two assets gap diverge converge casino"**
Closest: [Pairs Trading – A Real-World Guide (AlgoTrading101)](https://algotrading101.com/learn/pairs-trading-guide/),
[Fidelity — What Is Pairs Trading?](https://www.fidelity.com/learning-center/trading-investing/trading/pairs-trading),
[Britannica Money — Pairs Trading Strategy](https://www.britannica.com/money/pairs-trading-strategy).
Pairs trading exists as a *finance strategy* (long/short convergence positions) — that is
the real-world inspiration, but no gamified/casino implementation surfaced anywhere in
the results, and the strategy's payoff (P&L of a convergence position) is not RECOIL's
payoff (per-crossing quadratic harvest with a snap floor). **No game found.**

**Q3. crypto game "rubber band" / elastic tether between two price lines snaps stretch energy**
Closest: [The Rubber Band Strategy (QuantifiedStrategies)](https://quantifiedstrategies.substack.com/p/the-rubber-band-strategy),
[Rubber Band Trading Strategy: Backtest](https://www.quantifiedstrategies.com/rubber-band-trading-strategy/) —
"rubber band" is a known *mean-reversion trading metaphor* on a single asset vs its
moving average; not a game, no second asset, no per-crossing payout, no snap mechanic.
Everything else was literal rubber-band physics ([Scientific American](https://www.scientificamerican.com/article/bring-science-home-rubber-bands-energy/)) and toys. **No hit.**

**Q4. "arcade game harvest energy from price oscillation around a level mean reversion bet"**
Closest: academic papers on mean-reverting energy *markets* ([Mean reverting models for
energy option pricing](https://www.researchgate.net/publication/265566848_Mean_reverting_models_for_energy_option_pricing)) and an unrelated arena game
([Dominate All Shapes, CrazyGames](https://www.crazygames.com/game/dominate-all-shapes)). **No hit.**

**Q5. "long short two horses race game bet on the gap trading itch.io"**
Closest: itch.io horse-betting sims ([Horse Betting Simulator](https://5xgabe.itch.io/horse-race),
[tag: bet](https://itch.io/games/tag-bet)) — all settle on *winner/rank*, none on the gap
between runners, none pay per oscillation. (Rank-settlement is SILKLINE's family, which
RECOIL deliberately avoids — runner order is irrelevant here.) **No hit.**

**Q6. "deriv stake.com bustabit new game mechanic two assets relative spread bet 2025"**
Closest: [Deriv blog — platform updates](https://deriv.com/blog-categories/deriv-updates)
(mentions "Stable Spread Instruments" = bid/ask spread control, unrelated to inter-asset
gaps); [Bustabit](https://trustdice.win/blog/bustabit-the-crypto-gambling-game-that-started-it-all) — classic Crash,
single rising multiplier, no second asset, no crossings. **No hit.**

**Q7. "BTC vs ETH which coin performs better game bet relative performance crypto casino"**
Closest real match family: [Bitcoin VS Ethereum slot (SlotCatalog)](https://slotcatalog.com/en/slots/bitcoin-vs-ethereum) —
a themed *slot*, plus various "which coin wins the interval" binary props discussed on
crypto-casino listings. These share the two-asset *cast* but the bet is a binary winner
pick settled once at expiry; there is no anchor, no per-crossing harvest, no
excursion-squared payout, no chosen snap threshold. This is the closest existing
concept and it is mechanically a HiLo/up-down reskin — the genre RECOIL explicitly is
not. **Related cast, different decision AND different settlement.**

**Q8. "game bet price crosses a chosen line back and forth paid per crossing volatility"**
Closest: finance literature — [Barrier options](https://en.wikipedia.org/wiki/Barrier_option)
(knock-out resembles the snap, but a barrier option is a derivative contract, not a game,
and pays a single option payoff, not per-crossing energy) and
[Cliquet options](https://en.wikipedia.org/wiki/Cliquet_option) (periodic ratchet resets on
*time*, not on level crossings, single asset). No casino/arcade game pays per re-crossing
of a player-placed level. **No hit.**

## Verdict: ORIGINAL

- The **decision** (anchor + stiffness tradeoff on a two-asset gap) appears nowhere as a
  game: the only two-asset games found are binary winner-pick props/slots.
- The **settlement** (sum of excursion² harvested per anchor re-crossing, 25% salvage
  floor on threshold breach) matches no found game and no saturated genre; its nearest
  real-world relatives are pairs trading (a strategy) and barrier/cliquet options
  (contracts), neither of which is a playable game nor shares the per-crossing payout.
- De-skinned, the payout rule is "paid per sign-flip of a tracked residual, weighted by
  peak deviation since the last flip, knocked down on breach of a pre-chosen band" —
  not Crash (no rising scalar/cash-out race), not PULSEPOINT (no streak that resets),
  not TOLLGATE (no touch-pay on owned levels), not EMBERWELL (dwell earns nothing here;
  only *movement through* the anchor pays).

Caveats honestly noted: web search tooling (not on-platform browsing of Reddit/X/app
stores directly) — multiple mechanic phrasings used; itch.io, crypto-casino aggregators,
Deriv's own blog and finance literature were all reached through the results above.
