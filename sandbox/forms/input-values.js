function buttonClick() {
  const width = document.querySelector('[name="gridWidth"]').value; /*const width = document.forms['cardForm'].elements['gridWidth'].value;*/
  const height = document.querySelector('[name="gridHeight"]').value; /*const height = document.forms['cardForm'].elements['gridHeight'].value;*/
  const result = document.querySelector('#result'); /*const result = document.querySelector('#result');*/

  result.innerText = width * height;
  alert('Button clicked');
}