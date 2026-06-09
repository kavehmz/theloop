# SLUICE — Adversarial Originality Check

**Goal:** disprove the originality of SLUICE's *core mechanic*, not its name. The core
mechanic, stated neutrally:

> The live market's price *velocity* is converted into a conserved fluid that pours, in
> real time, through a player-authored **branching pipe network**. The player throws
> **junction gates** to route the surge into **capacity-rated collector basins** with
> multipliers; the bet resolves on how much flow primes basins, against **two opposing
> failure modes** — a conduit **bursts** if flow exceeds its rated capacity, or a basin
> stays **dry** if it never reaches its prime line before the window closes.

I searched for any existing game that combines (a) live-market-driven flow, (b) a player
routed multi-branch network, and (c) a flow-vs-capacity / dry-vs-burst *bet*.

---

## Queries run (Google web + images via search, app stores, itch.io, ProductHunt-adjacent, patents, Deriv space)

1. `pipe network routing game where live stock price is water flowing through valves to collectors betting`
2. `crypto trading game route price flow through branching pipes into multiplier basins gamble`
3. `volatility as fluid flow rate game conduit overload burst capacity betting fintech`
4. `itch.io game build pipe network water flows score collectors valves open close real-time`
5. `"Pipe Mania" OR "Pipe Dream" gambling slot betting flow pressure burst payout casino`
6. `Deriv synthetic index game pipe flow valve route price multiplier / "flow trading game" live chart current`
7. `reddit youtube game price action drives water current through pipes you open valves bet how much you collect` (no results)
8. Direct read attempt of USPTO patent US-8070581 (conduit / blowout-pressure betting machine) and itch.io "Pipe" by EugeneLoza.

(YouTube/Reddit/X surfaced nothing for the combined-mechanic phrasings; query 7 returned zero indexed pages, which itself is a weak signal of novelty for the specific combination.)

---

## Closest matches found, with links

| # | Thing | What it is | How close | Gap vs SLUICE |
|---|-------|-----------|-----------|---------------|
| 1 | **"Pipe" by EugeneLoza** — https://decoherence.itch.io/pipe | Build pipes; water flows as you build; each filled segment yields money/score; ends when water can't flow. | **Closest gameplay cousin.** Real-time flow through a player-built network that yields money. | No live market, no wager/stake, no capacity-rated burst, no multiplier basins, no dry-vs-burst tension. It's an offline score puzzle. |
| 2 | **Pipe Run!** — https://bannister.itch.io/pipe-run | Fix pipes before pressure builds and valves **burst**; get water to the end. | Shares the *burst-under-pressure* idea. | Maze/action platformer; no betting; no market; flow isn't routed at junctions for payout. |
| 3 | **Pipe Mania / Pipe Dream** (1989) — https://en.wikipedia.org/wiki/Pipe_Mania + countless clones (CrazyGames, Google Play "Water Pipes", "Pipe Connect") | Lay pipe before a timed flow of "goo" reaches the end. | The canonical pipe-routing-vs-flow genre. | Grid puzzle vs a clock; no market, no bet, no capacity/burst economy, no multipliers. |
| 4 | **USPTO patent US-8070581 (+ US-9685033, US-9039514) "Regulated games / multi-act games"** — https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/8070581 | Gaming-machine games where a player **bets on whether a conduit will enable liquid/objects to flow from a source to a destination**, with factors like **operating pressure and blow-out pressure**. | **Closest *betting* cousin** — conduit + blow-out-pressure as a wagering surface. | It's an RNG slot/gaming-machine abstraction: flow is driven by random/preset events, **not a live financial feed**; the player does not author and re-route a multi-branch network of velocity in real time; no dual dry-vs-burst objective across competing multiplier basins. |
| 5 | **"Stock Market" by Evolution Gaming** — https://stake.com/casino/games/evolution-stock-market | Live-casino game themed on a market. | Trading-casino theme overlap. | A wheel/multiplier casino game with a market skin; no flow network, no routing. |
| 6 | **Deriv Multipliers / Synthetic Indices** — https://deriv.com/trade-types/multiplier/ | The actual Deriv product the game would sit beside. | Same venue & "multiplier" vocabulary. | A trading product, not a routed-flow game; confirms the metaphor (multiplier on volatility) is native to Deriv but the *mechanic* is unoccupied. |
| 7 | Engineering tools — **FluidFlow**, **Pumpsim**, Pipe Network Analysis (Wikipedia) | Real pipe-network hydraulic simulators. | Validates the physical metaphor (flow split / rated capacity / burst pressure are real). | Not games, no market, no bet. |

---

## Verdict: **ORIGINAL**

No existing product combines the three load-bearing pillars of SLUICE:

1. **Live price *velocity* as a conserved fluid** (the resource you harvest is literally the
   magnitude/sign of real market motion, not an RNG or a clock).
2. **A player-authored, re-routable multi-branch network** with junction gates the player
   throws in real time as the surge arrives.
3. **A dual-failure bet** — *burst* (flow > rated capacity) vs *dry* (below prime line) —
   priced per branch, so the outcome is decided by *which branches the real volatility
   flooded*, in space and time.

The pipe-routing genre (Pipe Mania lineage, itch.io "Pipe") owns pillar 2's flavor but has
no market and no wager. The conduit/blow-out-pressure **patent** owns a slice of pillar 3's
betting surface but is an RNG gaming-machine, not a live-market routing game. Deriv's own
multipliers confirm the metaphor fits the venue without occupying the mechanic. The
specific synthesis — *route live price-velocity-as-fluid through your own gated network,
balancing burst against drought across multiplier basins* — was not found in any web,
app-store, itch.io, casino, Reddit/YouTube, or patent result I searched.

**Honest caveats:** (a) I could not OCR the full patent PDF (image-only); its abstract-level
description is the closest betting cousin and is clearly distinct (RNG, not live market),
but a deep claims read was not possible. (b) itch.io's "Pipe" page returned HTTP 403 to the
fetcher; its description came from the search snippet (build-pipes-for-money puzzle, no
market/bet), which is enough to separate it. (c) I did not exhaustively crawl every X post;
combined-mechanic phrasings returned nothing notable.
