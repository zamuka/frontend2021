const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const queryString = require('querystring');
const { dbClient } = require('./yourNoSql');
const { serveStatic } = require('./serveStatic');
const Mustache = require('mustache');

const templates = {
  userList: fs.readFileSync(path.join(__dirname, 'templates/userList.html'), 'utf-8'),
  selectedUser: fs.readFileSync(path.join(__dirname, 'templates/selectedUser.html'), 'utf-8'),
};

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

  if (req.url.startsWith('/users/')) {
    res.statusCode = 200;
    let id = req.url.slice(7);
    let user = dbClient.findId(id);
    let urlArguments = url.parse(req.url).search;

    if (user) {
      const content = Mustache.render(templates.selectedUser, { title: `${user.name}`, user });
      res.write(content);
      res.end();
      return;
    }

    if (urlArguments) {
      id = id.slice(0, -urlArguments.length);
      user = dbClient.findId(id);
      urlArguments = urlArguments.slice(1);
      urlArguments = queryString.parse(urlArguments);

      user.name = urlArguments.name;
      user.balance = urlArguments.balance;
      dbClient.updateUser(id, user);

      res.statusCode = 301;
      res.writeHead(302, {
        Location: '/users.html',
      });
      res.end();
      return;
    }

    res.statusCode = 404;
    res.write('Sorry, this ID does not exist. Enter the correct ID.');
    res.end();
  }

  serveStatic(req, res);
}

const server = http.createServer(listener);

server.listen(9090);
