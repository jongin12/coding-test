const http = require("http");
const qs = require("querystring");
const fs = require("fs");

const getRouter = require("./get-router");
const domMaker = require("./dom-maker");

const server = http.createServer((req, res) => {
  const getMethod = req.method;
  switch (getMethod) {
    case "GET":
      const getUrl = req.url;
      const testArray = ["test"];
      if (getUrl !== "/favicon.ico") {
        getRouter(getUrl, testArray);
        // * getRouter 출력결과 두번이 일어나는 것을 확인함
        // * 슬래쉬, 파비콘 두개라 두번 트랜잭션이 발생
        // * if 제어로 간단하게 해결할 수 있게 될 것
        // * /favicon.ico는 무시하게끔 만들던지, 파비콘 하나 설정해주면 될듯
        // ! /favicon.ico 요청은 무시하도록 설정함.
        // console.log(getUrl);
        // console.log(domMaker());

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(domMaker(getUrl));
        res.end();
      }
      break;
    case "POST":
      // console.log("hello post");
      let body = "";
      req.on("data", (data) => {
        body += data;
      });
      req.on("end", () => {
        body = qs.parse(body);
        console.log(body);
        fs.writeFileSync(`./content/text/${body.title}.txt`, body.description);
        res.writeHead(302, {
          Location: `http://127.0.0.1:3333/${body.title}.txt`,
        });
        res.end();
      });
      break;
    default:
      console.log("hello error");
      break;
  }
});

server.listen(3333, (err) => {
  if (err) throw err;
});
