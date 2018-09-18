const { Client } = require("pg");
const { configDB } = require("./config");
const log = require("ak-logger");

const query = (text, callback, client) => {
  const start = Date.now();

  return client.query(text, (err, res) => {
    const duration = Date.now() - start;

    log.debug({text: text, duration: duration}, "Executed Simple Query");
    callback(err, res);
  });
};

const queryParams = (text, params, callback, client) => {
  const start = Date.now();

  return client.query(text, params, (err, res) => {
    const duration = Date.now() - start;

    log.info({text: text, params: params, duration: duration}, "Executed Query:");
    callback(err, res);
  });
};

const getClient = (callback) => {
  const start = Date.now();

  const client = new Client(configDB);

  client.connect((err, client, done) => {
    const duration = Date.now() - start;

    log.info({duration: duration}, "New Client Connected");
    callback(err, client, done);
  });
};

module.exports = {
  query: query,
  queryParams: queryParams,
  getClient: getClient
};