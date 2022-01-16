const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// middleware & static files
// app.use(express.static('public'));
app.use(express.static('views'));

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to player application." });
});

require("./routes/teamRouter.js")(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});