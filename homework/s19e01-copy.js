import { readFile, start, writeFile} from 'fs';

function fileHandler() {
    const path = process.argv[2];
    const copyFile = `${arg}.copy`;

    readFile(path, 'utf8', function (err, data) {
        if (err) {
            return
        }
    });

    writeFile(copyFile, data, function(err) {
        if (err) {
            return
        }
    })
}

fileHandler();