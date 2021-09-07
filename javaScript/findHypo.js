const inputSide = document.querySelectorAll('.input-side');
const calculateBtn = document.querySelector('#btn-calculate-hypo');
const message = document.querySelector('.message');

calculateBtn.addEventListener('click', () => {
    if (inputSide[0].value && inputSide[1].value) {
        const hypo = calculateHypotenuse(Number(inputSide[0].value), Number(inputSide[1].value));
        showMessage("The hypotenuse for this triangle is " +hypo+ " units.")
    } else {
        showMessage ('Enter values in both feilds to continue.')
    }
});

function calculateHypotenuse (base, height) {
    const hypotenuse = Math.sqrt((base*base) + (height*height));
    return hypotenuse;
}

function showMessage (text) {
    message.innerText = text;
}

