const fs = require('fs');
const path = require('path');

const dataFileName = path.join(__dirname, 'users.json');

class YourNoSql {
  getList() {
    return JSON.parse(fs.readFileSync(dataFileName, 'utf-8'));
  }
}


module.exports = {
  dbClient: new YourNoSql(),
}