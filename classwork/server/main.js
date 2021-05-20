const http = require('http');
const fs = require('fs');
const path = require('path');

function serveStatic(req, res) {
  // Serve static
  const filePath = path.join('./sandbox', req.url);

  fs.lstat(filePath, function (err, stat) {
    if (stat && stat.isDirectory()) {
      // проблема на занятии была в том, что я отдавал страницу по запросу на
      // адрес например /farm и относительные пути с этого файла считались от
      // / - корневого каталога.
      // запросы на /farm/ работали нормально
      // live-server переадресует браузер, что сделаем и мы!
      // Просто отправим ответ со статусов 302 и новым адресом в заголовке.
      // Получив такой ответ, браузер пойдет перейдет туда и все будет ок.
      let redirectUrl = req.url;
      // еще немного работы со строками - и "/farm" и "/farm/" должны преобразоваться
      // в "/farm/index.html" (если farm - папка)
      if (!redirectUrl.endsWith('/')) {
        redirectUrl = `${redirectUrl}/`;
      }
      redirectUrl = `${redirectUrl}index.html`;
      // отправляем редирект и закрываем все. Браузер придет еще раз, но уже
      // по новому адресу. Конкретно этот запрос мы обработали.
      res.writeHead(302, {
        Location: redirectUrl,
      });
      res.end();
      return;
    }

    fs.readFile(filePath, function (err, data) {
      if (err) {
        res.statusCode = 404;
        res.end();
        return;
      }

      const headers = {};
      if (req.url.endsWith('.js')) {
        // Если для .js файла указан тип module, то требуется указать MIME type
        headers['Content-Type'] = 'text/javascript';
      }

      res.writeHead(200, headers);

      res.write(data);
      res.end();
    });
  });
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
    fs.readFile('./classwork/server/users.json', 'utf8', (err, data) => {
      const users = JSON.parse(data);
      res.writeHead(200);

      res.write(`<html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="../styles/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="./styles.css">
      <script src="./main.js" type="module"></script>
      <title>DataTable</title>
    <body>
      <table class="table">
        <thead>
          <tr><th>#</th><th>Name</th><th>Gender</th><th>Money</th><th>email</th></tr>
        </thead>
        <tbody>`);

      users.forEach((user) => res.write(`<tr><td>${user.index}</td><td>${user.name}</td><td>${user.gender}</td>
      <td>${user.balance}</td>
      <td>${user.email}</td></tr>`));

      res.write('</tbody></table></body></html>');
      res.end();
    });

    return;
  }

  serveStatic(req, res);
}

const server = http.createServer(listener);

server.listen(9090);
