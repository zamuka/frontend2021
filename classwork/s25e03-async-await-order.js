const fetch = require('node-fetch');

async function fn() {
  console.log(2222);
  await 10; // rest of the function will be executed via microtasks
  console.log(4444);

  const res = await fetch('http://www.json-generator.com/api/json/get/cgefkjsVaq?indent=2');
  const data = await res.json();

  console.log(`Loaded ${data.length} users`);
}

console.log(1111);
fn();
console.log(3333);
