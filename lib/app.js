const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const jwt = require('./jwt');


//morgan logging 
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static('public'));


//register roots
/*eslint-disable-next-line */
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

app.get('/', (req, res) => {
    client.query(`
    SELECT * from profile;
  `)
        .then(result => res.json(result.rows));
});
module.exports = app;