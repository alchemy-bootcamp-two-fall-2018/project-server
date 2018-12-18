require('dotenv').config();
const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

client.query(`
  INSERT INTO profile (username, hash)
  VALUES ($1, $2)
  RETURNING id;
`,
['avanvalk', bcrypt.hashSync('drewby', 8)]
)
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });