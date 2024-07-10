// config/db.js
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "quran",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL database.");
});

module.exports = connection;
