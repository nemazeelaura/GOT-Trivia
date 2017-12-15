
// var trivia = {
// 	question: 'first question',
//   	answerOne: 'answer 1',
//   	answerTwo: 'answer 2',
//   	answerThree: 'answer 3',
// };
// console.log(trivia);

// resultsDiv.innerText = trivia.question;

// variables to store questions on the page
var putQuestionOnPage = document.getElementById('quiz');
var resultsDiv = document.getElementById('results');            
var questionCounter = 0;
// array to hold the questions
var allQuestions = [];

// question and answer constructor
function Trivia(questionParam, answerOneParam, answerTwoParam, answerThreeParam, answerCorrectParam, isCorrectParam, isWrongParam) {
  	this.question = questionParam;
	this.answerOne = answerOneParam;
	this.answerTwo = answerTwoParam;
	this.answerThree = answerThreeParam;
   this.answerCorrect = answerCorrectParam;
   this.isCorrect = isCorrectParam;
   this.isWrong = isWrongParam;
	
	this.firstQuestion = function () {
	console.log('look at me!');	
};
}
// creating first five questions and answers
var firstQuestion = new Trivia(' What is the name of Jons dire wolf?', 'Grey Wind', 'Ghost', 'Nymeria', 'Ghost', 'you are correct!', 'wrong, bend the knee'); 

var secondQuestion = new Trivia('I always hated crossbows. Take too long to load!', 'Rodrik Cassel ', 'Robb Stark ', 'Yoren', 'Yoren', 'you are correct!', 'wrong, bend the knee');

var thirdQuestion = new Trivia('In season 2, who does Tyrion tell Varys he is planning on marrying to Princess Myrcella?', 'Robin Arryn of the Vale', 'Theon Greyjoy', 'Martells of Dorne', 'Theon Greyjoy', 'you are correct!', 'wrong, bend the knee');

var fourthQuestion = new Trivia('Which religion does the Brotherhood Without Banners preach?', 'Rhllor, the Lord of Light', 'Faith of the Seven', 'The Old Gods', 'Rhllor, the Lord of Light', 'you are correct!', 'wrong, bend the knee');

var fifthQuestion = new Trivia('It was Jon Arryns sudden death that brought Ned Stark to Kings Landing, where he sought the truth behind Lord Arryns demise. Who actually killed Roberts first "Hand of the King?"', 'Petyr Baelish', 'Lysa Arryn ', 'Varys', 'Lysa Arryn', 'you are correct!', 'wrong, bend the knee');    

// putting the questions in the array
allQuestions.push(firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion);




// creating div to hold question/answers and putting questions/answers inside 
var  getQuestion = function(trivia) {
      putQuestionOnPage.innerHTML = '';
  
   // for (var i = 0; i < allQuestions.length; i++) {
        
        // var buttonClicked = document.getElementById('btn').addEventListener('click', function() {
        //    document.getElementById('quiz')
        // }

        var triviaDiv = document.createElement('div');
        triviaDiv.innerText = trivia.question;
        putQuestionOnPage.appendChild(triviaDiv);

        var answerOneDiv = document.createElement('div');
        answerOneDiv.setAttribute("id", "answer1");           // console.log(answerOneDiv);
        answerOneDiv.innerText = trivia.answerOne;   
        putQuestionOnPage.appendChild(answerOneDiv);
        answerOneDiv.addEventListener('click', function(){
         
            console.log(this.innerHTML);
            console.log(trivia.answerCorrect);
         checkAnswer(this.innerHTML, trivia.answerCorrect);

        });
                                                                  
        var answerTwoDiv = document.createElement('div');
        answerTwoDiv.setAttribute("id", "answer2"); 
        answerTwoDiv.innerText = trivia.answerTwo;
        putQuestionOnPage.appendChild(answerTwoDiv);
        answerTwoDiv.addEventListener('click', function(){
         
            console.log(this.innerHTML);
            console.log(trivia.answerCorrect);
         checkAnswer(this.innerHTML, trivia.answerCorrect);
        });

        var answerThreeDiv = document.createElement('div');
        answerThreeDiv.setAttribute("id", "answer3"); 
        answerThreeDiv.innerText = trivia.answerThree;
        putQuestionOnPage.appendChild(answerThreeDiv);
        answerThreeDiv.addEventListener('click', function(){
         
            console.log(this.innerHTML);
         checkAnswer(this.innerHTML, trivia.answerCorrect);
        });


        // var answerFourDiv = document.createElement('div');
        // answerFourDiv.setAttribute("id", "answer4"); 
        // answerFourDiv.innerText = trivia.answerCorrect;
        // putQuestionOnPage.appendChild(answerFourDiv);
        // answerFourDiv.addEventListener('click', function(){

        //  console.log(this.innerHTML, checkAnswer);
        //  checkAnswer(this.innerHTML, trivia.answerCorrect);
        // });
        questionCounter++;


   // }
};
var checkAnswer = function(a, b){
//logic for checking answer

   if(a === b){
      alert('correct');
      getQuestion(allQuestions[questionCounter]);
   } else {
      alert('wrong');
      getQuestion(allQuestions[questionCounter]);

   }
};

getQuestion(allQuestions[questionCounter]);





     // putQuestionOnPage.innerText = allQuestions[i].question;
     // console.log(allQuestions[i]);
