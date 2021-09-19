const quizForm = document.querySelector('#form-quiz');
const submitButton = document.querySelector('#button-submit');
const retultMessage = document.querySelectorAll(".result");
const message = document.querySelector('.message');
const messageDiv = document.querySelector(".div-message");

const quizAnswers = ["80º", "30", "Equilateral", "Isosceles", "Scalene", "Equilateral", "Hypotenuse", "45°", "Acute", "Obtuse"];

submitButton.addEventListener('click', () => {
    messageDiv.style.display = "block";
    calculateScore();
});

function calculateScore () {
    let score = 0;
    let index = 0;

    var formAnsweres = new FormData(quizForm);

    for (let value of formAnsweres.values()) {
        if (value === quizAnswers[index]) {
            retultMessage[index].innerText = "Correct answer!!"
            retultMessage[index].style.backgroundColor = "#78d8db"
            score++;
        } else {
            retultMessage[index].innerText = "Wrong answer.\nCorrect answer is: " +quizAnswers[index];
            retultMessage[index].style.backgroundColor = "#d9af39"

        }
        index++;    
    }

    if (index === 10) {
        message.innerText = "Your score is: " +score+ "/10";
    } else {
        message.innerText = "Select an option for each question to continue";
    }

} 