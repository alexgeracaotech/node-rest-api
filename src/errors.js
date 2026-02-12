const errors = {
  notFound(response) {
    response.writeHead(
      404,
      {'content-type':'application/json'}
    );
    response.end(JSON.stringify({message: 'Not found!'}));
  }
}

export default errors;
