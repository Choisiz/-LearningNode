const http = require("http");
const server = http.createServer((req, res) => {
  res.write("<h1>hello node</h1>");
  res.end("<h1>hello server/h1>");
});
server.listen(8080);
server.on("listening", () => {
  console.log("8080 대기중");
});
server.on("error", (e) => {
  console.log("e");
});
