//Вариант №1
function buttonClick() {
  const width = document.querySelector('[name="gridWidth"]').value;
  const height = document.querySelector('[name="gridHeight"]').value;

  const multiplication = Number(width) * Number(height);

  document.getElementById('result').innerText = multiplication;
}

