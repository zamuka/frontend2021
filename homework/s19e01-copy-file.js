const fs = require('fs');

function dubFile() {
  const copyedFile = `${process.argv[2]}.copy`;

  fs.readFile(process.argv[2], "utf8", (err, data) => {
    if (err) {
      return;
    }

    fs.stat(process.argv[2], (err, file) => {
      if (err) {
        return;
      }

      console.log(`Source file size ${file.size} bytes`);
    });

    fs.writeFile(copyedFile, data, (err) => {
      if (err) {
        return;
      }

      fs.stat(copyedFile, (err, newFile) => {
        if (err) {
          return;
        }

        console.log(`Copied file size ${newFile.size} bytes`);
      });
    });
  });
}

dubFile();
