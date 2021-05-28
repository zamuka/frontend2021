const fs = require('fs');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList() {
    return JSON.parse(fs.readFileSync(this.dataFileName, 'utf-8'));
  }

  find (id) {
    for (let item of this.getList()) {
      if (id === item._id) {
      return item
    }
    }
  }

}

module.exports = {
  dbClient: new YourNoSql(),
};
