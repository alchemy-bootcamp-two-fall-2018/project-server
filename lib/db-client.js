const pg = require('pg');

// As we move to into deployment, this value will not
const DATABASE_URL = 'postgres://postgres:drewby864@localhost:5432/goals';

const Client = pg.Client;

const client = new Client(DATABASE_URL);

client.connect()
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error', err));

client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;