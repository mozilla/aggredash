var fetch = require("./fetch");
fetch.updateRecentNumbers(function numbersFetched () {
  console.log("== # == RECENT Numbers fetched");
  process.exit(0);
});
