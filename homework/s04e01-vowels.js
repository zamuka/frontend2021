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