function validateForm() {
  const form = document.querySelector('.validate-form');
  const inputName = form.querySelector('[name="name"]');
  const inputGender = form.querySelector('[gender="gender"]');
  const inputs = Array.from(form.querySelectorAll('.form-control'));

  form.addEventListener('validate', async function (event) {
    event.preventDefault();
    for (let i = 0; i < inputs.length; i = i + 1) {
      if (inputs[i].value === '') {
        inputs[i].classList.add('no-valid');
        return;
      }
      const regexp = /^([A-Za-z])/;
      if (inputs[i] === inputName) {
        if (!regexp.test(inputs[i])) {
          inputs[i].classList.add('no-valid');
          return;
        }
      }
      if (inputs[i] === inputGender) {
        if (inputGender.value !== 'male' && inputGender.value !== 'female') {
          inputs[i].classList.add('no-valid');
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
