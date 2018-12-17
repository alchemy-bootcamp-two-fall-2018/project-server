const client = require('../lib/db-client');
require('dotenv').config(); 

client.query(`
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });