const db = require('./index.js');
const faker = require('faker');

const randomInt = () => Math.floor(Math.random() * 25);

let count = 0;

const seedPhotos = function() {
  if (count === 0 ) {
    for (let i = 1; i < 101; i++) {
      let listingData = {
        listing_id: i,
        url: [],
        description: `${faker.random.words(randomInt())}`
      }
      for (let j = 0; j < 25; j++) {
        listingData.url.push(`https://loremflickr.com/1024/683/interior_design?lock=${i+j}&random${j}`
        )
      }
      db.createPhotosDoc(listingData);
    }
  }
  count++;
}

seedPhotos();