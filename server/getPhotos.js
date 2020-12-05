const { db } = require('../database/index.js');

module.exports.getPhotos = async (listing_id) => {
  let listing;

  try {
    const results = await db.query(`SELECT * FROM listings WHERE listing_id = ${listing_id}`);
    listing = { listing_id: listing_id, photos: results.rows };
    console.log(`results in getPhotos: ${results.rows.length}`);
  } catch (err) {
    console.log(err);
  }
  return listing;
  }
