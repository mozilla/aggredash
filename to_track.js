
/*
NOTES: If you change and existing name, bucket, or description, run a reset on the database as these form a unique key.
Without the reset, counts would be duplicated.
*/
exports.data_sources = {
  "teams" : [
    {
      "name" : "webmaker",
      "buckets" : {
        "code" : [
              {
                "description": "github",
                "src": "http://gitribution.herokuapp.com/api/?team=webmaker&date="
              }
            ],
        "content" : [
              {
                "description": "transifex",
                "src": "http://transibution.herokuapp.com/api/?team=webmaker&date="
              },
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=webmaker&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=webmaker&bucket=events&date="
              },
              {
                "description": "webmaker.org",
                "src": "http://park-warden-production.herokuapp.com/?bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=webmaker&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=webmaker&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=webmaker&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=webmaker&bucket=apis&date="
              }
            ],
      }
    },
    {
      "name" : "appmaker",
      "buckets" : {
        "code" : [
              {
                "description": "github",
                "src": "http://gitribution.herokuapp.com/api/?team=appmaker&date="
              }
            ],
        "content" : [
              {
                "description": "transifex",
                "src": "http://transibution.herokuapp.com/api/?team=appmaker&date="
              },
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=appmaker&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=appmaker&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=appmaker&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=appmaker&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=appmaker&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=appmaker&bucket=apis&date="
              }
            ],
      }
    },
    {
      "name" : "openbadges",
      "buckets" : {
        "code" : [
              {
                "description": "github",
                "src": "http://gitribution.herokuapp.com/api/?team=openbadges&date="
              }
            ],
        "content" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=openbadges&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=openbadges&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=openbadges&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=openbadges&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=openbadges&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=openbadges&bucket=apis&date="
              }
            ],
      }
    },
    {
      "name" : "opennews",
      "buckets" : {
        "code" : [
              {
                "description": "github",
                "src": "http://gitribution.herokuapp.com/api/?team=opennews&date="
              }
            ],
        "content" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=opennews&bucket=content&date="
              },
              // {
              //   "description": "source",
              //   "src": "https://source.mofostaging.net/en-US/api/1.0/contributor-count/?date=",
              //   "active_field_name": "authors_previous_year",
              //   "new_field_name": "authors_new_previous_7_days"
              // }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=opennews&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=opennews&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=opennews&bucket=community&date="
              },
              // {
              //   "description": "source",
              //   "src": "https://source.mofostaging.net/en-US/api/1.0/contributor-count/?date=",
              //   "active_field_name": "people_previous_year",
              //   "new_field_name": "people_new_previous_7_days"
              // }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=opennews&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=opennews&bucket=apis&date="
              }
            ],
      }
    },
    {
      "name" : "engagement",
      "buckets" : {
        "code" : [
            ],
        "content" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=engagement&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=engagement&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=engagement&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=engagement&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=engagement&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=engagement&bucket=apis&date="
              }
            ],
      }
    },
    {
      "name" : "hive",
      "buckets" : {
        "code" : [
            ],
        "content" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=hive&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=hive&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=hive&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=hive&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=hive&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=hive&bucket=apis&date="
              }
            ],
      }
    },
    {
      "name" : "sciencelab",
      "buckets" : {
        "code" : [
              {
                "description": "github",
                "src": "http://gitribution.herokuapp.com/api/?team=sciencelab&date="
              }
            ],
        "content" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=sciencelab&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=sciencelab&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=sciencelab&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=sciencelab&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=sciencelab&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=sciencelab&bucket=apis&date="
              }
            ],
      }
    },
    {
      "name" : "mofo",
      "buckets" : {
        "code" : [],
        "content" : [],
        "events" : [
              {
                "description": "mozfest",
                "src": "http://mozfaced.herokuapp.com/?date="
              }
            ],
        "training" : [],
        "community" : [],
        "testing" : [],
        "apis" : [],
      }
    }
  ]
};
