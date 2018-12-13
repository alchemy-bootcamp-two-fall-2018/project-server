require('dotenv').config();
const client = require('../lib/db-client');

client.query (`
    CREATE TABLE IF NOT EXISTS profile (
        id SERIAL PRIMARY KEY,
        username VARCHAR(256),
        first_name VARCHAR(256),
        last_name VARCHAR(256),
        email VARCHAR(256),
        hash VARCHAR(256)
    )
`)
  .then (
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });