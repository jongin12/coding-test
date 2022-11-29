const fs = require("fs");

const textDir = () => {
  let text = "";
  let data = fs.readdirSync("./content/text");
  data.map((fileName) => {
    text += `
    <a href=${fileName}>
      <li>${fileName}</li>
    </a>
    `;
  });
  return text;
};
// * text파일 목록

const dirArr = () => {
  let data = fs.readdirSync("./content/text");
  data = data.map((fileName) => {
    return "/" + fileName;
  });
  return data;
};
// * text파일 목록 배열

const file = (fileName) => {
  // console.log(fileName);
  let text = fs.readFileSync(fileName, "utf8");
  return text;
};
// * 파일 불러오기

module.exports = function (url) {
  let data = dirArr();
  let html = "<!DOCTYPE html>";
  html += file("./head.txt");
  html += file("./content/header.txt");
  html += file("./content/main.txt");
  html += textDir();
  html += "<h2>";
  if (data.includes(url)) {
    html += file(`./content/text${url}`);
  } else {
    html += "내용이 없습니다";
  }
  html += "</h2>";
  html += file("./content/footer.txt");
  return html;
  // html 파일 만들기
};
