const questions = [
    {
        question: "which is largest sea animal in the world?",
        answers: [
            {text:"shark" , correct:false},
            {text:"whale" , correct:true},
            {text:"tuna" , correct:false},
            {text:"goldFish" , correct:false},
        ]
    },
    {
        question: "which is largest land animal in the world?",
        answers: [
            {text:"goldFish" , correct:false},
            {text:"lion" , correct:false},
            {text:"dog" , correct:false},
            {text:"elephant" , correct:true},   
        ]
    },
    {
        question: "which is smallest animal in following?",
        answers: [
            {text:"cat" , correct:false},
            {text:"dog" , correct:false},
            {text:"rat" , correct:true},
            {text:"tiger" , correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-btn");
const nextButton = document.getElementById("nxt-btn");


let currentQestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQestionIndex=0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQestion = questions[currentQestionIndex];
    let questionNo = currentQestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQestion.question;
    currentQestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function resetState(){
    nextButton.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    if(currentQestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

function handleNextButton(){
    currentQestionIndex++;
    if(currentQestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML= "Play Again";
    nextButton.style.display = "block";
}

startQuiz();