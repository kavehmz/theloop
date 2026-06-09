# Originality check — SPREADKEEPER

**Core mechanic under test (skin-free):** the player posts a two-sided quote (bid line + ask line, chosen spread width + skew) on a *live oscillating price chart*; price crossing a line FILLS that side; a fill on one side later answered by an opposite fill is a *round-trip* that banks the spread; unpaired one-directional fills pile up as *signed inventory* that marks against the player on trends; the bet settles on net spread PnL, with an instant loss if inventory breaches the risk limit. **The defining test:** a single price touch is a *liability* (loads inventory), not a payout — you win on *chop in either direction* and lose on *trends in either direction*.

I tried to disprove originality by searching multiple phrasings of the mechanic (not the name) across Google web, trading-game sites, itch.io, app-store-adjacent results, Reddit/Quora, and YouTube-surfaced results.

## Queries run

1. `market maker game bid ask spread capture inventory risk betting`
2. `crypto trading game provide liquidity capture spread two-sided quote gamble`
3. `market maker arcade game itch.io spread chop trend inventory`
4. `"market making" game round-trip fills profit chop lose on trend casual mobile`
5. `Deriv synthetic index game market maker spread bet OR Aviator style liquidity provision`
6. `game bet place bid ask lines on live chart price oscillates fills you earn spread inventory bleed`
7. `"be the market maker" game OR "play as a market maker" video game quote spread`
8. Direct fetch + read of the closest candidate: Tradermath "Make Me a Market" guide.

## Closest matches found (with links)

- **Tradermath / Trading Interview "Make Me a Market" + Market-Making Card/Dice games** — the closest *named games*. Verified (fetched) to be **turn-based Fermi-estimation interview-prep games**: you quote a spread around a *hidden static quantity* (sum of cards, dice, or an estimate); you win if the *true value lands inside your spread*. That is a range-containment / "did the answer fall in my band" payout — closer to a THREADLINE than to spread capture — with **no live chart, no oscillation-driven fills, no round-trips, and no signed-inventory-vs-trend loss**.
  - https://www.tradermath.org/market-games
  - https://www.tradinginterview.com/market-making-games/
  - https://www.tradermath.org/knowledge-base/make-me-a-market-guide
- **Polymarket / prediction-market market-making strategy guides** — real (not games): post two-sided quotes, earn the spread, manage inventory. These describe the *real activity* SpreadKeeper gamifies, but are tutorials/strategy pages, not a stake-and-settle game on a live chart.
  - https://startpolymarket.com/strategies/market-making/
  - https://newyorkcityservers.com/blog/prediction-market-making-guide
- **Academic / quant market-making papers** (Avellaneda-Stoikov-style inventory + adverse-selection models). Confirms the *economics* are well-known and real — which is the point — but these are math, not a game.
  - https://arxiv.org/pdf/1206.4810 · https://arxiv.org/pdf/2305.15821
- **itch.io stock-market / trading sim tag** (Trader, Stock Market: The Game, SHORT KING, etc.) — directional buy-low/sell-high tycoon/sim games. None put the player on the *making* side quoting a two-sided spread against live oscillation.
  - https://itch.io/games/tag-trading · https://itch.io/games/tag-stock-market
- **Deriv synthetic indices** — confirmed that *Deriv itself* acts as the market maker on synthetics; there is **no Deriv product where the player is the market maker capturing spread vs. inventory**.
  - https://deriv.com/markets/derived-indices/synthetic-indices
- **Bid-ask spread explainers** (Saxo, Robinhood, Wikipedia, ChartGuys) — educational, not games.

## Verdict: **ORIGINAL**

No near-identical game was found. The market-making *concept* is well documented (strategy guides, quant papers) and there is exactly one *named game family* in the neighborhood — the trading-interview "make a market" card/dice/Fermi games — but that is a **turn-based, hidden-static-value, did-it-land-inside-my-band** estimation puzzle, which is mechanically a range-containment bet, NOT spread capture on a live oscillating chart. SpreadKeeper's defining loop has no match in the wild:

1. **Live-price-driven fills.** Orders fill only when the *actual chart price* crosses your placed bid/ask lines — fills are intrinsic to real oscillation, not to a hidden answer or a turn.
2. **Round-trip capture, not touch-to-win.** A single touch *loads inventory and hurts you*; you are paid only when an opposite touch completes the round-trip. This inverts every "touch a level = win" game.
3. **Dual, opposed failure modes.** Starve (quote too wide/timid → no fills) vs. blow up (quote too tight/big → inventory margin-call on a trend). Direction-agnostic: you root for chop and fear trends in *either* direction — unlike all up/down, Crash, HiLo bets.
4. **Adverse-selection loss vector.** The loss is signed inventory marked against a *trend*, the real market-maker's nemesis — not a rising multiplier busting, not a containment line being breached.

It is also clearly NOT any banned genre (no Crash/cash-out-a-rising-multiplier, no Plinko/Mines/Dice/Limbo/Wheel/HiLo/Towers, no candlestick-clicker, no up/down guess) and is distinct from all 18 kept cores — most importantly the inverse of TOLLGATE (touch-to-pay) and unlike REACTOR (no volatility-magnitude energy meter). The originality is the *combination*: real market-maker economics (two-sided quote, round-trip spread capture, inventory adverse-selection) compressed into a fast, single-screen, stake-and-settle dopamine game on a live synthetic chart.

Caveat on honesty: I did not log into X or exhaustively crawl every app store; searches surfaced the trading-game and crypto-game neighborhoods broadly and the strongest candidate (the interview "make a market" games) was fetched and read in full. Within that coverage, no copycat exists.
