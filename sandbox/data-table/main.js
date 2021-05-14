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
];

function redrawUsers(event) {
  let { users } = userService;

  const headerRow = document.querySelector('thead > tr');
  const headerRowContent = columns.map(({ title }) => `<th>${title}</th>`).join('');
  headerRow.innerHTML = headerRowContent;

  const tbody = document.querySelector('tbody');

  const checkbox = document.querySelector('#active-users');
  const textSearchInput = document.querySelector('#search');
  const hasRequest = users.some((user) => Object.values(user).includes(textSearchInput.value));

  switch (event.target) {
    case checkbox:
      if (checkbox.checked) {
        users = users.filter(({ isActive }) => isActive);
      }
      break;
    case textSearchInput:
      if (hasRequest) {
        users = users.filter((user) => Object.values(user).includes(textSearchInput.value));
      }
      break;
    default:
  }

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

window.addEventListener('load', startUp);
const tbody = document.querySelector('tbody');
tbody.addEventListener('click', handleTableClick);

const form = document.querySelector('.selection-form');
form.addEventListener('input', redrawUsers);
