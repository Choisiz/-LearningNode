/*스트림:쓰기 */
const fs = require("fs");

const writeStream = fs.createWriteStream("./WriteStream.txt");
writeStream.on("finish", () => {
  console.log("파일쓰기완료");
});

writeStream.write("한번더");
writeStream.write("한번더2");
writeStream.end();
