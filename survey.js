const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let interviewQs = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

let qs = [];
let answers = [];
let currentQuestionIndex = 0;

const askQuestion = function () {
  if (currentQuestionIndex === interviewQs.length) {
    rl.close();
    console.log("Survey Results:");
    for (let i = 0; i < interviewQs.length; i++) {
      console.log(`${qs[i]} : ${answers[i]}`);
    }
    return;
  }

  rl.question(interviewQs[currentQuestionIndex], (answer) => {
    qs.push(interviewQs[currentQuestionIndex]);
    answers.push(answer);
    currentQuestionIndex++;
    askQuestion();
  });
};

askQuestion();
