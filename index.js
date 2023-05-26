var readlineSync = require("readline-sync");

var score = 0;
 
var userName = readlineSync.question("What's your name? ");

console.log("Welcome", userName);
console.log("------------")
console.log("Shankar conducting a quiz, To know how much do you know about him.");
console.log("------------")
console.log("Answer YES or NO");
console.log("------------")

// play function 
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log("right");
    score++
    console.log("score is", score);
    console.log("............")
  }else {
    console.log("wrong");
    console.log("score is", score);
    console.log("............")
  }
}

// array of objects

var question = [{
  question: "Shankar lucky number was 1 ",
  answer: "NO"
}, {
  question: "Shankar trying to learn spanish ",
  answer: "YES"
  }, {
  question: "Shankar likes art ",
  answer: "YES"
  },{
  question: "Shankar watches podcast daily ",
  answer: "YES"
  }, {
  question: "Shankar read books ",
  answer: "YES"
  }, {
  question: "Shankar exercises regularly ",
  answer: "YES"
  },{
  question: "Shankar was non-vegeterian ",
  answer: "NO"
  }, {
  question: "Shankar sleeps 7hours/day ",
  answer: "NO"
  }, {
  question: "Shankar likes black more than white ",
  answer: "NO"
  }];

// loop

for(var i = 0; i < question.length; i++){
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! you scored", score)
console.log("............")
console.log("............")
console.log("............")

if (score === 9){
  console.log("You know him well. Now you are going to level-2")
  console.log("------------")
  console.log("------------")
  console.log("------------")
  console.log("------------")
  console.log("------------")
  console.log("------------")
  console.log("------------")
  
} else {
  console.log("You know him. But not really well!")
}



var question = [{
  question: "Shankar proposed to a girl in 2018 ",
  answer: "NO"
} ];

for(var i = 0; i < question.length; i++){
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer);
}


console.log("Your score:: ", score)
console.log("------------")

if (score === 10){
  console.log("You know him really well. Shankar had message for you. ")
  console.log("------------")
}else{
  console.log("Ok. You know him, not completely ")
}


var question = [{
  question: "Click OPEN ",
  answer: "OPEN"
} ];

for(var i = 0; i < question.length; i++){
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer);
}

if(score === 11){
  console.log("Impressive, lots of HUGSSS ")
}else{
  console.log("Come Again from first ")
}
