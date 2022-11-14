const setting = {
  gold: true,
  silver: false,
  copper: true,
  // leather: "2 silver",
};

const game_money = (item, setting, time) => {
  let gold = 0;
  let silver = 0;
  let copper = 0;
  let text = "";
  // let arr = setting.leather.split(" ");
  // console.log(arr);
  silver = 2 * item * time;
  if (setting.gold) {
    gold += Math.floor(silver / 4);
    silver = silver % 4;
    text += gold + "gold,";
  }
  if (setting.silver) {
    text += silver + "silver,";
  } else {
    copper = silver * 8;
    text += copper + "copper";
  }
  if (text[text.length - 1] === ",") {
    text = text.substring(0, text.length - 1);
  }
  console.log(
    `이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ${
      gold / time
    }개 입니다.`
  );
  console.log(
    `gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 ${copper}개의 copper를 챙겼습니다.`
  );
  console.log(
    `공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 ${time}시간 플레이하여 총 "${text}"를 얻었습니다`
  );
};

game_money(45, setting, 8);
