let inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let inputText = inputString.split('');
let result = [];
for (let char of inputText) {
    let isVowel = false;
    for(let i = 0; i < vowels.length; i++) {
        if(char.toLowerCase() === vowels [i]) {
            isVowel = true;
            break;
        }
    }
    if (!isVowel) {
        result.push(char);
    }
}
inputString = result.join('');

//one more solution

let inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let isVowel;
let result = '';
for(let char of inputString) {
    isVowel = false;
    for(let i = 0; i < vowels.length; i++) {
        isVowel = char.toLowerCase() === vowels[i];
        if (isVowel) break;
    }
    if(!isVowel) {
        result = result + char;
    }
}
inputString = result;