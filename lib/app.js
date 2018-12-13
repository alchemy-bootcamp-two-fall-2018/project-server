const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const jwt = require('./jwt');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

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
    // this code runs with verify fails
    res.status(401).json({ error: 'invalid token' });
    return;  
  }

  req.userId = payload.id;
  next();
}

// register our routes
app.use('/api/auth', auth);

// add routes here:

app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

module.exports = app;