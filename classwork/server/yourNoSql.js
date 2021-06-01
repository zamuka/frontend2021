const fs = require('fs');
const { find } = require('lodash');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList() {
    return JSON.parse(fs.readFileSync(this.dataFileName, 'utf-8'));
  }

  getListAsPromised() {
    return new Promise((resolve) => {
      fs.readFile(this.dataFileName, 'utf-8', (err, data) => {
        const list = JSON.parse(data);
        resolve(list);
      });
    });
  }

  findUser(id) {
    return find(this.getList(), { _id: id });
  }

  update(id, userData, cb) {
    const originalUsers = this.getList();
    const users = originalUsers.map((user) => {
      if (user._id === id) {
        return {
          ...user,
          ...userData,
        };
      }
      return user;
    });

    this.save(users, cb);
  }

  save(data, cb) {
    fs.writeFile(this.dataFileName, JSON.stringify(data), cb);
  }
}

module.exports = {
  dbClient: new YourNoSql(),
};
