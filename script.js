document.addEventListener("DOMContentLoaded", function () {
  const freqInput = document.getElementById("freqInput");
  const freqVal = document.getElementById("freqVal");
  const waveVal = document.getElementById("waveVal");

  if (freqInput && freqVal && waveVal) {
    freqInput.addEventListener("input", function () {
      const f = parseFloat(this.value); // Frequência em THz (10^12 Hz)
      freqVal.textContent = `${f} THz`;
      
      const lambdaMicros = (300 / f).toFixed(2);
      waveVal.textContent = `${lambdaMicros} µm`;
    });
  }
});