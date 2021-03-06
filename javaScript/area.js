const inputSide = document.querySelectorAll('.input-side');
const calculateBtn = document.querySelector('#btn-calculate-area');
const message = document.querySelector('.message');
const messageDiv = document.querySelector('.div-message');

calculateBtn.addEventListener('click', () => {
    messageDiv.style.display = "block";

    var triHeight = inputSide[0].value;
    var triBase = inputSide[1].value;
    if (triHeight && triBase) {
       if (triHeight > 0 && triBase > 0) {
            const triangleArea = calculateArea(Number(triHeight), Number(triBase));

            showMessage("The area of this triangle is " +triangleArea+ " square units");
        } else {
            showMessage('Height or base of triangle cannot be 0 or negative.')
        }
    } else {
        showMessage("Enter values in both fields to continue");
    }

});

function calculateArea (base, height) {
    const area = ((base * height) / 2).toFixed(2);
    return area;
}

function showMessage (text) {
    message.innerText = text;
}


