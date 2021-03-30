// 1. напишите функцию, которая вернет случайный элемент массива.
// пример использования:
function sample(array) {
	const index = Math.floor(Math.random() * array.length);

	return array[index];
}

const randomColor = sample(['red', 'green', 'blue', 'orange']);

console.log(randomColor);

// 2. напишите функцию, которая принимает строку и число n, а возвращает
// новую строку, состоящую из n случайных букв начальной строки.
// Например
function getRandomLetters(string, amount) {
	let outputString = '';

	for (let i = 0; i < amount; i++) {
		const index = Math.floor(Math.random() * string.length);

		outputString = outputString + string[index];
	}

	return outputString;
}

const randomLetters = getRandomLetters('abcdefgh', 4);

console.log(randomLetters);
// вернет 4 случайно выбранные буквы в виде строки, возможно, 'gbbc';
// Буквы могут повторяться.

// 3. Пишем функцию, которая принимает объект, а возвращает новый
// объект, в котором только одно случайное свойство из оригинального
// например для объекта:
function sampleProperty(object) {
	const keysArray = Object.keys(object);

	const index = Math.floor(Math.random() * keysArray.length);

	const value = keysArray[index];

	return { [value]: object[value] };
}

const person = {
	name: 'Vasya',
	age: 20,
	occupation: 'student',
	height: 170,
};

const randomProperty = sampleProperty(person);

console.log(randomProperty);
