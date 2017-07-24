const express = require('express')
const app = express();
const path = require('path');
const logger = require("morgan");



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/dist', express.static(path.join(__dirname + '/dist')));

app.listen(8080, function () {
    console.log("The module-seed fragment started on port 3003");
});