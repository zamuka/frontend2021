// eslint-disable-next-line no-unused-vars
function buttonClick() {
 
  const width = document.querySelector('[name="gridWidth"]').value;
  const height = document.querySelector('[name="gridHeight"]').value;
  const result = document.querySelector('#result');

  result.innerText = width * height;

  alert('Button clicked');
}



//Вариант: document.forms.[form name].elements.[name]

/* function buttonClick() {
  
  const width = document.forms['cardForm'].elements['gridWidth'].value;
  const height = document.forms['cardForm'].elements['gridHeight'].value;
  const result = document.querySelector('#result');
  

  result.innerText = width * height;

  alert('Button clicked');
} */
  /** @type {HTMLInputElement} */
  const widthElement = document.querySelector('[name="gridWidth"]');
  /** @type {HTMLInputElement} */
  const heightElement = document.querySelector('[name="gridWidth"]');

  const width = Number(widthElement.value);
  const height = Number(heightElement.value);

  const calculate = width + height;

  document.getElementById('result').innerText = String(calculate);

