const http = require('node:http');

http.createServer(function (request, response) {
  response.writeHead(
    200,
    {'content-type': 'text/html; charset=utf-8'}
  );
  response.end('<h1>Hello Client!</h1>');
}).listen(3000);
