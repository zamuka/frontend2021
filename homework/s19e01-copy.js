import { readFile, stat, writeFile } from 'fs';

function fileHandler() {
  const arg = process.argv[2];
  const fileCopy = `${arg}.copy`;

  readFile(arg, 'utf8', function (err, data) {
    if (err) {
      return;
    }
    stat(arg, function (err, stats) {
      if (err) {
        return;
      }
      const fileSize = stats.size;
      console.log(`The size of this file is ${fileSize} bytes`);
    });
    writeFile(fileCopy, data, function (err) {
      if (err) {
        return;
      }
      stat(fileCopy, function (err, stats) {
        if (err) {
          return;
        }
        const fileSize = stats.size;
        console.log(`The size of this file is ${fileSize} bytes`);
      });
    });
  });
}

fileHandler();
