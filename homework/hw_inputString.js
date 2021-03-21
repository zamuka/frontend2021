const inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
let vowels = {
    'e': true,
    'u': true,
    'o': true,
    'i': true,
    'a': true
};
let result = "";
for (let i = 0; i < inputString.length; i = i + 1) {
    let letter = inputString[i].toLowerCase();
    if (!vowels[letter]) {
        result = result + inputString[i];
    }
};
console.log(result);