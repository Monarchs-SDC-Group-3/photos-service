const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1:27017/photos';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
  .catch(err => {
    console.log(err, 'is this the error?');
  })

const db = mongoose.connection;

db.on('connected', () => {console.log('connected to MongoDB')});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

const photosSchema = new Schema({
  listing_id: Number,
  photos: [Object],
});

const Photos = mongoose.model('photos', photosSchema );

// Create and save an instance of model
const createPhotosDoc = (data) => {
  let doc = new Photos(data);
  doc.save()
    .catch(err => {
      console.log('could not save document', err);
    })
    .then(() => {
      console.log('saved entry');
    })
};

const getPhotos = function(id) {
  return new Promise((resolve, reject) => {
    Photos.findOne({listing_id: id}, (err, photos) => {
      if (err) {
        reject(err);
      } else {
        resolve(photos);
      }
    });
  });
};

// createPhotosDoc({listing_id: 1, url:'url', description:'hi'})

module.exports = {createPhotosDoc, getPhotos};
