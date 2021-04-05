'use strict';

function printDouble(x) {
  console.log(x * 2);
}
/**
 * Так как функция это просто значение, то его можно сохранить не только в
 * обычную переменную, но и в свойство объекта.
 * Можно сделать это сразу при объявлении объекта
 */
const colors = {
  red: 'красный',
  blue: null,
  print: printDouble,
};

/**
 * или добавить функцию в существующий объект.
 */
colors.oneMorePrint = printDouble;

/**
 * можно и перезаписать сущуствующее свойство
 */
colors.blue = printDouble;

/** Вызывается точно также */
colors.print(10);

/**
 * Когда функция находится в объекте, то принято называть ее методом
 * этого объекта и не зря. Такая функция (метод) имеет доступ к объекту,
 * в котором находится через особую переменную this.
 * При объявлении функции с непривычки будет непонятно, откуда берется this.
 * Он берется от туда же, откуда берется arguments - итерпретатор подсовывает.
 */

function printThis() {
  console.log(this);
}

/**
 * Пока функция не в объекте при ее вызове в this будет или
 * глобальный объект (window) или undefined (читай про use strict)
 */
printThis(); // выведет undefined

/**
 * но стоит положить ее в объект и в this будет _неявно_ передано, то, что
 * находится слева от точки - собственно объект, в котором лежит функция
 */
colors.printThis = printThis;

colors.printThis(); // выведет содержимое объекта colors

/**
 * В JavaScript this это не магия и не ключевое слово, а просто еще один
 * аргумент функции, только он передается в нее при вызове _неявно_.
 * Что будет в this определяется также, как и содержимое других аргументов -
 * что передатут, то там и будет.
 *
 * Если мы создадим новый объект...
 */

const person = {
  name: 'John',
  age: 20,
  print: colors.printThis, // можно прямо при создании
};

/**
 * то при вызове той же самой функции выведется содержимое объекта person
 */
person.print();

/**
 * проверить, что это все еще та же самая функция можно сравнением
 */
console.log(colors.printThis === person.print); // true
console.log(person.print === printThis); // true

/**
 * Стрелочные функции работаю по другому.
 * Они не имеют своего this, так что при обращении к this
 * внутри таких функций мы, на самом деле обратимся к this функции на
 * уровень выше. Той функции, внутри которой стрелочная была объявлена.
 * Это очень полечно в некоторых случаях. Но об этом позже.
 */

/**
 * this также можно передать явно с помощью методов *функции* .call и .apply,
 * а с помощью метода .bind созжать новую функцию, с намертво привязанными
 * первыми аргументами, включая this. Читаем отдельно.
 */

printThis.call({ name: 'test ' }); // выведет переданный объект
