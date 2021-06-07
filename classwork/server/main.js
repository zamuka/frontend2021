const http = require('http');
const path = require('path');
const fs = require('fs');
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
  }
};
let arrayContent = [];
for (let element in templateList) {
  arrayContent.push(templateList[element].fileName)
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
function allTemplates (url) {
  return new Promise ((res, rej) => {
    fs.readFile(url, "utf-8", (err, data) => {
      if (err) {
        rej(err)
      }
      if (data) {
        res(data)
      }
    })
  })
}



Promise.all(arrayContent.map((url) => allTemplates(url)))
  .then(([userList, user]) => {
    templateList.userList.content = userList;
    templateList.user.content = user;
  })
  .then(() => server.listen(9090))
  .catch((err) => console.log(err));