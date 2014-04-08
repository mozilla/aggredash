var fetch = require("./fetch");
fetch.updateAllNumbers(function numbersFetched () {
  console.log("== # == ALL Numbers fetched");
  process.exit(0);
});
