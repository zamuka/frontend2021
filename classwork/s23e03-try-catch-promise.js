Promise.resolve(10)
  .finally((x) => console.log(x, 'finally'))
  .then(() => console.log('Here'))
  .then(() => console.log('Here'))
  .then(() => JSON.parse('{')) // error
  .then(() => console.log('Never executed'))
  .then(() => console.log('Never executed'))
  .then(() => console.log('Never executed'))
  .then(() => console.log('Never executed'))
  .then(() => console.log('Never executed'))
  .catch((e) => {
    console.log('caught an error');
    return 20;
  })
  .then((x) => console.log(x));

