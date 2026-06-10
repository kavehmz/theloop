# WINDLEASE — own the market's next minutes

**One-line pitch:** The future of the chart is cut into 5-second windows that anyone can
lease at a live, demand-driven quote — when the NOW line sweeps through a window you own,
every tick of realized movement (up *or* down) is harvested and paid against the price you
locked.

---

## Skin-free core sentence

> The player's bet is **buying specific upcoming intervals of TIME on the chart's time
> axis, each at a dynamically drifting, demand-inflated quote locked at purchase**, and it
> is settled by **the realized absolute price travel inside each owned interval, paid as
> stake × (realized travel ÷ locked quote), capped, with no mid-flight action**.

### Diff against all 24 kept cores

| # | Kept core (skin-free) | Why WINDLESE differs |
|---|---|---|
| 1 | THREADLINE — draw a corridor price must stay inside | No corridor, no containment; nothing is drawn in price-space |
| 2 | REACTOR — accumulate vol-energy vs rupture meter, bank before blow | No meter, no rupture, no banking decision; settlement is automatic at window end |
| 3 | RIPTIDE — price paints claimable spatial bands, paid by territory share | Asset is a time interval, not painted price territory; payout is travel ratio, not share |
| 4 | SLINGSHOT VEGA — momentum charge, ballistic launch, distance gates | No launch, no projectile, no gates |
| 5 | DEADLOCK — two-force tension integral, PUSH/LOCK | No tension meter, no opposing forces, no mid-round action |
| 6 | SLIPSTREAM — pilot a glider through vol-band terrain | No piloting; zero in-flight control |
| 7 | PULSEPOINT — tap reversals, streak/combo | No taps, no timing skill, no streak |
| 8 | TOLLGATE — claim demand-priced **price levels**, paid when price **touches** | Closest relative: the auction/demand-pricing *flavor* is shared, but the asset is an interval of **TIME** (a column, not a row) and settlement is **integrated travel during the interval**, not a touch event at a level. A TOLLGATE bet wins on a single touch of a y-coordinate; a WINDLEASE bet never references any price level at all |
| 9 | BALLAST — stack cargo on a velocity-tilted beam, bank height | No stacking, no topple, no banking |
| 10 | APOAPSIS — hold an orbital band, bank per lap | No band-holding, no crash/escape |
| 11 | STARFORGE — price threads ordered decaying nodes | No nodes, no path-threading pattern |
| 12 | COREBORE — steer a drill, extract, winch out | No steering, no extraction race |
| 13 | SLUICE — route velocity-fluid through pipes into basins | No routing topology |
| 14 | WAKELINE — pre-trace the path, paid by fidelity | I never predict *where* price goes — direction and shape are irrelevant, only |Δ| magnitude inside my window |
| 15 | FLUXYARD — classify streaming regime parcels | No classification decisions |
| 16 | OVERTONE — tune freq/phase to phase-lock the wave | No tuning, no lock state |
| 17 | STOWLINE — pack shaped cargo for coverage | No packing/geometry |
| 18 | ASSAY — set mixing ratios to match a drifting target | No target matching |
| 19 | SPREADKEEPER — quote two-sided, capture spread, inventory risk | I take quotes, I don't make them; no inventory |
| 20 | RAMPART — distribute armor across price-level walls | No price levels, no budget allocation across them |
| 21 | DETONATE — seed charges in price-space, cascade payout | Charges live at price coordinates; my asset has no price coordinate |
| 22 | SILKLINE — predict finishing order of runners, rank-distance payout | No ranking, no prediction of order |
| 23 | EMBERWELL — placed **price band** accrues leaky dwell-time heat | EMBERWELL's asset is a region of PRICE that scores when price *dwells in it*; WINDLEASE owns a region of TIME that scores on *how much price moves* during it — orthogonal axes, opposite payoffs (EMBERWELL loves stillness inside its band; WINDLEASE loves violence inside its window) |
| 24 | SUMMIT FLAGS — call the (price,time) coordinate of the extremum | No extremum, no coordinate call, no proximity payout |

No kept game sells **time itself** as the priced asset, and none settles on **realized
travel vs a locked expected-travel quote**. In market terms this is buying a *variance
swap on a single chosen future window in an order book of windows* — a decision+settlement
pair absent from the set.

## Core loop (second-to-second)

1. **Read the sky.** The teal forecast haze over the future shows expected volatility per
   window; each window wears a live QUOTE (expected travel in points). The haze is good
   but imperfect — sometimes it underprices a coming storm or overprices a dying one.
2. **Lease.** Click any future window (W+1 … W+9) to lock the current quote with your
   stake. Quotes drift every tick: they re-anchor toward live realized volatility as the
   window approaches, and every lease (yours or a rival captain's) bumps that window's
   quote +8%. Cheap windows get sniped — buy early for the bargain, late for certainty.
3. **Harvest.** The NOW line sweeps into your window; a meter fills with realized travel
   (Σ|tick move|, direction-blind). Turbines you placed spin with each gust. At the
   window's end you are paid `stake × min(travel/locked_quote, 5.0) × 0.96` — instantly,
   automatically, with a green or red stamp left on the chart's history.

Rounds are 5 seconds long and overlap freely (hold six leases at once), so there is a
settlement, a quote move, or a rival purchase every second or two — constant feedback.

## How the live market drives it

- The chart is a regime-switching tick stream (calm → gusty → storm); the **realized
  travel** that settles every bet is the literal sum of tick moves in the player's window.
- The **quote curve** is an implied-volatility term structure made visible and shoppable:
  forecast vol per window × demand. Skill = spotting where implied disagrees with what the
  tape is telling you right now (momentum, regime persistence, a storm front the haze
  missed).
- Direction is deliberately irrelevant — this is a pure **volatility** game, the asset
  class Deriv's synthetic indices are built around.

## Bet & payout

- Stake $5/$10/$25/$50 per window; multiple windows at once; one quote lock per lease.
- `payout = stake × min(realized_travel / locked_quote, 5.0) × 0.96` → up to ×4.8,
  house edge 4%. Breakeven = realizing ~104% of your locked quote.
- No cash-out, no bust, no mid-flight action: the tension is entirely *pre-trade* (which
  window, at which moment of the quote drift, before which rival) and *spectated* (the
  meter filling while your window is live).

## Why it's addictive

- **Snipe pressure:** three rival captains visibly lease windows and push quotes up +8%
  a pop — hesitation has a price you can watch happening.
- **Always one more window:** the conveyor never stops delivering fresh 5-second futures;
  a settling window pays out just as two new ones become buyable.
- **Near-miss anatomy:** every loss is legible — "travel 13.8 vs my 16.2 lock" — which
  reads as *almost* and re-arms the player instantly.
- **Forecast disagreement is a skill feeling:** beating the haze feels like out-reading
  the weather service, not flipping a coin.

## Visual / sensory intent

Night-sky wind farm over a luminous market river: aurora field, star drift, a comet-headed
price line shedding wind particles, a stepped teal **forecast haze ribbon** flowing over
the future, amber NOW line, window cards with live quotes and demand badges, spinning
turbines on owned windows, green/red settlement stamps accumulating in the past lane, a
harvest ledger ticking below. Dense, layered, fully in motion at 1280×800 above the fold.

## Why it fits Deriv

It teaches the actual economics of options/volatility trading — implied vs realized vol,
term structure, theta-free variance exposure — inside a 5-second arcade loop. It is
chart-native (the bet lives *on* the time axis of the chart itself), real-money shaped
(stake → quoted multiplier → instant settlement), and house-edged like a real product.

## Originality paragraph

The trading-casino space prices **price levels** (ladders, grids, touch/no-touch),
**directions** (up/down, Crash cash-outs), and **paths** (corridors, territories). WINDLEASE
prices **time itself**: the only thing the player ever buys is a future interval of the
clock, in a live order book where rivals' demand and a visible-but-fallible vol forecast
set the odds, and the only thing that settles it is how violently the market moved while
the player owned the clock. The decision (which slice of the future, bought at which
moment of its quote drift) and the settlement (realized travel ÷ locked quote) have no
counterpart in the kept set or, per the adversarial search in `originality.md`, in the
wild.
