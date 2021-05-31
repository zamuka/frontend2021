const fs = require('fs');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList() {
    return JSON.parse(fs.readFileSync(this.dataFileName, 'utf-8'));
  }

  findUsers(id) {
    const users = this.getList();
    const foundUser = users.find((item) => item._id === id);
    return foundUser;
  }
}

module.exports = {
  dbClient: new YourNoSql(),
};
