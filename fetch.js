var async       = require('async');
var request     = require('request');
var toTrack     = require("./to_track");
var dates       = require("./dates");
var data        = require("./data");

// Get our JSON config file
var teams = toTrack.data_sources.teams;

module.exports = {
  updateAllNumbers: updateAllNumbers,
  updateRecentNumbers: updateRecentNumbers,
  updateNumbersForSrc: updateNumbersForSrc
};

// Iterate through all the items in the config and fetch the latest numbers
function updateAllNumbers (callback) {
  async.eachLimit(teams, 2,
    function (item, callback) {
      var datesAll = dates.year2014;
      updateForTeam(item, datesAll, callback);
    },
    function updatedAllNumbers (err) {
      if (err) console.log(err);
      callback(null);
  });
}

// Iterate through all the items in the config and fetch the latest numbers
function updateRecentNumbers (callback) {
  async.eachLimit(teams, 2,
    function (item, callback) {
      var datesRecent = dates.recent();
      updateForTeam(item, datesRecent, callback);
    },
    function updatedRecentNumbers (err) {
      if (err) console.log(err);
      callback(null);
  });
}

function updateForTeam (item, datesToCheck, callback) {
  var team = item.name;
  var buckets = item.buckets;
  var keys = Object.keys(buckets);

  async.eachLimit(keys, 2, checkBuckets, function checkedBuckets (err) {
    if (err) console.log(err);
    callback(null);
  });

  function checkBuckets (item, callback) {
    var bucket = item;
    var srcs = buckets[item];

    async.eachLimit(srcs, 2, checkSrc, function checkedSources (err) {
      if (err) console.log(err);
      callback(null);
    });

    function checkSrc (item, callback) {
      updateNumbersForSrc (team, bucket, item, datesToCheck, function updatedNumbers (err, res) {
        if (err) console.log(err);
        console.log('Updated numbers for:', team, bucket, item.description);
        callback(null);
      });
    }
  }
}

function updateNumbersForSrc (team, bucket, item, datesToCheck, callback) {
  var description = item.description;
  var src = item.src;
  // the 'standard field names'
  var target_json_field_total_active = "total_active_contributors";
  var target_json_field_new_active_7_days = "new_contributors_7_days";
  // if a source is using a different field name, lookup this instead
  if (item.active_field_name) {
    target_json_field_total_active = item.active_field_name;
  }
  if (item.new_field_name) {
    target_json_field_new_active_7_days = item.new_field_name;
  }

  async.parallel([

    function updateIntervalsForYear (callback) {
      async.eachSeries(datesToCheck,
        function (item, callback) {
          getNumbersForDate(item, 'counts', function gotNumbersForDate (err, res) {
            if (err) console.log(err);
            callback(null);
          });
        },
        function gotNumbersForDates (err, res) {
          if (err) console.log(err);
          callback(null);
       });
    },

    function updateNumbersForToday (callback) {
      var now = new Date();
      var today = dateToISOString(now);
      getNumbersForDate(today, 'counts_latest', function gotNumbersForDate (err, res) {
        if (err) console.log(err);
        callback(null);
      });
    }
  ],
  function(err, results){
    // both parallel tasks complete
    if (err) console.log(err);
    callback(null);
  });

  function getNumbersForDate (item, table_name, callback) {
    var options = {};
    var date = item;
    options.url = src + date;

    request(options, function savedNumbers (err, repsonse, body) {
      if (err) console.log(err);

      var total_active = 0;
      var new_active = 0;

      if (body) {
        try {
          var info = JSON.parse(body);
          if (info && info[target_json_field_total_active]) { total_active = info[target_json_field_total_active]; }
          if (info && info[target_json_field_new_active_7_days]) { new_active = info[target_json_field_new_active_7_days]; }

          data.saveItem(team, bucket, date, description, total_active, new_active, table_name, function saved (err) {
            if (err) console.log(err);
            callback(null);
          });
        } catch (e) {
          // An error has occured, handle it, by e.g. logging it
          console.error("Error in json for:", options.url);
          console.log(e);
          callback(null);
        }

      } else {
        console.error("Error on:", options.url);
        callback(null);
      }
    });
  }
}

// Utitlity bits
function dateToISOString (date) {
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth()+1)).slice(-2); // 0 index
  var day = ('0' + date.getDate()).slice(-2);
  return year + '-' + month + '-' + day;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
