/*폴더만들기,파일만들기,이름바꾸기 */
const fs = require("fs");

fs.access(
  "./folder", //폴더명
  fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, //존재,읽기,쓰기여부
  (err) => {
    if (err.code === "ENOENT") {
      console.log("폴더없음");
      fs.mkdir("./folder", (err) => {
        //폴더만들기
        if (err) throw err;
        console.log("폴더만들기 성공");

        fs.open("./folder/file.js", "w", (err, fd) => {
          //빈파일 만들기
          if (err) throw err;
          console.log("빈 파일 만들기 성공", fd);
          //이름 바꾸기
          fs.rename("./folder/file.js", "./folder/newfile.js", (err) => {
            if (err) throw err;
            console.log("이름바꾸기성공");
          });
        });
      });
    } else {
      console.log("이미폴더있음");
    }
  }
);
