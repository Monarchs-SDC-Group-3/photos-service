const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/index.js');
const { getPhotos } = require('./getPhotos');

const app = express();
const port = 3000;

const PUB_DIR = path.resolve(__dirname, "..", "public");

app.use(morgan('dev'));
app.use('/:id', express.static(PUB_DIR));

// QUERYING POSTGRES
app.get('/api/homes/:id/photos', async (req, res) => {
  let { id } = req.params;

  console.log(`Item id is: ${id}`);

  try {
    const photos = await getPhotos(id);
    console.log(photos)
    res.send(photos);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.sendStatus(500);
  }

})

// QUERYING MONGO
// app.get('/api/homes/:id/photos', (req, res) => {
//   db.getPhotos(req.params.id)
//     .then((listing) => {
//       console.log(`Listing: ${listing}`);
//       res.send(listing.photos);
//     })
//     .catch((err) => {
//       res.sendStatus(404);
//     })
// })

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`running on ${port}`);
  }
});