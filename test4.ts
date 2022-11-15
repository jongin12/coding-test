const money_ts:number[] = [50000, 10000, 500, 100, 50, 10];

money_ts.sort((a, b) => {
  return b - a;
});

const change_money_ts = (have_money:number, sum_item:number, money:number[]) => {
  let change = have_money - sum_item;
  let answer = {};
  money.forEach((value) => {
    let many = Math.floor(change / value);
    change -= value * many;
    answer[value] = many + "개";
  });
  console.log(answer);
};

change_money_ts(100000, 34830, money_ts);