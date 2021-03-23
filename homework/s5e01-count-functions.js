const message =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
	 eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// Count 'i' letters
function getILetterCount(str) {
	let count = 0;

	for (let letter of str) {
		if (letter.toLowerCase() === 'i') {
			count++;
		}
	}

	return count;
}

const count = getILetterCount(message);
console.log(count);

// Count letters

const getLetterCount = function (str, letter) {
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === letter) {
			count = count + 1;
		}
	}

	return count;
};

const aLetterCount = getLetterCount(message, 'a');
console.log(aLetterCount);
