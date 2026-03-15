const frasi = [
  "Il tuo dolore non ha un solo proprietario, è pure mio",
  "Quindi sarà uguale",
  "Quando starai bene, quando starai male",
  "Cercherò sempre dei modi, nuove chiavi",
  "Dopo tutte le parole che ti ho dato solo io",
  "Ti amo!🩷",

];

let frasiIndex = 0;
const frasiContainer = document.getElementById('frasi');
const container = document.getElementById('container');
const mostraBinarioBtn = document.getElementById('mostraBinarioBtn');
const binarioDiv = document.getElementById('binario');
const codiceBinario = document.getElementById('codiceBinario');
const audioPlayer = document.getElementById('audioPlayer');

// Mostra una frase per click
let audioPlayed = false;  // Variabile per verificare se l'audio è già stato avviato

container.addEventListener('click', () => {
  if (!audioPlayed) {
    audioPlayer.play();  // Riproduce l'audio al primo clic
    audioPlayed = true;  // Imposta la variabile per non ripetere il clic sull'audio
  }

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
  // Codice binario per "ELVINI"
  const binario = ["01000101", "01001100", "01010110", "01001001", "01001110", "01000100"];
  let i = 0, j = 0;

  function scriviBinario() {
    if (i < binario.length) {
      if (j < binario[i].length) {
        codiceBinario.textContent += binario[i][j];
        j++;
        setTimeout(scriviBinario, 120); // Velocità di scrittura
      } else {
        const heart = document.createElement('span');
        heart.textContent = "🩷";
        heart.style.display = "inline-block";
        heart.style.animation = "pulse 1s infinite alternate";
        heart.style.margin = "0 5px";
        codiceBinario.appendChild(heart);

        i++;
        j = 0;
        setTimeout(scriviBinario, 400);
      }
    } else {
      // Aggiungi la frase finale dopo un breve ritardo
      setTimeout(() => {
        const pFinale = document.createElement('p');
        pFinale.textContent = "(non è nulla di che, volevo solo anticiparti la cosa a modo mio)";
        pFinale.classList.add('frase-finale'); // Classe per lo stile CSS
        codiceBinario.appendChild(pFinale);
      }, 500); // Tempo di attesa prima che appaia la frase finale
    }
  }

  scriviBinario();
}