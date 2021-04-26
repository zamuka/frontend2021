
// homework task //
function myButtonClick() {
  const width = document.forms['cardForm'].elements['gridWidth'];
  const height = document.forms['cardForm'].elements['gridHeight'];
  console.log(width);
  console.log(height);

  const inputWidth = document.querySelector('.form-control[name=gridWidth]');
  const inputHeight = document.querySelector('.form-control[name=gridHeight]');
  const resWidget = document.getElementById('result');

  let widthValue = inputWidth.value;
  let heightValue = inputHeight.value;

  let res = widthValue * heightValue;
  resWidget.innerHTML = res;
}

window.addEventListener('load', myButtonClick);


// Example from classwork below //

// eslint-disable-next-line no-unused-vars
function buttonClick() {
  /** @type {HTMLInputElement} */
  const widthElement = document.querySelector('[name="gridWidth"]');
  /** @type {HTMLInputElement} */
  const heightElement = document.querySelector('[name="gridWidth"]');

  const width = Number(widthElement.value);
  const height = Number(heightElement.value);

  const calculate = width + height;

  document.getElementById('result').innerText = String(calculate);
}

window.addEventListener('load', buttonClick);