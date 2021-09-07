const side = document.querySelectorAll('.input-side');
const checkButton = document.querySelector('#btn-check');
const message = document.querySelector('.message');
const divAmglesSum = document.querySelector('#sum-of-angles');
const spanSum = document.querySelector('#sum');

checkButton.addEventListener('click', () => {
    if (side[0].value && side[1].value && side[2].value) {
        checkTriangle(Number(side[0].value), Number(side[1].value), Number(side[2].value));
    } else {
        showMessage ('Enter values in all fields to continue.');
    }
});

function checkTriangle (angleA, angleB, angleC) {
    const anglesSum = angleA + angleB + angleC;

    divAmglesSum.style.display = 'block';
    spanSum.innerText = anglesSum+ "º"

    if (anglesSum === 180) {
        showMessage("Yayy! These angles form a triangle.");
    } else {
        showMessage("Oops!! Triangle cannot be formed with these angles.");
    }
}

function showMessage (text) {
    message.innerText = text;
}


