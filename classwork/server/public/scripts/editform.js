// /**
//  *
//  * @param {Event} event
//  */
// const handleFormSubmit = async (event) => {
//   event.preventDefault();

//   const id = window.location.pathname.split('/').pop();

//   const form = event.target;

//   const query = `name=${form.name.value}&gender=${form.gender.value}`;

//   const res = await fetch(`/api/update/user/${id}?${query}`);
//   const response = await res.json();
//   console.log(response);
// };

// document.forms[0].addEventListener('submit', handleFormSubmit);

class FormValidation {
  constructor(node) {
    this.node = node;
  }

  // eslint-disable-next-line class-methods-use-this
  preventSubmit(event) {
    event.preventDefault();
  }

  blockFormSubmit() {
    this.node.addEventListener(
      'submit',
      this.preventSubmit,
    );
  }

  allowFormSubmit() {
    this.node.removeEventListener(
      'submit',
      this.preventSubmit,
    );
  }

  isEmptyField() {
    this.node.addEventListener('input', (event) => {
      if (event.target.value === '') {
        event.target.classList.add('is-invalid');
        this.blockFormSubmit();
        return;
      }

      event.target.classList.remove('is-invalid');
      this.allowFormSubmit();
    });
  }
}

function onStartUp() {
  const form = new FormValidation(document.querySelector('#edit-user-info'));

  form.isEmptyField();
}

window.addEventListener('DOMContentLoaded', onStartUp);
