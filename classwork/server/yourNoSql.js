const fs = require("fs");
const path = require("path");

class YourNoSql {
  dataFileName = path.join(__dirname, "users.json");

  getList() {
    return JSON.parse(fs.readFileSync(this.dataFileName, "utf-8"));
  }

  find(id) {
    let users = this.getList();
    return users.find((item) => id === item._id);
  }
}

module.exports = {
  dbClient: new YourNoSql(),
};
