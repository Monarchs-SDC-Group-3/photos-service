const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const seed = require('../database/seed.js');

const app = express();

const port = 3000;
const PUB_DIR = path.resolve(__dirname, "..", "public");

app.use(express.static(PUB_DIR));

app.get('/api/photos/:listing_id', (req, res) => {
  db.getPhotos(req.params.listing_id)
    .then((photos) => {
      res.send(photos.url);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
})

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`running on ${port}`);
  }
});