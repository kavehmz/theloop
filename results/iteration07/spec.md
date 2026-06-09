# PULSEPOINT

**One-line pitch:** The live market's turning points *are* the beat — tap exactly when price reverses to chain a flow multiplier, and grade your timing across a phrase for the payout.

---

## Core loop (second-to-second action)

1. **Stake & start a phrase.** You put down a stake and begin a "phrase" — a fixed run of *N* upcoming beats riding on the live market.
2. **The market keeps time.** Price velocity is smoothed into a **momentum oscillator**. Every time that oscillator crosses zero — i.e. every time price *actually turns* (a local top or bottom) — a **beat** fires. Because real price cadence is irregular, this is a living, syncopated rhythm, not a metronome.
3. **A reticle contracts.** The engine predicts the next beat from the running inter-beat interval and drives a shrinking ring (and an incoming marker on a beat-rail). The ring is tightest at the predicted reversal.
4. **You tap on the turn.** Hit SPACE / click the strike pad at the instant of reversal. Your error `|tap − true_turn|` is graded **PERFECT / GOOD / OK / MISS** with a satisfying snap, glow burst, and screen-shake on PERFECT.
5. **Flow builds.** Consecutive non-miss hits raise a **Flow multiplier** and ramp the visual/audio heat (the chart saturates, particles stream, the bassline thickens). A MISS resets Flow to ×1 but the phrase continues.
6. **Optional RIDE.** After your Flow crosses a threshold you may press **RIDE** to enter a **Drop section**: volatility-driven beats come faster and tighter for richer per-hit multipliers. Bailing early banks what you've built; the decision is risk *appetite*, not waiting-for-a-bust.
7. **Payout reveal.** When the phrase ends, the run is graded (count of PERFECT/GOOD across the phrase × final Flow). The grade card flips up: **S / A / B / C**, multiplier, and credited win.

Second-to-second it feels like a rhythm game — anticipate, lock, chain, recover — except the song is the order book breathing.

## How the live market drives it

- **The beat is the price's own reversals.** We smooth tick velocity into a momentum line; each **zero-crossing** is a genuine local extremum of price. There is no scripted track — choppy ranging markets give a dense stutter of beats; trending impulses give long silences then a sharp turn. You are literally reading market microstructure as music.
- **Reticle timing = a live forecast** of the next turn from the trailing inter-beat interval and current momentum slope, so the player has something to *anticipate*, and skilled players learn each instrument's "groove."
- **Volatility = tempo & intensity.** A vol pulse tightens windows and speeds the rail; calm widens them. The Drop section is gated on a real volatility surge.
- **Each Deriv synthetic is a different song.** A low-vol index is a slow ballad with forgiving windows; a high-vol index is drum-and-bass with brutal windows and fat multipliers — a built-in difficulty/instrument selector tied to real symbols.

## The bet & payout

- **Stake** up front on a phrase (default 8 beats; selectable 4 / 8 / 16).
- **Per-beat multiplier** by accuracy: PERFECT ×1.9, GOOD ×1.35, OK ×1.05, MISS ×0 contribution (resets Flow chain, not the stake).
- **Flow multiplier** = compounding bonus for unbroken chains (caps to keep house edge sane).
- **RIDE / Drop** multiplies windows-hit during the surge by a vol-scaled factor; bail anytime to bank.
- **Final payout** = `stake × (phrase accuracy score) × (final Flow) × (drop bonus)`, surfaced as a single grade (S/A/B/C) + multiplier. Configurable target RTP via the multiplier table and Flow cap. There is no all-or-nothing bust: a clumsy phrase still returns a small amount; a clean phrase pays big — outcome is decided by *timing accuracy*, not by a number climbing until it pops.

## Why it's addictive

- **Skill you can feel improving.** Your first runs are sloppy; within minutes you're reading the groove and stringing PERFECTs. Mastery is visible and rewarded — the hardest pull in a fintech game.
- **Flow state + combo dopamine.** The chain meter, escalating heat, and the "don't break the streak" tension are the same loop that makes rhythm games (Guitar Hero / osu! / Beat Saber) compulsive — here strapped to real money and a live market.
- **Just-one-more grade chase.** S-rank is always *almost* in reach; a single missed beat is a personal, fixable mistake, not bad luck — so you immediately re-stake to fix it.
- **Micro-feedback density.** Every ~1–3 seconds there is a graded hit with sound, color, and shake. Extremely high feedback frequency per minute.

## Visual / sensory intent

- **Dark fintech aesthetic**, neon cyan→magenta heat gradient that intensifies with Flow. Full-bleed live area chart with a glowing price head.
- **Beat-rail** along the bottom: markers stream toward a strike line; the contracting reticle pulses on the price head.
- **Hit feedback:** PERFECT = white flash + radial shockwave + particle burst + brief chromatic-aberration shake; GOOD = cyan ring; MISS = red desaturation + glitch. A flow meter braids brighter as the chain grows.
- **Audio (described / optional WebAudio):** a quantized synth stab per hit pitched by accuracy; a bassline that thickens with Flow; a riser into the Drop.
- It should look like a trading terminal that learned to be a club.

## Why it fits Deriv

- Deriv is **live synthetic indices + fast, gamified real-money rounds**. PULSEPOINT is *only* possible on a live, continuous price feed — the beat cannot exist without real reversals — so it is intrinsically a market product, not a casino game with a chart glued on.
- Round length is short and re-stakeable (a phrase is 10–40s), matching Deriv's rapid-fire trading cadence.
- Each synthetic index becomes a selectable "track" with its own difficulty — a natural reason to explore Deriv's symbol catalogue.
- Teaches a real instinct (reading reversals / mean-reversion cadence) under the skin of a game.

## What makes it original (one paragraph)

Every saturated trading-casino game resolves on a *level* or a *scalar* — did price cross a line, did the multiplier bust, which cell. PULSEPOINT resolves on **temporal precision against the market's own reversal cadence**: the decisive variable is *when you tapped relative to when price actually turned*, accumulated as a flow chain across a phrase and graded like a rhythm game. It is not up/down guessing (direction is irrelevant — only the *moment of the turn* matters), not a candlestick-clicker (you act on continuous momentum zero-crossings, not bars), and not a cash-out-before-bust climb (a sloppy run still pays, a clean run pays big; value comes from accuracy distribution, not from a number rising until it pops). The fusion — *market microstructure reversals as a playable, comboable rhythm track with skill-graded payouts* — is, to my searches, unoccupied.
