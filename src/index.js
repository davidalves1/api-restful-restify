const restify = require('restify');

const server = restify.createServer();

const port = 3000;

server.listen('${port}');