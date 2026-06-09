# Originality check — WAKELINE

**Core mechanic under test (skin-free):** the player draws a *continuous* line in real time trying to reproduce the live price curve at a self-chosen **lead** (their stroke must arrive slightly BEFORE the price does), and the bet is settled by the **fidelity / similarity score** between their traced path and the price's actual path. Not direction, not touch, not distance, not territory, not survival.

I searched adversarially to DISPROVE this — multiple phrasings of the mechanic, not the made-up name "WAKELINE."

## Queries run (web)
1. `trading game trace the price line ahead anticipate fidelity score betting`
2. `game draw a line matching live price curve similarity score reproduce gesture`
3. `crypto trading game predict price path draw curve cash out fidelity Deriv Aviator alternative`
4. `"draw the future" OR "trace the price" betting game echo lag lead market chart`
5. `itch.io game trace moving line follow stock chart real time score how well you match`
6. `rhythm game trace the wave with cursor anticipate ahead of the line scoring accuracy`
7. `Deriv synthetic indices game follow the line trace price reproduce real money reddit youtube`
8. `"predict the line" OR "draw your prediction" stock chart game score overlap real price app`

These cover: Google web, trading-casino/crash space, itch.io, rhythm-game canon, Reddit/YouTube surfacing, app stores (App Store result returned), and Deriv-specific results.

## Closest matches found (with links) and why each differs

- **ChartGame** — https://chartgame.com/ — play real intraday charts, decide buy/sell, see how you'd have done. *Settlement = trading P&L from up/down timing decisions.* No line-drawing, no fidelity score. DIFFERENT.
- **ChartZero stock game** — https://www.chartzero.com/stock-market-game.html — guess the next move on an unlabeled historical chart. *Settlement = directional guess accuracy.* No continuous gesture, no anticipatory trace. DIFFERENT.
- **TR4DER chart game** — https://www.tr4der.com/about-the-trading-game/ — practice trading decisions on simulated conditions. *Settlement = simulated trade outcome.* DIFFERENT.
- **Bloomberg "The Trading Game"** — https://www.bloomberg.com/features/2015-stock-chart-trading-game/ — buy/sell/hold a revealing chart. *Settlement = P&L.* DIFFERENT.
- **curve-matcher (JS lib)** — https://chanind.github.io/curve-matcher/ — a *library* that scores shape similarity between two curves (Fréchet/procrustes). This is a building-block algorithm, NOT a game and NOT tied to a live market or a bet. It is, if anything, evidence that the *scoring primitive* exists generically — but no product applies it to a live price feed with an anticipatory lead as the settlement of a wager. DIFFERENT (it's a tool, not the mechanic-as-game).
- **Drawing-game patents** (US9299263, US9770650) — "redraw a figure after it disappears, score on similarity." *Static target figure, no live market, no lead/anticipation, no bet.* DIFFERENT.
- **osu! / Rhythia / "trace notes" rhythm games** — https://store.steampowered.com/app/2250500/Rhythia/ , https://www.sekaipedia.org/wiki/Rhythm_game_mechanics — aim/trace along authored note paths to music; accuracy-scored. *Target is a pre-authored, known track; discrete or hold notes; no live market; no real-money settlement; no anticipatory lead against an unknown future signal.* DIFFERENT (and explicitly distinct from PULSEPOINT's discrete-tap kept core too).
- **Prediction markets (Polymarket/Kalshi)** — https://polymarket.com/ — buy yes/no shares on outcomes, cash out early. *Settlement = event resolution / share price.* No gesture, no path fidelity. DIFFERENT.
- **Fidelity charting tools** — probability plots etc. (the search engine surfaced these on the word "fidelity"). Unrelated brokerage analytics, not a game. DIFFERENT.

## Honest verdict: **ORIGINAL**

Reasoning:
- The settlement primitive — **continuous gesture-to-live-price path-similarity, scored every frame, with a player-chosen anticipatory LEAD** — does not appear in any trading game, crypto-casino game, Deriv game, itch.io title, app-store title, or prediction market I could find.
- Curve-similarity scoring *exists generically* (libraries, patents, rhythm games), but always against a **known / static / authored** target. WAKELINE's target is the **unknown future of a live market**, revealed only as it arrives, and the player is rewarded for *anticipating* it (lead) — which converts a copying task into a prediction task. That fusion (live market signal × continuous fidelity settlement × anticipatory lead × real bet) is the novel combination.
- It is also distinct from the 13 kept cores and from every banned saturated genre (no up/down guess, no rising-multiplier bust, no level-touch, no territory, no survival-dodge, no discrete reversal-taps).

**Caveat I'm honest about:** the *ingredients* are all individually known (curve matching is a solved algorithm; chart-prediction games and rhythm-trace games both exist). The originality is in the *combination and the settlement rule*, not in inventing a never-seen primitive. I found no product that combines them. Verdict stands: ORIGINAL by combination, with the closest single existing thing being generic chart-prediction games (which settle on direction/P&L, not path fidelity) and the curve-matcher library (a tool, not a game).
