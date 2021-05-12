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
    title: 'Status',
    field: 'isActive',
  },
];

function redrawUsers(event) {
  const users = event.detail;
  //console.log(users.forEach(el => console.log(el.isActive)))

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

function handleFiltration(event) {
  const status = event.target.value;
  userService.filter(status);
}

window.addEventListener('load', startUp);
const tbody = document.querySelector('tbody');
tbody.addEventListener('click', handleTableClick);


const toggler = document.createElement('div');
toggler.className = 'input-group';
toggler.innerHTML = '<div class="input-group-prepend"><label class="input-group-text" for= "inputGroupSelect01">Status</label ></div ><select class="custom-select" id="inputGroupSelect01"><option value="all">All</option><option value="active">Active</option><option value="inactive">Inactive</option></select>'
toggler.addEventListener('change', handleFiltration);

document.body.prepend(toggler)
