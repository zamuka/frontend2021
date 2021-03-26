function buttonClick() {
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