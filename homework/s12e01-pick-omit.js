/**
 * Реализуйте следующие функции
 * omit - возвращает shallow copy (мелкую копию) объекта,
 * но без указанных свойств, например:
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * omit(object, ['a', 'c']);
 * // вернет => { 'b': '2' }
 *
 * Оригинальный объект мы, конечно, оставляем без изменений.
 *
 * @param {object} input - an input object
 * @param {string[]} props - properties to omit
 * @return {object}
 */


function omit(input, props) {
  const result = {};
  for (const key of Object.keys(input)) {
    if (props.includes(key)) {
      continue
    }
    result[key] = input[key];
  }
  return result;
}

const object = { a: 1, b: '2', c: 3 };

// { 'b': '2' }
//console.log(omit(object, ['a', 'c']));

/**
 * Реализуйте функцию pick, которая принимая объект, возвращает новый,
 * который содержит только указанные свойства
 * например:
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pick(object, ['a', 'c']);
 * // вернет => { 'a': 1, 'c': 3 }
 *
 * Оригинальный объект мы не меняем и стараемся всегда так делать.
 *
 * @param {object} input - an input object
 * @param {string[]} props - properties to pick from the input object
 * @return {object}
 */

function pick(input, props) {
  const result = {};
  for (const key of Object.keys(input)) {
    if (props.includes(key)) {
      result[key] = input[key];
    }
  }
  return result;
}

// { 'a': 1, 'c': 3 }
console.log(pick(object, ['a', 'c']));