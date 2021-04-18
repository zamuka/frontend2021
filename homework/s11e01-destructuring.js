// Tренируемся использовать деструктуризацию

const vegetable = {
  name: 'onoins',
  color: 'white',
  shape: 'round',
};

const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`);

//  2.
const { shape } = vegetable;
console.log(`${name}s are usually ${shape}`);

/**
 * Декомпозиция работает не только на объектах, но и на массивах.
 * Только скобки нужно использовать другие
 */

const vegetables = [
  { name: 'cucumber', color: 'green' },
  vegetable, // это наш лук
  { name: 'pumpkin', color: 'orange' },
  { name: 'tomato', color: 'red', shape: 'round' },
];

/**
 * Объявляем новые константы cucumber и onion и записываем в них 0й и 1й
 * элементы массива vegetables
 */
const [cucumber, onion] = vegetables;

// выведется cucumber and onion
console.log(`${cucumber.name} and ${onion.name}`);

/**
 * Как вы заметили, можно брать не все элементы массива.
 * Можно даже пропускать некоторые элементы.
 * Например, возьмем третий элемент
 */

const [, , pumpkin] = vegetables;
// выведется pumpkins are usually orange
console.log(`${pumpkin.name}s are usually ${pumpkin.color}`);

/**
 * 3.
 * TODO:
 * Добавьте запятых в выражение ниже, чтобы отобразилось
 * tomatoes are usually red and round
 */
const [, , ,tomato] = vegetables;

console.log(`${tomato.name}es are usually ${tomato.color} and ${tomato.shape}`);

/**
 * Используя еще более замысловатые структуры можно легко разбивать массивы
 * на необходимые части.
 *
 * Пример ниже сохранит огурец в firstVegetable, а все остальные овощи (3шт)
 * в новый массив otherVegetables
 * rest элемент (...) должен идти последним.
 */

const [firstVegetable, ...otherVegetables] = vegetables;
// a cucuber and 3 other vegetables
console.log(`a ${firstVegetable.name} and ${otherVegetables.length} other vegetables`);

// На эту строку сильно не смотрите =). Без нее нам не дадут создать
// переменную name из-за конфликта со свойством window.name
export {};
