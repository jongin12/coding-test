const arr = {
  sum: 84,
  three: 16,
  ratio: 0.5,
};

const score_analysis = (arr) => {
  let two = ((arr.sum - arr.three * 3) * arr.ratio) / 2;
  console.log(`KDT팀이 이 날 성공한 2점슛은 총 ${two}회 입니다.`);
  let free = arr.sum - arr.three * 3 - two * 2;
  for (i = 9; i < 15; i++) {
    console.log(
      `그리고 상대팀으로부터 자유투를 ${i}번 획득해, 총 ${free}개의 자유투를 성공하였습니다.`
    );
    console.log(
      `이 날 KDT팀의 자유투 성공률은 ${(free / (i * 2)) * 100}% 입니다.`
    );
  }
};

score_analysis(arr);

