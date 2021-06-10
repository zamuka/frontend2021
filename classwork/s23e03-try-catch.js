const serverResponse = '{';

try {
  console.log(1111);
  // throw new Error('Err');
  callHeavyFunction();
  JSON.parse(serverResponse);
  console.log(2222);
} catch (error) {
  console.log('caught an error');
} finally {
  console.log('sdsd');
}

console.log('Something important');
