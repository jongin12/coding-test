const lineOne1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const lineTwo1 = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
const lineThr1 = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
const lineFou1 = [0, 1, 0, 1, 0, 1, 0, 0, 0, 0];
const linefiv1 = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0];

const bingo = (arr) => {
  let test = "ok";
  let score = 0;
  let sum = new Array(arr[0].length).fill(0);
  arr.map((item1) => {
    if (item1.length !== arr[0].length) {
      test = "모든 배열의 길이가 같아야합니다.";
    }
    item1.map((item2, index) => {
      if (item2 !== 0 && item2 !== 1) {
        test = "데이터에 0과 1이 아닌값이 있습니다.";
      }
      sum[index] += item2;
    });
  });
  // console.log(sum);
  if (test === "ok") {
    // sum.map((item1, index) => {
    //   if (item1 === arr.length) {
    //     arr.map((item2) => {
    //       item2.splice(index, 1);
    //     });
    //     sum.splice(index, 1);
    //     score++;
    //   }
    // });
    while (sum.indexOf(arr.length) >= 0) {
      let index = sum.indexOf(arr.length);
      arr.map((item) => {
        item.splice(index, 1);
      });
      sum.splice(index, 1);
      score++;
    }

    console.log(arr);
    console.log("score : " + score);
  } else {
    console.log("error : " + test);
  }
};

bingo([lineOne1, lineTwo1, lineThr1, lineFou1, linefiv1]);
