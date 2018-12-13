require('dotenv').config();

const app = require('./lib/app.js');

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});