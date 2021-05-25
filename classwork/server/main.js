const http = require('http');
const path = require('path');
const fs = require('fs');
const { dbClient } = require('./yourNoSql');
const { serveStatic } = require('./serveStatic');
const Mustache = require('mustache');

const templates = {
  userList: fs.readFileSync(path.join(__dirname, 'templates/userList.html'), 'utf-8'),
}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
function listener(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end();
    return;
  }

  if (req.url === '/users.html') {
    const users = dbClient.getList();
    res.statusCode = 200;

    const content = Mustache.render(templates.userList, { title: 'User List from data', users });
    res.write(content);
    res.end();

  }
  serveStatic(req, res);
}

const server = http.createServer(listener);

server.listen(9090);
