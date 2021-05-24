import fs from 'fs';

const originalFile = process.argv[2];

const copyFile = originalFile + ".copy";

fs.readFile(originalFile,'utf8', (err, data)=>{
    if(err) throw err;

    fs.stat(originalFile, (err, stats)=>{
        if(err) throw err;

        console.log(`Original file size is: ${stats.size} MB`)
    })

    fs.writeFile(copyFile, data, (err)=>{
        if(err) throw err;

        fs.stat(copyFile, (err, stats)=>{
            if(err) throw err;
    
            console.log(`File copy size is: ${stats.size} MB`)
        })
    });
})


