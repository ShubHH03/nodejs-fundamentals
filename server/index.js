const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url}: New Request Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch(req.url){
        case "/":
            res.end("This is Homepage");
            break;
        case "/about":
            res.end("This is About");
            break;
        default:
            res.end("Invalid route");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server running on port: 8000");
});
