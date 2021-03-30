// eslint-disable-next-line no-unused-vars
function buttonClick() {
<<<<<<< HEAD
  const inputWidthValue = document.querySelector('[name="gridWidth"]').value;
  const inputHeightValue = document.querySelector('[name="gridHeight"]').value;
  const resultElement = document.querySelector('#result');
  resultElement.innerText = inputWidthValue * inputHeightValue;
  alert('Button clicked');
}

// // Наверное можно было все одной строкой прописать, но первый вариант более понятный.
function buttonClick() {
  document.querySelector('#result').innerText = document.querySelector('[name="gridWidth"]').value * document.querySelector('[name="gridHeight"]').value;
  alert('Button clicked');
}
=======
  /** @type {HTMLInputElement} */
  const widthElement = document.querySelector('[name="gridWidth"]');
  /** @type {HTMLInputElement} */
  const heightElement = document.querySelector('[name="gridWidth"]');

  const width = Number(widthElement.value);
  const height = Number(heightElement.value);

  const calculate = width + height;

  document.getElementById('result').innerText = String(calculate);
}
>>>>>>> main
