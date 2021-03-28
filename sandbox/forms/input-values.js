window.addEventListener('DOMContentLoaded', DOMContentLoaded);
let inputWidth;
let inputHeight;
let result;
let isDocumentLoaded;

function DOMContentLoaded(){
  inputWidth = document.querySelector('#inputWidth');
  inputHeight = document.forms.cardForm.elements.gridHeight;
  result = document.querySelector('#result');
  isDocumentLoaded = true;
}

function buttonClick() {
  if(isDocumentLoaded) {
    result.innerHTML = inputWidth.value * inputHeight.value;
    alert('Button clicked');
  }
}