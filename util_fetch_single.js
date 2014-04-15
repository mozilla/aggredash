var fetch = require("./fetch");
var dates = require("./dates");


var team = 'webmaker';
var bucket = 'events';
var description = 'webmaker.org';
var src = 'http://park-warden-production.herokuapp.com/?date=';
var datesToCheck = dates.year2014;

fetch.updateNumbersForSrc(team, bucket, description, src, datesToCheck,function numbersFetchedForSrc () {
  console.log("== # == Single Numbers fetched");
  process.exit(0);
});
