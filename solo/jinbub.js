const number_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function jinbub(number, jinbub) {
  arr = [];
  while (number > 0) {
    arr.push(number_arr[number % jinbub]);
    number = Math.floor(number / jinbub);
  }
  text = "";
  arr
    .slice(0)
    .reverse()
    .map((item, index) => {
      // let reverse = arr.length - 1 - index;
      // text += arr[reverse];
      text += item;
    });
  console.log(text);
  return text;
} //number을 jinbub진법으로 변환

// function hexadecimal(number) {
//   arr = [];
//   while (number > 0) {
//     arr.push(number_arr[number % 16]);
//     number = Math.floor(number / 16);
//   }
//   text = "";
//   arr.map((item, index) => {
//     let reverse = arr.length - 1 - index;
//     text += arr[reverse];
//   });
//   console.log(text);
// }

// function octalSystem(number) {
//   arr = [];
//   while (number > 0) {
//     arr.push(number % 8);
//     number = Math.floor(number / 8);
//   }
//   text = "";
//   arr.map((item, index) => {
//     let reverse = arr.length - 1 - index;
//     text += arr[reverse];
//   });
//   console.log(text);
// }

// function binaryScale(number) {
//   arr = [];
//   while (number > 0) {
//     arr.push(number % 2);
//     number = Math.floor(number / 2);
//   }
//   text = "";
//   arr.map((item, index) => {
//     let reverse = arr.length - 1 - index;
//     text += arr[reverse];
//   });
//   console.log(text);
// }

// binaryScale(1024);
// octalSystem(80);
// hexadecimal(160);
jinbub(1025, 16);
