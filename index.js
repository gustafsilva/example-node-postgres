const restify = require("restify");
const usersRoute = require("./src/routes/users");

const server = restify.createServer();

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

usersRoute(server);

server.listen(3000, () => {
  console.info("Server listen port 3000");
});