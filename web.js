// web.js
var express 		= require("express");
var app 				= express();
var dates       = require("./dates");
var data        = require("./data");

app.get('/', function(req, res) {
  res.send("You're probably looking for /api or for more info about this app see https://github.com/adamlofting/aggredash");
});


app.get('/api', function(req, res) {
  res.send("You're probably looking for /api/mofo/2014");
});

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/api/mofo/2014', function(req, res) {
  data.getAggregateNumbers(function gotCounts (err, result) {
    res.json(result);
  })
});

app.get('/api/mofo/2014/latest', function(req, res) {
  data.getLatestNumbers(function gotLatestNumbers (err, result) {
    res.json(result);
  })
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});