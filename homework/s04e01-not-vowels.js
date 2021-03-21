let inputString = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
let arrString = inputString.split('');
let result = [];
const arrVowels = [
    'a',
    'e',
    'i',
    'o',
    'u',
]

for(let char of inputString) {
    let theVowels = false;
    for(let key of arrVowels){
        if(char === key){
            theVowels = true;
        }
    }
    if(!theVowels) {
        result.push(char);
    }
}

console.log(result.join(''));


