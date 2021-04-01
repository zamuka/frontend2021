// Вариант №2
function buttonClick() {
  const width = document.cardForm.gridWidth.value;
  const height = document.cardForm.gridHeight.value;

  const multiplication = Number(width) * Number(height);

  document.getElementById('result').innerText = multiplication;
}
