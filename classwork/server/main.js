const http = require('http');
const path = require('path');
const fs = require('fs');
const { dbClient } = require('./yourNoSql');
const { serveStatic } = require('./serveStatic');
const Mustache = require('mustache');

const templates = {
  userList: fs.readFileSync(path.join(__dirname, 'templates/userList.html'), 'utf-8'),
  userSolo: fs.readFileSync(path.join(__dirname, 'templates/userSolo.html'), 'utf-8'),
}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
function listener(req, res) {
  const urlId = req.url.slice(7);
  

  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end();
    return;
  }

  if (req.url === '/users.html') {
    const users = dbClient.getList();
    res.statusCode = 200;

    const content = Mustache.render(templates.userList, { 
      title: 'User List from data',
      users,
      
    });
    res.write(content);
    res.end();

  }
  for (let item of dbClient.getList()) {
    if (urlId === item._id) {
      const userSolo = Mustache.render(templates.userSolo, {
        item ,
      });
      res.write(userSolo);
      res.end();
    }
  }
  serveStatic(req, res);
}

const server = http.createServer(listener);

server.listen(9190);
