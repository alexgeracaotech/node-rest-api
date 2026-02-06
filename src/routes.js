const UserController = require('./controllers/UserController');

module.exports = [{
  endpoint: '/users',
  handler: UserController.getUsers
}];
