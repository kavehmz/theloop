# TOLLGATE — Adversarial Originality Check

**Core mechanic (the thing I tried to disprove, NOT the name):**
A live, scrolling auction where the player *bids to OWN discrete future price levels* on a market chart. Each owned level pays a **toll** when the live price path *touches/crosses* it; each level's **rent (bid price) rises in real time** with proximity and momentum (demand). The player has a **dual exit**: HOLD for the touch payout, or **FLIP** (sell the owned claim back at its risen rent / mark-to-market) before the touch. Outcome is decided by *whether the price spatially reaches the levels you bought*, plus a tradeable live bid — not by a single rising scalar busting.

I searched to DISPROVE this. Method: multiple phrasings of the mechanic (not my made-up name) via Google web search, plus targeted itch.io / prediction-market / crypto-auction / Deriv-docs / Reddit+YouTube angles, and a direct collision check against the saturated crash/plinko space.

---

## Queries run (web search)

1. `trading game bid to own future price levels payout when price touches level`
   → Returned prediction-market explainers (CFTC, Robinhood event contracts), trading **simulators** (TradingGame, TradingSim, Yale STG), and Jane Street's **Figgie** (a card game about market-making, no live chart, no level ownership). None is "own a price level on a live chart and get paid on touch with live demand pricing."
2. `auction game buy price level get paid when market price reaches it crypto`
   → Returned crypto-token **auctions** (Bounce/AUCTION coin, auction-type explainers: English/Dutch/Vickrey). These auction *assets*, not *price levels on a chart*. The model itself noted my described mechanic "sounds more like a limit order or derivative strategy rather than a traditional auction" — i.e. no existing game.
3. `"price ladder" arcade game own levels payout touch live chart betting itch.io`
   → itch.io gambling/betting tag lists (Gambling Simulator, Gamblers Table, MAJOR WAGER) and an unrelated platformer **"Ladder Panic"** (turn ladders green, avoid bombs). No price-level-ownership game.
4. `crash plinko alternative game claim strike levels price comet drives through gate payout`
   → Only Crash/Plinko/Aviator/JetX content — exactly the banned genres I avoid. None match; the model explicitly couldn't find "claim strike levels" or "comet drives through gate."
5. `Deriv touch no-touch barrier game OR "buy a price level" gamified market microstructure order book game`
   → Surfaced the **closest real neighbor**: Deriv's own **Touch / No-Touch** instrument (see below). Also academic market-microstructure papers. No game wraps multi-level ownership + live rent + flip.
6. `reddit OR youtube game where you bid on price levels and flip them before price arrives like real estate on a chart`
   → No matches. Results were real trading concepts (supply/demand zones, bid/ask spread, "flipping the book"), Hypixel SkyBlock item flipping (marketplace, not price levels), price-guide tools. Nothing resembling the game.

---

## Closest existing things (with links) and why they are NOT the same

- **Deriv Touch / No-Touch** — https://developers.deriv.com/docs/touchno-touch
  The single closest concept: you pick one barrier and bet the price will / won't *touch* it during a window. **Difference:** it is one static binary barrier per contract — no *ladder* of ownable levels, no *auction*, no *live demand-driven rent* that inflates as price approaches, no *flip / mark-to-market exit*, no portfolio of claims, no spatial-board arcade feel. TOLLGATE turns the touch primitive into a continuous bidding-economics game. (This is a *primitive* Deriv already sells, which is great for fit — but not an existing *game* of this shape.)
- **Prediction markets / event contracts** (CFTC, Robinhood) — https://www.cftc.gov/LearnandProtect/PredictionMarkets , https://robinhood.com/us/en/learn/articles/profit-vs-payout-event-contracts/
  Binary YES/NO shares that settle $1/$0; price = probability. You can sell early (a "flip"), so the *exit* idea exists in finance. **Difference:** no live chart drives it second-to-second, no spatial ladder of price levels, no proximity-demand rent curve, no arcade touch-detonation loop. It's a market, not a game.
- **Jane Street Figgie** — https://www.figgie.com/how-to-play.html
  A fast market-making *card* game. **Difference:** no live price chart, no owning price levels, no touch payout — different family entirely.
- **Bounce (AUCTION)** & crypto auction formats — https://www.coingecko.com/en/coins/bounce
  Auctions for tokens/NFTs. **Difference:** auctions *assets*, not *future price levels*, and has no live-chart touch payout.
- **itch.io "Ladder Panic"** — https://oldskoolgames.itch.io/ladder-panic
  Name-adjacent ("ladder") but an unrelated arcade platformer; no betting, no chart, no levels-as-ownable.

---

## Collision check vs. banned genres & our keepers

- **Not** Crash/Aviator: no single scalar climbs to a bust; payout comes from the price *reaching levels in space* and from a tradeable bid. (Searches 4/5 confirmed only Crash-family content exists in that adjacency — TOLLGATE is not in it.)
- **Not** Plinko/Mines/Dice/Limbo/Wheel/HiLo/Towers/candlestick-clicker/up-down: it is a multi-level *auction with demand pricing*, decided by the real price path.
- **Vs. kept designs:** distinct from THREADLINE (draw a containment corridor), REACTOR (harvest volatility as energy vs. a rupture meter), RIPTIDE (paint claimable *area/territory* by coverage), SLINGSHOT VEGA (ballistic momentum launch), DEADLOCK (tug-of-war knot displacement), and SLIPSTREAM (pilot a glider through volatility bands). TOLLGATE's core verb — *bid to own discrete levels, watch rent inflate with proximity demand, then choose touch-payout vs. flip* — is bidding/ownership economics over levels, which none of them occupy. Explicitly **not** RIPTIDE: RIPTIDE rewards *area coverage* painted by the path; TOLLGATE rewards *owning specific discrete levels* priced by a live order-book-style demand curve with a sell-back exit.

---

## Verdict: **ORIGINAL**

No existing **game** found that combines (a) an auction to **own discrete future price levels** on a live chart, (b) **rent/bid that inflates in real time with proximity + momentum** (demand microstructure), (c) **touch payout** on the price path crossing an owned level, and (d) a **flip / mark-to-market exit**. The individual financial *primitives* exist (touch barriers on Deriv; early-sellable prediction-market shares) — which is exactly why it fits Deriv — but no one has packaged them into this spatial, demand-priced, dual-exit arcade auction. The closest single artifact is Deriv's own Touch/No-Touch instrument, and TOLLGATE is a categorically richer game built on top of that intuition rather than a reskin of any saturated genre or any kept design.

**Honesty note:** Searches were US-region Google web search plus targeted phrasings hitting prediction-market, crypto-auction, itch.io, Deriv-docs, and Reddit/YouTube surfaces. I did not log into X/app stores in this run; I relied on web-indexed results for those (no X/app-store-specific match surfaced). I claim originality only against what these searches could reach; the verdict reflects the absence of any near-identical game across those surfaces.
