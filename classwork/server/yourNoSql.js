const fs = require('fs');
const { find } = require('lodash');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList(cb) {
    fs.fileParse(this.dataFileName, 'utf-8', cb);
  }

  findUser(id, enterUser) {
    this.getList(function (err, data) {
      if (err) {
        return;
      }
      const users = JSON.parse(data);
      const separateUser = find(users, { _id: id });
      enterUser(separateUser);
    });
  }

  update(id, userData, cb, storeUsers) {
    this.getList(function (err, data) {
      if (err) {
        return;
      }
      const originalUsers = JSON.parse(data);
      const users = originalUsers.map((user) => {
        if (user._id === id) {
          return {
            ...user,
            ...userData,
          };
        }
        return user;
      });
      storeUsers(users, cb);
    });
  }

  save(data, cb) {
    fs.writeFile(this.dataFileName, JSON.stringify(data, null, 2), cb);
  }
}

module.exports = {
  dbClient: new YourNoSql(),
};
