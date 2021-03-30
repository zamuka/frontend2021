let calculate = 1;

function buttonClick () {

  let inputs = document.querySelectorAll('input');

  for (let i =0; i<inputs.length; i++) {

    let inputValue = inputs[i].value;

    calculate = calculate*inputValue;

  }

  document.getElementById('result').innerText = calculate;

  calculate = 1;


}

//or

// function buttonClick () {

//   let inputGridWidth = document.forms.cardForm.elements.gridWidth.value;

//   let inputGridHeight = document.forms.cardForm.elements.gridHeight.value;

//   let calculate = inputGridWidth*inputGridHeight;

//   document.getElementById('result').innerText = calculate;
// }