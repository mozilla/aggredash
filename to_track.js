
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
              }
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
              }
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
    }
  ]
};
