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
