
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
				"content" : [],
				"events" : [],
				"training" : [],
				"community" : [],
				"testing" : [],
				"apis" : [],
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
				"content" : [],
				"events" : [],
				"training" : [],
				"community" : [],
				"testing" : [],
				"apis" : [],
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
				"content" : [],
				"events" : [],
				"training" : [],
				"community" : [],
				"testing" : [],
				"apis" : [],
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
				"content" : [],
				"events" : [],
				"training" : [],
				"community" : [],
				"testing" : [],
				"apis" : [],
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
				"content" : [],
				"events" : [],
				"training" : [],
				"community" : [],
				"testing" : [],
				"apis" : [],
			}
		}
	]
}