const inputSide = document.querySelectorAll('.input-side');
const calculateBtn = document.querySelector('#btn-calculate-hypo');
const message = document.querySelector('.message');

calculateBtn.addEventListener('click', () => {
    var side1 = inputSide[0].value;
    var side2 = inputSide[1].value;
    if (side1 && side2) {
        if (side1 > 0 && side2 > 0) {
            const hypo = calculateHypotenuse(Number(side1), Number(side2));
            showMessage("The hypotenuse for this triangle is " + hypo + " units.")
        } else {
            showMessage('Sides of triangle cannot be 0 or negative.')
        }
    } else {
        showMessage('Enter values in both feilds to continue.')
    }
});

function calculateHypotenuse(base, height) {
    const hypotenuse = (Math.sqrt((base * base) + (height * height))).toFixed(2);
    return hypotenuse;
}

function showMessage(text) {
    message.innerText = text;
}

