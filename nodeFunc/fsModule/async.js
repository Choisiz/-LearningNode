const fs = require("fs");
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("2", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("3", data.toString());
});
