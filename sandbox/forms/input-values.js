function buttonClick() {
  const width = document.forms['cardForm'].elements['gridWidth'];
  const height = document.forms['cardForm'].elements['gridHeight'];
  console.log(width);
  console.log(height);

  const inputWidth = document.querySelector('.form-control[name=gridWidth]');
  const inputHeight = document.querySelector('.form-control[name=gridHeight]');
  const resWidget = document.getElementById('result');

  let widthValue = inputWidth.value;
  let heightValue = inputHeight.value;

  let res = widthValue * heightValue;
  resWidget.innerHTML = res;

  alert('Button clicked');
}

window.addEventListener('load', buttonClick);