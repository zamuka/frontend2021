Promise.all([Promise.resolve(10), Promise.resolve(20)])
  .then((result) => console.log(result)); // [ 10, 20 ]

// Promise.race();
// Promise.allSettled();
