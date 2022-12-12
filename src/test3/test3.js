"use strict";
// const setting = {
//   gold: true,
//   silver: false,
// };
// //copper는 어차피 남는값이라 제거
// const value = {
//   leather: "2 silver",
//   zzz: "4 copper",
// };
// const game_money = (item, setting, value, time) => {
//   let money = { gold: 0, silver: 0, copper: 0 };
//   let text = "";
//   for (key in item) {
//     let arr = value[key].split(" ");
//     money[arr[1]] += Number(arr[0]) * item[key] * time;
//   }
//   //위의 두줄 객체 반복문으로 변경하기 - 완료
//   if (setting.gold) {
//     money.silver += Math.floor(money.copper / 8);
//     money.copper = money.copper % 8;
//     money.gold += Math.floor(money.silver / 4);
//     money.silver = money.silver % 4;
//     text += money.gold + "gold,";
//   } else {
//     money.silver += money.gold * 4;
//     money.gold = 0;
//   }
//   if (setting.silver) {
//     money.silver += Math.floor(money.copper / 8);
//     money.copper = money.copper % 8;
//     text += money.silver + "silver,";
//   } else {
//     money.copper += money.silver * 8;
//     money.silver = 0;
//   }
//   //위의 환전파트에서 코드량을 줄이는 방법 ?
//   if (money.copper === 0) {
//     text = text.substring(0, text.length - 1);
//   } else {
//     text += money.copper + "copper";
//   }
//   console.log(
//     `이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ${
//       money.gold / time
//     }개 입니다.`
//   );
//   console.log(
//     `gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ${money.copper}개의 copper를 챙겼습니다.`
//   );
//   if (time > 1) {
//     console.log(
//       `공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 ${time}시간 플레이하여 총 "${text}"를 얻었습니다`
//     );
//   }
// };
// game_money({ leather: 45, zzz: 3 }, setting, value, 2);
