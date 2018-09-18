const server = require("./server");
const log = require("ak-logger");

server.listen(3000, () => {
  log.info({server: "localhost", port: 3000}, "Server listen");
});