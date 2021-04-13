/**
 * Напишем несколько функций для решения разнообразных несложных задач.
 *
 * Обратите внимание на особый формат коментариев - это JSDOC - формат для
 * документации. Он настолько распространен, что стал де-факто стандартом описания
 * кода и поддерживается большинством редакторов кода.
 * Зная типы переменных заранее, редактор сможет давать более
 * точные подсказки и предостеречь нас от некоторых ошибок.
 * Оцените подсказки свойств в первом задании.
 *
 * Можете иногда пробовать добавлять их в свои задания и видеть, как подсказки
 * редактора меняются в лучшую сторону.
 */

/**
 * 1. getPopulationDensity
 * Реализуйте функцию, которая принимает объект country c
 * со свойствами area и population и возвращает плотность населения
 * на квадратный километр
 *
 * @param {object} country
 * @param {number} country.area - площадь страны (квадратные км)
 * @param {number} country.population - население (чел)
 *
 * @returns {number} плотность населения на квадратный км
 */


function getPopulationDensity(country) {
  const populationDensity = country.population / country.area;
  return populationDensity;
}

const france = {
  area: 640_679,
  population: 67_067_000,
  capital: 'Paris',
}

// Плотность населения Франции ~104 чел / кв. км
console.log('Плотность населения Франции:', getPopulationDensity(france));


/**
 * 2. calcFreeFallTime
 * Функция высчитывает время свободного падения тела у поверхности Земли.
 * Сопротивлением воздуха можно пренебречь.
 * Используйте Math.sqrt и формулу из школьного курса физики.
 *
 * @param {number} height
 * @returns {number} free-fall time
 */
function calcFreeFallTime(height) {
  const g = 9.81;
  const freeFallTime = Math.sqrt( (height * 2) / g );
  return freeFallTime;
}

// Для высоты 100м должно вывести примерно 4.516сек
console.log(`Время свободного падения с высоты 100 метров: ${calcFreeFallTime(100)} сек`);


/**
 * 3. calcTriangleAreaFromEdges
 * Реализуйте функцию, которая находит площадь треугольника по
 * его трем сторонам
 * вам пригодится Math.sqrt и формула Герона
 *
 * @param {number} a - Side a
 * @param {number} b - Side b
 * @param {number} c - Side c
 *
 * @returns {number} triangle area
 */
function calcTriangleAreaFromEdges(a, b, c) {
  let p = (a + b + c) / 2;
  let triangleArea = Math.sqrt( p * (p - a) * (p - b) * (p - c));
  return triangleArea;
}

// для равностороннего треугольника со стороной 3 площадь ~3.897
console.log(calcTriangleAreaFromEdges(3, 3, 3));

// у треугольника со сторонами 3, 4, 5 площадь ровно 6
console.log(calcTriangleAreaFromEdges(3, 4, 5));
