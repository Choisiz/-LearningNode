/*폴더 내용확인, 파일삭제, 폴더삭제 */
const fs = require("fs");

//폴더내용확인
fs.readdir("./folder", (err, dir) => {
  if (err) throw err;
  console.log("폴더확인", dir);
  //파일삭제성공: 파일없다면 에러난다.(파일있는지 확인)
  fs.unlink("./folder/newfile.js", (err) => {
    if (err) throw err;
    console.log("파일삭제성공");
    //폴더삭제성공: 파일있다면 에러난다.(파일지우고 확인)
    fs.rmdir("./folder", (err) => {
      if (err) throw err;
      console.log("폴더삭제성공");
    });
  });
});
