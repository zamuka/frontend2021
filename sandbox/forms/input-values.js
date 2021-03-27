function buttonClick() {
  const result = document.querySelector('#result');
  const width = document.querySelector('[name = "gridWidth"]').value;
  const height = document.querySelector('[name = "gridHeight"]').value;
  result.innerText = width * height;
  alert('Button clicked');
}

// 2 вариант
function buttonClick() {
  const result = document.querySelector('#result');
  const width = document.forms['cardForm'].elements['gridWidth'].value;
  const height = document.forms['cardForm'].elements['gridHeight'].value;

  result.innerText = width * height;

  alert('Button clicked');
}
