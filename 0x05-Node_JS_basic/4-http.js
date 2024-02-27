const http = require('http');

/**
 * HTTP server that responds with "Hello Holberton School!" to any endpoint.
 * @module 4-http
 */

/**
 * Callback function that handles incoming HTTP requests.
 * @param {http.IncomingMessage} req incoming HTTP request.
 * @param {http.ServerResponse} res server response that will be sent back to the client.
 */
const app = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(1245);

module.exports = app;

