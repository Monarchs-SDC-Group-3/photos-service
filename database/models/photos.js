//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/photos_service';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Define a schema
const Schema = mongoose.Schema;

const photosSchema = new Schema({
  listing_id: Number,
  url: String,
  description: String
});

// Compile model from schema
const photos = mongoose.model('photos', photosSchema );

const listingsSchema = new Schema({
  name: String,
  photos: []
});

// Compile model from schema
var listings = mongoose.model('listings', listingsSchema );

// Create and save an instance of model
photos.create({
  listing_id: 'tbd',
  url: 'tbd',
  description: 'tbd'
}, function (err, instance) {
  if (err) {
    console.log(err);
  };
  // saved!
});

listings.create({
  name: 'tbd',
  photos: '[] some array'
}, (err, instance) => {
  if (err) {
    return handleError(err);
  }
})