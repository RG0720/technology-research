const http = require("http");
const fs = require("fs");

const server1 = http.createServer(function (req, res) {
  fs.readFile(__dirname + "/test.log", "utf-8", (err, data) => {
    res.setHeader("Content-Type", "text/html;charset=utf8");
    res.end(data);
  });
});

const server2 = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + "/test.log", "utf-8");
  res.setHeader("Content-Type", "text/html;charset=utf8");
  stream.pipe(res);
});

server1.listen(3000);
server2.listen(3001);
