require('dotenv').config();

const app = require('./lib/app');

//app.use(express.static('public')); //from Injoon's notes

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
