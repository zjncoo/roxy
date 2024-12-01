const questions = [
  // Existing questions...

  {
    question: "What type of music makes you feel most alive during an event?",
    answers: [
      { text: "Electronic and techno, I love the energy it creates!", value: "a" },
      { text: "Jazz or soul, the vibe is more relaxing and deep.", value: "b" },
      { text: "Rock and alternative, to feel powerful and full of adrenaline.", value: "c" },
    ],
  },
  {
    question: "What kind of atmosphere do you prefer at an event?",
    answers: [
      { text: "A vibrant atmosphere with colorful lights, where every corner is a surprise.", value: "a" },
      { text: "An intimate, cozy environment with soft lighting and a warm atmosphere.", value: "b" },
      { text: "Explosive energy with loud music and people dancing everywhere.", value: "c" },
    ],
  },
  {
    question: "What style of architecture attracts you most at an event?",
    answers: [
      { text: "Modern, minimalist spaces with clean lines and a sense of openness.", value: "a" },
      { text: "Historic, classical architecture, with an elegant timeless feel.", value: "b" },
      { text: "Futuristic, avant-garde structures that amaze with their boldness.", value: "c" },
    ],
  },
  {
    question: "What colors would you prefer to dominate at an event?",
    answers: [
      { text: "Black, silver, and gold, for an elegant and sophisticated touch.", value: "a" },
      { text: "Warm tones like red, orange, and gold, for a passionate and cozy atmosphere.", value: "b" },
      { text: "Bright colors like electric blue, purple, and lime green, for a visually stimulating effect.", value: "c" },
    ],
  },
  {
    question: "How do you prefer the lighting at an event?",
    answers: [
      { text: "Neon lights, bright and vivid, creating dramatic contrast.", value: "a" },
      { text: "Soft, warm lighting that makes the space cozy and relaxed.", value: "b" },
      { text: "Strobe lights flashing to create a festive and dynamic atmosphere.", value: "c" },
    ],
  },
  {
    question: "What type of food and drinks do you expect at an exclusive event?",
    answers: [
      { text: "Innovative cocktails and gourmet finger food.", value: "a" },
      { text: "Classic dishes, but with fresh and high-quality ingredients.", value: "b" },
      { text: "Street food and energizing drinks, for a non-stop party.", value: "c" },
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

  if (score >= 12) {
    result = results.roxy;
    // Solo per il caso "ROXY" effettua il reindirizzamento
    window.location.href = "result.html";
  } else if (score >= 8) {
    result = results.almost_roxy;
  } else {
    result = results.not_roxy;
  }

  // Mostra il risultato sulla stessa pagina per "Not Roxy" e "Almost Roxy"
  personalitySpan.textContent = result.title;
  descriptionSpan.textContent = result.description;

  // Nasconde il quiz e mostra il div dei risultati
  quizContainer.classList.add("hidden");
  resultDiv.classList.remove("hidden");
}

// Funzione per mostrare il modulo di personalizzazione e il link per scaricare l'app
function showCustomizationForm() {
  // Mostra il form di personalizzazione
  const customPassDiv = document.getElementById("custom-pass");
  const customizePassForm = document.getElementById("customize-pass-form");
  const downloadLink = document.getElementById("download-pass");
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