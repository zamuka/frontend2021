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

    if (path === '/favicon.ico') {
      socket.write('HTTP/1.1 200 FINE\n');
      socket.write('\n');
      socket.write(icon);

      socket.end();
      return;
    }

    if (path === '/') {
      socket.write('HTTP/1.1 200 OK\n');
      socket.write('\n');
      socket.write('<html><body><h1>Hello World</h1></body></html>\n');

      socket.end();
      return;
    }

    if (method !== 'GET') {
      socket.write('HTTP/1.1 400 Bad Request\n');
      socket.write('\n');
      socket.write('<html><body><h1>Eror 400 Bad Request</h1></body></html>\n');

      socket.end();
      return;
    }

    console.log(reqLine);

    socket.write('HTTP/1.1 404 ERROR\n');
    socket.write('\n');
    socket.write('<html><body><h1>ERROR 404 page not found</h1></body></html>\n');

    socket.end();
  });
});

console.log('Executed!');

server.listen(9090);
