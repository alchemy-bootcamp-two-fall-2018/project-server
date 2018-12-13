const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');


// enhanced logging
app.use(morgan('dev'));

//serve public directory as static files:
app.use(express.static('public'));

// register the json "middleware" body parser
app.use(express.json());



// register our routes
app.use('/api/auth', auth);


const client = require('./db-client');

app.get('/api', (req, res) => {
  client.query(`
    SELECT * from profile;
  `)
    .then(result => res.json(result.rows));
});
module.exports = app;