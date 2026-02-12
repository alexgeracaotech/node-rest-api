const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');

module.exports = [{
  endpoint: '/users',
  handler: UserController.index
}, {
  endpoint: '/products',
  handler: ProductController.index
}];
