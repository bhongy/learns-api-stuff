require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('*', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`... listening to port ${port}`);
});
