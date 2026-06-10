# SYNDICATE — you are the house

**One-line pitch:** Every round the market floor offers you a book of event-insurance
contracts — *"pays 6× premium if price touches 99,420 in the next 30s"*, *"pays 5× if
realized vol doubles"*, *"pays if a 3σ candle prints"* — and YOU are the underwriter:
bind the contracts whose premiums are rich, refuse the toxic ones, buy stop-loss
reinsurance to cap your blow-up, then watch the live chart hunt YOUR strikes. Settlement
is premiums kept minus claims fired, floored at the cap you paid for.

## Skin-free core sentence

> The player's bet is **selecting which of N offered one-sided market-event
> contingencies to ACCEPT (receiving a fixed upfront credit for each) plus buying a
> priced cap on total downside**, and it's settled by **upfront credits kept minus a
> fixed penalty for every accepted contingency the price realizes before the bell,
> floored at the chosen cap**.

The player is paid up front and *loses* when events fire — the inverse risk stance of
every kept game (everywhere else the player buys exposure and wins on the event).

### Diff against all 30 kept cores

| Kept core (skin-free) | Why SYNDICATE differs |
|---|---|
| 1 THREADLINE — draw corridor, paid if price stays inside | No drawing, no containment; decision is accept/reject discrete contingencies; settlement is income − triggered penalties |
| 2 REACTOR — accumulate vs rupture meter, bank before blow | No accumulator, no bank-timing verb; nothing rises toward a stop |
| 3 RIPTIDE — claim spatial bands, paid by territory share | No territory, no share; events are binary contingencies, not painted area |
| 4 SLINGSHOT VEGA — charge momentum, bet distance gate | No launch/distance settlement |
| 5 DEADLOCK — two-force tension, push/lock, lose at redline | No tension meter, no push/hold verb |
| 6 SLIPSTREAM — pilot through terrain for multiplier | No piloting |
| 7 PULSEPOINT — tap reversals, streak multiplier | No timing taps, no streak |
| 8 TOLLGATE — claim demand-priced levels, **paid when price touches them** | The exact INVERSE: in SYNDICATE a touch makes the player PAY. Decision is also different: not bidding to own levels, but accepting/refusing mispriced premiums on heterogeneous event types (touch, vol, σ-candle, close) plus a downside-cap purchase. Decision differs AND settlement sign is inverted with a liability floor — not the same pair |
| 9 BALLAST — stack cargo, bank height before topple | No stacking/topple |
| 10 APOAPSIS — hold orbit band, bank per lap | No orbit/laps |
| 11 STARFORGE — thread ordered nodes, rarity-priced | No sequence threading |
| 12 COREBORE — steer drill, extract, escape | No steering/extraction |
| 13 SLUICE — route flow into basins | No routing |
| 14 WAKELINE — pre-trace path, paid by fidelity | No path prediction |
| 15 FLUXYARD — classify parcels, throughput pay | No classification stream |
| 16 OVERTONE — phase-lock a wave, Q compounds | No tuning/lock |
| 17 STOWLINE — pack cargo for density, bust on spill | No packing |
| 18 ASSAY — mix ratios to match drifting target | No ratio matching |
| 19 SPREADKEEPER — quote two-sided bid/ask, capture spread, inventory bleed | SYNDICATE is one-sided event risk: no quoting of both sides, no round-trips, no inventory. The only "price" the player touches is take-it-or-leave-it premium acceptance |
| 20 RAMPART — distribute armor budget across walls, paid by surviving HP | RAMPART *spends a budget* defensively and is paid by what survives. SYNDICATE spends nothing on contracts — it *collects income* and is settled by income minus triggered penalties; the only spend is the optional cap. Allocation-to-survive vs. premium-vs-claim ledger |
| 21 DETONATE — seed charges, cascade size pay | No spatial cascade |
| 22 SILKLINE — predict finishing order, rank-distance pay | No ranking |
| 23 EMBERWELL — band accrues dwell-time heat | No dwell accrual |
| 24 SUMMIT FLAGS — call extremum coordinate, proximity pay | No point prediction |
| 25 CRUX — spend irreversible level-locks, highest lock vs final | No locks |
| 26 MURMUR — steer swarm, headcount pay | No swarm |
| 27 WINDLEASE — buy future time windows, paid by realized travel inside | SYNDICATE doesn't buy anything that *pays on* market motion; it is *paid to absorb* motion risk and loses on realization |
| 28 HOTHOUSE — allocate stake across typed accumulators, maturity thresholds | No accumulators, no transfers; contingencies are binary, not growing positions |
| 29 CAUSTIC — commit ray emitters, zones hit after reflection | No geometry/optics settlement |
| 30 RECOIL — anchor a spread, squared-excursion harvest | No pair/excursion harvest |

De-skinned settlement check: *"sum of fixed credits for accepted items, minus fixed
debits for each accepted item whose condition the data stream satisfies, max(loss) =
chosen cap"* — that is a portfolio of short binary options with a stop-loss layer. It is
not Crash (nothing climbs to a stop), not poker scoring, not a streak, not territory
share, not touch-to-WIN, not allocation-survival. No kept settlement matches it.

## Core loop (second-to-second)

1. **THE OFFER (12s).** Six contracts hit the desk, generated live off the current chart:
   touch-up / touch-down strikes, a breakout band, a vol-doubling, a 3σ-candle print, a
   close-above/below pin. Each card shows the premium the buyer pays YOU, the claim you'd
   owe, implied odds, and your in-house actuary model's edge read (some premiums are rich,
   some are toxic — the mispricing is the skill surface). Click to BIND. Drag the
   **reinsurance slider** to buy a stop-loss cap on total claims (tighter cap = bigger
   slice of your premium).
2. **ON RISK (30s).** The bell rings; your bound strikes burn as gold policy lines on the
   live chart. Price drifts toward one — the line heats, the card pulses DANGER, you lean
   in *rooting against the touch*. A fire = CLAIM: red burst, screen shake, ledger bleeds
   (never past your cap). A contract that survives = its premium turns to EARNED gold.
3. **THE BELL.** Settlement card: premiums kept − reinsurance cost − claims paid (floored
   at cap) → reserves tick up or down. New book in seconds. One more round.

## How the live market drives it

Every contract is *manufactured from the live tape*: strikes are placed at multiples of
current ATR off spot, vol contracts read the rolling realized σ, the 3σ-candle contract
arms off the live tick distribution. Regime shifts (calm → storm) silently reprice
everything mid-book, so a premium that looked rich in calm becomes a death sentence when
vol wakes up — reading the chart's character IS the underwriting skill. During ON RISK the
chart is the antagonist: every wick toward your strike is a heartbeat.

## Bet & payout

- Stake = the liability you accept (bounded, visible: "worst case −$X" recomputed live
  as you bind/cede). Income = premiums, credited at the bell for surviving contracts.
- Reinsurance: cap total claims at 40/60/80/100% of exposure for 35/22/12/6% of premium,
  or run naked for 0%.
- Net round P&L = premiums − reinsurance cost − min(claims, cap). Reserves compound
  across rounds.

## Why it's addictive

The dopamine loop is *inverted suspense*: instead of praying for a hit, you sweat every
near-miss against you — the slow grind of price toward a strike you insured is pure
tension, and a wick that kisses your line and rejects is a rush no long position gives.
Add the collector's greed (every extra binding is free money *if* nothing fires), the
shame/relief of reinsurance ("I paid 22% for nothing" vs "the cap just saved me"), and
the one-more-round pull of a fresh mispriced book every 45 seconds.

## Visual / sensory intent

Lloyd's-of-London-meets-trading-terminal: deep ink-blue chamber, a dominant live chart
with glowing policy lines and right-edge contract tags, gold premium particles streaming
to the ledger on earns, red claim bursts with shake on fires, a live exposure/solvency
bar, a vol gauge that arms the vol contracts, and a dense contract desk on the right with
edge-meters and DANGER pulses. The first frame is already mid-round: bound lines, moving
tape, breathing book.

## Why it fits Deriv

It teaches the literal house-side of Deriv's own product (selling touch/no-touch,
vol and range contracts) as a game: premium vs. probability, edge identification, tail
risk, and hedging via reinsurance — every concept is a real derivatives concept, and the
entire experience hangs off a live chart. It also flips the emotional rail Deriv users
know (buying contracts) into the seat they've always been curious about: the house's.

## Originality paragraph

Every kept game and every saturated casino genre puts the player LONG the event: you win
when the thing happens. SYNDICATE is structurally short: you are paid first and bleed
when the market does the thing — a portfolio-of-short-binaries with a priced stop-loss,
selected from a deliberately mispriced book. The decision verbs (accept/refuse priced
event risk, cap downside) and the settlement (income minus triggered penalties, floored)
exist in no kept core and in no Crash/Plinko/Mines/HiLo family; the closest neighbors
(TOLLGATE's touch-to-win, RAMPART's allocation-survival, SPREADKEEPER's two-sided
quoting) all fail the diff on both decision and settlement, as argued above.
