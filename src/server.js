const http = require('node:http');

const routes = require('./routes');
const errors = require('./errors');

http.createServer(function (request, response) {
  const router = routes.find(function (route) {
    return request.url === route.endpoint;
  });

  if (router) {
    router.handler(response);
    return;
  }

  errors.notFound(response);
}).listen(3000);
