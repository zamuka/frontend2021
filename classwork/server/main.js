const http = require('http');
const path = require('path');
const fs = require('fs');
const fsp = require('fs').promises;
const Mustache = require('mustache');
const { isEmpty } = require('lodash');
const { dbClient } = require('./yourNoSql');
const { serveStatic } = require('./serveStatic');

const templateList = {
  userList: {
    content: null,
    fileName: path.join(__dirname, 'templates/userList.html'),
  },
  user: {
    content: null,
    fileName: path.join(__dirname, 'templates/user.html'),
  },
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
      const content = Mustache.render(templateList.userList.content, { title: 'User List from data', users });
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
        const content = Mustache.render(templateList.user.content, user);
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

const server = http.createServer(listener);

// function listenIfReady() {
//   const allLoaded = Object.values(templateList).every((template) => template.content);
//   if (allLoaded) {
//     server.listen(9090);
//   }
// }

// Object.entries(templateList).forEach(([templateName, template]) => {
//   fs.readFile(template.fileName, 'utf-8', (err, userListContent) => {
//     templateList[templateName].content = userListContent;
//     listenIfReady();
//   });
// });
const arrOfPromises = [];
Object.values(templateList).forEach((template) => {
  arrOfPromises.push(fsp.readFile(template.fileName, 'utf-8'));
});

Promise.all(arrOfPromises).then(([userList, user]) => {
  templateList.userList.content = userList;
  templateList.user.content = user;
  server.listen(9090);
});
