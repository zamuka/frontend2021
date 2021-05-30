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
    dbClient.getList((err, data) => {
      if (err) {
        throw err;
      }

      res.statusCode = 200;
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
      dbClient.findUser(id, (user) => {
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
  console.log('Server is running at http://localhost:9090/');
}

let userListLoaded = false;
let userLoaded = false;

fs.readFile(path.join(__dirname, 'templates/userList.html'), 'utf-8', (err, data) => {
  setTimeout(() => {
    if (err) {
      throw err;
    }

    templates.userList = data;
    userListLoaded = true;
    if (userListLoaded && userLoaded) {
      createServer();
    }
  }, 3000);
});

fs.readFile(path.join(__dirname, 'templates/user.html'), 'utf-8', (err, data) => {
  setTimeout(() => {
    if (err) {
      throw err;
    }

    templates.user = data;
    userLoaded = true;
    if (userListLoaded && userLoaded) {
      createServer();
    }
  }, 2000);
});

let counter = 1;
const timer = setInterval(() => {
  console.log(counter);
  counter = counter + 1;
  if (counter > 10) {
    clearInterval(timer);
  }
}, 1000);
