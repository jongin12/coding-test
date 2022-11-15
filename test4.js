const money = [50000, 100, 500, 10000, 50, 10];

money.sort((a, b) => {
  return b - a;
}); //내림차순 정렬

// const no_money = {
//   5000: true,
//   1000: true,
// };

const change_money = (have_money, sum_item, money) => {
  let change = have_money - sum_item;
  let answer = {};
  const aa = (number) => {
    let many = Math.floor(change / number);
    change -= number * many;
    answer[`${number}원`] = `${many}개`;
  };
  money.forEach((number) => {
    aa(number);
  });
  console.log(answer);
};

// const change_money = (have_money, sum_item, money) => {
//   let change = have_money - sum_item;
//   let answer = {};
//   money.forEach((value) => {
//     let many = Math.floor(change / value);
//     change -= value * many;
//     answer[value] = many + "개";
//   });
//   console.log(answer);
// };

change_money(100000, 34830, money);
