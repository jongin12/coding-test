const fromInput =
  " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) ";

const text_listup = (text) => {
  if (typeof text === "string") {
    var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    text = text.split(" ").join("");
    // 공백 제거
    subtext = text.replace(reg, "");
    // 특수문자 제거
    subtext = subtext.toUpperCase();
    // 전부 대문자로 변경
    let obj = {};
    for (let i = 0; i < subtext.length; i++) {
      if (!obj[subtext[i]]) {
        obj[subtext[i]] = 1;
      } else {
        obj[subtext[i]] += 1;
      }
    }
    let maxarr = Object.keys(obj).map((key) => {
      return obj[key];
    });
    let max = Math.max.apply(null, maxarr);
    let min = Math.min.apply(null, maxarr);
    for (key in obj) {
      if (obj[key] === min) {
        for (let i = 0; i < max - min; i++) {
          n = Math.floor(Math.random() * text.length);
          text = text.slice(0, n) + key + text.slice(n, text.length);
        }
      }
    }
    let a = text.replace(/(.{5})/g, "$1 ");
    // 5개씩 나누기
    console.log(a);
  } else {
    console.log("입력값은 문자열이여야 합니다.");
  }
};

text_listup(fromInput);
