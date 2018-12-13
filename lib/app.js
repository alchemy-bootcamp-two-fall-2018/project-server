const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const jwt = require('./jwt');

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

const client = require('./db-client');

//changed to app.get('/api') below
//follow http://localhost:3000/api to render api instead of index.html

app.get('/api', (req, res) => {
  client.query(`
        SELECT * from profile;
    `)
    .then(result => res.json(result.rows));
});

module.exports = app;