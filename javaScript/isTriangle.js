const side = document.querySelectorAll('.input-side');
const checkButton = document.querySelector('#btn-check');
const message = document.querySelector('.message');
const divAmglesSum = document.querySelector('#sum-of-angles');
const spanSum = document.querySelector('#sum');

checkButton.addEventListener('click', () => {
    if (side[0].value && side[1].value && side[2].value) {
        checkTriangle(Number(side[0].value), Number(side[1].value), Number(side[2].value));
    } else {
        divAmglesSum.style.display = "none";
        showMessage('Enter values in all fields to continue.');
    }
});

function checkTriangle(angleA, angleB, angleC) {
    const anglesSum = angleA + angleB + angleC;

    if (angleA > 0 && angleB > 0 && angleC > 0) {
        if (anglesSum === 180) {
            divAmglesSum.style.display = 'block';
            spanSum.innerText = anglesSum + "º";
            showMessage("Yayy! These angles form a triangle.");
        } else {
            divAmglesSum.style.display = 'block';
            spanSum.innerText = anglesSum + "º";
            showMessage("Oops!! Triangle cannot be formed with these angles.");
        }
    } else {
        divAmglesSum.style.display = "none";
        showMessage("Angles cannot be 0 or negative.")
    }

}

function showMessage(text) {
    message.innerText = text;
}


