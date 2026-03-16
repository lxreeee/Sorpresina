const frasi = [ 
  "Ciao amore mio, come stai?🩷",

  "purtroppo, essendo ancora solo al primo anno di questo lungo percorso universitario, per ora dobbiamo accontentarci di qualcosa di semplice HAHAHAH.",  
  "una piccola pagina web che potrai sempre aprire quando vorrai (almeno credo), dove ho deciso di lasciarti qualche parola per ricordare questa giornata.",

  "ricordo ancora benissimo quel lontano mese di luglio, quando ci scrivemmo per la prima volta. eravamo entrambi ignari di tutto quello che sarebbe successo dopo, senza immaginare minimamente cosa saremmo diventati l’uno per l’altra.",  
  "e invece guarda un po’: oggi, 20 marzo, sono quattro mesi che stiamo insieme🥹 a dirlo sembra incredibile",

  "in questi mesi il nostro rapporto ha vissuto tanti momenti diversi: ci sono stati alti e bassi, momenti bellissimi e altri più difficili che a volte ci hanno portato anche a prendere decisioni davvero pesanti.",  
  "ma nonostante tutto quello che abbiamo passato, siamo ancora qui. e questo per me significa tantissimo.🩷",

  "Siamo qui con la stessa voglia di amarci, con la stessa forza di volontà e con lo stesso desiderio di far crescere ogni giorno di più qualcosa di speciale tra noi. Qualcosa che spero possa diventare sempre più unico e indimenticabile.",

  "Silvia, per me sei davvero tutto. Sei la mia forza quando ne ho bisogno, il mio sorriso nei momenti più semplici e una delle cose più belle che mi siano mai capitate. hai un cuore enorme, pieno di amore e di dolcezza, e non puoi immaginare quanto io sia grato alla vita per averti incontrata.",

  "essere il tuo fidanzato è qualcosa che per me ha un valore immenso. è un ruolo importante, e sapere di poter essere una persona così speciale nella tua vita mi rende incredibilmente felice.",

  "ti amo scemetta mia🩷",

  "per festeggiare questo momento ho pensato di farti un piccolo regalo. non ti dirò subito di cosa si tratta, ma qui sotto troverai un “piccolo” indizio che ti aiuterà ad arrivarci🩷",

  "Il modo in cui ti ho fatto arrivare a questa pagina non era quello che avevo davvero in mente. in realtà avevo un’altra idea molto più carina ma visti i tempi (capirai poi perché), non ho avuto altra scelta che usare questa scusa terribile, più avanti ti racconterò qual era il mio piano iniziale.",

  "adesso però divertiti a provare a capire questo codice da “informatico” quale sono.",  
  "non è così facile.",

  "niente aiuti esterni.",
  "se hai bisogno chiedi a me, ti aiuterò senza dirti troppo:)🩷",

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
    }
  }

  scriviBinario();
}