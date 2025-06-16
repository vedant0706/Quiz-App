const questions = [
  {
    question: "Which is the Largest Animal in the World?",
    answers: [
      { text: "Shark", correct:false},
      { text: "Blue Whale", correct:true},
      { text: "Elephant", correct:false},
      { text: "Giraffe", correct:false},
    ]
  },

  {
    question: "Which is the Smallest Country in the World?",
    answers: [
      { text: "Vatican City", correct:true},
      { text: "Bhutan", correct:false},
      { text: "Nepal", correct:false},
      { text: "Sri Lanka", correct:false},
    ]
  },

  {
    question: "Which is the Largest Desert in the World?",
    answers: [
      { text: "Gobi", correct:false},
      { text: "Kalahari", correct:false},
      { text: "Sahara", correct:false},
      { text: "Antarctica", correct:true},
    ]
  },
  {
    question: "Which is the Smallest Continent in the World?",
    answers: [
      { text: "Asia", correct:false},
      { text: "Australia", correct:true},
      { text: "Arctic", correct:false},
      { text: "Africa", correct:false},
    ]
  },
  {
    question: "Who wrote India's National Anthem?",
    answers: [
       { text: "Lal Bahadur Shastri", correct:false},
      { text: "Rabindranath Tagore", correct:true},
      { text: "Chetan Bhagat", correct:false},
      { text: "RK Narayan", correct:false},
    ]
  },
  {
    question: "Which city is known as the Pink City of India?",
    answers: [
       { text: "Banglore", correct:false},
      { text: "Maysure", correct:false},
      { text: "Kochi", correct:false},
      { text: "Jaipur", correct:true},
    ]
  },
  {
    question: "Which of the following is not a state of India?",
    answers: [
       { text: "Goa", correct:true},
      { text: "Kashmir", correct:false},
      { text: "Jharkhand", correct:false},
      { text: "Chattisgarh", correct:false},
    ]
  },
   {
    question: "Which country is the largest by land area?",
    answers: [
       { text: "Canada", correct:false},
      { text: "China", correct:false},
      { text: "Russia", correct:true},
      { text: "United States", correct:false},
    ]
  },
  {
    question: "Which Indian city hosts Indian movie industry?",
    answers: [
       { text: "Mumbai", correct:true},
      { text: "Goa", correct:false},
      { text: "Chennai", correct:false},
      { text: "Kolkata", correct:false},
    ]
  },
  {
    question: "Taj Mahal is Made up of?",
    answers: [
       { text: "Brick", correct:false},
      { text: "Marble", correct:true},
      { text: "Granite", correct:false},
      { text: "Sand Stone", correct:false},
    ]
  },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion(); 
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn"); 
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display ="none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if(isCorrect){
    selectedBtn.classList.add("correct");
    score ++;
   } else{
    selectedBtn.classList.add("incorrect");
   }

   Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct ==="true"){
      button.classList.add("correct");
    }
    button.disabled = true;
   });
   nextButton.style.display ="block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else{
    showScore();
  }
}
nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    } else{
      startQuiz();
    }
});

// Shuffle questions
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  questions.sort(() => Math.random() - 0.5); 
  showQuestion();
}

startQuiz();