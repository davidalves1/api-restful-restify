const restify = require('restify');

const server = restify.createServer();

const port = 3000;

server.get('/', (req, res, next) => {
	res.send("It's working...");

	next();
});

server.listen(`${port}`);