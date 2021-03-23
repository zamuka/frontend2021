//1

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
function getILetterCount(str) {
   let result = 0;
   for (let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === 'i'){
            result++;
        }
    }
    return result;
}
const count = getILetterCount(message);
console.log(count);

//2

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const getILetterCount = function(str, letter) {
    return str.toLowerCase().split(letter.toLowerCase()).length - 1;    
}
const count = getILetterCount(message,'a');
console.log(count);