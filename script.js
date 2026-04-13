// =============================================
// TURBO — Subjunctive Edition
// =============================================
// Levels 1–8:  specific subjunctive categories
// Levels 9–19: broader mixed practice
// Level 20:    full mix of everything
// =============================================

// Each item:
//   trigger — the cue shown to the student (grey label)
//   en      — the English prompt (bold, main question)
//   es      — the Spanish answer they must type
// =============================================

const LEVEL_DATA = {

  // ---- LEVEL 1: Present subjunctive — regular verbs ----
  1: [
    { trigger: "Present subjunctive — regular", en: "that I speak",       es: "que hable" },
    { trigger: "Present subjunctive — regular", en: "that you speak",     es: "que hables" },
    { trigger: "Present subjunctive — regular", en: "that he speaks",     es: "que hable" },
    { trigger: "Present subjunctive — regular", en: "that we speak",      es: "que hablemos" },
    { trigger: "Present subjunctive — regular", en: "that they speak",    es: "que hablen" },
    { trigger: "Present subjunctive — regular", en: "that I eat",         es: "que coma" },
    { trigger: "Present subjunctive — regular", en: "that you eat",       es: "que comas" },
    { trigger: "Present subjunctive — regular", en: "that he eats",       es: "que coma" },
    { trigger: "Present subjunctive — regular", en: "that we eat",        es: "que comamos" },
    { trigger: "Present subjunctive — regular", en: "that they eat",      es: "que coman" },
    { trigger: "Present subjunctive — regular", en: "that I live",        es: "que viva" },
    { trigger: "Present subjunctive — regular", en: "that you live",      es: "que vivas" },
    { trigger: "Present subjunctive — regular", en: "that he lives",      es: "que viva" },
    { trigger: "Present subjunctive — regular", en: "that we live",       es: "que vivamos" },
    { trigger: "Present subjunctive — regular", en: "that they live",     es: "que vivan" },
  ],

  // ---- LEVEL 2: Present subjunctive — key irregular verbs ----
  2: [
    { trigger: "Irregular subjunctive", en: "that I am (ser)",            es: "que sea" },
    { trigger: "Irregular subjunctive", en: "that you are (ser)",         es: "que seas" },
    { trigger: "Irregular subjunctive", en: "that he is (ser)",           es: "que sea" },
    { trigger: "Irregular subjunctive", en: "that we are (ser)",          es: "que seamos" },
    { trigger: "Irregular subjunctive", en: "that they are (ser)",        es: "que sean" },
    { trigger: "Irregular subjunctive", en: "that I have",                es: "que tenga" },
    { trigger: "Irregular subjunctive", en: "that you have",              es: "que tengas" },
    { trigger: "Irregular subjunctive", en: "that he has",                es: "que tenga" },
    { trigger: "Irregular subjunctive", en: "that we have",               es: "que tengamos" },
    { trigger: "Irregular subjunctive", en: "that they have",             es: "que tengan" },
    { trigger: "Irregular subjunctive", en: "that I go",                  es: "que vaya" },
    { trigger: "Irregular subjunctive", en: "that you go",                es: "que vayas" },
    { trigger: "Irregular subjunctive", en: "that he goes",               es: "que vaya" },
    { trigger: "Irregular subjunctive", en: "that we go",                 es: "que vayamos" },
    { trigger: "Irregular subjunctive", en: "that they go",               es: "que vayan" },
  ],

  // ---- LEVEL 3: Wishes & desires (querer que, esperar que…) ----
  3: [
    { trigger: "Wishes — quiero que…",    en: "I want you to study",           es: "quiero que estudies" },
    { trigger: "Wishes — quiero que…",    en: "I want him to come",            es: "quiero que venga" },
    { trigger: "Wishes — quiero que…",    en: "I want them to listen",         es: "quiero que escuchen" },
    { trigger: "Wishes — quiero que…",    en: "I want her to be happy",        es: "quiero que sea feliz" },
    { trigger: "Wishes — quiero que…",    en: "I want you to speak Spanish",   es: "quiero que hables español" },
    { trigger: "Wishes — espero que…",    en: "I hope you pass",               es: "espero que apruebes" },
    { trigger: "Wishes — espero que…",    en: "I hope it goes well",           es: "espero que vaya bien" },
    { trigger: "Wishes — espero que…",    en: "I hope she is OK",              es: "espero que esté bien" },
    { trigger: "Wishes — espero que…",    en: "I hope we win",                 es: "espero que ganemos" },
    { trigger: "Wishes — espero que…",    en: "I hope they arrive on time",    es: "espero que lleguen a tiempo" },
    { trigger: "Wishes — ojalá…",         en: "I wish it would rain",          es: "ojalá llueva" },
    { trigger: "Wishes — ojalá…",         en: "I wish he would call",          es: "ojalá llame" },
    { trigger: "Wishes — ojalá…",         en: "I wish she could come",         es: "ojalá pueda venir" },
    { trigger: "Wishes — ojalá…",         en: "I wish we had time",            es: "ojalá tengamos tiempo" },
    { trigger: "Wishes — ojalá…",         en: "I wish they were here",         es: "ojalá estén aquí" },
  ],

  // ---- LEVEL 4: Doubt & denial ----
  4: [
    { trigger: "Doubt — dudo que…",          en: "I doubt he comes",              es: "dudo que venga" },
    { trigger: "Doubt — dudo que…",          en: "I doubt she knows",             es: "dudo que sepa" },
    { trigger: "Doubt — dudo que…",          en: "I doubt it is true",            es: "dudo que sea verdad" },
    { trigger: "Doubt — dudo que…",          en: "I doubt they understand",       es: "dudo que entiendan" },
    { trigger: "Doubt — dudo que…",          en: "I doubt you can do it",         es: "dudo que puedas hacerlo" },
    { trigger: "Doubt — no creo que…",       en: "I don't think he is right",     es: "no creo que tenga razón" },
    { trigger: "Doubt — no creo que…",       en: "I don't think she will come",   es: "no creo que venga" },
    { trigger: "Doubt — no creo que…",       en: "I don't think it is easy",      es: "no creo que sea fácil" },
    { trigger: "Doubt — no creo que…",       en: "I don't think they know",       es: "no creo que sepan" },
    { trigger: "Doubt — no creo que…",       en: "I don't think we can win",      es: "no creo que podamos ganar" },
    { trigger: "Denial — no es verdad que…", en: "It's not true that he works",   es: "no es verdad que trabaje" },
    { trigger: "Denial — no es verdad que…", en: "It's not true that she studies",es: "no es verdad que estudie" },
    { trigger: "Denial — no es cierto que…", en: "It's not certain that I go",    es: "no es cierto que vaya" },
    { trigger: "Denial — no es cierto que…", en: "It's not certain that we win",  es: "no es cierto que ganemos" },
    { trigger: "Denial — no es cierto que…", en: "It's not certain that they know",es:"no es cierto que sepan" },
  ],

  // ---- LEVEL 5: Emotions ----
  5: [
    { trigger: "Emotion — me alegra que…",     en: "I'm glad you came",              es: "me alegra que hayas venido" },
    { trigger: "Emotion — me alegra que…",     en: "I'm glad he passed",             es: "me alegra que haya aprobado" },
    { trigger: "Emotion — me alegra que…",     en: "I'm glad we won",                es: "me alegra que hayamos ganado" },
    { trigger: "Emotion — es una pena que…",   en: "It's a shame she can't come",    es: "es una pena que no pueda venir" },
    { trigger: "Emotion — es una pena que…",   en: "It's a shame you are leaving",   es: "es una pena que te vayas" },
    { trigger: "Emotion — es una pena que…",   en: "It's a shame they don't know",   es: "es una pena que no sepan" },
    { trigger: "Emotion — me sorprende que…",  en: "I'm surprised he is here",       es: "me sorprende que esté aquí" },
    { trigger: "Emotion — me sorprende que…",  en: "I'm surprised you passed",       es: "me sorprende que hayas aprobado" },
    { trigger: "Emotion — me sorprende que…",  en: "I'm surprised they agreed",      es: "me sorprende que hayan aceptado" },
    { trigger: "Emotion — temo que…",          en: "I fear he is wrong",             es: "temo que esté equivocado" },
    { trigger: "Emotion — temo que…",          en: "I fear she won't come",          es: "temo que no venga" },
    { trigger: "Emotion — temo que…",          en: "I fear it is too late",          es: "temo que sea demasiado tarde" },
    { trigger: "Emotion — me molesta que…",    en: "It bothers me that he lies",     es: "me molesta que mienta" },
    { trigger: "Emotion — me molesta que…",    en: "It bothers me that she shouts",  es: "me molesta que grite" },
    { trigger: "Emotion — me molesta que…",    en: "It bothers me that they are late",es:"me molesta que lleguen tarde" },
  ],

  // ---- LEVEL 6: Impersonal expressions ----
  6: [
    { trigger: "Impersonal — es importante que…",  en: "It's important that you study",    es: "es importante que estudies" },
    { trigger: "Impersonal — es importante que…",  en: "It's important that he listens",   es: "es importante que escuche" },
    { trigger: "Impersonal — es importante que…",  en: "It's important that we try",       es: "es importante que intentemos" },
    { trigger: "Impersonal — es necesario que…",   en: "It's necessary that you come",     es: "es necesario que vengas" },
    { trigger: "Impersonal — es necesario que…",   en: "It's necessary that she rests",    es: "es necesario que descanse" },
    { trigger: "Impersonal — es necesario que…",   en: "It's necessary that they pay",     es: "es necesario que paguen" },
    { trigger: "Impersonal — es posible que…",     en: "It's possible that he comes",      es: "es posible que venga" },
    { trigger: "Impersonal — es posible que…",     en: "It's possible that we are wrong",  es: "es posible que estemos equivocados" },
    { trigger: "Impersonal — es posible que…",     en: "It's possible that they know",     es: "es posible que sepan" },
    { trigger: "Impersonal — es bueno que…",       en: "It's good that you are here",      es: "es bueno que estés aquí" },
    { trigger: "Impersonal — es bueno que…",       en: "It's good that she eats well",     es: "es bueno que coma bien" },
    { trigger: "Impersonal — es bueno que…",       en: "It's good that we practise",       es: "es bueno que practiquemos" },
    { trigger: "Impersonal — es malo que…",        en: "It's bad that he smokes",          es: "es malo que fume" },
    { trigger: "Impersonal — es malo que…",        en: "It's bad that they argue",         es: "es malo que discutan" },
    { trigger: "Impersonal — es mejor que…",       en: "It's better that you rest",        es: "es mejor que descanses" },
  ],

  // ---- LEVEL 7: Conjunctions that always take subjunctive ----
  7: [
    { trigger: "Conjunction — para que…",    en: "I explain it so that you understand",  es: "lo explico para que entiendas" },
    { trigger: "Conjunction — para que…",    en: "She calls so that he comes",           es: "llama para que venga" },
    { trigger: "Conjunction — para que…",    en: "We study so that we pass",             es: "estudiamos para que aprobemos" },
    { trigger: "Conjunction — antes de que…",en: "before you leave",                     es: "antes de que te vayas" },
    { trigger: "Conjunction — antes de que…",en: "before he arrives",                    es: "antes de que llegue" },
    { trigger: "Conjunction — antes de que…",en: "before they find out",                 es: "antes de que se enteren" },
    { trigger: "Conjunction — sin que…",     en: "without him knowing",                  es: "sin que lo sepa" },
    { trigger: "Conjunction — sin que…",     en: "without her seeing it",                es: "sin que lo vea" },
    { trigger: "Conjunction — sin que…",     en: "without them saying anything",         es: "sin que digan nada" },
    { trigger: "Conjunction — a menos que…", en: "unless you study",                     es: "a menos que estudies" },
    { trigger: "Conjunction — a menos que…", en: "unless he helps",                      es: "a menos que ayude" },
    { trigger: "Conjunction — con tal de que…",en:"provided that you come",              es: "con tal de que vengas" },
    { trigger: "Conjunction — en caso de que…",en:"in case it rains",                    es: "en caso de que llueva" },
    { trigger: "Conjunction — aunque…",      en: "even if he is tired",                  es: "aunque esté cansado" },
    { trigger: "Conjunction — aunque…",      en: "even if it is difficult",              es: "aunque sea difícil" },
  ],

  // ---- LEVEL 8: Imperfect subjunctive ----
  8: [
    { trigger: "Imperfect subjunctive",  en: "that I spoke",              es: "que hablara" },
    { trigger: "Imperfect subjunctive",  en: "that you spoke",            es: "que hablaras" },
    { trigger: "Imperfect subjunctive",  en: "that he spoke",             es: "que hablara" },
    { trigger: "Imperfect subjunctive",  en: "that we spoke",             es: "que habláramos" },
    { trigger: "Imperfect subjunctive",  en: "that they spoke",           es: "que hablaran" },
    { trigger: "Imperfect subjunctive",  en: "that I had (tener)",        es: "que tuviera" },
    { trigger: "Imperfect subjunctive",  en: "that you had",              es: "que tuvieras" },
    { trigger: "Imperfect subjunctive",  en: "that he had",               es: "que tuviera" },
    { trigger: "Imperfect subjunctive",  en: "that we had",               es: "que tuviéramos" },
    { trigger: "Imperfect subjunctive",  en: "that they had",             es: "que tuvieran" },
    { trigger: "Imperfect subjunctive",  en: "that I were (ser)",         es: "que fuera" },
    { trigger: "Imperfect subjunctive",  en: "that you were",             es: "que fueras" },
    { trigger: "Imperfect subjunctive",  en: "that he were",              es: "que fuera" },
    { trigger: "Imperfect subjunctive",  en: "that we were",              es: "que fuéramos" },
    { trigger: "Imperfect subjunctive",  en: "that they were",            es: "que fueran" },
  ],

  // ---- LEVEL 9: If-clauses (si + imperfect subjunctive) ----
  9: [
    { trigger: "If-clause — si…",  en: "If I had money, I would buy it",          es: "si tuviera dinero, lo compraría" },
    { trigger: "If-clause — si…",  en: "If she studied, she would pass",           es: "si estudiara, aprobaría" },
    { trigger: "If-clause — si…",  en: "If we could, we would go",                 es: "si pudiéramos, iríamos" },
    { trigger: "If-clause — si…",  en: "If he were here, he would help",           es: "si estuviera aquí, ayudaría" },
    { trigger: "If-clause — si…",  en: "If they knew, they would tell us",         es: "si supieran, nos lo dirían" },
    { trigger: "If-clause — si…",  en: "If I were you, I would go",                es: "si fuera tú, iría" },
    { trigger: "If-clause — si…",  en: "If she had time, she would call",          es: "si tuviera tiempo, llamaría" },
    { trigger: "If-clause — si…",  en: "If he worked harder, he would succeed",    es: "si trabajara más, tendría éxito" },
    { trigger: "If-clause — si…",  en: "If we tried, we could do it",              es: "si lo intentáramos, podríamos hacerlo" },
    { trigger: "If-clause — si…",  en: "If it rained, we would stay",              es: "si lloviera, nos quedaríamos" },
    { trigger: "If-clause — si…",  en: "If I spoke Spanish, I would live there",   es: "si hablara español, viviría allí" },
    { trigger: "If-clause — si…",  en: "If you came, I would be happy",            es: "si vinieras, estaría feliz" },
    { trigger: "If-clause — si…",  en: "If she could, she would help",             es: "si pudiera, ayudaría" },
    { trigger: "If-clause — si…",  en: "If they were quiet, we could think",       es: "si estuvieran callados, podríamos pensar" },
    { trigger: "If-clause — si…",  en: "If I knew the answer, I would say it",     es: "si supiera la respuesta, la diría" },
  ],

  // ---- LEVEL 10: When/time conjunctions (cuando + subjunctive in future) ----
  10: [
    { trigger: "Time clause — cuando…",        en: "when you arrive, call me",               es: "cuando llegues, llámame" },
    { trigger: "Time clause — cuando…",        en: "when he finishes, we will eat",          es: "cuando termine, comeremos" },
    { trigger: "Time clause — cuando…",        en: "when she comes back, tell her",          es: "cuando vuelva, díselo" },
    { trigger: "Time clause — cuando…",        en: "when they are ready, we will leave",     es: "cuando estén listos, nos iremos" },
    { trigger: "Time clause — cuando…",        en: "when I have money, I will travel",       es: "cuando tenga dinero, viajaré" },
    { trigger: "Time clause — en cuanto…",     en: "as soon as you know, tell me",           es: "en cuanto sepas, dímelo" },
    { trigger: "Time clause — en cuanto…",     en: "as soon as he arrives, we start",        es: "en cuanto llegue, empezamos" },
    { trigger: "Time clause — en cuanto…",     en: "as soon as she leaves, I will call",     es: "en cuanto se vaya, llamaré" },
    { trigger: "Time clause — hasta que…",     en: "until you understand",                   es: "hasta que entiendas" },
    { trigger: "Time clause — hasta que…",     en: "until he is better",                     es: "hasta que esté mejor" },
    { trigger: "Time clause — hasta que…",     en: "until they come back",                   es: "hasta que vuelvan" },
    { trigger: "Time clause — después de que…",en: "after you finish",                        es: "después de que termines" },
    { trigger: "Time clause — después de que…",en: "after he eats",                           es: "después de que coma" },
    { trigger: "Time clause — después de que…",en: "after she arrives",                       es: "después de que llegue" },
    { trigger: "Time clause — después de que…",en: "after they decide",                       es: "después de que decidan" },
  ],
};

// ---- LEVELS 11–19 and 20: build from pool of all items above ----

// Gather all items into one big pool
const ALL_ITEMS = Object.values(LEVEL_DATA).flat();

// Levels 11–19: 15 random from full pool each time (assigned at render)
for (let i = 11; i <= 19; i++) {
  LEVEL_DATA[i] = null; // null = draw randomly from ALL_ITEMS at game start
}
// Level 20: same — full mix
LEVEL_DATA[20] = null;

// =============================================
// LEVEL LABELS (shown on buttons)
// =============================================
const LEVEL_LABELS = {
  1:  "Level 1 — Regular verbs",
  2:  "Level 2 — Irregular verbs",
  3:  "Level 3 — Wishes & desires",
  4:  "Level 4 — Doubt & denial",
  5:  "Level 5 — Emotions",
  6:  "Level 6 — Impersonal phrases",
  7:  "Level 7 — Conjunctions",
  8:  "Level 8 — Imperfect subjunctive",
  9:  "Level 9 — If-clauses",
  10: "Level 10 — Time clauses",
  11: "Level 11 — Mixed",
  12: "Level 12 — Mixed",
  13: "Level 13 — Mixed",
  14: "Level 14 — Mixed",
  15: "Level 15 — Mixed",
  16: "Level 16 — Mixed",
  17: "Level 17 — Mixed",
  18: "Level 18 — Mixed",
  19: "Level 19 — Mixed",
  20: "Level 20 — FULL MIX 🔥",
};

// =============================================
// STATE
// =============================================
let currentLevel   = 1;
let unlockedLevels = 1;
let gameVerbs      = [];
let startTime, timerInterval;

const levelList          = document.getElementById("level-list");
const gameContainer      = document.getElementById("game");
const questionsContainer = document.getElementById("questions");
const resultsContainer   = document.getElementById("results");

// =============================================
// RENDER LEVELS
// =============================================
renderLevels();

function renderLevels() {
  levelList.style.display      = "flex";
  gameContainer.style.display  = "none";
  levelList.innerHTML          = "";

  for (let i = 1; i <= 20; i++) {
    const button     = document.createElement("button");
    const bestTimeKey = `bestTime_Subjunctive_Level${i}`;
    const bestTime   = localStorage.getItem(bestTimeKey);
    const locked     = i > unlockedLevels;

    button.textContent = locked
      ? `${LEVEL_LABELS[i]} 🔒`
      : `${LEVEL_LABELS[i]}${bestTime ? `  ·  Best: ${bestTime}s` : ""}`;

    button.disabled = locked;

    button.addEventListener("click", () => startGame(i));
    levelList.appendChild(button);
  }
}

// =============================================
// START GAME
// =============================================
function startGame(level) {
  currentLevel = level;

  // Pick 10 questions
  let pool;
  if (LEVEL_DATA[level]) {
    pool = shuffleArray([...LEVEL_DATA[level]]);
  } else {
    pool = shuffleArray([...ALL_ITEMS]);
  }
  gameVerbs = pool.slice(0, 10);

  levelList.style.display      = "none";
  gameContainer.style.display  = "block";
  questionsContainer.innerHTML = "";
  resultsContainer.innerHTML   = "";

  gameVerbs.forEach(item => {
    const div = document.createElement("div");
    div.className = "question-block";
    div.innerHTML = `
      <span class="trigger-label">${item.trigger}</span>
      <strong>${item.en}</strong>
      <input type="text" data-answer="${item.es}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="type in Spanish…">
    `;
    questionsContainer.appendChild(div);
  });

  // Enter key moves to next input / submits on last
  const inputs = questionsContainer.querySelectorAll("input");
  inputs.forEach((input, idx) => {
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        if (idx < inputs.length - 1) inputs[idx + 1].focus();
        else document.getElementById("submit").click();
      }
    });
  });

  if (inputs[0]) inputs[0].focus();
  startTimer();
}

// =============================================
// SHUFFLE
// =============================================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// =============================================
// TIMER
// =============================================
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").textContent = `Time: ${elapsed}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// =============================================
// CHECK ANSWERS
// =============================================
document.getElementById("submit").addEventListener("click", () => {
  stopTimer();
  const elapsed = Math.floor((Date.now() - startTime) / 1000);

  let penalty = 0;
  let correct  = 0;

  // Accent-lenient normaliser
  const normalize = s =>
    s.trim().toLowerCase()
     .normalize("NFD")
     .replace(/[\u0300-\u036f]/g, "");

  document.querySelectorAll("#questions input").forEach(input => {
    if (normalize(input.value) === normalize(input.dataset.answer)) {
      correct++;
      input.style.border = "2px solid green";
    } else {
      penalty += 30;
      input.style.border = "2px solid red";
    }
  });

  const totalTime = elapsed + penalty;

  resultsContainer.innerHTML = `
    <h3>Game Over!</h3>
    <p>Correct: ${correct}/10</p>
    <p>Time: ${elapsed}s + Penalty: ${penalty}s = <strong>${totalTime}s</strong></p>
    <h4>Feedback:</h4>
  `;

  document.querySelectorAll("#questions input").forEach(input => {
    const correct_ans = input.dataset.answer;
    const user_ans    = input.value.trim();
    if (normalize(user_ans) !== normalize(correct_ans)) {
      const feedback = document.createElement("p");
      feedback.innerHTML = `
        <strong>${input.closest(".question-block").querySelector("strong").textContent}</strong>
        → Correct: <span style="color:green">${correct_ans}</span>
        | Yours: <span style="color:red">${user_ans || "(blank)"}</span>
      `;
      resultsContainer.appendChild(feedback);
    }
  });

  // Save best time
  const bestTimeKey  = `bestTime_Subjunctive_Level${currentLevel}`;
  const savedBest    = localStorage.getItem(bestTimeKey);
  if (!savedBest || totalTime < parseInt(savedBest)) {
    localStorage.setItem(bestTimeKey, totalTime);
  }

  // Unlock next level?
  if (totalTime <= levelUnlockTime(currentLevel)) {
    if (unlockedLevels < currentLevel + 1 && currentLevel < 20) {
      unlockedLevels = currentLevel + 1;
      const unlockMsg = document.createElement("p");
      unlockMsg.style.color = "blue";
      unlockMsg.innerHTML   = `<strong>${LEVEL_LABELS[currentLevel + 1]} Unlocked!</strong>`;
      resultsContainer.appendChild(unlockMsg);
    }
  }

  // Perfect game
  if (correct === 10) {
    const celebration       = document.createElement("div");
    celebration.className   = "perfect-celebration";
    celebration.textContent = "🎉 PERFECT GAME! 🎉";
    resultsContainer.prepend(celebration);
    setTimeout(() => celebration.remove(), 5000);
  }

  // Try Again
  const tryAgainButton     = document.createElement("button");
  tryAgainButton.textContent = "Try Again";
  tryAgainButton.className  = "try-again";
  tryAgainButton.onclick    = () => startGame(currentLevel);
  resultsContainer.appendChild(tryAgainButton);

  // Back to Levels
  const backButton     = document.createElement("button");
  backButton.textContent = "Back to Levels";
  backButton.id        = "back-button";
  backButton.onclick   = () => renderLevels();
  resultsContainer.appendChild(backButton);
});

// =============================================
// UNLOCK TIME THRESHOLDS
// Level 1 → must finish in 200s, then +10s harder each level
// =============================================
function levelUnlockTime(level) {
  return 200 + (level - 1) * 10;
}
