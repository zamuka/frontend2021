import { readFile, stat, writeFile} from 'fs';

function copyFile() {
    const path = process.argv[2];
    const copy = `${path}.copy`;

    readFile(path, 'utf8', function (err, data) {
        if (err) {
            return;
        }
        stat(path, function (err, file) {
            if (err) {
                return;
            }
            console.log(`The size of the source file is ${file.size} bytes`)
        });

    writeFile(copy, data, function(err) {
        if (err) {
            return;
        }
        stat(copy, function (err, file) {
            if (err) {
                return;
            }
            console.log(`The size of the copied file is ${file.size} bytes`)
        });
    });
});
};

copyFile();