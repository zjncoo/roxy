// Definizione dei risultati
const results = {
  roxy: {
    title: "ROXY",
    description: "You’re bold, fearless, and always unpredictable. You live life on your own terms and leave everyone else trying to catch up!"
  },
  almost_roxy: {
    title: "Almost Roxy",
    description: "You’ve got some boldness, but you’re holding back. Let loose a little more—you’re closer to greatness than you think!"
  },
  not_roxy: {
    title: "Not Roxy",
    description: "You’re a cautious soul, but that’s okay. It’s time to start embracing your fearless side. Take that first step!"
  }
};

const quizForm = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");
const passNameEl = document.getElementById("pass-name");
const customizePassForm = document.getElementById("customize-pass-form");
const customPassDiv = document.getElementById("custom-pass");
const downloadLink = document.getElementById("download-pass");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Raccolta delle risposte
  const formData = new FormData(quizForm);
  let score = 0;

  // Calcolare il punteggio in base alle risposte
  formData.forEach((value) => {
    if (value === "a") {
      score += 2;
    } else if (value === "b") {
      score += 1;
    }
  });

  // Determina il risultato in base al punteggio
  let result;
  if (score >= 12) {
    result = results.roxy;
  } else if (score >= 8) {
    result = results.almost_roxy;
  } else {
    result = results.not_roxy;
  }

  // Mostra il risultato
  document.getElementById("personality").textContent = result.title;
  document.getElementById("description").textContent = result.description;

  // Nascondi il quiz e mostra il risultato
  quizForm.classList.add("hidden");
  resultDiv.classList.remove("hidden");
});

customizePassForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please fill in all fields.");
    return;
  }

  // Mostra il pass personalizzato
  passNameEl.textContent = `Pass for: ${name}`;

  // Accedi al canvas e al contesto 2D
  const canvas = document.getElementById("canvas-pass");
  const ctx = canvas.getContext("2d");

  // Imposta il colore di sfondo del pass
  ctx.fillStyle = "#D32F2F";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Imposta il testo per il nome sul pass
  ctx.fillStyle = "#fff";
  ctx.font = "bold 50px Arial";
  ctx.textAlign = "center";
  ctx.fillText(`Pass for: ${name}`, canvas.width / 2, 200); // Scrivi il nome centrato

  // Aggiungi un link per il download
  const dataURL = canvas.toDataURL();
  downloadLink.href = dataURL;
  downloadLink.download = "PASS_ROXY.png";  // Impostiamo il nome del file per il download

  // Nascondi il form di personalizzazione e mostra il pass
  customizePassForm.classList.add("hidden");
  customPassDiv.classList.remove("hidden");
});