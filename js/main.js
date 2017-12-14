


// var trivia = {
// 	question: 'first question',
//   	answerOne: 'answer 1',
//   	answerTwo: 'answer 2',
//   	answerThree: 'answer 3',
// };
// console.log(trivia);

var putQuestionOnPage = document.getElementById('quiz');
var resultsDiv = document.getElementById('results');
// resultsDiv.innerText = trivia.question;

 // creating first question


var allQuestions = [];

function Trivia(questionParam, answerOneParam, answerTwoParam, answerThreeParam) {
  	this.question = questionParam;
	this.answerOne = answerOneParam;
	this.answerTwo = answerTwoParam;
	this.answerThree = answerThreeParam;
	
	this.firstQuestion = function () {
	console.log('look at me!');	
};
}
// creating first question 
var firstQuestion = new Trivia('first question', 'answer 1', 'answer 2', 'answer 3'); 

var secondQuestion = new Trivia('Second question', 'second answer 1', 'second answer 2', 'second answer 3'); 

allQuestions.push(firstQuestion, secondQuestion);

function getQuestion() {
   for (var i = 0; i < allQuestions.length; i++) {
   	  
   	  var triviaDiv = document.createElement('div');
   	  triviaDiv.innerText = allQuestions[i].question;
   	  putQuestionOnPage.appendChild(triviaDiv);

	  var answerOneDiv = document.createElement('div');
   	  answerOneDiv.innerText = allQuestions[i].answerOne;
   	  putQuestionOnPage.appendChild(answerOneDiv);


   // 	  putQuestionOnPage.innerText = allQuestions[i].question;
	  // console.log(allQuestions[i]);

   }
}

getQuestion();

