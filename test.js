// var fetch = require("./fetch");
// fetch.updateAllNumbers(function numbersFetched () {
//   console.log("Numbers fetched");
// });

var async = require('async');
var gdoc = require("./gdoc");


async.timesSeries(5, function (n, next) {
  gdoc.getProjections(function got (err, res) {
    console.log(res);
    next(err);
  });
}, function (err) {
  process.exit(0);
});

