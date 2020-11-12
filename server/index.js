const express = require('express');
const path = require('path');

const app = express();

const port = 3000;
const PUB_DIR = path.resolve(__dirname, "..", "public");

app.use(express.static(PUB_DIR));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`running on ${port}`);
  }
});