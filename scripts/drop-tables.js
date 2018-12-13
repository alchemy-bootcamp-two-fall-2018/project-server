require('dotenv').config(); 
const client = require('../lib/db-client');

client.query(`
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });