const { Pool } = require("pg");
const { configDB } = require("./config");
const Log = require("log");

const pool = new Pool(configDB);


const query = (text, callback) => {
  const start = Date.now();

  return pool.query(text, (err, res) => {
    const duration = Date.now() - start;

    console.log(`executed query '${text}' duration: ${duration}`);
    callback(err, res);
  });
};

const getClient = (callback) => {
  const start = Date.now();

  pool.connect((err, client, done) => {
    const duration = Date.now() - start;

    console.log(`new client connected, duration of connection creation: ${duration}`);
    callback(err, client, done);
  });
};

module.exports = {
  query: query,
  getClient: getClient
};