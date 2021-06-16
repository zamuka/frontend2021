function isFormValid() {
  const form = document.querySelector('form');
  const nameInput = form.querySelector('input[name=name]');
  const genderInput = form.querySelector('input[name=gender]');
  const nameInvalidFeedback = document.querySelector('#invalid-feedback-name');
  const inputs = form.querySelectorAll('.form-control');
  const valid_pattern = /^([a-zA-Z])/;

  function addInvalidClass(element) {
    element.classList.add('is-invalid');
  }

  function addValidClass(element) {
    element.classList.add('is-valid');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    event.stopPropagation();

    for (let input of inputs) {
      const lenght = input.value.length;
      const valid_length = lenght > 3;
      if (!input.value || input.value === ' ') {
        addInvalidClass(input);
        nameInvalidFeedback.innerHTML = 'Please, enter your name.';
        return;
      } else if (!valid_length) {
        addInvalidClass(input);
        nameInvalidFeedback.innerHTML = 'Must be at least 4 characters long';
        return;
      } else if (!valid_pattern.test(input.value)) {
        addInvalidClass(input);
        nameInvalidFeedback.innerHTML = 'Some symbols are not allowed';
        return;
      } else {
        input.classList.remove('is-invalid');
        addValidClass(input);
      }
    }
    const search = `?name=${nameInput.value}&gender=${genderInput.value}`;
    await fetch(`${window.location.pathname}${search}`);
    window.location.pathname = '/users.html';
  });
}

window.addEventListener('load', isFormValid);
