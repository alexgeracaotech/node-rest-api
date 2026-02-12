import products from '../mocks/products.js';

const ProductController = {
  index(response) {
    response.writeHead(
      200,
      {'content-type': 'application/json'}
    );
    response.end(JSON.stringify(products));
  }
}

export default ProductController;
