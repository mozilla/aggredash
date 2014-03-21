var async       = require('async');
var request     = require('request');
var toTrack     = require("./to_track");
var dates       = require("./dates");
var data        = require("./data");

// Get our JSON config file
var teams = toTrack.data_sources['teams'];

module.exports = {
  updateAllNumbers: updateAllNumbers
}

// Iterate through all the items in the config and fetch the latest numbers
function updateAllNumbers (callback) {
  async.each(teams, updateForTeam, function updatedAllNumbers (err) {
    if (err) console.log(err);
    callback(null);
  });
}

function updateForTeam (item, callback) {
  var team = item.name;
  var buckets = item.buckets;
  var keys = Object.keys(buckets);

  async.each(keys, checkBuckets, function checkedBuckets (err) {
    if (err) console.log(err);
    callback(null);
  })

  function checkBuckets (item, callback) {
    var bucket = item;
    var srcs = buckets[item];

    async.each(srcs, checkSrc, function checkedSources (err) {
      if (err) console.log(err);
      callback(null);
    })

    function checkSrc (item, callback) {
      updateNumbersForSrc (team, bucket, item.description, item.src, function updatedNumbers (err, res) {
        if (err) console.log(err);
        console.log('Updated numbers for:', team, bucket, item.description);
        callback(null);
      });
    }
  }
}

function updateNumbersForSrc (team, bucket, description, src, callback) {
  async.parallel([

    function updateIntervalsForYear (callback) {
      async.each(dates.year2014,
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
      var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
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
      var info = JSON.parse(body);
      var total_active = 0;
      var new_active = 0;
      if (info.total_active_contributors) total_active = info.total_active_contributors;
      if (info.new_contributors_7_days) new_active = info.new_contributors_7_days;

      data.saveItem(team, bucket, date, description, total_active, new_active, table_name, function saved (err) {
        if (err) console.log(err);
        callback(null);
      });
    });
  }
}
