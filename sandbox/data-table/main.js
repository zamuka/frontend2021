import { userService } from './user-service.js';

let users = [];

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
const tbody = document.querySelector('tbody');
const filterForm = document.querySelector('form');

function saveUsersGlobally(data) {
  users = [...data];
}

function filterUsers(data) {
  const inputValues = {};
  const inputs = Array.from(filterForm.children);

  inputs.forEach((input) => {
    inputValues[input.name] = input.value;
  });

  let filterResult = data;

  if (inputValues.symbols) {
    filterResult = filterResult.filter(({ name }) => {
      const sybols = inputValues.symbols.toLowerCase();
      return name.toLowerCase().includes(sybols);
    });
  }

  if (inputValues.status) {
    filterResult = filterResult.filter(({ isActive }) => {
      return String(isActive) === inputValues.status;
    });
  }

  if (inputValues.gender) {
    filterResult = filterResult.filter(({ gender }) => {
      return gender === inputValues.gender;
    });
  }

  return filterResult;
}

function redrawUsers(data) {
  const headerRow = document.querySelector('thead > tr');
  const headerRowContent = columns.map(({ title }) => `<th>${title}</th>`).join('');
  headerRow.innerHTML = headerRowContent;

  const userToRow = (user) => columns.map(({ field }) => `<td>${user[field]}</td>`).join('\n');

  tbody.innerHTML = data.map((user) => `<tr data-id="${user._id}">${userToRow(user)}</tr>`).join('\n');
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

function startUp() {
  userService.addEventListener('change', (event) => {
    saveUsersGlobally(event.detail);
    redrawUsers(users);
  });

  userService.load('http://www.json-generator.com/api/json/get/ceyrBcxPOq');

  tbody.addEventListener('click', handleTableClick);

  filterForm.addEventListener('input', () => {
    redrawUsers(filterUsers(users));
  });
}

window.addEventListener('load', startUp);
