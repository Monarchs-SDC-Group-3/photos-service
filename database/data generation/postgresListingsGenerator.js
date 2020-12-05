const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 1000000;
const filename = argv.output || 'listings.csv';
const stream = fs.createWriteStream(filename);

const picNum = () => padNum(Math.ceil(Math.random() * 1000), 4);
const randomInt = () => Math.ceil(Math.random() * 10);
const padNum = (number, size) => {
  const result = `0000${number}`;
  return result.substr(-size);
}

const createListing = (i, j) => {
  const listing_id = i;
  const url = `https://repairbnbphotos.s3-us-west-2.amazonaws.com/images/${picNum()}.jpg`;
  const key = j;
  const description = `${faker.random.words(randomInt())}`;

  return `${listing_id},${url},${key},${description}\n`;
}

const startWriting = (writeStream, encoding, done) => {
  let i = -1;
  function writing() {
    let canWrite = true;
    do {
      i++;
      // check if i === lines so we would write and call 'done'
      if (i === lines) {
        let listing = createListing(i + 1, 1);
        // we are done so fire callback
        writeStream.write(listing, encoding, done);
      } else {
        // we are not done so don't fire callback
        // create a for loop that is random 5-10 long
        let rando = Math.floor(Math.random() * 5) + 5;
        for (let k = 1; k <= rando; k++) {
          let listing = createListing(i + 1, k);
          canWrite = writeStream.write(listing, encoding);
        }
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
stream.write(`listing_id,url,key,description\n`, 'utf-8');
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
})










// SEEDS CORRECTLY, BUT SLOWLY
// for (let i = 1; i < 10; i++) {
//   const rando = Math.floor(Math.random() * 5) + 5;
  // for (let j = 1; j < rando; j++) {
  //   records.push({
  //     listing_id: i,
  //     url: `https://repairbnbphotos.s3-us-west-2.amazonaws.com/images/${picNum()}.jpg`,
  //     key: j,
  //     description: `${faker.random.words(randomInt())}`,
  //   });
//   }
// }

// csvWriter.writeRecords(records)
//   .then(() => {
//     console.log('...Done');
//   });
