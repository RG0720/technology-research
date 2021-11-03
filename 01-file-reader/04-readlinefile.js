const readline = require("readline");
const fs = require("fs");
const path = require("path");

const readInterface = readline.createInterface({
  input: fs.createReadStream(path.resolve(__dirname, "test.log")),
});

readInterface.on("line", (data) => {
  console.log(data);
});
