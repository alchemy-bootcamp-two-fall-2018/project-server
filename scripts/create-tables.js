const client = require('../lib/db-client');
require('dotenv').config(); 


client.query(`
CREATE TABLE IF NOT EXISTS profile (
  id SERIAL PRIMARY KEY,
  username VARCHAR(256) NOT NULL,
  hash VARCHAR(256) NOT NULL
);
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });