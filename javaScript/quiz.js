const quizForm = document.querySelector('#form-quiz');
const submitButton = document.querySelector('#button-submit');
const scoreMessage = document.querySelector('.message');

const quizAnswers = ["80º", "30", "Equilateral", "Isosceles", "Scalene", "Equilateral", "Hypotenuse", "45°", "Acute", "Obtuse"];

submitButton.addEventListener('click', () => {
    scoreMessage.innerText = "Your score is " +calculateScore()+ "/10";
});

function calculateScore () {
    let score = 0;
    let index = 0;

    const formAnsweres = new FormData(quizForm);

    for (let value of formAnsweres.values()) {
        if (value === quizAnswers[index]) {
            score++;
        } 
        index++;
    }

    return score;
} 


