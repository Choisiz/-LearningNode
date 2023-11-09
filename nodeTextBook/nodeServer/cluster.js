const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;
console.log("numCPUs", numCPUs);
if (cluster.isMaster) {
  console.log(`마스터 프로세스 아이디 ${process.pid}`);
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    console.log("code", code, "signal", signal);
    cluster.fork();
  });
} else {
  http
    .createServer((req, res) => {
      // const targetWorker = cluster.workers[/* 워커의 ID를 입력하세요 */];
      // L위에 코드를 사용하면 특정워커를 직접 다룰 수 있다.
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1>Hello Node!</h1>");
      res.end("<p>Hello Cluster!</p>");
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    })
    .listen(8086);

  console.log(`${process.pid}번 워커 실행`);
}
