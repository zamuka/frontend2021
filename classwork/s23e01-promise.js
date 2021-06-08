function init() {
  console.log('start');

  const ORDER_DELAY_MS = 3000;
  const p = new Promise((resolve) => {
    console.log('Creating a promise');
    setTimeout(() => {
      resolve({
        burger: '🍔',
        fries: '🍟',
        drink: '🥤',
      });
    }, ORDER_DELAY_MS);
  });

  const burgerPromise = p.then((mcMenu) => mcMenu.burger);
  const friesPromise = p.then((mcMenu) => mcMenu.fries);
  const colaPromise = p.then(({ drink }) => drink);

  friesPromise.then((res) => console.log(res));

  // несмотря на то, что прамис уже зарезолвлен, то что передано в then
  // выполнится уже после завершения всей задачи
  Promise.resolve('Resolve').then(() => console.log('in promise'));

  console.log('Finish');
}

init();
