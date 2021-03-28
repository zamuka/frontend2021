function buttonClick() {
  let selectWidth = document.forms.cardForm.elements.gridWidth.value;
  let selectHeight = document.forms.cardForm.elements.gridHeight.value;
  
  let result = document.querySelector('#result');
  result.innerText = selectWidth * selectHeight;
  alert('Button clicked');
}

