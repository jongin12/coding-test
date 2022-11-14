const arr = {
  sum:84,
  three:16,
  ratio:0.5
}


const score_analysis = (arr:{sum:number,three:number,ratio:number}) =>{
  let two = (arr.sum - (arr.three*3))*arr.ratio
  console.log(`KDT팀이 이 날 성공한 2점슛은 총 ${two/2}회 입니다.`);
  
}