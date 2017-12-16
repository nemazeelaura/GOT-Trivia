
// start game button

// variables to store questions on the page
var putQuestionOnPage = document.getElementById('quiz');
var resultsDiv = document.getElementById('results');            
var questionCounter = 0;
// array to hold the questions
var allQuestions = [];
var score = 0;

// question and answer constructor
function Trivia(questionParam, answerOneParam, answerTwoParam, answerThreeParam, answerCorrectParam, youWinParam, youLoseParam) {
   this.question = questionParam;
   this.answerOne = answerOneParam;
   this.answerTwo = answerTwoParam;
   this.answerThree = answerThreeParam;
   this.answerCorrect = answerCorrectParam;
   this.youWin = youWinParam;
   this.youLose = youLoseParam;
  
  this.firstQuestion = function () {
  console.log('look at me!'); 
};
}
// creating first five questions and answers
var firstQuestion = new Trivia(' What is the name of Jon Snows dire wolf?', '1. Grey Wind', '2. Ghost', '3. Nymeria', '2. Ghost', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis'); 

var secondQuestion = new Trivia('I always hated crossbows. Take too long to load!', '1. Rodrik Cassel ', '2. Robb Stark ', '3. Yoren', '3. Yoren', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');

var thirdQuestion = new Trivia('In season 2, who does Tyrion tell Varys he is planning on marrying to Princess Myrcella?', '1. Robin Arryn of the Vale', '2. Theon Greyjoy', '3. Martells of Dorne', '2. Theon Greyjoy', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');

var fourthQuestion = new Trivia('Which religion does the Brotherhood Without Banners preach?', '1. Rhllor, the Lord of Light', '2. Faith of the Seven', '3. The Old Gods', '1. Rhllor, the Lord of Light', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');

var fifthQuestion = new Trivia('It was Jon Arryns sudden death that brought Ned Stark to Kings Landing, where he sought the truth behind Lord Arryns demise. Who actually killed Roberts first "Hand of the King?"', '1. Petyr Baelish', '2. Lysa Arryn', '3. Varys', '2. Lysa Arryn', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');    

// putting the questions in the array
allQuestions.push(firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion);

// var start = getElementById('btn');
// start.addEventListener("click", getQuestion(), false);

// creating div to hold question/answers and putting questions/answers inside 
var  getQuestion = function(trivia) {
      putQuestionOnPage.innerHTML = '';
  

        var triviaDiv = document.createElement('div');
        triviaDiv.setAttribute('id', 'trivia1'); 
        triviaDiv.innerText = trivia.question;
        putQuestionOnPage.appendChild(triviaDiv);

        var answerOneDiv = document.createElement('div');
        answerOneDiv.setAttribute('id', 'answer1');           // console.log(answerOneDiv);
        answerOneDiv.innerText = trivia.answerOne;   
        putQuestionOnPage.appendChild(answerOneDiv);
        answerOneDiv.addEventListener('click', function(){
        answerOneDiv.style.backgroundColor = '#f4f1e7'; 
        answerOneDiv.style.color = 'white'; 
            // console.log(this.innerHTML);
            console.log(trivia.answerCorrect);
         checkAnswer(this.innerHTML, trivia.answerCorrect);

        });
                                                                  
        var answerTwoDiv = document.createElement('div');
        answerTwoDiv.setAttribute('id', 'answer2'); 
        answerTwoDiv.innerText = trivia.answerTwo;
        putQuestionOnPage.appendChild(answerTwoDiv);
        answerTwoDiv.addEventListener('click', function(){
        answerTwoDiv.style.backgroundColor = '#f4f1e7'; 
        answerTwoDiv.style.color = 'white';   
            // console.log(this.innerHTML);
            console.log(trivia.answerCorrect);
         checkAnswer(this.innerHTML, trivia.answerCorrect);
        });

        var answerThreeDiv = document.createElement('div');
        answerThreeDiv.setAttribute("id", "answer3"); 
        answerThreeDiv.innerText = trivia.answerThree;
        putQuestionOnPage.appendChild(answerThreeDiv);
        answerThreeDiv.addEventListener('click', function(){
        answerThreeDiv.style.backgroundColor = '#f4f1e7';
        answerThreeDiv.style.color = 'white';  

            console.log(this.innerHTML);
         checkAnswer(this.innerHTML, trivia.answerCorrect);
        });

       

        questionCounter++;
   // }
};


var checkAnswer = function(a, b){
//logic for checking answer

   if(a === b){
      alert('correct');
      score++;
      if (questionCounter <= 4) { 
      getQuestion(allQuestions[questionCounter]); 
      } else {
        getResults();
      }
     
   } else {
      alert('wrong');
          if (questionCounter <= 4){ 
      getQuestion(allQuestions[questionCounter]); 
      }   else {
        getResults();
      }
   }
};

getQuestion(allQuestions[questionCounter]);

// getting results of total correct answers
// displays final score win/lose scenario

var getResults = function(){

       putQuestionOnPage.innerHTML = 'FINAL SCORE' + ' You Had' + ' ' + score + ' Correct';
       putQuestionOnPage.style.backgroundColor = '#f4f1e7';
       var results = document.createElement('div');

   if (score >= 5) { 

      resultsDiv.style.backgroundColor = '#f4f1e7';  
      results.innerText = 'You will sit on the Iron Throne';
      console.log(results);
        
  } else {
      
      resultsDiv.style.backgroundColor = '#f4f1e7';  
      results.innerText = 'You know nothing, Turncloak';
      console.log(resultsDiv);

      }   
      
  resultsDiv.appendChild(results);
};









/*******************unused code******************************/

// var trivia = {
//    question: 'first question',
//    answerOne: 'answer 1',
//    answerTwo: 'answer 2',
//    answerThree: 'answer 3',
// };
// console.log(trivia);

// resultsDiv.innerText = trivia.question;

 // var answerFourDiv = document.createElement('div');
        // answerFourDiv.setAttribute("id", "answer4"); 
        // answerFourDiv.innerText = trivia.answerCorrect;
        // putQuestionOnPage.appendChild(answerFourDiv);
        // answerFourDiv.addEventListener('click', function(){

        //  console.log(this.innerHTML, checkAnswer);
        //  checkAnswer(this.innerHTML, trivia.answerCorrect);
        // });
         // for (var i = 0; i < allQuestions.length; i++) {
        
        // var buttonClicked = document.getElementById('btn').addEventListener('click', function() {
        //    document.getElementById('quiz')
        // }
