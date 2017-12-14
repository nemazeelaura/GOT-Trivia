
// var trivia = {
// 	question: 'first question',
//   	answerOne: 'answer 1',
//   	answerTwo: 'answer 2',
//   	answerThree: 'answer 3',
// };
// console.log(trivia);


// getting div quiz to put questions in
var putQuestionOnPage = document.getElementById('quiz');
var resultsDiv = document.getElementById('results');
// resultsDiv.innerText = trivia.question;

 // creating first question

// array to hold the questions
var allQuestions = [];

// question and answer constructor
function Trivia(questionParam, answerOneParam, answerTwoParam, answerThreeParam, answerCorrectParam, isCorrectParam, isWrongParam) {
  	this.question = questionParam;
	this.answerOne = answerOneParam;
	this.answerTwo = answerTwoParam;
	this.answerThree = answerThreeParam;
   this.blankSpace = blankAnswerParam;
   this.answerCorrect = answerCorrectParam;
   this.isCorrect = isCorrectParam;
   this.isWrong = isWrongParam;
	
	this.firstQuestion = function () {
	console.log('look at me!');	
};
}
// creating first five questions and answers
var firstQuestion = new Trivia('first question', 'answer 1', 'answer 2', 'answer 3', 'correct answer', 'you are correct!', 'wrong, bend the knee'); 

var secondQuestion = new Trivia('third question', 'second answer 1', 'second answer 2', 'second answer 3', 'correct answer', 'you are correct!', 'wrong, bend the knee');

var thirdQuestion = new Trivia('third question', 'third answer 1', 'third answer 2', 'third answer 3', 'correct answer', 'you are correct!', 'wrong, bend the knee');

var fourthQuestion = new Trivia('fourth question', 'fourth answer 1', 'fourth answer 2', 'fourth answer 3', 'correct answer', 'you are correct!', 'wrong, bend the knee');

var fifthQuestion = new Trivia('fifth question', 'fifth answer 1', 'fifth answer 2', 'fifth answer 3', 'correct answer', 'you are correct!', 'wrong, bend the knee');    

// putting the questions in the array
allQuestions.push(firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion);



// function checkAnswer() {
//    if (playerAnswer == correctAnswer)
// }


// creating div to hold question/answers and putting questions/answers inside 
function getQuestion() {
   for (var i = 0; i < allQuestions.length; i++) {
   	  
   	  var triviaDiv = document.createElement('div');
   	  triviaDiv.innerText = allQuestions[i].question;
   	  putQuestionOnPage.appendChild(triviaDiv);

	     var answerOneDiv = document.createElement('div');
        answerOneDiv.addEventListener('click', function(){
         console.log('im a click');

        // checkAnswer(); 

        });
   	  answerOneDiv.innerText = allQuestions[i].answerOne;
   	  putQuestionOnPage.appendChild(answerOneDiv);

        var answerTwoDiv = document.createElement('div');
        answerTwoDiv.innerText = allQuestions[i].answerTwo;
        putQuestionOnPage.appendChild(answerTwoDiv);

        var answerThreeDiv = document.createElement('div');
        answerThreeDiv.innerText = allQuestions[i].answerThree;
        putQuestionOnPage.appendChild(answerThreeDiv);
   }
}     

   getQuestion();



      
     

   //      putQuestionOnPage.innerText = allQuestions[i].question;
     // console.log(allQuestions[i]);
