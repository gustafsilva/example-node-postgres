const { Pool } = require("pg");
const { configDB } = require("./config");

const pool = new Pool(configDB);


const query = (text, callback) => {
  const start = Date.now();

  return pool.query(text, (err, res) => {
    const duration = Date.now() - start;

    console.log("executed simple query", {text: text, duration: duration});

    callback(err, res);
  });
};

const queryParams = (text, params, callback) => {
  const start = Date.now();

  return pool.query(text, params, (err, res) => {
    const duration = Date.now() - start;

    console.log("executed query:", {text: text, params: params, duration: duration});
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
      console.error(`A client has been checked out for more than 5 seconds!`);
      console.error(`The last executed query on this client was: ${client.lastQuery}`);
    }, 5000);

    const release = (err) => {
      done(err);

      clearTimeout(timeout);

      client.query = query;
    }

    console.log("new client connected", {duration: duration});
    callback(err, client, done);
  });
};

module.exports = {
  query: query,
  queryParams: queryParams,
  getClient: getClient
}