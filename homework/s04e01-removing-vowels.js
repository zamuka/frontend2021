const inputString =
	'Neque pOrro qUisquam est quI dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';

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
