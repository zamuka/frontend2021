const fs = require('fs');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList() {
    return JSON.parse(fs.readFileSync(this.dataFileName, 'utf-8'));
  }

  find (id) {
    const userList = this.getList();
    return userList.find((user) => user._id === id)
  }

}

module.exports = {
  dbClient: new YourNoSql(),
};
