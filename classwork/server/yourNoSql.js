const fs = require('fs');
const { find } = require('lodash');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList(callback) {
    return fs.readFile(this.dataFileName, 'utf-8', callback);
  }

  findUser(id, callback) {
    this.getList((err, data) => {
      if (err) {
        throw err;
      }
      const list = JSON.parse(data);

      const user = find(list, { _id: id });

      callback(user);
    });
  }

  update(id, userData, cb) {
    this.getList((err, data) => {
      if (err) {
        throw err;
      }

      const originUsers = JSON.parse(data);

      const users = originUsers.map((user) => {
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
