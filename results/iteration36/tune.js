// Tuning harness: replicates the RECOIL sim to compute fair recoil-power Q per stiffness.
function mkGauss() {
  let spare = null;
  return function () {
    if (spare !== null) { const v = spare; spare = null; return v; }
    let u, v, ss;
    do { u = Math.random() * 2 - 1; v = Math.random() * 2 - 1; ss = u * u + v * v; } while (ss >= 1 || ss === 0);
    const m = Math.sqrt(-2 * Math.log(ss) / ss);
    spare = v * m; return u * m;
  };
}
const gauss = mkGauss();

const THETA = 0.035, VOL = 0.6, MU_DRIFT = 0.01;
const DECOUPLE_P = 0.0007, ROUND_TICKS = 600;

function runRound(kappa) {
  const W = 15.5 - 1.15 * kappa;
  // warm up spread
  let mu = 50, s = 50;
  for (let i = 0; i < 800; i++) {
    mu += MU_DRIFT * gauss();
    s += THETA * (mu - s) + VOL * gauss();
  }
  const K = s; // anchor at live spread
  let excMax = 0, prevSign = 0, sum = 0, snapped = false;
  let rampLeft = 0, rampStep = 0;
  for (let t = 0; t < ROUND_TICKS; t++) {
    if (rampLeft > 0) { mu += rampStep; rampLeft--; }
    else if (Math.random() < DECOUPLE_P) {
      const target = (6 + Math.random() * 8) * (Math.random() < 0.5 ? -1 : 1);
      rampLeft = 40; rampStep = target / 40;
    }
    mu += MU_DRIFT * gauss();
    s += THETA * (mu - s) + VOL * gauss();
    const x = s - K;
    if (Math.abs(x) > W) { snapped = true; break; }
    excMax = Math.max(excMax, Math.abs(x));
    const sign = x > 0 ? 1 : x < 0 ? -1 : 0;
    if (prevSign !== 0 && sign !== 0 && sign !== prevSign) {
      if (excMax >= 0.12 * W) { sum += excMax * excMax / 100; excMax = 0; }
    }
    if (sign !== 0) prevSign = sign;
  }
  return snapped ? { val: 0.25 * sum, snapped: true, raw: sum } : { val: sum, snapped: false, raw: sum };
}

const N = 20000;
for (let k = 1; k <= 9; k++) {
  let tot = 0, snaps = 0, rawTot = 0;
  for (let i = 0; i < N; i++) {
    const r = runRound(k);
    tot += r.val; rawTot += r.raw; if (r.snapped) snaps++;
  }
  const avg = tot / N;
  const Q = 0.95 / avg;
  console.log(`kappa=${k} W=${(15.5 - 1.15 * k).toFixed(1)} snapP=${(snaps / N * 100).toFixed(1)}% E[base]=${avg.toFixed(3)} -> Q=${Q.toFixed(3)} (EV=0.95x)`);
}
