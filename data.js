var mysql       = require('mysql');
var async       = require('async');
var dates       = require("./dates");

var connectionOptions = {
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
  port     : process.env.DB_PORT
};

if (process.env.DB_SSL) {
  // SSL is used for Amazon RDS, but not necessarily for local dev
  connectionOptions.ssl = process.env.DB_SSL;
}

// var pool = mysql.createPool(connectionOptions);




/*
* RESET THE DATABASE
* Allows the DB to be rebuilt from scratch
*/
exports.resetDatabaseYesIreallyWantToDoThis = function resetDatabaseYesIreallyWantToDoThis(callback) {

  var connection = mysql.createConnection(connectionOptions);
  connection.connect(function connectionAttempted (err) {
    if (err) {
      console.log(err);
    } else {
      async.parallel ([
          function truncateCounts (callback) {
            connection.query('TRUNCATE counts;',
                            function queryComplete (err, result) {
                              if (err) console.log(err);
                              callback(null);
                            });
          },
          function truncateCountsLatest (callback) {
            connection.query('TRUNCATE counts_latest;',
                            function queryComplete (err, result) {
                              if (err) console.log(err);
                              callback(null);
                            });
          }
      ],
      // parallel callback
      function (err, results) {
        if (err) console.log(err);
        connection.end();
        callback(null);
      });
    }
  });
};



/*
* QUERY
*/
exports.getAggregateNumbers = function getAggregateNumbers (callback) {

  var connection = mysql.createConnection(connectionOptions);
  connection.connect(function connectionAttempted (err) {

    if (err) {
      console.log(err);
      callback(null, null);
    }
    else {
      connection.query('SELECT DATE_FORMAT(date, "%Y-%m-%d") as wkcommencing, sum(total_active) as totalactive, sum(new) as new ' +
                        'FROM counts ' +
                        'GROUP BY date ' +
                        'ORDER BY date;',
                        function queryComplete (err, result) {
                          if (err) {
                            console.log(err);
                            callback(null, null);
                          }
                          connection.end();
                          callback(null, result);
                        });
    }
  });
};


exports.getLatestNumbers = function getLatestNumbers (callback) {

  var connection = mysql.createConnection(connectionOptions);
  connection.connect(function connectionAttempted (err) {

    if (err) {
      console.log(err);
      callback(null, null);
    }
    else {
      var latest = {};

      async.parallel ([
          function getBuckets (callback) {
            connection.query('SELECT bucket, DATE_FORMAT(date, "%Y-%m-%d") as last_updated, ' +
                            'sum(total_active) as total_active, sum(new) as new ' +
                            'FROM counts_latest ' +
                            'GROUP BY bucket ' +
                            'ORDER BY bucket;',
                            function queryComplete (err, result) {
                              if (err) {
                                console.log(err);
                                callback(null);
                              }
                              latest.buckets = result;
                              callback(null);
                            });
          },
          function getTotal (callback) {
            connection.query('SELECT DATE_FORMAT(date, "%Y-%m-%d") as last_updated, ' +
                            'sum(total_active) as total_active, sum(new) as new ' +
                            'FROM counts_latest;',
                            function queryComplete (err, result) {
                              if (err) {
                                console.log(err);
                                callback(null);
                              }
                              latest.total = result[0]; // only looking a single result
                              callback(null);
                            });
          }
      ],
      // parallel callback
      function (err, results) {
        if (err) console.log(err);
        connection.end();
        callback(null, latest);
      });
    }
  });
};


/*
* SAVE
*/
exports.saveItem = function saveItem(team, bucket, date, description, total_active, new_active, table_name, callback) {

  var connection = mysql.createConnection(connectionOptions);
  connection.connect(function connectionAttempted (err) {

    if (err) {
      console.error(err);
      callback(err);

    } else {

      var entry = {
        team : team,
        bucket : bucket,
        date : new Date(date),
        description : description,
        total_active : total_active,
        new : new_active
      };

      // Using REPLACE INTO to avoid worrying about duplicate entries
      // There is a unique key set across all team + bucket + date + description
      connection.query('REPLACE INTO ' + table_name + ' SET ?', entry, function(err, result) {
        if(err) {
          console.error(err);
          callback(err);
        } else {
          // console.log('saved activity');
          // console.log(activity);
        }
        connection.end();
        callback(null);
      });
    }
  });
};
