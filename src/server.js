import http from 'node:http';

import routes from './routes.js';
import errors from './errors.js';

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
