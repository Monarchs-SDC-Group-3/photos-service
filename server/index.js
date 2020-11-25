const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();

const port = 3000;
const PUB_DIR = path.resolve(__dirname, "..", "public");

app.use(express.static(PUB_DIR));

app.get('/api/homes/:id/photos', (req, res) => {
  db.getPhotos(req.params.id)
    .then((listing) => {
      res.send(listing.photos);
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