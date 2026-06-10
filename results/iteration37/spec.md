# GAVEL — Sealed-Bid Auctions for Market-Forged Lots

**One-line pitch:** Every 30 seconds the live market mints a LOT — a micro exotic contract whose value will be forged by the *next 15 seconds of price action* — and you must out-appraise three readable AI rivals in a sealed-bid auction to win it at a price that beats what the market then actually delivers.

## Skin-free core sentence
> The player's bet is **a single sealed bid, against rival bidders, for an asset whose value is unknown and will be determined by upcoming price action**, and it's settled by **first-price auction rules: only the highest bidder pays (their own bid) and receives the asset's realized value; everyone else keeps their stake.**

### Diff against all 30 kept cores
The decision (*how much to bid against competitors for an uncertain asset*) and the settlement (*realized asset value minus your own winning bid; non-winners unaffected*) appear in **none** of the kept set:

1. **THREADLINE** — draw containment corridor, paid by price staying inside. No auction, no rivals, no bid-vs-value spread. ✗ different.
2. **REACTOR** — accumulate energy vs rupture, bank-before-blow. No bidding. ✗
3. **RIPTIDE** — claim spatial bands, paid by territory share. Claiming is unilateral, not competitive bidding; payout is share, not value−price. ✗
4. **SLINGSHOT VEGA** — ballistic launch, distance gate. ✗
5. **DEADLOCK** — tension integral, PUSH/LOCK. ✗
6. **SLIPSTREAM** — pilot through terrain. ✗
7. **PULSEPOINT** — reversal-timing streak. ✗
8. **TOLLGATE** — the nearest neighbour: but TOLLGATE is **posted-price claiming** (the house quotes a demand-derived price, you take it or leave it) settled **on touch**. GAVEL is **competitive first-price sealed bidding vs visible rivals** — the price you pay is your own strategic choice shaded against opponents, and settlement is *realized contract value minus bid*, not a touch event. Decision and settlement both differ.
9. **BALLAST** — stacking/topple. ✗
10. **APOAPSIS** — orbital band hold. ✗
11. **STARFORGE** — node threading. ✗
12. **COREBORE** — drill/extract/winch. ✗
13. **SLUICE** — route fluid to basins. ✗
14. **WAKELINE** — pre-trace path fidelity. ✗
15. **FLUXYARD** — classification throughput. ✗
16. **OVERTONE** — phase-lock Q. ✗
17. **STOWLINE** — packing density. ✗
18. **ASSAY** — ratio matching closeness. ✗
19. **SPREADKEEPER** — two-sided quoting, spread capture. Player sets prices, but settlement is round-trip spread + inventory bleed — a market-making loop, not win-the-asset-at-your-bid. ✗
20. **RAMPART** — armor budget across walls, surviving HP. ✗
21. **DETONATE** — cascade size. ✗
22. **SILKLINE** — rank-order prediction. ✗
23. **EMBERWELL** — dwell-time heat accrual. ✗
24. **SUMMIT FLAGS** — 2-D extremum proximity. ✗
25. **CRUX** — irreversible ratchet-locks vs final level. ✗
26. **MURMUR** — swarm steering headcount. ✗
27. **WINDLEASE** — second nearest: but WINDLEASE buys time-windows at **demand-priced posted quotes** (no opponents, price set by formula) and pays **realized travel inside owned windows**. GAVEL's price is set by *adversarial sealed competition* (you can lose the lot entirely; you can dodge a curse by underbidding), and the asset is one of five heterogeneous contract types that must each be *appraised* — the win/lose-the-auction layer and the value−bid settlement have no analogue in WINDLEASE. ✗
28. **HOTHOUSE** — allocation across maturing accumulators. ✗
29. **CAUSTIC** — ray reflection geometry. ✗
30. **RECOIL** — gap excursion harvest. ✗

Also not: poker scoring, peak-combo, memory recall, triage, prism, fishing, and not Crash — nothing rises until a stop; settlement is a one-shot auction clearing against a realized contract value.

## Core loop (second to second)
1. **MINT (2s)** — the market forges a catalogue lot. Its provenance is printed plainly: *"THE RANGE LOT — pays 14× the high–low range of the next 15s"*, or CLIMB (45× points closed above open), FADE (mirror), TOUCH (flat jackpot if a barrier is hit), TEMPEST (2.4× total tick distance). A house estimate band and live volatility pips give you raw appraisal material. Everyone pays a 4-credit ante.
2. **APPRAISAL (9s)** — you drag a slider and **SEAL** your bid (re-sealable until close). The three rivals seal theirs at staggered moments — wax seals appear on their podiums. Skill: price the lot off *current* volatility (a TEMPEST lot in a wild regime is gold; a TOUCH lot in a calm one is a trap) and shade against known temperaments — **MARGIN the scrooge** lowballs, **VOLTA the gambler** swings wildly, **KESTREL the sniper** bids tight to fair value but only sometimes shows up.
3. **THE HAMMER (3.5s)** — bids flip open one by one. Highest bidder is struck **SOLD** and pays their bid on the spot. All passes = lot goes unclaimed (and you still get to watch what it was worth).
4. **REALIZATION (15s)** — the lot's window runs **live on the chart** with bespoke overlays: high/low watermarks stretching the range, the green/red close-vs-open fill, a pulsing barrier line, the accumulating distance meter. The lot's value counter climbs in real time against the **red mark of the price paid** — every point past it is profit, every point short is winner's curse.
5. **SETTLEMENT (3.5s)** — value minus bid books to the winner's bankroll; the hammer ledger records it; next lot mints. If you didn't act, a house auto-bid keeps you in the game (demo autoplay).

## How the live market drives it
The lot **is** the market: all five contract types are direct functionals of the realized price path (range, directional close, barrier touch, total variation). Appraisal is genuine realized-volatility estimation — the vol pips and recent chart behaviour are the only honest inputs — and the realization phase is pure chart-watching with the contract painted onto the price action.

## Bet & payout
- Bid B (sealed, 0 = pass). Win the auction → pay B, receive realized value V. P&L = **V − B**. Lose the auction → lose only the ante.
- Self-balancing economy: there is no house edge knob — your edge comes entirely from appraising better than three bots whose biases are learnable.

## Why it's addictive
Two distinct dopamine spikes per 33-second round: the **reveal** (a social, poker-like "did my number top theirs?" moment) and the **realization sweat** (value counter racing the red paid-price mark). The winner's curse gives losses a narrative ("I knew 180 was too rich for a calm tape") and near-misses sting both ways — losing a lot by 3 credits that realizes huge, or dodging one that dies. Rival temperaments create meta-reads that deepen with play.

## Visual / sensory intent
A nocturnal auction house draped over a trading terminal: serif catalogue typography, gold filigree lot card with engraved corners, wax-sealed rival podiums, gold dust motes, a glowing teal price ribbon with volatility bars along the floor, the lot window framed in pulsing gold on the chart, and a 64px serif **SOLD** hammer-strike.

## Why it fits Deriv
Each lot is literally a micro exotic option on a synthetic index — realized range, call/put-at-expiry, one-touch, realized total variation — Deriv's actual product family. But instead of taking the house's posted premium, players *discover the premium adversarially*. It teaches option appraisal and volatility reading while feeling like a poker table.

## Originality paragraph
Auction games exist (narrative bidding visual novels, BidKing-style auction sims) and market games exist (up/down, Crash, prediction markets), but the web check found no game where **the auctioned asset's value is forged live by the immediately-upcoming price action of a market chart and bought via sealed first-price bidding against readable AI rivals**. The winner's-curse loop — appraise an uncertain market functional, shade against opponents, then watch your purchase realize tick-by-tick against the price you paid — is, as far as adversarial searching could establish, unoccupied territory in the trading-game space.
