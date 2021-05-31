const fs = require('fs');
const { find } = require('lodash');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList(cb) {
    fs.readFile(this.dataFileName, 'utf-8', cb);
  }

  findUser(id, cb) {
    this.getList((err, data) => {
      if (err) {
        return;
      }
      const list = JSON.parse(data);
      const user = find(list, { _id: id})
      cb(user);
    });
  }

  update(id, userData, cb) {
    this.getList((err, data) => {
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
