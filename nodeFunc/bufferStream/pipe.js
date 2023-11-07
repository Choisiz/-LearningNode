const fs = require("fs");

const readStream = fs.createReadStream("readme4.txt");
const writeStream = fs.createWriteStream("copy.txt");
readStream.pipe(writeStream);
