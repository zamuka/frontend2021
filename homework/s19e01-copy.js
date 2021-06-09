import { readFile, writeFile, statSync } from 'fs';

function copyData() {
  const arrayParam = process.argv;
  readFile(arrayParam[2], 'utf8', function (data) {
    const fileSize = statSync(arrayParam[2]).size;
    console.log(fileSize);
    const fileCopy = arrayParam[2] + '.copy';
    writeFile(fileCopy,'utf-8', function (data) {
      const fileCopySize = statSync(arrayParam[2]).size;
      console.log(fileCopySize);
    });
  });
}

copyData();
