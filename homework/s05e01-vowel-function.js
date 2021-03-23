
function getILetterCount(message) {
    let letterCount = 0;
    for(let i = 0 ; i < message.length; i++) {
        if(message[i] === 'i') {
            letterCount= letterCount + 1;
        }
    }
    return letterCount;
}
  
let message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const count = getILetterCount(message);
console.log(count);

function getLetterCount(message, i) {
    let letterCount = 0;
    for(let i = 0 ; i < message.length; i++) {
        if(message[i] === 'a') {
            letterCount= letterCount + 1;
        }
    }
    return letterCount;
}

const aLetterCount = getLetterCount(message, 'a');
console.log(aLetterCount);
