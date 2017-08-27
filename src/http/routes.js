const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send("It's working...");

    next();
  });
}

module.exports = routes;