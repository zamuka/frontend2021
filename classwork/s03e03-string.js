let str = 'New string';
console.log(str[5]); // displays 't'
str[5] = 'x'; // does nothing. Strings are immutables.
str = str + '!'; // creating a new string
console.log(str);
