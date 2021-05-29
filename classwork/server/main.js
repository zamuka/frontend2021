const http = require('http');
const path = require('path');
const fs = require('fs');
const Mustache = require('mustache');
const { isEmpty } = require('lodash');
const { dbClient } = require('./yourNoSql');
const { serveStatic } = require('./serveStatic');

const templates = {
  userList: fs.readFileSync(path.join(__dirname, 'templates/userList.html'), 'utf-8'),
  user: fs.readFileSync(path.join(__dirname, 'templates/user.html'), 'utf-8'),
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
    const users = dbClient.getList();
    res.statusCode = 200;

    const content = Mustache.render(templates.userList, { title: 'User List from data', users });
    res.write(content);
    res.end();
    return;
  }

  if (req.url.startsWith('/users/')) {
    const baseURL = `http://${req.headers.host}/`;
    const myURL = new URL(req.url, baseURL);
    const [,, id] = myURL.pathname.split('/');

    const userUpdateData = Object.fromEntries(myURL.searchParams.entries());

    if (isEmpty(myURL.search)) {
      const user = dbClient.findUser(id);
      const content = Mustache.render(templates.user, user);
      res.write(content);
      res.end();
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

const server = http.createServer(listener);

server.listen(9090);
