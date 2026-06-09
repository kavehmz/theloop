# EMBERWELL — Originality Check (adversarial)

**Goal:** disprove originality of the *core mechanic* — a player-placed/resizable price band that pays the **leaky time-integral of in-band occupancy**, with rate **inversely scaled to band width** and a costed mid-round re-cast. I searched multiple phrasings of the mechanic, not the name.

## Queries run (Google web + finance literature; itch.io / Steam; crypto-casino; Deriv product docs; Reddit/YouTube)
1. `trading game place a price band earn payout for time price stays inside cumulative dwell`
2. `crypto casino game bet on where price lingers accumulate seconds in zone payout`
3. `Deriv synthetic indices game price stays in range duration "time in zone" payout multiplier`
4. `binary options "range" payout proportional to time spent inside range corridor occupancy bet game`
5. `itch.io OR steam game draw a zone on stock chart score by how long price stays inside it`
6. `"range accrual" OR "corridor option" gamified app bet duration price in band casino arcade`
7. `reddit youtube trading game "the longer price stays" OR "time in zone" reward arcade bet chart`
8. `Deriv all trade types list Accumulators Turbos Touch No Touch Stays Between range duration`

## Closest matches found (with links) and how Emberwell differs

### 1. Range accrual notes / corridor accrual options (REAL financial derivative — the true conceptual ancestor)
- Range accrual — Wikipedia: https://en.wikipedia.org/wiki/Range_accrual
- Corridor Accrual Option — Fincyclopedia: https://fincyclopedia.net/derivatives/c/corridor-accrual-option
- Range Accrual glossary — cbonds: https://cbonds.com/glossary/range-accrual/
- "Range accrual options focus on the frequency and **duration** that the underlying index stays within a defined band. If the index remains within the range during the payment period, the coupon **accrues**; otherwise it does not."
- **This is the closest existing thing of any kind.** It validates that "pay for occupation-time in a band" is a real, intuitive financial idea — but it is a **structured note / coupon instrument, not a game.** Differences that make Emberwell a distinct *game*, not a reskinned note: (a) the band is **player-placed and live-resizable on the chart**, with a real-time **width↔rate dial** (`rate = k/width`) — range-accrual bands are fixed contract barriers; (b) Emberwell adds a **continuous two-sided LEAK** (out-of-band time *erodes* banked value) — accrual notes only stop accruing, they never subtract; (c) Emberwell has a **costed mid-round re-cast** turning it into a read-and-chase dilemma; (d) it is a 30-second arcade loop with particle feedback, not a maturity coupon. Conceptually adjacent, mechanically and experientially different.

### 2. Deriv Accumulators (closest live *product* on the target platform)
- Deriv Accumulators academy: https://deriv.com/academy/lessons/trading-accumulators-and-turbos-on-the-volatility-indices
- Beginner's guide: https://traders-academy.deriv.com/trading-guides/beginners-guide-to-accumulator-options
- Stake compounds each tick price stays within a volatility-derived range; **a single touch of either barrier "knocks out" and you lose the stake** (binary), with an optional cash-out before knockout.
- **Differs fundamentally.** Accumulators are (a) **binary knock-out** — one barrier touch = total loss (this is THREADLINE-family, the exact failure mode Emberwell rejects: in Emberwell an exit only *cools* the ember, it never kills the bet); (b) the range is **auto-derived from volatility, not chosen or sized by the player** — there is no spatial "where will price linger" decision and no width↔rate dial; (c) it is **compound-then-cash-out** (Crash-adjacent), whereas Emberwell is an *integral of occupancy that can rise and fall*, settled automatically at the bell. Emberwell is explicitly the *anti-Accumulator*: partial dwell banks, exits are survivable.

### 3. Deriv "Stays Between" / Touch–No-Touch / range binaries
- Touch/No Touch: https://deriv.com/trade-types/options/digital-options/touch-no-touch/
- These are **binary** (stay-inside-the-whole-time, or touch-once). Emberwell is neither binary nor touch-paid; it is a graded duration integral. Distinct.

### 4. Chart/zone games (itch.io / Steam / TradingView tools)
- itch.io stock-market games: https://itch.io/games/tag-stock-market
- Chart Trading Simulator (Steam): https://store.steampowered.com/app/3166810/Chart_Trading_Simulator/
- ChartGame: https://chartgame.com/ ; engaging-data market-timing game: https://engaging-data.com/market-timing-game/
- TradingView "zones"/rectangle tools are *analysis overlays*, not bets. None of these score by **how long live price dwells inside a player-sized box**; they are buy/sell timing sims or drawing tools. No match.

### 5. Crypto-casino catalogue
- Surveyed crypto-casino roundups (tokenist, cryptoslate, gamblinginsider). The repeated catalogue is Crash, Plinko, Dice, Hi-Lo, slots, Mines — **no dwell-integral / time-in-zone game** appears anywhere. No match.

## Honest verdict: **ORIGINAL (as a game)**
No game — on itch.io, Steam, crypto casinos, Deriv, or discussed on Reddit/YouTube — was found that settles a bet by the **leaky time-integral of how long live price dwells inside a player-placed, player-sized band, with rate inversely tied to band width and a costed re-cast.** The genuine ancestor is the **range-accrual / corridor-accrual derivative** (a coupon instrument, not a game, and without the leak, the width-dial, the re-cast, or the arcade loop), and the nearest live product is the **Deriv Accumulator** (binary knock-out, auto-sized range, compound-cash-out — the precise opposite of Emberwell's survivable, player-sized, graded dwell). Emberwell turns a real but un-gamified financial idea into an interactive arcade bet and inverts the binary/knock-out framing that every adjacent product uses. I rate it original; the one caveat is that "pay for time-in-band" is a known *financial* concept, so the spec leads with the de-skin and explicitly contrasts the knock-out/binary cousins.
