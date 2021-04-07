/**
 * Реализуйте функцию find, которая ищет элемент в массиве,
 * по какому-либо критерию.
 * Функция аналогична встроенному методу массива find, но
 * первым параметром пусть функция принимает массив с данными, а
 * вторым параметром - функцию-валидатор.
 * Применяйте функцию-валидатор последовательно к элементам
 * массива, пока не найдете элемент для которого валидатор
 * вернет "правдивое" значение.
 *
 * Это что-то вроде фильтра, но возвращает find не массив, а
 * первый найденный подходящий элемент.
 * В случае если ничего не найдено - верните undefined (просто
 * return или вообще без)
 */

/**
 * @template ItemType
 * @param {ItemType[]} arr
 * @param {(item: ItemType) => boolean} validator
 * @returns ItemType
 */
function find(arr, validator) {
  for( const index of arr ) {
    const trueIndex = validator(index); 
    if ( trueIndex ){
      return index;
    }
  }
}

const numbers = [1, 4, 16, 10, 33, 20, 0];
const multipleOfTree = find(numbers, (num) => !(num % 3));

// 33
console.log('Первое кратное трем в массиве:', multipleOfTree);

const users = [
  { name: 'Adam', age: 20, id: '4598' },
  { name: 'Bill', age: 22, id: 'AE46' },
  { name: 'Carol', age: 32, id: 'CC10' },
  { name: 'Denis', age: 18, id: '3109' },
  { name: 'Eric', age: 40, id: '880A' },
];

const cc10 = find(users, (user) => user.id === 'CC10');

if (cc10) {
  // Carol
  console.log('Имя пользователя с id СС10:', cc10.name);
} else {
  console.log('Пользователя с id СС10 не найден');
}
