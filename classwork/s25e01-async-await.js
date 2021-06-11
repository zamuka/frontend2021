const delay = (ms) => new Promise((res) => {
  setTimeout(() => res(), ms);
});


async function fn() {
  console.log('Before');
  const x = await delay(2000);

  return 10;
}

function fn() {
  console.log('Before');
  return delay(2000)
    .then(() => 10);
}

function fnp() {
  return Promise.resolve(10);
}

const result = fn();

result.then((x) => console.log(x));

// console.log(result);
