const http = require("http");
http
  .createServer((req, res) => {
    res.write("<h1>hello node</h1>");
    res.end("<h1>hello server</h1>");
  })
  .listen(8080, () => {
    console.log("8080 대기중");
  });
