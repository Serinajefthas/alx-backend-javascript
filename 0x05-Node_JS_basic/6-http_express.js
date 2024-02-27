const express = require('express');

/**
 * Creates an HTTP server using Express module.
 * @module
 */
const app = express();

/**
 * Sends "Hello Holberton School!" response for the root endpoint.
 * @name GET /
 * @function
 * @memberof module:4-http-express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {undefined}
 */
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

/**
 * The HTTP server listening on port 1245.
 * @type {Object}
 * @memberof module:4-http-express
 */
app.listen(1245, () => {
  console.log('Server listening on PORT 1245');
});

module.exports = app;
