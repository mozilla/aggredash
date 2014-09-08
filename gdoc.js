var async = require('async');
var csv = require('csv');
var request = require('request');

var NodeCache = require( "node-cache" );
var myCache = new NodeCache();

var GDOC_PROJECTIONS = 'https://docs.google.com/spreadsheets/d/1LRnsbZCmrO9xU7NSQLQyAUpvKmi0rrtZTSPPQKL_AN8/export?format=csv&id=1LRnsbZCmrO9xU7NSQLQyAUpvKmi0rrtZTSPPQKL_AN8&gid=322337069';


/**
 * UTILS
 */
function toInt(s) {
  if (s) {
    s = s.replace(/,/g, "");
  }
  var i = parseInt(s);
  if (!i) { i = 0; }
  return i;
}


/**
 * CSV
 */
function processCSV(fetchedCSV, callback) {
  var output = [];

  csv()
    .from.string(fetchedCSV, {
      columns: true,
      delimiter: ',',
      escape: '"',
    })
    .to.stream(process.stdout, {
      columns: ['month', 'projection']
    })
    .transform(function (row) {
      if (row.month && row.projection) {
        output.push({
          month: row.month,
          projection: row.projection
        });
      }
    })
    .on('end', function (count) {
      callback(null, output);
    })
    .on('error', function (error) {
      console.log(error.message);
      callback(null);
    });
}

function importCSV (callback) {
  // get the latest from Google
  request.get(GDOC_PROJECTIONS,
    function (err, res, body) {
      if (!err && res.statusCode === 200) {
        // it loaded the gdoc
        var fetchedCSV = body;
        processCSV(fetchedCSV, function processedCSV(err, res) {
          if (err) {
            console.log(err);
            return callback(err);
          }
          callback(null, res);
        });
      } else {
        console.log("Error fetching Google Doc");
        console.log(err);
        console.log(res.statusCode);
        return callback(null);
      }
    }
  );
}

/**
 * DATA
 */

function getProjections (callback) {
  // timer to check impact of loading
  console.time('getView');
  var cacheKey = 'projections_data';

  // check cache
  var cache = myCache.get(cacheKey);

  // check if anythign is saved in the cache
  if (cache[cacheKey]) {
    // Yes, use the cached list
    console.log('loaded from cache');
    console.timeEnd('getView');

    callback(null, cache[cacheKey]);

  } else {
    // No, get this from gdocs
    console.log('loading from google docs');

    importCSV(function (err, result) {
      if (err) {
        console.log(err);
        return callback(err);
      }
      console.timeEnd('getView');
      myCache.set(cacheKey, result, 600 ); // 10 mins
      callback(null, result);
    });
  }
}

module.exports = {
  getProjections: getProjections,
};

