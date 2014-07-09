
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
              },
              {
                "description": "bugzilla",
                "src": "http://webmaker-bugzilla-counter.herokuapp.com/?date="
              }
            ],
        "content" : [
              {
                "description": "transifex",
                "src": "http://transibution.herokuapp.com/api/?team=webmaker&date="
              },
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-webmaker&bucket=content&date="
              },
              {
                "description": "webmaker.org",
                "src": "http://park-warden-production.herokuapp.com/api/contributions/content/"
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-webmaker&bucket=events&date="
              },
              {
                "description": "webmaker.org",
                "src": "http://park-warden-production.herokuapp.com/api/contributions/events/"
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-webmaker&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-webmaker&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-webmaker&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-webmaker&bucket=apis&date="
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
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-appmaker&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-appmaker&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-appmaker&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-appmaker&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-appmaker&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-appmaker&bucket=apis&date="
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
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-openbadges&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-openbadges&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-openbadges&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-openbadges&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-openbadges&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-openbadges&bucket=apis&date="
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
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-opennews&bucket=content&date="
              },
              {
                "description": "source",
                "src": "https://source.opennews.org/en-US/api/1.0/contributor-count/?date=",
                "active_field_name": "authors_previous_year",
                "new_field_name": "authors_new_previous_7_days"
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-opennews&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-opennews&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-opennews&bucket=community&date="
              },
              {
                "description": "source",
                "src": "https://source.opennews.org/en-US/api/1.0/contributor-count/?date=",
                "active_field_name": "people_previous_year",
                "new_field_name": "people_new_previous_7_days"
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-opennews&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-opennews&bucket=apis&date="
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
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-engagement&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-engagement&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-engagement&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-engagement&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-engagement&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-engagement&bucket=apis&date="
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
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-hive&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-hive&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-hive&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-hive&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-hive&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-hive&bucket=apis&date="
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
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-sciencelab&bucket=content&date="
              }
            ],
        "events" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-sciencelab&bucket=events&date="
              }
            ],
        "training" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-sciencelab&bucket=training&date="
              }
            ],
        "community" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-sciencelab&bucket=community&date="
              }
            ],
        "testing" : [
              {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-sciencelab&bucket=testing&date="
              }
            ],
        "apis" : [
            {
                "description": "adhoc",
                "src": "https://adhoctribution.herokuapp.com/api?team=mofo-sciencelab&bucket=apis&date="
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
