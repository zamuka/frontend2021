let inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
let result = '';

inputString = inputString.toLowerCase();

for (letterCount = 0; letterCount < inputString.length; letterCount++) {
    if (inputString[letterCount] === 'a' ||
        inputString[letterCount] === 'e' ||
        inputString[letterCount] === 'o' ||
        inputString[letterCount] === 'i' ||
        inputString[letterCount] === 'u' ||
        inputString[letterCount] === 'y') {
        continue;
    }
    result = result + inputString[letterCount]
}

console.log(result);


