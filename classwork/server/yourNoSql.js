const fs = require('fs');
const { find } = require('lodash');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList(cb) {
    fs.readFile(this.dataFileName, 'utf-8', (err, data) => {
      const list = JSON.parse(data);
      cb(list);
    });
  }

  findUser(id, currentUser) {
    this.getList(function (data) {
      const user = data;
      const userCard = find(user, { _id: id });
      currentUser (userCard);
    });
  }

  update(id, userData, cb, changedUser) {
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
      changedUser(users, cb);
    });
  }

  save(data, cb) {
    fs.writeFile(this.dataFileName, JSON.stringify(data, null, 2), cb);
  }
}

module.exports = {
  dbClient: new YourNoSql(),
};
