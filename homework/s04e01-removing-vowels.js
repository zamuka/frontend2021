const inputString =
	'Neque pOrro qUisquam est quI dolorem ipsum quia \
	dolor sit amet, consectetur, adipisci velit...';

let result = '';

for (let i of inputString) {
	switch (i.toLowerCase()) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			break;
		default:
			result = result + i;
			break;
	}
}

console.log(result);

// Second solution
const inputString =
	'Neque pOrro qUisquam est quI dolorem ipsum quia\
	dolor sit amet, consectetur, adipisci velit...';

let result1 = '';

const vowelsList = {
	a: true,
	e: true,
	i: true,
	o: true,
	u: true,
};

for (let l of inputString) {
	if (l in vowelsList) {
		continue;
	}
	result1 = result + l;
}

console.log(result1);
