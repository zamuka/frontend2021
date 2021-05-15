import { userService } from './user-service.js';

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
    title: 'Active',
    field: 'isActive',
  },
];

let filteredUsers = [];

function redrawUsers(event) {
  const users = event.detail;

  const headerRow = document.querySelector('thead > tr');
  const headerRowContent = columns.map(({ title }) => `<th>${title}</th>`).join('');
  headerRow.innerHTML = headerRowContent;

  const tbody = document.querySelector('tbody');

  const userToRow = (user) => columns.map(({ field }) => `<td>${user[field]}</td>`).join('\n');

  tbody.innerHTML = users.map((user) => `<tr data-id="${user._id}">${userToRow(user)}</tr>`).join('\n');
}

function startUp() {
  userService.addEventListener('change', redrawUsers);
  userService.load('http://www.json-generator.com/api/json/get/ceyrBcxPOq');
}

function handleTableClick(event) {
  const row = event.target.closest('tr');
  if (!row) {
    return;
  }

  const { id } = row.dataset;
  if (!id) {
    return;
  }

  userService.delete(id);
}

function handleSelectClick() {
  const selectBox = document.querySelector('#selectActive');
  const selectedValue = selectBox.options[selectBox.selectedIndex].value;

  filteredUsers = userService.users.filter(({ isActive }) => {
    if(selectedValue === 'active') {
      return isActive;
    } else {
      return true;
    }
  })
  const event = new CustomEvent('change', { detail: filteredUsers });
  redrawUsers(event);
}

window.addEventListener('load', startUp);
const tbody = document.querySelector('tbody');
tbody.addEventListener('click', handleTableClick);

const selectBox = document.querySelector('#selectActive');
selectBox.addEventListener('click', handleSelectClick);
