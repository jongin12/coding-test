/*
 * getUrl : GET 요청 객체에서 .url 프로퍼티 값 처리하기 위해 만듦
 */
module.exports = function (getUrl, stringOnlyArray) {
  // * 타입스크립트 쓰고 싶다..
  getUrl = typeof getUrl === "string" ? getUrl : console.error("url 아님");
  stringOnlyArray.forEach((element) => {
    if (typeof element !== "string") {
      console.error("파일이름이어야 하므로 모두 문자열이여야 합니다.", element);
    }
  });
  console.log("받은 get.url", getUrl);
  // console.log("받은 text Array", stringOnlyArray);
};
