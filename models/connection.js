const mysql = require("mysql");

var con = mysql.createConnection({
    host: "fantasypl.ctrrskicyzuj.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Manutd123",
    database: "Fantasy_PL"
});

  module.exports = con;