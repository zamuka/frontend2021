const elementStorage = {};

function main() {
  console.log('Hello');
  document.body.style.background = 'gray';

  const width = document.body.clientWidth;

  console.log(`Now I am red and ${width}px wide.`);

  const mainContainer = document.createElement('main');
  mainContainer.className = 'container';

  document.body.appendChild(mainContainer);

  mainContainer.id = 'container';

  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  div2.id = 'div2';
  mainContainer.prepend(div1, div2, 'text');

  const span = document.createElement('span');
  mainContainer.insertBefore(span, div2);

  span.innerHTML = '<button class="btn btn-danger">HTML</button>';

  span.firstChild.addEventListener('click', () => { span.innerHTML = ''; });

  const btn = document.createElement('button');

  btn.className = 'btn btn-primary';
  btn.innerText = 'Button';

  function btnClick() {
    div2.remove();

    elementStorage.div = div2;
  }

  btn.addEventListener('click', btnClick);

  span.appendChild(btn);
}

window.addEventListener('load', main);
