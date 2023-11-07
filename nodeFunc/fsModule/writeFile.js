const fs = require("fs");
fs.writeFile("./writeFile.txt", "글 작성하기", (err) => {
  if (err) {
    throw err;
  }
  fs.readFile("./writeFile.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
});
