const express = require("express");
const path = require('path');
const Harrow = require('../data/Harrow.json');
const Heathrow = require('../data/Heathrow.json');
const Stratford = require('../data/Stratford.json');


const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

const routes = [{
  "/pharmacies": "returns pharmacies list for in a specific area",
  "/colleges": "returns colleges list for in a specific area",
  "/doctors": "returns doctors list for in a specific area",
  "/hospitals": "returns hospitals list for in a specific area",
  }];
  

app.get("/api", (req, res) => {
  res.json({message: 'Server is ready!'});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});