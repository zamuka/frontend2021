const fs = require('fs');
const net = require('net');

// загружаем иконку в переменную до старта сервера
const icon = fs.readFileSync('./classwork/favicon.ico');

const server = net.createServer();

server.on('connection', function (socket) {
  socket.on('data', function (data) {
    const reqText = data.toString('utf8');

    // eslint-disable-next-line no-unused-vars
    const [reqLine, otherLines] = reqText.split('\n');
    // eslint-disable-next-line no-unused-vars
    const [method, path, protocol] = reqLine.split(' ');

    console.log(reqLine);

    if (method === 'GET' && path === '/favicon.ico') {
      socket.write('HTTP/1.1 200 FINE\n');
      socket.write('\n'); // пустая строка
      socket.write(icon);

      socket.end();
      return;
    }

    if (method === 'GET' && path === '/') {
      socket.write('HTTP/1.1 200 OK\n');
      socket.write('\n'); // пустая строка
      socket.write('<html><body><h1>Hello world</h1></body></html>\n');

      socket.end();
      return;
    }

    if (method === 'GET') {
      const page404 = fs.readFileSync('./classwork/pages/404.html');

      socket.write('HTTP/1.1 404 error\n');
      socket.write('\n');
      socket.write(page404);

      socket.end();
      return;
    }

    if (method !== 'GET') {
      socket.write('HTTP/1.1 405 error\n');
      socket.write('\n');
      socket.write('405 Method Not Allowed');

      socket.end();
    }
  });
});

console.log('Executed!\n');

console.log('Waiting for request...');

server.listen(9090);
