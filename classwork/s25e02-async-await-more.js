const { readFile } = require('fs');
const { promisify } = require('util');
// promisisfy is rarely used novadays

const readFileAsPromised = promisify(readFile);

async function main() {
  const data = await readFileAsPromised('c:\\work\\hillel\\frontend2021\\package.json', 'utf8');
  console.log(data);
}

main();
