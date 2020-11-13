const db = require('./index.js');
const faker = require('faker');

const randomInt = () => Math.floor(Math.random() * 25);

const seedPhotos = function() {
  for (let i = 1; i < 101; i++) {
    let listingData = {
      listing_id: i,
      url: "https://loremflickr.com/1024/683/interior_design",
      description: `${faker.random.words(randomInt())}`
    }
    db.createPhotosDoc(listingData);
  }
}

seedPhotos();