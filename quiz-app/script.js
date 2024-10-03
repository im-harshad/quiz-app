const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Who is the President of the United States?",
        a: "Barack Obama",
        b: "Donald Trump",
        c: "Joe Biden",
        d: "George Bush",
        correct: "c",
    },
    {
        question: "What is 2 + 2?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b",
    },
    {
        question: "What is the color of the sky?",
        a: "Green",
        b: "Blue",
        c: "Red",
        d: "Yellow",
        correct: "b",
    }
];

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');
const scoreEl = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    progressBar.style.width = ((currentQuiz / quizData.length) * 100) + '%';
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            scoreEl.classList.remove('hidden');
            scoreEl.innerHTML = `You scored ${score}/${quizData.length}`;
            submitBtn.classList.add('hidden');
            restartBtn.classList.remove('hidden');
        }
    }
});

restartBtn.addEventListener('click', () => {
    currentQuiz = 0;
    score = 0;
    loadQuiz();
    scoreEl.classList.add('hidden');
    restartBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
});
