const fs = require('fs');
const { find } = require('lodash');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList(callback) {
    fs.readFile(this.dataFileName, 'utf-8', function(err, data) {
      if (err) {
        throw err;
      }
      const users = JSON.parse(data);
      callback(users);
    });
  }

  findUser(id, foundUser) {
    this.getList(function (data) {
      const users = data;
      const listUser = find(users, { _id: id });
      foundUser(listUser);
    });
  }

  update(id, userData, cb) {
    this.getList(function (data) {
      const originalUsers = data;
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
