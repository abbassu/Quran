// models/index.js
const db = require("../config/db");

module.exports = {
  query: (query, values) => {
    return new Promise((resolve, reject) => {
      db.query(query, values, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
};
