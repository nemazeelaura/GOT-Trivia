
// variables to store questions on the page
var putQuestionOnPage = document.getElementById('quiz');
var resultsDiv = document.getElementById('results'); 
var graphicDiv = document.getElementById('graphic');           
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
var firstQuestion = new Trivia(' What is the name of Jon Snow\'s dire wolf?', '1. Grey Wind', '2. Ghost', '3. Nymeria', '2. Ghost', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis'); 

var secondQuestion = new Trivia('I always hated crossbows. Take too long to load!', '1. Rodrik Cassel ', '2. Robb Stark ', '3. Yoren', '3. Yoren', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');

var thirdQuestion = new Trivia('In season 2, who does Tyrion tell Varys he is planning on marrying to Princess Myrcella?', '1. Robin Arryn of the Vale', '2. Theon Greyjoy', '3. Martells of Dorne', '2. Theon Greyjoy', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');

var fourthQuestion = new Trivia('Which religion does the Brotherhood Without Banners preach?', '1. Rhllor, the Lord of Light', '2. Faith of the Seven', '3. The Old Gods', '1. Rhllor, the Lord of Light', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');

var fifthQuestion = new Trivia('It was Jon Arryns sudden death that brought Ned Stark to Kings Landing, where he sought the truth behind Lord Arryn\'s demise. Who actually killed Roberts first "Hand of the King?"', '1. Petyr Baelish', '2. Lysa Arryn', '3. Varys', '2. Lysa Arryn', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');    

var sixQ = new Trivia('Which is the main color of House Tarly\'s sigil?', '1. Green', '2. Yellow', '3. Purple', '1. Green', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');    

var sevenQ = new Trivia('The Water Gardens belong to which constituency of Westeros?', '1. The Riverlands', '2. Iron Islands', '3. Dorne', '3. Dorne', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');  

var eightQ = new Trivia('In the first episode, King Robert Baratheon says "In my dreams, I kill him every night." To whom is the King referring and why?', '1. John Arryn', '2. Stannis Baratheon', '3. Rhaegar Targaryen', '3. Rhaegar Targaryen', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');  

var nineQ = new Trivia('At the end of his training, what must an Unsullied kill to prove he has no mercy or weakness?', '1. Slave babies', '2. Wildling child', '3. Harpy', '1. Slave babies', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis'); 

var tenQ = new Trivia('said, Say it. Say her name. Say it!', '1. Joffrey Baratheon', '2. Oberyn Martell', '3. Rorge', '2. Oberyn Martell', 'You win, Sit on the Iron Throne', 'You are dead, When you play the Games of Thrones you win or you die, Valar Morghulis');    

// putting the questions in the array.. added more questions shortened var names
allQuestions.push(firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixQ, sevenQ, eightQ, nineQ, tenQ);


// linking start button to game page... having trouble with this


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
        
};


var checkAnswer = function(a, b){
//logic for checking answer

   if(a === b){
      alert('correct');
      score++;
      if (questionCounter <= 9) { 
      getQuestion(allQuestions[questionCounter]); 
      } else {
        getResults();
      }
     
   } else {
      alert('wrong');
          if (questionCounter <= 9){ 
      getQuestion(allQuestions[questionCounter]); 
      }   else {
        getResults();
      }
   }
};

getQuestion(allQuestions[questionCounter]);

// getting results of total correct answers
// displays final score win/lose scenario plus actual score. I put in empty div tag
var getResults = function(){

      var sound = new Audio('audio/winner.mp3');
      var sound1 = new Audio('audio/loser.mp3');
      putQuestionOnPage.innerHTML = 'FINAL SCORE' + ' You Had' + ' ' + score + ' Correct';
      putQuestionOnPage.style.backgroundColor = '#f4f1e7';  

   if (score >= 10) { 

      resultsDiv.style.backgroundColor = '#f4f1e7';  
      results.innerText = 'You will sit on the Iron Throne';
       // plays audio on winning
      sound.play();
        
  } else {
 
      resultsDiv.style.backgroundColor = '#f4f1e7';  
      results.innerText = 'You know nothing, Turncloak';
      // plays audio on losing
      sound1.play();

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

         // var dany = getElementById('gif');
      //  console.log(dany);
      // var gimg = createElement('gimg');
      //  console.log(gimg);
      // img.src = jsnow.gif;
      // resultsDiv.appendChild(Dany);
      // var john = getElementById('gif');
      //  console.log(John);
      // var jimg = createElement('jimg');
      //  console.log(jimg);
      // img.src = jsnow.gif;
      // resultsDiv.appendChild(Dany);


        // var imgDiv = document.createElement('img');
        // imgDiv.setAttribute('id', 'gif1'); 
        // imgDiv.innerHTML = ();
        // // grapicDiv.appendChild(triviaDiv);
        // console.log(gifimg);
