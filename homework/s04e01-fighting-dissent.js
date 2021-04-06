const sourceMessage = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let sousceText = sourceMessage.split('');
let resultMessage = [];
let vowelCounter = 0;

for (let char of sousceText) {
  let areCharVowel = false;

  for (let key of vowels) {
    if (key === char) {
      vowelCounter = vowelCounter + 1;
      areCharVowel = true;
      break;
    }
  }

  if (!areCharVowel) {
    resultMessage.push(char);
  }
}

console.log('There are ' + vowelCounter + ' vowels in this text.');
console.log(resultMessage.join(''));