const questions = [
    {
        question: "1.Care este rezistenta echivalenta din circuit?(R1=100, R2=500, R3=1k)",
        image: "rechiv.jpg",
        options: ["0.013", "1600", "31250", "Niciuna"],
        answer: "1600"
    },
    {
        question: "2.Intensitatea campului electric are ca symbol:",
        options: ["E", "H", "H-Vector", "E-Vector"],
        answer: "E-Vector"
    },
    {
        question: "3.Impedanta are ca unitate de masura:",
        options: ["A", "H", "V", "Ohm"],
        answer: "Ohm"
    },
    {
        question: "4.Parametru de legatura dintre campul electric E si inductia electrica D este:",
        options: ["Rezistivitatea", "Permitivitatea", "Permeabilitatea", "Conductivitatea"],
        answer: "Permitivitatea"
    },
    {
        question: "5.In cazul problemelor din electrostatic unde avem vid si simetrie folosim teorema lui:",
        options: ["Thevenin", "Gauss", "Amper", "Coulomb"],
        answer: "Gauss"
    },
    {
        question: "6.In circuitele electrice conditia de rezonanta la circuite RLC serie este:",
        options: ["F=0", "B=0", "D=0", "X=0"],
        answer: "X=0"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    // Adaugă imaginea pentru întrebare
    if (currentQuestionIndex === 0 && currentQuestion.image) {
    const imageElement = document.createElement('img');
    imageElement.src = currentQuestion.image;
    
    imageElement.style.width = "400px"; // Modifică lățimea imaginii
    imageElement.style.height = "auto";
    questionElement.appendChild(imageElement);
    }

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(option) {
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
}

loadQuestion();

let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function randomValues() {
    anime({
      targets: '.square, .circle, .triangle',
      translateX: function() {
        return anime.random(-500, 500);
      },
          translateY: function() {
        return anime.random(-300, 300);
      },
          rotate: function() {
              return anime.random(0, 360);
          },
          scale: function() {
              return anime.random(.2, 2);
          },
      duration: 3000,
          easing: 'easeInOutQuad',
      complete: randomValues,
      });
  }
  
  randomValues();
