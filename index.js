require('dotenv').config();
const fs = require('fs');
const express = require('express');
const { pick } = require('lodash');
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

app.get('*', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send({
    req: pick(req, [
      'baseUrl',
      'body',
      'cookies',
      'headers',
      'hostname',
      'path',
      'protocol',
      'query',
      'readable',
      'route',
      'secure',
      // 'signedCookies',
      'stale',
      'subdomains',
      'url',
      'xhr',
    ]),
    res: { locals: res.locals },
  });
});

app.listen(port, () => {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`... listening to port ${port}`);
});
