// for

for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
}

// any of for header items can be omitted - even all of them
let j = 0;
for (;;) {
  console.log(j);
  j = j + 1;
  if (j >= 5) {
    break; // прерывает цикл
  }
}

// while loop only require a condition
//
let k = 5;
while (k < 5) {
  console.log('While ', k);
  k = k + 1;
}


// do..while loop body will be executed at least once
let l = 50;
do {
  l = l + 1;
  console.log('do while ', l);
} while (l < 5);


// for..in
// Iterates through object properties
const packageObj = {
  name: 'frontend2021',
  version: '1.0.0',
  main: 'index.js',
};

let keyName;

for (keyName in packageObj) {
  console.log(keyName);
  console.log(packageObj[keyName]);
}

// for..of
// Iterates through items of array-like entity
for (let char of 'A string') {
  console.log(char);
}

