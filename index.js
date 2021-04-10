var readLineSync = require("readline-sync");

console.log("Welcome to Know Me Quiz");

var score = 0;

var userName = readLineSync.question("What is your name?");

console.log(`Hey ${userName}, Give your best:)`);

function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log("Your answer is correct");
    score++;
  } else {
    console.log("Your answer is wrong");
  }

  console.log("And Your current score is:" + score);
  console.log("------------------------");
}

var questions = [
  {
    question: "Where do I live?",
    answer: "Bhiwandi",
  },
  {
    question: "What is my birth month?",
    answer: "december",
  },
  {
    question:
      "Among these 4 which is my favourite anime?\na)Death Note\nb)Naruto\nc)Attack On Titan\nd)Dr. Stone\n",
    answer: "c",
  },
  {
    question: "My favourite sport?\na)Football\nb)Cricket\nc)Chess\n",
    answer: "b",
  },
  {
    question:
      "My favourite programming language?\na)Java\nb)Python\nc)Javascript\nd)Still figuring out\n",
    answer: "d",
  },
];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

if (score == 0) {
  console.log("Oops!Looks like you dont know me well:|");
} else if (score <= 3) {
  console.log("Umm... Not Bad, Not Bad");
} else {
  console.log("Tu hi mera bhai hai:)");
}
console.log("Your final score is:" + score);
