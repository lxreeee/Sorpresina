const frasi = [
  "Il tuo dolore non ha un solo proprietario, è pure mio 🎵",
  "Quindi sarà uguale❤️",
  "Quando starai bene, quando starai male",
  "Cercherò sempre dei modi, nuove chiavi",
  "Dopo tutte le parole che ti ho dato solo io",
  "Ti amo!"
];

let frasiIndex = 0;
const frasiContainer = document.getElementById('frasi');
const container = document.getElementById('container');
const mostraBinarioBtn = document.getElementById('mostraBinarioBtn');
const binarioDiv = document.getElementById('binario');
const codiceBinario = document.getElementById('codiceBinario');

// Mostra una frase per click
container.addEventListener('click', () => {
  if (frasiIndex < frasi.length) {
    const p = document.createElement('p');
    p.textContent = frasi[frasiIndex];
    p.classList.add('fade');
    frasiContainer.appendChild(p);
    frasiIndex++;

    // Mostra pulsante finale quando ultime frasi appaiono
    if (frasiIndex === frasi.length) {
      mostraBinarioBtn.classList.remove('hidden');
    }
  }
});

// Mostra codice binario al click sul pulsante
mostraBinarioBtn.addEventListener('click', () => {
  mostraBinarioBtn.classList.add('hidden');
  binarioDiv.classList.remove('hidden');
  mostraBinario();
});

function mostraBinario() {
  const binario = ["01010110", "01001001", "01001110", "01001001", "01001100", "01000101"];
  let i = 0, j = 0;

  function scriviBinario() {
    if (i < binario.length) {
      if (j < binario[i].length) {
        codiceBinario.textContent += binario[i][j];
        j++;
        setTimeout(scriviBinario, 100);
      } else {
        const heart = document.createElement('span');
        heart.textContent = "❤️";
        heart.style.display = "inline-block";
        heart.style.animation = "pulse 0.8s infinite alternate";
        heart.style.margin = "0 3px";
        codiceBinario.appendChild(heart);

        i++;
        j = 0;
        setTimeout(scriviBinario, 300);
      }
    }
  }

  scriviBinario();
}
