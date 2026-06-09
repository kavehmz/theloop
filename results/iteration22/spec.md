# SPREADKEEPER

## SKIN-FREE CORE (decision + settlement)

> **The player's bet is setting a two-sided quote — a bid line below price and an ask line above it (a chosen spread WIDTH and directional SKEW) — that the oscillating live price must repeatedly cross; settled by the cumulative SPREAD captured on each completed round-trip (a fill on one side followed by an opposite fill) MINUS the mark-to-market bleed of the signed INVENTORY that one-directional fills pile up, paid out if net PnL clears the bar before the inventory load breaches the risk limit.**

Diff vs. the 18 kept cores — confirmed matching NONE:
- **REACTOR (#2)** harvests volatility *magnitude* as one scalar against one rupture meter and banks it. SpreadKeeper has no magnitude harvest: profit comes only from *oscillation crossing two specific placed lines*, and the danger is signed *directional drift*, not a volatility-energy meter. The inventory limit is a consequence of trend, not of accumulated energy.
- **TOLLGATE (#8)** claims demand-priced levels and pays the *instant* price *touches* one. SpreadKeeper INVERTS this: a single touch (a one-sided fill) does NOT pay — it loads inventory and HURTS you. You only get paid when a touch is *answered by an opposite touch* (a round-trip). A market that touches your level and keeps going is your worst case, not your win.
- **DEADLOCK (#5)** manages a two-force tension meter via push-vs-hold to a redline. No tension meter here; you place static price lines and let oscillation work them.
- **RIPTIDE (#3)** pays by share of claimed spatial territory. No territory share; payout is per-round-trip capture.
- Not Crash (no rising scalar to cash out), not up/down (you profit from *chop in both directions* and lose on *trends in either direction* — direction-agnostic), not a candlestick-clicker.

The signature, unique to this design: **two-sided liquidity provision where paired (round-trip) fills pay and unpaired (one-directional) fills accumulate as a signed inventory you must flatten before it blows your limit.** A single price touch is a liability, not a reward — the inverse of every "touch = payout" game in the set.

---

## Name & Pitch

**SPREADKEEPER** — *Quote both sides of the market. Get paid by the chop. Get killed by the trend.*

You are the market maker. You don't bet up or down — you post a bid and an ask straddling the live price and earn the spread every time the market wobbles back and forth across your quotes. Calm, choppy markets rain money. But a hard trend fills only one side, loads you with toxic inventory, and bleeds you toward your risk limit. Quote tight for fat captures and fragile inventory, or wide for safety and thin pay. Re-center your quote, dump inventory, and ride the oscillation.

## Core loop (second-to-second)

1. **Post a quote.** Drag the spread handles to set a BID line (below price) and an ASK line (above price). Width = distance between them; skew = how far you push the pair up or down off the mid. Set your size per fill.
2. **Price oscillates.** When the live price dips to your BID, you BUY a lot (inventory +1) and pay nothing yet. When it rises to your ASK, you SELL a lot (inventory −1). A buy later answered by a sell (or vice-versa) = one **round-trip**: you bank the full spread width × size. The ticker fires, a coin-burst pops on the chart at the fill.
3. **Inventory builds on trends.** If price keeps falling, your BID keeps filling — long inventory piles up and its mark-to-market value bleeds red as price drops further (adverse selection). Same to the upside (short inventory). The **Inventory Bar** fills toward a hard **RISK LIMIT**.
4. **Manage.** Re-center your quote to follow price, widen the spread to slow fills during a trend, or hit **FLATTEN** to dump inventory at market (locking the current loss/gain) and reset the bar — at a haircut.
5. **Settle.** A round lasts a fixed window (e.g. 60s). You win the round if **net PnL = captured spreads − inventory mark − flatten haircuts** beats the payout bar. **You bust instantly if the inventory bar hits the RISK LIMIT** (margin call) — round over, stake lost.

The tension: every captured spread tempts you to quote tighter and bigger; every tick of a trend threatens to convert your open inventory into a margin call.

## How the live market drives it

Everything is intrinsic to real price motion — no dice, no RNG payout:
- **Fills** are triggered *only* by the actual price crossing your placed bid/ask lines. Choppy tape = many crossings = many round-trips. There is no fill without a genuine price oscillation.
- **Round-trip capture** requires the price to *reverse* — a real mean-reversion event in the tape pairs your buy with a sell.
- **Inventory bleed** is a true mark-to-market: signed position × (current price − avg fill). Strong directional moves (the thing that kills real market makers via adverse selection) are exactly what kills you here.
- **Volatility regime** changes the feel: low-vol drift = starvation (few fills); high-vol chop = jackpot; high-vol trend = danger. The player reads the regime off the same chart they're quoting on.

## The bet & payout

- **Stake** the round. Choose **spread width** (tighter = higher capture-per-trip, faster inventory accumulation, higher variance) and **size per fill** (leverage).
- **Payout** scales with net spread PnL at settle: `payout = stake × (1 + k · netPnL / referenceCapture)`, capped. Tighter quotes and bigger size raise the ceiling and the bust probability.
- **Bust** (instant loss of stake) if inventory hits the risk limit before the window ends.
- A live **multiplier-free** PnL meter (deliberately NOT a rising-multiplier-to-bank wrapper) shows current settle value; you can **Close Early** to lock it, or keep keeping for more chop.

## Why it's addictive

- **Two failure modes pulling against each other** — starve (too wide/timid) vs. blow up (too tight/greedy) — so there's always an optimization itch.
- **Direction-agnostic skill**: you root for *chop*, not for a guess to be right. Feels like genuine trading desk play, fresh vs. every up/down game.
- **Micro-decisions every second**: re-center, widen, flatten — constant agency, constant feedback (coin pops on capture, red bleed on adverse fills, the inventory bar creeping up like a heartbeat).
- **Regime reading**: the same chart that pays you can kill you; learning to feel a trend forming before the bar redlines is the masterable skill.
- **Near-miss drama**: surviving a trend spike that nearly hit the limit, then cashing the reversion, is a dopamine spike.

## Visual / sensory intent

Dark trading-desk aesthetic. A dense, full-bleed live candle+line chart fills the hero, scrolling right-to-left. Two glowing horizontal quote rails (cyan bid, magenta ask) sit on the chart with a shaded spread band between them that breathes as you adjust width. A live **depth-ladder / order-book strip** runs down the right edge, rungs lighting as price approaches. A bottom **inventory bar** glows green→amber→red as it loads toward the redline. Fills spark particle bursts at the crossing point (gold coins for round-trip captures, red embers for adverse inventory adds). A ticker tape of captured spreads scrolls along the top. Background: faint grid, drifting volume bars, a soft glow gradient. Sound-design intent: a coin chime on capture, a low rising drone as inventory nears the limit, a glass-shatter on margin call.

## Why it fits Deriv

Deriv is options/multipliers on synthetic indices for traders who want fast, gamified, real-money market action. SpreadKeeper is *literally market making* — the most "real trader" fantasy possible — compressed into a 60-second round on a live synthetic-index chart. It rewards reading volatility regimes (Deriv's synthetics have well-defined vol profiles), is direction-agnostic (broadens appeal beyond up/down bettors), and the bet/payout maps cleanly to stake + leverage + instant settlement. It teaches a real concept (spread capture vs. adverse selection) while being a slot-machine-fast loop.

## Originality (one paragraph)

The trading-casino space is saturated with directional bets (up/down, Crash, HiLo) and with "touch a level = win" games (TOLLGATE-style). SpreadKeeper is neither: it is built on the *market-maker's* economics, where you profit from providing two-sided liquidity to a choppy market and lose to adverse selection on trends. Its defining and (in this set) unique loop is **paired round-trip fills**: a single price touch is a *liability* that loads signed inventory, and you are only paid when an opposite touch completes the round-trip — the exact inverse of every touch-to-win mechanic. The dual failure mode (starvation vs. inventory blow-up) and the direction-agnostic "root for chop" objective have no equivalent among the kept cores or the banned genres. While "market making" exists as a concept in pro trading sims, packaging it as a fast, stake-and-settle, single-screen dopamine game driven by a live synthetic chart — with round-trip-capture-vs-inventory-bleed as the entire bet — is the original combination.
