# Originality check — REACTOR

**Core mechanic being tested:** A real-money game where the player *harvests realized market volatility as a quantity of "energy"* inside a magnetic containment ring. Reward (energy) and risk (breach pressure) are both driven by the *magnitude* of price movement — never its direction. The player sets a pre-round field-width dial (a leverage tradeoff) and chooses a discretionary EJECT (cash-out). The novelty I am trying to disprove: *a game that pays you more the more violently the market moves, while the same turbulence loads a failure meter you must cash out ahead of.*

I deliberately searched the *mechanic*, not my made-up name, in multiple phrasings.

## Queries run (Chrome, 2026-06-09)

1. **Google** — `trading game harvest volatility as energy containment reactor`
   → All results about real nuclear reactors and the *Stellaris* video game's "volatile motes" resource-harvesting (a 4X strategy mechanic, no market/betting element). No match.
   - https://www.google.com/search?q=trading+game+harvest+volatility+as+energy+containment+reactor

2. **Google** — `crypto casino game bet on volatility magnitude not direction cash out`
   → Google flagged "Missing: magnitude / direction" on nearly every hit. Closest was a Webopedia guide describing **Crash** ("cash out before it crashes") — a direction-agnostic rising-curve game I explicitly differ from (Crash rewards a blind timer, not realized volatility). Rest were academic papers on gambling psychology / BTC volatility. No match.
   - https://www.google.com/search?q=crypto+casino+game+bet+on+volatility+magnitude+not+direction+cash+out
   - Crash mention: https://www.webopedia.com (Risk vs. Reward: Volatility in Slots, Live Games, and Crash...)

3. **Google** — `game harvest market turbulence energy squeeze containment field payout itch.io OR steam`
   → Entirely irrelevant (IMF/WTO economic-turbulence PDFs, energy-market reports). No game found. No match.
   - https://www.google.com/search?q=game+harvest+market+turbulence+energy+squeeze+containment+field+payout+itch.io+OR+steam

4. **Google** — `Deriv volatility index game contain plasma reactor OR "realized volatility" bet payout arcade`
   → Garbage (vocabulary word-lists, unrelated PDFs). No match.
   - https://www.google.com/search?q=Deriv+volatility+index+game+contain+plasma+reactor+OR+%22realized+volatility%22+bet+payout+arcade

5. **Google** — `Deriv Accumulators how it works range barrier payout grow`  *(searching for the closest REAL cousin)*
   → **This is the closest existing thing.** Deriv's own **Accumulators** product: pick a growth rate (1–5%) which defines a price *range* around spot; payout compounds each tick the price *stays inside* the range; price exiting the range = total loss; cash out anytime. Higher growth rate = tighter range = higher risk.
   - https://traders-academy.deriv.com (A beginner's guide to Accumulator Options)
   - https://docs.deriv.com/marketing/ebook-accumulators-en-hq.pdf

6. **Google** — `"volatility" betting game "the more it moves the more you win" cash out before it blows`
   → "No results found" for the quoted phrase. Unquoted results were 100% about **slot-machine volatility** (payout-variance jargon), a completely different meaning of "volatility" — confirming no game treats market-price turbulence as the harvested resource. No match.
   - https://www.google.com/search?q=%22volatility%22+betting+game+%22the+more+it+moves+the+more+you+win%22+cash+out+before+it+blows

7. **X / Twitter** (logged in) — `volatility harvest game bet reactor OR "tame volatility" trading`
   → Only an unrelated post about financial-advisor YouTube content. No game. No match.
   - https://x.com/search?q=volatility%20harvest%20game%20bet%20reactor%20OR%20%22tame%20volatility%22%20trading

Surfaces effectively covered through Google's federated results: YouTube (Deriv tutorial videos surfaced in q5), Reddit (r/gambling, r/CryptoCurrency, r/options threads surfaced in q2/q6), Quora, Bitcointalk, itch.io/Steam (targeted in q3), plus the casino-game guide sites (Webopedia, PokerNews). I did not find a standalone app-store listing matching the mechanic in any of these.

## Closest existing things (honest)

- **Deriv Accumulators** (closest, and it's Deriv's own product). Shares a skeleton with REACTOR: a price *band* + *grow-while-contained* + *cash-out anytime* + *tighter band = more risk/reward*. **But the reward logic is inverted.** Accumulators pay you for the market *staying still* (low realized volatility inside the band) and punish movement; the payout compounds at a *fixed* rate per tick regardless of how much the price moves, as long as it's in range. REACTOR pays you *more the more the market moves* — energy fill rate is proportional to realized-volatility magnitude — and the band breach is the failure. REACTOR is, in essence, an *inverted, volatility-magnitude-weighted Accumulator* dressed as a plasma-containment reactor game with dual energy/breach meters. The harvest-the-turbulence reward and the reactor metaphor are not present in Accumulators.
- **Crash / multiplier-cash-out games.** Share only the "cash out before it dies" tension. They reward a blind rising timer, not realized volatility, and have no field-width leverage dial or containment band. Different core mechanic.
- **Slot-machine "volatility"** — unrelated; that word means payout variance, not market price action.
- **Stellaris "volatile mote harvesting"** — a 4X strategy resource node; no market, no live price, no bet.

## Verdict: **ORIGINAL**

No existing game was found that (a) treats live market *realized volatility / turbulence magnitude* as a harvestable energy resource, (b) makes the *same* live signal drive both the reward meter and the failure meter, and (c) wraps it in a containment-field leverage dial + discretionary eject. The nearest real cousin is Deriv's own Accumulators, but REACTOR inverts its reward logic (pays for movement, not stillness) and weights the payout by volatility magnitude, which is the defining novel mechanic. I would call it a genuinely original *game*, built deliberately on Deriv-native product DNA (a fit advantage, not a copy). Honest caveat for the judge: the *range + cash-out + tighter-is-riskier* scaffolding is not new to Deriv; the *harvest-the-storm* reward inversion and the energy-vs-breach dual-meter loop are what make it original.
