const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const jwt = require('./jwt.js');
const client = require('./db-client');

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(express.json());

/*eslint-disable-next-line*/
function checkAuth(req, res, next) {
  const token = req.get('Authorization');
  if(!token) {
    res.status(401).json({ error: 'no authorization found' });
    return;
  }

  let payload = null;
  console.log(token);
  try {
    payload = jwt.verify(token);
  }
  catch (err) {
    res.status(401).json({ error: 'invalid token' });
    return;  
  }

  req.userId = payload.id;
  next();
}

app.use('/api/auth', auth);

app.get('/api', (req, res) => {
  client.query(`
    SELECT * from profile;
  `)
    .then(result => res.json(result.rows));
});

module.exports = app;