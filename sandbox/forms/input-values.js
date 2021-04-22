// eslint-disable-next-line no-unused-vars
function buttonClick() {
	// ваш код тут

	const result = document.querySelector('#result');
	const width = document.querySelectorAll('input')[0].value;

	// const width = document.forms['cardForm'].elements['gridWidth'].value;
	const height = document.querySelectorAll('input')[1].value;
	// const height = document.forms['cardForm'].elements['gridHeight'].value;

	result.innerText = width * height;

	// alert('Button clicked');
}
