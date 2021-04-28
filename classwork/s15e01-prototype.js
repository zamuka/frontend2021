// 1. [[Prototype]] - не используется в коде
// 2. obj.__proto__ - ссылка на объект-прототип - писать так плохо
// 3. Object.getPrototypeOf(obj) (set тоже есть) - более современный способ получить прототип

// 4. ConstructorFunction.prototype - каждая функция в JS, созданная с помощью ключевого
// слова function (не стрелочная) получает свойство prototype.
// 4.1. в это свойство ПРИ СОЗДАНИИ функции записывается новый пустой объект.
// 4.2. Этот объект будет записан как прототип во все объекты, созданные с
// помощью этой функции
// 4.3. также, в этот объект в свойство constructor записывается ссылка на
// саму функцию конструктор, на всякий случай.
// sampleFunction.prototype.constructor === sampleFunction

const Chicken = function Chicken() {

};

// Object.setPrototypeOf(chicken, animal);

const chicken = new Chicken();

// Можно создать новый пустой объект с заданным прототипом
const obj = Object.create({ hello: () => console.log('hello') });
