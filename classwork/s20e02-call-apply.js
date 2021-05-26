
const person = {
  name: 'John',
  sayHello(a, b, c) {
    console.log(`Hello, my name is ${this.name}. Params: ${a} ${b} ${c}`);
  }
}

person.sayHello();

const hello = person.sayHello;


const params = [1, 2, 3];
hello.call({ name: 'Spy' }, 1, 2, 3);
hello.apply({ name: 'Spy' }, params);

const numbers = [1, 5, 100, 10];

console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers));

const billHello = hello.bind({ name: 'Bill' });

const bind = (fn, thisArg) => {
  return () => fn.call(thisArg);
}

const billHello2 = bind(hello, { name: 'Bill' });


billHello();
billHello2();


function multiply(a, b) {
  return a * b;
}

function tripple(b) {
  return multiply(3, b);
}

const tripple = multiply.bind(null, 3);
