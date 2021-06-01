const fs = require('fs');
const { find } = require('lodash');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList(callback) {
    fs.readFile(this.dataFileName, 'utf-8', callback);
  }

  findUser(id, foundUser) {
    this.getList(function (err, data) {
      if (err) {
        throw err;
      }
      const users = JSON.parse(data);
      const listUser = find(users, { _id: id });
      foundUser(listUser);
    });
  }

  update(id, userData, cb) {
    this.getList(function (err, data) {
      if (err) {
        throw err;
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
      this.save(users, cb);
    });
  }

  save(data, cb) {
    fs.writeFile(this.dataFileName, JSON.stringify(data), cb);
  }
}

module.exports = {
  dbClient: new YourNoSql(),
};
