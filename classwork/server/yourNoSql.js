// const fs = require('fs');
const fsp = require('fs').promises;
const { find } = require('lodash');
const path = require('path');

class YourNoSql {
  dataFileName = path.join(__dirname, 'users.json');

  async getList() {

    const data = await fsp.readFile(this.dataFileName, 'utf-8');

    return JSON.parse(data);
  }

  /**
   *
   * @param {string} id
   * @returns Promise<object>
   */
  async findUser(id) {
    const list = await this.getList();
    return find(list, { _id: id });
  }

    async update(id, Userdata) {
      
    const users =  await this.getList().map((user) => {
      if (user._id === id) {
        return {
          ...user,
          ...Userdata,
        };
      }
      return user;
    });
    return this.save(users);
  }

  save(data) {
    return fsp.writeFile(this.dataFileName, JSON.stringify(data, null, 2));
  }
}

module.exports = {
  dbClient: new YourNoSql(),
};
