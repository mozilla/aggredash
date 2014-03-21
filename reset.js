var data        = require("./data");
var fetch       = require("./fetch");


data.resetDatabaseYesIreallyWantToDoThis(function dbReset () {
	console.log("DB Reset");
	fetch.updateAllNumbers(function numbersFetched () {
      console.log("Numbers fetched");
      process.exit(0);
    });
});

