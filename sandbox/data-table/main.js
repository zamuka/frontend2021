import {userService} from './user-service.js';

const columns = [
    {
        title: '#',
        field: 'index',
    },
    {
        title: 'Name',
        field: 'name',
    },
    {
        title: 'Gender',
        field: 'gender',
    },
    {
        title: 'Money',
        field: 'balance',
    },
    {
        title: 'email',
        field: 'email',
    },
    {
        title: 'Is active',
        field: 'isActive',
    },
];

let checkboxChecked = false;
let notFilteredUsers;
let inputValue = '';

function redrawUsers(event) {
    if (event) {
        notFilteredUsers = event.detail;
    }
    debugger;
    let users = notFilteredUsers.filter(user => {
        debugger;
        if (inputValue === '' || inputValue === null) {
            return user.isActive === checkboxChecked;
        } else {
            console.log(inputValue);
            return user.isActive === checkboxChecked && user.email.includes(inputValue);
        }
    });
    const headerRow = document.querySelector('thead > tr');
    const headerRowContent = columns.map(({title}) => `<th>${title}</th>`).join('');
    headerRow.innerHTML = headerRowContent;

    const tbody = document.querySelector('tbody');

    const userToRow = (user) => columns.map(({field}) => `<td>${user[field]}</td>`).join('\n');
    tbody.innerHTML = users.map((user) => `<tr data-id="${user._id}">${userToRow(user)}</tr>`).join('\n');
}

function startUp() {
    userService.addEventListener('usersLoaded', redrawUsers);
    userService.load('http://www.json-generator.com/api/json/get/ceyrBcxPOq');
}

function handleTableClick(event) {
    const row = event.target.closest('tr');
    if (!row) {
        return;
    }

    const {id} = row.dataset;
    if (!id) {
        return;
    }

    userService.delete(id);
}

const filterByIsActiveField = function () {
    checkboxChecked = this.checked;
    redrawUsers();
}

function filterByEmail(el) {
    inputValue = el.data;
    console.log(inputValue);
    redrawUsers();
}

window.addEventListener('load', startUp);
const tbody = document.querySelector('tbody');
tbody.addEventListener('click', handleTableClick);
const checkboxIsActive = document.getElementById('checkboxIsActive');
const inputIsFilter = document.getElementById('inputIsFilter');
checkboxIsActive.addEventListener('click', filterByIsActiveField);
inputIsFilter.addEventListener('input', filterByEmail);