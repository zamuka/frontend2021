console.log('HELLO');

function validationInputForm() {
    const form = document.querySelector('form');
    const nameField = document.querySelector('.name');
    const genderField = document.querySelector('.gender');
    const inputsArray = Array.from(form.querySelectorAll('.form-control'));

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const validSymbols = /^([a-zA-Z0-9])/;
        const emptyField = inputsArray.find((input) => !input.value);

        if (emptyField) {
            emptyField.classList.add('is-invalid');
            emptyField.placeholder = 'Fill the field';
            return;
        };

        if (!validSymbols.test(nameField.value)) {
            nameField.classList.add('is-invalid');
            nameField.value = '';
            nameField.placeholder = 'Wrong name. Enter correct name';
            return;
        }

        if (genderField.value !== 'female' && genderField.value !== 'male') {
            genderField.classList.add('is-invalid');
            genderField.value = '';
            genderField.placeholder = 'Wrong gender. Enter gender: male or female';
            return;
        }
        
        const search = `?name=${nameField.value}&gender=${genderField.value}`;
        await fetch(`${window.location.pathname}${search}`);
        window.location.pathname = '/users.html';
    });
}

window.addEventListener('load', validationInputForm);
