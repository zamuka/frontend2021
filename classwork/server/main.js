const http = require('http');
const path = require('path');
const fs = require('fs');
const Mustache = require('mustache');
const { isEmpty } = require('lodash');
const { dbClient } = require('./yourNoSql');
const { serveStatic } = require('./serveStatic');

const templates = {
  userList: null,
  user: null,
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

  if (req.url === '/' || req.url === '/users' || req.url === '/users/') {
    res.writeHead(302, {
      Location: '/users.html',
    });
    res.end();
    return;
  }

  if (req.url === '/users.html') {
    res.statusCode = 200;
    dbClient.getList(function (err, data) {
      if (err) {
        throw err;
      }
      const users = JSON.parse(data);

      const content = Mustache.render(templates.userList, { title: 'User List from data', users });
      res.write(content);
      res.end();
    });
    return;
  }

  if (req.url.startsWith('/users/')) {
    const baseURL = `http://${req.headers.host}/`;
    const myURL = new URL(req.url, baseURL);
    const [,, id] = myURL.pathname.split('/');

    const userUpdateData = Object.fromEntries(myURL.searchParams.entries());

    if (isEmpty(myURL.search)) {
      dbClient.findUser(id, function (user) {
        const content = Mustache.render(templates.user, user);
        res.write(content);
        res.end();
      });
      return;
    }

    dbClient.update(id, userUpdateData, () => {
      res.writeHead(302, {
        Location: '/users.html',
      });
      res.end();
    });

    return;
  }

  serveStatic(req, res);
}

function createServer() {
  http.createServer(listener).listen(9090);
}

fs.readFile(path.join(__dirname, 'templates/userList.html'), 'utf-8', function (err, contentUserList) {
  if (err) {
    throw err;
  }
  fs.readFile(path.join(__dirname, 'templates/user.html'), 'utf-8', function (err, contentUser) {
    if (err) {
      throw err;
    }
    templates.userList = contentUserList;
    templates.user = contentUser;
    createServer();
  });
});
