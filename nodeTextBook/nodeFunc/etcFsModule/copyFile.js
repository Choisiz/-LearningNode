/*쉽게 파일 복사하기 */

const fs = require("fs");

fs.copyFile("readme4.txt", "write.txt", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("복사완료");
});
