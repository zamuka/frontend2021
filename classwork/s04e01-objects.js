// словарь
const colors = {
  red: 'красный',
  blue: 'синий',
  green: 'зеленый',
  black: undefined,
};

// копия ссылки ведет на тот же объект
const colorsRefCopy = colors;
colorsCopy.black = 'черный';

console.log(colors);

// объект равен только самому себе (даже если в ссылка записана в разных переменных)
if (colorsRefCopy === colors) {
  console.log('Same!');
}

// Создается мелкая (shallow) копия объекта
const colorsCopy = {
  ...colors,
};
// другой способ
const anotherCopy = Object.assign({}, colors);

console.log(colorsCopy);

// false - ссылки ведут на разные объекты
colorsCopy === colors;

// даже пустой объект преобразовывается в true
if (colors) {
  for (let key in colors) {
    const value = colors[key];
    if (value === 'зеленый') {
      console.log(key);
    }
  }
}

// in operator
console.log(colors.black);
console.log('black' in colors);

const person = {
  // имя свойства может быть любой строкой
  name: 'Sergey',
  lastName: 'Zamoshnikov',
  age: 40,
  // если используются недопустимые для переменных символы - поля пишутся в кавычках
  '+': 'plus',
  "property with spaces": true,
  // вычисляемые свойства
  ['сложное имя' || variableName]: 'значение'
};

// меняем, добавляем и удаляем свойства
person.name = 'Vasya';
person.isAdmin = true;

delete person['occupation'];
