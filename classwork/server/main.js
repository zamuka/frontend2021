const http = require('http');
const path = require('path');
const fs = require('fs');
const { dbClient } = require('./yourNoSql');
const { serveStatic } = require('./serveStatic');
const Mustache = require('mustache');

const templates = {
  userList: fs.readFileSync(path.join(__dirname, 'templates/userList.html'), 'utf-8'),
  users: fs.readFileSync(path.join(__dirname, 'templates/users.html'), 'utf-8'),
}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
function listener(req, res) {
  const users = dbClient.getList();
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end();
    return;
  }

  if (req.url === '/users.html') {
    
    res.statusCode = 200;

    const content = Mustache.render(templates.userList, { title: 'User List from data', users });
    res.write(content);
    res.end();

  }
  if (req.url.startsWith('/users/') ) {
    let id = req.url.slice(7);
    res.statusCode = 200;
    const content = Mustache.render(templates.users, findId(id));
    res.write(content);
    res.end();
  }
  serveStatic(req, res);
}

function findId (id) {
  const users = dbClient.getList();
  let foundUser = users.find((item) => item._id === id);
  return foundUser;
}

const server = http.createServer(listener);

server.listen(9090);
