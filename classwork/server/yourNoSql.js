// const fs = require('fs');
const fsp = require('fs').promises;
const { find } = require('lodash');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  getList() {
    // const listPromise = new Promise((resolve) => {
    //   fs.readFile(this.dataFileName, 'utf-8', (err, data) => {
    //     resolve(data);
    //   });
    // });

    const listPromise = fsp.readFile(this.dataFileName, 'utf-8');

    return listPromise.then((data) => JSON.parse(data));
  }

  /**
   *
   * @param {string} id
   * @returns Promise<object>
   */
  findUser(id) {
    return this.getList()
      .then((list) => find(list, { _id: id }));
  }

  async update(id, userData) {
    let userUpdated = false;
    const originalUsers = await this.getList();
    const users = originalUsers.map((user) => {
      if (user._id === id) {
        userUpdated = true;
        return {
          ...user,
          ...userData,
        };
      }
      return user;
    });

    if (!userUpdated) {
      throw new Error('User not found');
    }
    await this.save(users);
  }

  save(data) {
    return fsp.writeFile(this.dataFileName, JSON.stringify(data));
  }
}

module.exports = {
  dbClient: new YourNoSql(),
};
