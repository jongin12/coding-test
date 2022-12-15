const test = (text) => {
  let Uptext = text.toUpperCase();
  for (let i = 0; i < text.length; i++) {
    if (text[i] === Uptext[i]) {
      let 앞글자 = text.slice(0, i);
      let 뒷글자 = text.slice(i, text.length).toLowerCase();
      return 앞글자 + "-" + 뒷글자;
    }
  }
};
const style = {
  backgroundColor: "red",
  fontSize: "10px",
};
function change(style) {
  let obj = {};
  for (let item in style) {
    obj[test(item)] = style[item];
  }
  return obj;
}
change(style);

// console.log(test("backgroundColor"));
// test("fontSize");
// test("aaaaAaaa");
