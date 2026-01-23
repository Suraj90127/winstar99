const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "157.173.220.205",
  user: "winstar99",
  password: "winstar99@07lottery",
  database: "winstar99",
});

export default connection;
