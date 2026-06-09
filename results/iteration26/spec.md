# TICKER FORGE

**Skin-free core (read first):** *The player's bet is **which live-minted cards to draft, hold, swap, or scrap from a streaming flow in order to assemble one hand**, settled by **the structural synergy value of the final locked hand (its suit-resonance, rank-runs and spread scored against a combo table)** — paid as a multiplier on stake.*

I confirm this matches **none** of the 20 kept cores. It is not a containment corridor (1 THREADLINE), not an energy/rupture bank (2 REACTOR), not territory share (3 RIPTIDE), not a charge/launch distance gate (4 SLINGSHOT), not a two-force tension meter (5 DEADLOCK), not terrain-piloting survival (6 SLIPSTREAM), not tap-to-reversal timing (7 PULSEPOINT), not claim-levels-paid-on-touch (8 TOLLGATE), not beam balance (9 BALLAST), not orbital-band hold (10 APOAPSIS), not ordered-waypoint figure capture (11 STARFORGE), not depth-axis winch extraction (12 COREBORE), not fluid routing (13 SLUICE), not lead-tracing fidelity (14 WAKELINE), not bin classification throughput (15 FLUXYARD), not oscillator phase-lock (16 OVERTONE), not vault packing density (17 STOWLINE), not mixing-ratio matching (18 ASSAY), not bid/ask spread capture (19 SPREADKEEPER), not armor distribution across walls (20 RAMPART). The core family — **collect/draft live-minted cards and build a synergy combo before a lock** — is occupied by none of them.

---

## Name & pitch

**TICKER FORGE** — *The market is the deck. Every move it makes forges a card; you draft a river of them into one hand and forge the strongest market sigil before the lock.*

A live price feed mints a card on every window it closes. You can see a few cards ahead on the **river**. Tap to **forge** a card into one of your 5 anvil slots, **scrap** it, or **swap** it for one already held. When the LOCK bar fills, your hand is scored by a combo table built entirely from market structure — not poker. The richer the structural synergy, the bigger your multiplier.

## Core loop (second-to-second)

1. **Mint.** Every ~1.4s the chart closes a micro-window and a card slides onto the river from the right. Its **rank** (2–14, where 14 = Ace) is the magnitude of that window's price move (z-scored against recent volatility); its **suit** is the prevailing regime of that window:
   - ▲ **Surge** (strong up-trend) · ▼ **Plunge** (strong down-trend) · ◆ **Coil** (low-volatility range) · ✦ **Burst** (volatility spike / whipsaw).
2. **Read & forge.** Cards travel the river left for ~4s before falling off. You decide in real time: forge a card into a slot, scrap it, or swap. Slots fill toward a 5-card hand.
3. **Build synergy.** You are chasing combos in the live combo table (right rail), which lights up partials as you assemble — e.g. three ▲ in a row, an ascending rank run, a wide spread.
4. **Lock.** A LOCK meter fills as windows close (≈18s a round). You may **Forge-Lock early** to bank the hand you have, or ride to auto-lock hoping a better card mints. At lock the hand is scored and the multiplier pays.

## How the live market drives it (intrinsic, not glued on)

Cards are **not RNG with a chart nearby** — every property is a real price feature of the window that minted it:
- **Rank** = `clamp(2..14)` of the window's absolute return divided by trailing ATR — a genuinely big move forges a face card / Ace.
- **Suit** = regime classifier on the window: signed slope + realized-vol band → Surge / Plunge / Coil / Burst.
- **Glow/foil** = a rare *foil* card mints when a window prints a fresh local extreme (new high/low on screen): foils count double in their combo.
- Because the river shows the **next few windows already forming**, an attentive player reads the live chart's shape to anticipate what suit/rank is about to mint — skill comes from reading market structure, not luck.

## The bet & payout

- **Stake** placed at round start. Multiplier = combo value of the **locked 5-card hand**, scored by the TICKER FORGE table (skin-free, market-structural):
  - **Resonance** — same suit count. 3-of-a-suit = ×2.0, 4 = ×4.5, 5 = ×12 (a sustained single regime).
  - **Run** — consecutive ranks (a momentum ladder). 3-run ×2.2, 4-run ×5, 5-run ×16.
  - **Forge (Resonant Run)** — a run that is also one suit = ×40 (the jackpot: a clean trending impulse captured).
  - **Spread** — max−min rank ≥ 10 across the hand (captured a volatility blow-out) = ×3.
  - **Twin Burst** — two ✦ foils = ×6.
  - Highest single applicable category pays; **foils** upgrade their tier; partial hands at lock score their best sub-combo. A hand with no combo pays ×0 (you lose stake) — so reckless forging busts.
- **Early Forge-Lock** banks the current hand instantly (anti-greed lever); riding to auto-lock risks a great card never minting — or scrapping a slot you needed.

## Why it's addictive

- **Drafting tension every 1.4s:** a high Ace ▲ slides in but your hand is one card from a 5-Run in another suit — keep, scrap, or swap? Constant micro-decisions.
- **Visible near-misses:** the combo rail lights "4/5 Resonance" — *one more Surge and it's ×12* — the classic slot-machine almost, but earned by reading the chart.
- **Push-your-luck without a Crash multiplier:** the "should I lock now or ride one more window" lever creates greed pressure that is decided by *what cards the market mints*, not a scalar ticking to a bust.
- **Mastery curve:** novices forge anything; regulars read regime shifts on the live chart to pre-position slots for the suit they see coming.

## Visual / sensory intent

Dark fintech glass. A prominent **live candle+line chart** fills the hero with depth — gridlines, a glowing price comet, regime-shaded background bands, drifting volume motes behind. Below the chart, the **river** carries luminous market-cards left, each tinted by suit with a foil shimmer on extremes. Five **anvil slots** anchor the foreground; forging a card fires a spark+ring burst and a satisfying *clink*. The right **combo rail** pulses brighter as partials complete. Lock detonates a payout: combo name slams in, slots flare gold, particles rain on a Forge. Loss desaturates to ash. Everything is in motion on load.

## Why it fits Deriv

Deriv players already read live synthetic-index charts and bet on price behavior. TICKER FORGE turns the *texture* of price action — trend, range, volatility, extremes — into a tactile collectible they actively curate, with a real stake and an instant multiplier payout. It rewards genuine tape-reading skill yet is graspable in one round, and the round length (~18s) fits the fast-dopamine cadence of multipliers/options. It is a trading game at its core: your edge is reading regime and volatility before the card mints.

## Originality

The card/deck/hand-building family is occupied by **none** of the 20 kept cores, and the combo taxonomy is deliberately *not* poker/blackjack/baccarat: there are no pairs/flushes/straights-of-13-ranks/face values — instead suits are **market regimes** and ranks are **volatility-scaled move magnitudes**, scored by Resonance / Run / Forge / Spread / Twin-Burst, categories that only mean anything *because* they map to trend persistence, momentum ladders and volatility blow-outs. The cards are minted by real price features (return-over-ATR rank, regime suit, extreme foils), so the deck literally *is* the market, and skill is reading the live chart to anticipate the next mint. No "rising multiplier you cash before a bust," no grid, no level-claiming. It combines a live-dealt drafting flow (keep/scrap/swap) with a market-structural synergy table and a lock/ride greed lever — a combination I did not find shipped anywhere (see `originality.md`).
