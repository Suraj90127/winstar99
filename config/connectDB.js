const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "195.35.22.205",
  user: "winstar99",
  password: "winstar99@in91",
  database: "winstar99",
});

export default connection;
