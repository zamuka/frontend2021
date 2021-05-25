const {
  filter, pickBy, get, set, isEmpty,
} = require('lodash');

// 1 templates
// `Hello, my name is ${name}`; // placeholder

// 2 Array methods leftovers
// .filter => новый массив. элементы те же. сколько - фильтр
// .map => новый массив. элементы новый. сколько - столько же и в том же порядке
// .reduce =>

// 3 apply, call, bind

// 4 deploy Heroku

// 5 error handring try..catch

// 6 Promises 60m

// 7 async..await 30m

// 8 Обзор фреймворков. 30m. React. Calendar

// 9 get set Object.defineProperty ?Proxy? 30m

// 10 Date

const users = [
  {
    name: 'John',
    balance: 10,
  },
  {
    name: 'Bill',
    balance: 100,
    isActive: true,
  },
  {
    name: 'Jane',
    balance: 50,
    isActive: true,
    friends: {
      count: 10,
    },
  },
];

function calc() {
  let sum = 0;
  for (const user of users) {
    sum = sum + user.balance;
  }
  return sum;
}

// то же самое с помощью reduce
const sum = users.reduce((acc, user) => acc + user.balance, 0);

console.log(users);

const obj = users.reduce((acc, user) => {
  acc[user.name] = user.balance;
  return acc;
}, {});

console.log(obj);

const activeUsers = filter(users, 'isActive');
const friendsCount = get(users, '0.friend.count', 0);
users[0] && users[0].friends && users[0].friends.count;

Array.from(users);

const sortedArray = users.sort((a, b) => b.balance - a.balance);

console.log(sortedArray === users);

console.log(users);
