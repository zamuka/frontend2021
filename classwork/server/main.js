const http = require("http");
const path = require("path");
const fs = require("fs");
const { dbClient } = require("./yourNoSql");
const { serveStatic } = require("./serveStatic");
const Mustache = require("mustache");

const templates = {
  userList: "",
  userSelected: "",
};

fs.readFile(
  path.join(__dirname, "templates/userList.html"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    templates.userList = data;
  }
);
fs.readFile(
  path.join(__dirname, "templates/userSelected.html"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    templates.userSelected = data;
  }
);

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
function listener(req, res) {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.end();
    return;
  }

  if (req.url === "/users.html") {
    const users = dbClient.getList();
    res.statusCode = 200;

    const content = Mustache.render(templates.userList, {
      title: "User List from data",
      users,
    });
    res.write(content);
    res.end();
  }

  if (req.url.startsWith("/users/")) {
    res.statusCode = 200;
    const id = req.url.slice(7);
    let user = dbClient.find(id);
    if (user) {
      let content = Mustache.render(templates.userSelected, dbClient.find(id));
      res.write(content);
      res.end();
    }
  }
  serveStatic(req, res);
}

let timer = setInterval(checkTemplates, 1);

function checkTemplates() {
  if (templates.userList !== "" && templates.userSelected !== "") {
    const server = http.createServer(listener);
    server.listen(9090);
    clearInterval(timer);
  }
}
