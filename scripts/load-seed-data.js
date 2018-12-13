const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

client.query(`
  INSERT INTO profile (username, hash)
  VALUES ($1, $2)
  RETURNING id;
`,
['kristinhortsch', bcrypt.hashSync('miranda1', 8)]
)
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });