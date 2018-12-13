const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');
require('dotenv').config(); 

client.query(`
  INSERT INTO profile (username, hash)
  VALUES ($1, $2)
  RETURNING id;
`,
['martypdx', bcrypt.hashSync('abc123', 8)]
)
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });