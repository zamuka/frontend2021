const fs = require('fs');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList() {
    return JSON.parse(fs.readFileSync(this.dataFileName, 'utf-8'));
  }

  findId(id) {
    const users = this.getList();
    return users.find((user) => user._id === id);
  }

  updateUser(id, newUser) {
    const originalUsers = this.getList();
    const users = originalUsers.map(function (user) {
      if (user._id === id) {
        return newUser;
      }
      return user;
    });
    fs.writeFileSync(this.dataFileName, JSON.stringify(users, null, 2));
  }
}

module.exports = {
  dbClient: new YourNoSql(),
};
