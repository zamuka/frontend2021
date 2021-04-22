const colorsObject = {
  red: 'красный',
  blue: 'синий',
  green: 'зеленый',
  black: undefined,
};

console.log(Object.keys(colorsObject));
console.log(Object.values(colorsObject));

const object1 = {
  name: 'Vasya',
  age: 20,
};

const object2 = {
  jobTitle: 'student',
};

// shallow merge objects
// Object.assign(object1, object2);

const objectCopy = Object.assign({}, object1, object2);

console.log(objectCopy);
