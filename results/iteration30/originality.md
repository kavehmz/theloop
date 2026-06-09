# Originality check — SUMMIT FLAGS

**Core mechanic being checked (not the name):** You place a marker on a (price-level, time) coordinate inside an upcoming live-market window; the bet settles by the **2-D distance between your marker and the coordinate where the price path's realized HIGH (and/or LOW) actually occurred** — closer in both price and time = bigger multiplier, exact = jackpot, outside a radius = expire. This is **extremum-coordinate proximity prediction**, NOT direction, NOT survival of a climb, NOT touch-of-level, NOT containment.

## Method
Adversarial web search (Google web + images results, surfaced via search tool), targeting the *mechanic* under multiple phrasings, plus the saturated crypto-game canon, itch.io, Reddit, and binary-options product space. Each query below was run; I recorded the closest matches and links.

## Queries run & closest matches

1. **"predict the high or low price of a chart guess the peak betting game"**
   - Closest: Kalshi / Polymarket / FanDuel prediction markets — [goal.com](https://www.goal.com/en-us/betting/prediction-market-apps/bltc49cdaecf6750c3e), [vegasinsider](https://www.vegasinsider.com/prediction-markets/best-prediction-market-apps/); crypto "Up or Down" — [sportsbet.io](https://sportsbet.io/sports/up-down).
   - Verdict: all are **binary outcome / direction** contracts ("will X be above Y?", "up or down"). None settles on *where the extremum lands*. Not a match.

2. **"guess where the price peak will form trading game predict high low coordinate"**
   - Closest: ChartGame [chartgame.com](https://chartgame.com/), ChartZero stock game [chartzero.com](https://www.chartzero.com/stock-market-game.html), Market Timing Game [engaging-data.com](https://engaging-data.com/market-timing-game/), Higher-or-Lower [higherorlowergame.com](https://www.higherorlowergame.com/shopping/).
   - Verdict: educational chart simulators and higher/lower trivia. ChartZero = "is it higher 2 weeks later?" (direction). None scores proximity to a realized peak coordinate. Not a match.

3. **"crypto casino game bet on the highest price in a round proximity payout closest wins"**
   - Closest: the standard crypto-casino lists — Aviator/Crash, Plinko, Dice, Limbo — [tokenist.com](https://tokenist.com/crypto-casinos/), [cryptonews.com](https://cryptonews.com/cryptocurrency/bitcoin-casinos/), [dappradar.com](https://dappradar.com/narratives/gambling).
   - Verdict: the canon is cash-out-a-multiplier (Crash), random-drop (Plinko), RNG (Dice/Limbo). The search tool itself noted my described mechanic "doesn't match the exact games" and these "focus on crash mechanics, multipliers, and random number generation rather than specifically tracking the highest price within a round for proximity-based payouts." Not a match.

4. **'"high of the day" OR "peak" prediction game pick price and time win if close itch.io trading'**
   - Closest: itch.io trading tag pages and "Prediction Widget" [excluvirtue.itch.io/tradingwidget](https://excluvirtue.itch.io/tradingwidget).
   - Verdict: Prediction Widget = "guess whether the next move is up or down" (direction). Other itch.io entries are simulators/tycoons. None is a proximity-to-extremum bet. Not a match.

5. **'binary option "high low" highest price reached during period payout how close range bet'**
   - Closest: High/Low binary options — [daytrading.com](https://www.daytrading.com/high-low-options), [riseprotocol docs](https://docs.riseprotocol.org/binary-options/understanding-high-low-binary-options); "one-touch" range bets.
   - Verdict: **This is the nearest legitimate neighbor.** But "High/Low" binaries settle on the *closing/expiry* price vs a strike (above or below — binary, all-or-nothing). "One-touch" pays if price *ever touches* a barrier (that's the TOLLGATE family). Neither asks you to call the *coordinate of the window's realized maximum/minimum* nor pays a graded multiplier by 2-D distance to it. The settling event and the scoring are different. Not a match.

6. **"reddit game predict exact high and low of next candle window closest guess wins multiplier"**
   - Closest: Aviator-prediction blog [stakevilla.com](https://stakevilla.com/blog/2025/07/10/how-to-predict-an-aviator-game/), ForexFactory "predict the next candle" thread [forexfactory.com](https://www.forexfactory.com/thread/523124-how-to-predict-the-next-candle).
   - Verdict: Aviator (Crash) and bullish/bearish *direction* discussion. The search returned nothing matching "guess the exact high and low, closest wins a multiplier." Not a match.

## Closest existing thing
**High/Low binary options** ([daytrading.com/high-low-options](https://www.daytrading.com/high-low-options)) and **one-touch barrier options**. These share the words "high/low" and a notion of price reaching a level, which is why they're the nearest neighbor — but their settlement is binary (above/below expiry, or touched/not-touched a barrier), the TOLLGATE/up-down family. SUMMIT FLAGS instead computes a **graded multiplier from the 2-D error between your called coordinate and the realized argmax/argmin** — a distinct settlement that none of the searched products use.

## Honest verdict: **ORIGINAL**
Across direction-prediction markets, the crypto-casino canon (Crash/Plinko/Dice/Limbo), itch.io trading games, binary/one-touch options, and Reddit/forum discussion, I found **no game whose payout is graded by proximity to the realized high/low coordinate of a live window.** Everything adjacent settles on *direction*, *survival of a climb*, or *touch of a level* — not on *how near your called peak is to where the peak actually formed*. The "plant a flag on the future and watch the summit form live under a roaming running-max crosshair" loop, with volatility setting the scoring radius, is a combination I could not find replicated. Verdict: original. (Caveat: limited to public web/app surfaces reachable by these queries; a private/regional product can't be fully excluded.)
