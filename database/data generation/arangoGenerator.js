
// DATA GEN SCRIPT 
// iterate to 10 million
// create listing as object with listing_id set to i
// create photos as empty array
// iterate from random number between 5 and 10
// create object
// set object url to random url
// set object key to current iteration
// set description to generated description

const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 1000000;
const filename = argv.output || 'listings.csv';
const stream = fs.createWriteStream(filename);

const picNum = () => `0000${Math.ceil(Math.random() * 1000)}`.substr(-4, 4);
const randomInt = () => Math.ceil(Math.random() * 8);
const padNum = (number) => {
  const result = `0000${number}`;
  return result.substr(-size);
}

const createListing = (i) => {
  // create newListing obj
  var newListing = {
    listing_id: i,
    photos: []
  }

  // iterate random number from 5-10
  let rando = Math.floor(Math.random() * 5) + 5;
  for (let k = 1; k <= rando; k++) {
    // create photo obj
    let photo = {
      listing_key: k,
      listing_url: `https://repairbnbphotos.s3-us-west-2.amazonaws.com/images/${picNum()}.jpg`,
      listing_description: `${faker.lorem.sentence()}`
    };
    // push to newObj.photos
    newListing.photos.push(photo);
  }

  //   const listing_url = `https://repairbnbphotos.s3-us-west-2.amazonaws.com/images/${picNum()}.jpg`;
  // const listing_key = j;
  // const listing_description = `${faker.commerce.productDescription()}`;

  // return `${listing_id}|${listing_url}|${listing_key}|${listing_description}\n`;
  return `${JSON.stringify(newListing)}\n`;
}

const startWriting = (writeStream, encoding, done) => {
  let i = 0;
  function writing() {
    let canWrite = true;
    do {
      i++;
      // check if i === lines so we would write and call 'done'
      if (i === lines) {
        let listing = createListing(i);
        // we are done so fire callback
        writeStream.write(listing, encoding, done);
      } else {
        // we are not done so don't fire callback
        let listing = createListing(i);
        canWrite = writeStream.write(listing, encoding);
      }
      // else call write and continue looping
    } while (i < lines && canWrite)
    if (i < lines && !canWrite) {
      // our buffer for stream filled and need to wait for drain
      // Write some more once it drains
      writeStream.once('drain', writing);
    }
  }
  // initiate our writing function
  writing()
}

// write our `header` line before invoking the loop
// stream.write(`listing_id,listing_url,listing_key,listing_description\n`, 'utf-8');
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
})