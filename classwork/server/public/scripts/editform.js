function validateForm() {
  const form = document.querySelector('.validate-form');
  const inputName = form.querySelector('.name');
  const inputGender = form.querySelector('.gender');
  const inputs = Array.from(form.querySelectorAll('.form-control'));

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const regexp = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

    for (let i = 0; i < inputs.length; i = i + 1) {
      if (inputs[i].value === '') {
        inputs[i].classList.add('no-valid');
        return;
      }
      if (inputs[i] === inputName) {
        if (!regexp.test(inputs[i])) {
          inputs[i].classList.add('no-valid');
          return;
        }
      }
      if (inputs[i] === inputGender) {
        if (inputGender.value !== 'male' && inputGender.value !== 'female') {
          inputGender.classList.add('no-valid');
          return;
        }
        if (inputGender.value === '') {
          inputGender.classList.add('no-valid');
          return;
        }
      }
      if (inputs[i].value) {
        inputs[i].classList.remove('no-valid');
      }
    }
    const search = `?name=${inputName.value}&gender=${inputGender.value}`;

    await fetch(`${window.location.pathname}${search}`);
    window.location.pathname = '/users.html';
  });
}
window.addEventListener('load', validateForm);
