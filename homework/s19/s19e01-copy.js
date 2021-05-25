const fs = require("fs");

function copyFile(file) {
  const destination = `${file}.copy`;
  fs.readFile(file, "utf8", (error, data) => {
    if (error) console.error(`read file error ${error}`);
    fs.stat(file, (error, stats) => {
      if (error) console.error(error);
      console.log(`Source file size is ${stats.size} bytes`);
    });
    fs.writeFile(destination, data, (error) => {
      if (error) console.error(`write file error ${error}`);
      fs.stat(destination, (error, stats) => {
        if (error) console.error(error);
        console.log(`Copied file size is ${stats.size} bytes`);
      });
    });
  });
}

let fileToCopy = process.argv[2];

if (fileToCopy) {
  copyFile(fileToCopy);
} else {
  console.error(`File name required`);
}
