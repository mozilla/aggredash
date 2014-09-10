// web.js
var express 		= require("express");
var async       = require("async");
var dates       = require("./dates");
var data        = require("./data");
var gdoc        = require("./gdoc");
var app         = express();


/*
 UTIL
 */

function lastDayOfMonth (date) {
  // http://stackoverflow.com/questions/222309/calculate-last-day-of-month-in-javascript
  var lastDay = new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 0);
  return lastDay;
}

/**
 * Convert a JS date to string "YYYY-MM-DD"
 * @param  {Date} date
 * @return {str}
 */
function dateToISOtring(date) {
  var year = date.getUTCFullYear();
  var month = ('0' + (date.getUTCMonth() + 1)).slice(-2); // 0 index
  var day = ('0' + date.getDate()).slice(-2);
  var output = year + '-' + month + '-' + day;
  return output;
}


function monthlyPlannedToCumulativeProjection (actuals, planned) {
  var d = new Date();
  var currentMonth = d.getUTCMonth();
  var priorMonth = d.getUTCMonth() - 1;

  // actuals are weekly, but projections are monthly
  // to sync up roughly, we will add our projections onto the latest date in the prior month
  var latestDateInPriorMonth;
  var totalAtEndOfPriorMonth = 0;

  // look at all the records, and find the latest total in the month we care about
  for (var i = actuals.length - 1; i >= 0; i--) {
    if (actuals[i].wkcommencing) {
      var dateToCheck = new Date(actuals[i].wkcommencing);
      if (dateToCheck.getUTCMonth() === priorMonth) {
        if (!latestDateInPriorMonth) {
          // this is the first date in the month we care about
          latestDateInPriorMonth = new Date(dateToCheck);
          totalAtEndOfPriorMonth = actuals[i].totalactive;
        } else {
          if (dateToCheck > latestDateInPriorMonth) {
            // if we find a later date in that month, use that instead
            latestDateInPriorMonth = new Date(dateToCheck);
            totalAtEndOfPriorMonth = actuals[i].totalactive;
          }
        }
      }
    }
  }

  // this is getting really hacky, but this app should have a limited life.
  // this note is an apology to my future self when i revisit this
  var output = [];
  var finished2014 = false;
  var cumulative = totalAtEndOfPriorMonth;
  var workOnMonth = lastDayOfMonth(new Date());
  console.log('working on month', dateToISOtring(workOnMonth));

  while(!finished2014) {
    console.log('working on month', dateToISOtring(workOnMonth));

    // add to the cumulative projection
    for (var j = planned.length - 1; j >= 0; j--) {
      if (planned[j].month === dateToISOtring(workOnMonth)) {
        if (planned[j].planned) {
          console.log('cumulative was', cumulative);
          cumulative += parseInt(planned[j].planned);
          console.log('cumulative is now', cumulative);
        }
      }
    }

    // save this to output
    output.push({
      month: dateToISOtring(workOnMonth),
      projection: cumulative
    });

    // move to next month
    var startOfNextMonth = new Date(workOnMonth.getUTCFullYear(), workOnMonth.getUTCMonth() + 1, 4);
    workOnMonth = lastDayOfMonth(startOfNextMonth);

    // when we reach 2015, stop
    if (workOnMonth.getUTCFullYear() === 2015) {
      finished2014 = true;
    }
  }
  return output;
}


/*
  ROUTES
 */


app.get('/', function(req, res) {
  res.send("You're probably looking for /api or for more info about this app see https://github.com/adamlofting/aggredash");
});

app.get('/api', function(req, res) {
  res.send("You're probably looking for /api/mofo/2014");
});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/api/mofo/2014', function(req, res) {

  async.parallel({
    db: function(callback){
      data.getAggregateNumbers(null, function gotCounts (err, result) {
        callback(null, result);
      });
    },
    gdoc: function(callback){
      gdoc.getViewProjections('all', function gotProjections (err, result) {
        callback(null, result);
      });
    }
  },
  function(err, results) {
    var output = results.db;
    var projections = monthlyPlannedToCumulativeProjection(results.db, results.gdoc);
    console.log(projections);
    output = output.concat(projections);
    res.json(output);
  });
});

app.get('/api/mofo/2014/latest', function(req, res) {
  data.getLatestNumbers(null, function gotLatestNumbers (err, result) {
    res.json(result);
  });
});

app.get('/api/:teamname/2014', function(req, res) {
  async.parallel({
    db: function(callback){
      data.getAggregateNumbers(req.params.teamname, function gotCounts (err, result) {
        callback(null, result);
      });
    },
    gdoc: function(callback){
      gdoc.getViewProjections(req.params.teamname, function gotProjections (err, result) {
        callback(null, result);
      });
    }
  },
  function(err, results) {
    var output = results.db;
    var projections = monthlyPlannedToCumulativeProjection(results.db, results.gdoc);
    console.log(projections);
    output = output.concat(projections);
    res.json(output);
  });
});

app.get('/api/:teamname/2014/latest', function(req, res) {
  data.getLatestNumbers(req.params.teamname, function gotLatestNumbers (err, result) {
    res.json(result);
  });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
