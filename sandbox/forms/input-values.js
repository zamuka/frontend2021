<<<<<<< HEAD
<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', DOMContentLoaded);
let inputWidth;
let inputHeight;
let result;
let isDocumentLoaded;

function DOMContentLoaded(){
  inputWidth = document.querySelector('#inputWidth');
  inputHeight = document.forms.cardForm.elements.gridHeight;
  result = document.querySelector('#result');
  isDocumentLoaded = true;
}

function buttonClick() {
  if(isDocumentLoaded) {
    result.innerHTML = inputWidth.value * inputHeight.value;
    alert('Button clicked');
  }
}
=======
// eslint-disable-next-line no-unused-vars
function buttonClick() {
=======
// eslint-disable-next-line no-unused-vars
function buttonClick() {
>>>>>>> main
  /** @type {HTMLInputElement} */
  const widthElement = document.querySelector('[name="gridWidth"]');
  /** @type {HTMLInputElement} */
  const heightElement = document.querySelector('[name="gridWidth"]');

  const width = Number(widthElement.value);
  const height = Number(heightElement.value);

  const calculate = width + height;

  document.getElementById('result').innerText = String(calculate);
}
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
