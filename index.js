require('dotenv').config();
const fs = require('fs');
const express = require('express');
const uuid = require('uuid/v1');

const app = express();
const port = process.env.PORT || 3000;

function requestIdMiddleware(req, res, next) {
  // use ``res.locals`` to store temporary user data
  // that’s only available during that user’s request/response cycle
  res.locals.id = uuid();
  next();
}

app.use(requestIdMiddleware);

app.get('/algorithmstoliveby', (_, res) => {
  fs.readFile('./algorithmstoliveby.html', 'utf8', (err, text) => {
    res.send(text);
  });
});

app.get('*', (_, res) => {
  res.send(res.locals.id);
});

app.listen(port, () => {
  console.log(`... listening to port ${port}`);
});
