document.addEventListener("DOMContentLoaded", function () {
  // Calculadora Interativa de Onda ($c = \lambda \cdot f$)
  const freqInput = document.getElementById("freqInput");
  const freqVal = document.getElementById("freqVal");
  const waveVal = document.getElementById("waveVal");

  if (freqInput && freqVal && waveVal) {
    freqInput.addEventListener("input", function () {
      const f = parseFloat(this.value); // Frequência em THz (10^12 Hz)
      freqVal.textContent = `${f} THz`;

      // c = 3 * 10^8 m/s
      // lambda = c / f -> (3 * 10^8) / (f * 10^12) metros -> em micrómetros (µm): (3 * 10^8 / (f * 10^12)) * 10^6 = 300 / f
      const lambdaMicros = (300 / f).toFixed(2);
      waveVal.textContent = `${lambdaMicros} µm`;
    });
  }
});