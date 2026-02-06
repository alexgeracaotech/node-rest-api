const users = require('../mocks/users');

module.exports = {
  getUsers(response) {
    response.writeHead(
      200,
      {'content-type': 'application/json'}
    );
    response.end(JSON.stringify(users));
  }
}
