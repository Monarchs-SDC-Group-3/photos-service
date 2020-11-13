const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1:27017/';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
  .catch(err => {
    console.log(err);
  })

const db = mongoose.connection;

db.on('connected', () => {console.log('connected to MongoDB')});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

const photosSchema = new Schema({
  listing_id: Number,
  url: String,
  description: String
});

const listingsSchema = new Schema({
  name: String,
  photos: [{type: String}],
  //or photos: [String]
});

const Photos = mongoose.model('photos', photosSchema );

const Listings = mongoose.model('listings', listingsSchema );

// Create and save an instance of model
// photos.create({
//   listing_id: 'tbd',
//   url: 'tbd',
//   description: 'tbd'
// }, function (err, instance) {
//   if (err) {
//     console.log(err);
//   };
//   // saved!
// });

// listings.create({
//   name: 'tbd',
//   photos: '[] some array'
// }, (err, instance) => {
//   if (err) {
//     return handleError(err);
//   }
// })