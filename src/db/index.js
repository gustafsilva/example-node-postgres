const { Pool } = require("pg");
const { configDB } = require("./config");
const log = require("ak-logger");

const pool = new Pool(configDB);


const query = (text, callback) => {
  const start = Date.now();

  return pool.query(text, (err, res) => {
    const duration = Date.now() - start;

    log.debug({text: text, duration: duration}, "Executed Simple Query");
    callback(err, res);
  });
};

const queryParams = (text, params, callback) => {
  const start = Date.now();

  return pool.query(text, params, (err, res) => {
    const duration = Date.now() - start;

    log.info({text: text, params: params, duration: duration}, "Executed Query:");
    callback(err, res);
  });
};

const getClient = (callback) => {
  const start = Date.now();

  pool.connect((err, client, done) => {
    const duration = Date.now() - start;
    const query = client.query.bind(client);

    client.query = () => {
      client.lastQuery = query;
      client.query.apply(client, query);
    };

    const timeout = setTimeout(() => {
      log.debug({duration: duration, lastQuery: client.lastQuery}, "The last executed query on this client was");
    }, 5000);

    const release = (err) => {
      done(err);

      clearTimeout(timeout);

      client.query = query;
    }

    log.info({duration: duration}, "New Client Connected");
    callback(err, client, done);
  });
};

module.exports = {
  query: query,
  queryParams: queryParams,
  getClient: getClient
}