const buffer = Buffer.from("나를 버퍼로 바꿔보자");
console.log("from", buffer);
console.log("from_len", buffer.length); //byte단위
console.log("from_st", buffer.toString());

const arr = [
  Buffer.from("띄엄 "),
  Buffer.from("띄엄 "),
  Buffer.from("띄어쓰기"),
];
const buffer2 = Buffer.concat(arr);
console.log("concat", buffer2.toString());

const buffer3 = Buffer.alloc(5); //빈버퍼생성
console.log("alloc", buffer3);
