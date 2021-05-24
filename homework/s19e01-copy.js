const fs = require('fs');

function copy () {
    const file = process.argv[2];
    const copyFile = `${file}.copy`;
    fs.readFile(file, 'utf8', (err, data) => {
        if(err) {
            throw err;
        }
    
        fs.stat(file, (err, stats) => {
          if (err) {
              throw err;
          }
          console.log('size:' + stats["size"]);
        })
    
      fs.writeFile(copyFile, data, (err) => {
        if(err) {
            throw err;
        }
        fs.stat(copyFile, (err, copyStats) => {
            if (err) {
                throw err;
            }
            console.log('size copy-file:' + copyStats["size"]);
        })
    });
  });
};
copy();