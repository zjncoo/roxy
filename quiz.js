const questions = [
  {
    question: "What type of music makes you feel most alive during an event?",
    answers: [
      { text: "Electronic and techno, I live for the bass drops and the chaos!", value: "a" }, // Irriverente
      { text: "Jazz or soul, it’s like my soundtrack for a deep, meaningful moment.", value: "b" }, // Non irriverente
      { text: "Rock and alternative, raw energy and powerful riffs fuel me.", value: "c" }, // Neutrale
    ],
  },
  {
    question: "What kind of atmosphere do you prefer at an event?",
    answers: [
      { text: "A wild scene with pulsating lights and surprises at every turn—pure chaos, pure fun!", value: "a" }, // Irriverente
      { text: "A calm, cozy vibe with dim lights, where I can actually hear my thoughts.", value: "b" }, // Non irriverente
      { text: "A lively space with a great energy that gets everyone moving, but not too over-the-top.", value: "c" }, // Neutrale
    ],
  },
  {
    question: "What style of architecture attracts you most at an event?",
    answers: [
      { text: "Futuristic spaceships, neon bridges, and insane designs that scream ‘bold’!", value: "a" }, // Irriverente
      { text: "Timeless, elegant buildings with marble and chandeliers—pure class.", value: "b" }, // Non irriverente
      { text: "Sleek, minimalist spaces where less is more, but everything feels modern.", value: "c" }, // Neutrale
    ],
  },
  {
    question: "What colors would you prefer to dominate at an event?",
    answers: [
      { text: "Electric blue, neon pink, and lime green—colors that pop and burn into your memory!", value: "a" }, // Irriverente
      { text: "Warm, earthy tones like terracotta, gold, and crimson—classy and inviting.", value: "b" }, // Non irriverente
      { text: "Black, silver, and gold—bold but sophisticated, a perfect balance.", value: "c" }, // Neutrale
    ],
  },
  {
    question: "How do you prefer the lighting at an event?",
    answers: [
      { text: "Intense strobes, lasers, and neon chaos that turn the night into a rave.", value: "a" }, // Irriverente
      { text: "Soft, ambient lighting that feels like a warm embrace.", value: "b" }, // Non irriverente
      { text: "Dynamic lights that set the tone without overwhelming the senses.", value: "c" }, // Neutrale
    ],
  },
  {
    question: "What type of food and drinks do you expect at an exclusive event?",
    answers: [
      { text: "Experimental cocktails served in test tubes and snacks that look like alien food.", value: "a" }, // Irriverente
      { text: "A beautifully plated three-course meal with the finest ingredients.", value: "b" }, // Non irriverente
      { text: "Gourmet street food with a twist—unexpected flavors, but still approachable.", value: "c" }, // Neutrale
    ],
  },
];

const results = {
  roxy: {
    title: "ROXY",
    description: "You’re bold, fearless, and always unpredictable. You live life on your own terms and leave everyone else trying to catch up!",
  },
  almost_roxy: {
    title: "Almost Roxy",
    description: "You’ve got some boldness, but you’re holding back. Let loose a little more—you’re closer to greatness than you think!",
  },
  not_roxy: {
    title: "Not Roxy",
    description: "You’re a cautious soul, but that’s okay. It’s time to start embracing your fearless side. Take that first step!",
  },
};

const quizContainer = document.getElementById("quiz-container");
const questionCounter = document.getElementById("question-counter");
const resultDiv = document.getElementById("result");
const personalitySpan = document.getElementById("personality");
const descriptionSpan = document.getElementById("description");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(index) {
  const question = questions[index];
  const questionTitle = document.getElementById("question-title");
  const answerOptions = document.getElementById("answer-options");

  // Aggiorna il contatore delle domande
  questionCounter.textContent = `${index + 1} / ${questions.length}`;

  // Mostra la domanda
  questionTitle.textContent = question.question;

  // Resetta le opzioni di risposta
  answerOptions.innerHTML = "";

  // Genera le opzioni di risposta come bottoni
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("quiz-button"); // Classe per lo stile
    button.addEventListener("click", () => handleAnswer(answer.value));
    answerOptions.appendChild(button);
  });
}

// Gestione della risposta
function handleAnswer(value) {
  if (value === "a") {
    score += 2;
  } else if (value === "b") {
    score += 1;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  }
  // Mostra il risultato solo dopo che l'ultima domanda è stata rispondente
  else {
    showResult();
  }
}

function showResult() {
  let result;

  // Determina il risultato in base al punteggio
  if (score >= 12) {
    result = results.roxy;

    // Per il caso "Roxy", reindirizza a result.html
    window.location.href = "result.html";
    return; // Termina la funzione per evitare l'esecuzione del resto del codice
  } else if (score >= 8) {
    result = results.almost_roxy;
  } else {
    result = results.not_roxy;
  }

  // Mostra il risultato a pagina intera per "Almost Roxy" e "Not Roxy"
  const body = document.body;

  // Cancella tutti i contenuti attuali della pagina
  body.innerHTML = '';

  // Aggiungi il font al documento
  const style = document.createElement('style');
  style.innerHTML = `
    @font-face {
      font-family: 'Headline Gothic ATF';
      src: url('path/to/headline-gothic-atf.woff2') format('woff2'),
           url('path/to/headline-gothic-atf.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    body {
      margin: 0;
    }
  `;
  document.head.appendChild(style);

  // Crea il contenitore del risultato
  const resultContainer = document.createElement('div');
  resultContainer.style.display = 'flex';
  resultContainer.style.flexDirection = 'column';
  resultContainer.style.alignItems = 'center';
  resultContainer.style.justifyContent = 'center';
  resultContainer.style.minHeight = '100vh';
  resultContainer.style.textAlign = 'center';
  resultContainer.style.backgroundColor = '#D51119'; // Colore di sfondo
  resultContainer.style.padding = '20px';
  resultContainer.style.color = '#FEFCE7'; // Colore del testo

  // Aggiungi il titolo del risultato
  const resultTitle = document.createElement('h1');
  resultTitle.textContent = result.title;
  resultTitle.style.fontSize = '5em';
  resultTitle.style.marginBottom = '20px';
  resultTitle.style.fontFamily = "'Headline Gothic ATF', sans-serif"; // Applica il font

  // Aggiungi la descrizione del risultato
  const resultDescription = document.createElement('p');
  resultDescription.textContent = result.description;
  resultDescription.style.fontSize = '1em';
  resultDescription.style.lineHeight = '1.5';

  // Aggiungi tutto al contenitore
  resultContainer.appendChild(resultTitle);
  resultContainer.appendChild(resultDescription);

  // Aggiungi il contenitore al body
  body.appendChild(resultContainer);
}

// Funzione per mostrare il modulo di personalizzazione e il link per scaricare l'app
function showCustomizationForm() {
  const customPassDiv = document.getElementById("custom-pass");
  const customizePassForm = document.getElementById("customize-pass-form");
  const downloadLink = document.getElementById("download-pass");

  // Crea un link per scaricare l'app
  const appDownloadLink = document.createElement('a');
  appDownloadLink.href = "https://www.example.com/app-download"; // Link alla pagina di download dell'app
  appDownloadLink.textContent = "Scarica la nostra app";
  appDownloadLink.target = "_blank"; // Apre il link in una nuova finestra
  appDownloadLink.style.display = "block";
  appDownloadLink.style.marginTop = "20px";
  
  // Aggiungi il link alla pagina di download dell'app
  customPassDiv.appendChild(appDownloadLink);

  customPassDiv.classList.remove("hidden");
  customizePassForm.classList.remove("hidden");
}

// Inizia il quiz
showQuestion(currentQuestionIndex);