const fs = require('fs');
const http = require('http');
const path = require('path');
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
    const usersPromise = dbClient.getList();

    // pending
    // resolved
    // rejected

    usersPromise.then(function (users) {
      res.statusCode = 200;
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
      dbClient.findUser(id).then((user) => {
        const content = Mustache.render(templates.user, user);
        res.write(content);
        res.end();
      });
      return;
    }

    dbClient.update(id, userUpdateData).then(() => {
      res.writeHead(302, {
        Location: '/users.html',
      });
      res.end();
    });
    return;
  }

  serveStatic(req, res);
}

function getTemplate(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

const server = http.createServer(listener);

// I know those are not URLs but...)
const templatesURLs = [
  path.join(__dirname, '/templates/userList.html'),
  path.join(__dirname, '/templates/user.html'),
];

Promise.all(templatesURLs.map((url) => getTemplate(url)))
  .then(([userList, user]) => {
    templates.userList = userList;
    templates.user = user;
  })
  .then(() => server.listen(9090))
  .catch((err) => console.log(err));
