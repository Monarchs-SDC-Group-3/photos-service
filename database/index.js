const { Pool } = require('pg');

const db = new Pool({
  user: 'loganrosenlund',
  password: 'password',
  host: 'localhost',
  database: 'photos',
  port: 5432,
});

// const getItem = (request, response) => {
//   const id = request;

//   pool.query('SELECT * FROM listings WHERE listing_id = $1', [id], (err, results) => {
//     if (err) {
//       throw err;
//     }
//     console.log(results.rows);
//     response.status(200).json(results.rows);
//   })
// }

module.exports = {
  db
};
