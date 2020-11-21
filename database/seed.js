const db = require('./index.js');
const faker = require('faker');

const randomInt = () => Math.floor(Math.random() * 25);

const padNum = (number, size) => {
  const result = `0000${number}`;
  return result.substr(-size);
};

const seedPhotos = function() {
  let count = 0;
  for (let i = 1; i < 101; i++) {
    let listingData = {
      listing_id: i,
      photos: [],
    }
    for (let j = 0; j < 25; j++) {
      listingData.photos.push({
        url: `https://fecphotosphotos.s3-us-west-2.amazonaws.com/images/${padNum(count, 4)}.jpg`,
        key: j + 1,
        description: `${faker.random.words(randomInt())}`
      });
      count++;
    }
    db.createPhotosDoc(listingData);
  }
}

seedPhotos();