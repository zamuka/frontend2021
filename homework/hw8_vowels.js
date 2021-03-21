const inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
const inputStringLength = inputString.length;
let outputString  =''; 
const vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
    'y': true, // english-grammar says that 'y' is sometimes vowels and sometimes NOT but still.
};

for (let i = 0; i < inputStringLength; i++) {
    let letter  = inputString[i].toLowerCase();
    if (!vowels[letter]) {
        outputString = outputString + inputString[i];
    }
}

console.log(outputString);