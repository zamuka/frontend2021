const userName = '';

// Полный вариант
if (userName) {
  // true
} else {
  // необязательный блок
  // false
}

// без кодового блока - не рекомендуется
if (userName) return;

// с кодовым блоком - лучше
if (userName) {
  return;
}

// else if. not recommended
if (age > 40) {

} else if (age > 18) {

} else if (age > 10) {

}

const status = 'Active';

// Using else if for multibranching - NOT RECOMMENDED
if (status === 'Active') {
  console.log('User is Active');
} else if (status === 'Unknown') {
  console.log('User status is unknown');
} else if (status === 'Inactive') {
  console.log('User is inactive');
}

// switch statement
switch (status) {
  case 'Active':
    console.log('User is Active');
    break;
  case 'Unknown':
    console.log('User status is unknown');
    break;
  case 'Inactive':
    console.log('User is inactive');
    break;
  default:
}


// ternary operator. not recommended.
const waterState = (t > 0) ? 'liquid' : 'solid';
