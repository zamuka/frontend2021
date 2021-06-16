/**
 *
 * @param {Event} event
 */
const handleFormSubmit = async (event) => {
  event.preventDefault();

  const id = window.location.pathname.split('/').pop();

  const form = event.target;

  const query = `name=${form.name.value}&gender=${form.gender.value}`;

  const res = await fetch(`/api/update/user/${id}?${query}`);
  const response = await res.json();
  console.log(response);
};

document.forms[0].addEventListener('submit', handleFormSubmit);
