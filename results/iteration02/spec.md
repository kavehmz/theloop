# REACTOR

**One-line pitch:** Contain the market's storm in a magnetic ring and harvest its raw volatility as energy — squeeze the field tighter for more power, but if the price churns hard enough to breach your containment, the reactor blows.

---

## Core loop (second-to-second)

1. **Arm the field.** Before a round you set one dial: **Containment Field Strength** (a band half-width around the live price, expressed in ticks). A *wide* field is safe but low-yield. A *narrow* field has a high energy multiplier but breaches easily. You also place a stake.
2. **Ignite.** The round starts. The live market price line becomes a glowing plasma filament inside a circular containment ring. Every tick of price movement — *in any direction* — pumps the plasma. The faster and choppier the market moves (realized volatility over a rolling window), the brighter and fatter the plasma swells, and the faster your **Energy** meter fills. Calm, flat market = trickle. Violent chop = torrent.
3. **Watch the breach pressure.** The plasma is trying to escape your ring. Two things raise **Breach Pressure**: (a) sustained price excursion outside your field band, and (b) sharp volatility *spikes* (a single big tick). When pressure hits 100%, the ring **ruptures** — the reactor detonates and the round is lost (stake gone).
4. **Eject to bank.** At any moment you press **EJECT** to convert accumulated Energy into payout = `stake × (Energy × FieldMultiplier)`. The tension is pure: every extra second of a wild market is more energy *and* more breach pressure. Bank too early and you leave power on the table; bank too late and you lose everything.

A newcomer groks it in one round ("more wiggle = more power, don't let it pop, cash out"). A regular masters reading volatility regimes — knowing when a calm market is about to erupt, and tuning field strength to the current storm.

## How the live market drives it

The game reads **only the magnitude of price movement, never the direction.** Each tick computes an instantaneous move `|Δprice|`. A rolling realized-volatility figure (RMS of recent ticks) sets the **plasma intensity** and the **energy fill rate**. Direction is irrelevant — a market that rips up 50 ticks and one that crashes down 50 ticks charge the reactor identically. This is genuinely a *volatility* game: you are trading the market's turbulence, not its trend. Breach pressure integrates both how far price strays from your band center and the size of individual shocks, so a single news-spike tick can rupture a tight field instantly.

## The bet & payout

- **Stake:** chosen pre-round.
- **One pre-round control:** Field Strength → maps to a **Field Multiplier** (e.g. tightest field ≈ ×6.0 energy, widest ≈ ×1.2).
- **Payout on EJECT:** `stake × Energy × FieldMultiplier`, where Energy is the harvested volatility integral (typically 0.0 → ~2.5 over a round).
- **Loss:** a breach (Breach Pressure reaches 100%) ends the round with zero return.
- House edge sits in the breach-probability vs. multiplier curve, same family as Deriv's existing multiplier products.

## Why it's addictive

- **Two-handed tension:** the same volatility that fills your energy bar also fills the bomb. Reward and ruin share one source — you can never fully relax.
- **Eject decision is agonizing every round** (the "one more second" pull, like a cash-out at its sharpest).
- **Regime reading is masterable:** flat markets feel safe but starve you; storms are lucrative and lethal. Choosing field strength to match the current regime is a real skill ceiling.
- **Sensory payoff:** a violent market is *visibly, audibly* thrilling — the plasma roars and the ring strains — so excitement scales with the market itself.

## Visual / sensory intent

Dark fintech control-room aesthetic. A central **circular magnetic containment ring** rendered on canvas; inside it a writhing plasma filament whose width, brightness and turbulence are driven live by realized volatility. Field band drawn as two faint guide arcs; when the plasma presses them, they spark. Energy meter as a vertical charging cell; Breach Pressure as a red rising ring-glow that pulses faster near 100%. EJECT fires a bright discharge burst and a particle bloom of "+X.XX" payout. A breach is a white-out detonation with screen shake and debris particles. Color language: cyan/teal energy = good, magenta/red pressure = danger.

## Why it fits Deriv

Deriv is built on live synthetic-index volatility and multiplier-style risk products. REACTOR is a pure-volatility instrument with a pre-set leverage dial (field strength = leverage) and a discretionary close (EJECT = cash-out) — concepts Deriv traders already understand, reframed as a visceral reactor-containment game. It needs nothing but a live tick stream and works perfectly on synthetic Volatility Indices.

## What makes it original (one paragraph)

REACTOR is not a direction bet, not a rising-multiplier crash curve, and not a grid. Its core resource is **realized volatility harvested as a quantity**, and its core risk is a **containment-breach event** that the player *tunes* via a single field-width dial set before the round. The defining novel combination is that **one live signal — the market's turbulence — simultaneously feeds the reward meter and the failure meter**, while the player trades off a pre-committed leverage (field tightness) against a live discretionary exit (eject). Crash rewards a blind rising curve; Limbo is a single multiplier draw; candlestick-clickers and up/down games bet direction. REACTOR bets on *how hard the market shakes* and asks you to cage it — a mechanic I could not find replicated as a trading/casino game.
