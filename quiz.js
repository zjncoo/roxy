const questions = [
  {
    question: "If you find a cake in the fridge without a name on it, what do you do?",
    answers: [
      { text: "Eat it and leave a note: 'It was delicious!'", value: "a" },
      { text: "Ask whose it is, but only after tasting it.", value: "b" },
      { text: "Ignore the cake, it’s not yours.", value: "c" },
    ],
  },
  {
    question: "You’re told to dress 'fancy' for a dinner. How do you show up?",
    answers: [
      { text: "In silk pajamas, holding a glass of wine.", value: "a" },
      { text: "In a black outfit, but with ridiculous sunglasses.", value: "b" },
      { text: "In a classic suit and tie (or equivalent).", value: "c" },
    ],
  },
  {
    question: "You see someone struggling to parallel park. What do you do?",
    answers: [
      { text: "Hop in their car and park it for them.", value: "a" },
      { text: "Offer some advice from the sidewalk.", value: "b" },
      { text: "Ignore them and walk away.", value: "c" },
    ],
  },
  {
    question: "What’s your ideal way to spend a weekend?",
    answers: [
      { text: "Partying until sunrise, every night.", value: "a" },
      { text: "A mix of outings and time to recharge.", value: "b" },
      { text: "Reading a book or watching a movie at home.", value: "c" },
    ],
  },
  {
    question: "You’re at a restaurant, and they bring you the wrong dish. What do you do?",
    answers: [
      { text: "Eat it anyway and pretend it’s what you wanted.", value: "a" },
      { text: "Politely tell the waiter and wait for the right dish.", value: "b" },
      { text: "Get annoyed but say nothing.", value: "c" },
    ],
  },
  {
    question: "How do you prepare for a big presentation?",
    answers: [
      { text: "Winging it—improv is your strength.", value: "a" },
      { text: "Practice a bit, but leave room for spontaneity.", value: "b" },
      { text: "Rehearse every single detail.", value: "c" },
    ],
  },
  {
    question: "If you could pick a superpower, what would it be?",
    answers: [
      { text: "Invisibility, to sneak into places unnoticed.", value: "a" },
      { text: "Super speed, to get everything done quickly.", value: "b" },
      { text: "Flying, to enjoy the world from above.", value: "c" },
    ],
  },
  {
    question: "What’s your go-to drink at a party?",
    answers: [
      { text: "Whatever the bartender recommends.", value: "a" },
      { text: "Something fancy but not too strong.", value: "b" },
      { text: "A classic soda or water.", value: "c" },
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

// Mostra il risultato
function showResult() {
  let result;

  if (score >= 12) {
    result = results.roxy;
    // Reindirizzamento alla pagina con il form
    window.location.href = "result.html";
    return;
  } else if (score >= 8) {
    result = results.almost_roxy;
  } else {
    result = results.not_roxy;
  }

  // Mostra il risultato per gli altri casi
  personalitySpan.textContent = result.title;
  descriptionSpan.textContent = result.description;

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