const fs = require('fs');
const net = require('net');

// загружаем иконку в переменную до старта сервера
const icon = fs.readFileSync('./classwork/favicon.ico');

const server = net.createServer();

server.on('connection', function (socket) {
  socket.on('data', function (data) {
    const reqText = data.toString('utf8');

    const [reqLine, otherLines] = reqText.split('\n');
    const [method, path, protocol] = reqLine.split(' ');

    if (method !== 'GET') {
      socket.write('HTTP/1.1 400 Bad Request\n');
      socket.write('\n');
      socket.write('<html><body><h1>Error 400. Bad Request</h1></body></html>\n');

      socket.end();
      return;
    }

    if (path === '/favicon.ico') {
      socket.write('HTTP/1.1 200 FINE\n');
      socket.write('\n'); // пустая строка
      socket.write(icon);

      socket.end();
      return;
    }

    if (path === '/') {
      socket.write('HTTP/1.1 200 OK\n');
      socket.write('\n');
      socket.write('<html><body><h1>Hello world</h1></body></html>\n');

      socket.end();
      return;
    }

    socket.write('HTTP/1.1 404 Not Found\n');
    socket.write('\n');
    socket.write(`<html><body><h1>Error 404. The requested URL ${path} was not found on this server.</h1></body></html>\n`);

    socket.end();
  });
});

console.log('Executed!');

server.listen(9090);
