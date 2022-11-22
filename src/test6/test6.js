const menuCost = {
  출퇴근비용: {
    카카오톡자전거: "1500원",
    택시: "3500원",
  },
  커피: {
    엔시나: "4500원",
    카누: "200원",
  },
  고양이간식: {
    닭고기: "400원",
    락토프리우유: "800원",
  },
};
const menuList = {
  출퇴근비용: {
    카카오톡자전거: "19회",
    택시: "3회",
  },
  커피: {
    엔시나: "6잔",
    카누: "15잔",
  },
  고양이간식: {
    닭고기: "30개",
    락토프리우유: "2개",
  },
};
const game = { cost: 64800, name: "포켓몬스터 스칼렛 바이올렛" };
const commingsoon = (list, cost, fixed, game) => {
  let sum = 0;
  let dataCheck = true;
  for (key in list) {
    for (key2 in list[key]) {
      if (!cost[key][key2]) {
        dataCheck = false;
      } else {
        list[key][key2] = Number(list[key][key2].replace(/[^0-9]/g, ""));
        cost[key][key2] = Number(cost[key][key2].replace(/[^0-9]/g, ""));
        // console.log(typeof list[key][key2]);
        sum += list[key][key2] * cost[key][key2];
      }
    }
  }
  // console.log(dataCheck);
  // console.log(sumList);
  // console.log(sum);
  // console.log("남는 돈 : " + (fixed - sum));
  if (dataCheck) {
    let targetMoney = game.cost - fixed + sum;
    // console.log("목표금액까지 : " + targetMoney);

    let piro = 0;
    let mium = 0;
    let zero = 4;

    while (targetMoney > 0) {
      let random = Math.floor(Math.random() * 4);
      if (zero === 0) {
        console.log(
          `게임을 사려면 아직 ${targetMoney}원이 모자라지만 더이상 아낄곳이 없습니다ㅠㅠ`
        );
        targetMoney = 0;
      } else {
        let checkNum = 0;
        for (key in list) {
          for (key2 in list[key]) {
            if (random === checkNum && list[key][key2] > 0) {
              list[key][key2]--;
              if (list[key][key2] === 0) {
                zero--;
                // console.log(zero);
              }
              targetMoney -= cost[key][key2];
              if (key === "출퇴근비용") {
                piro++;
              } else if (key === "커피") {
                mium++;
              }
            }
            checkNum++;
          }
        }
      }

      // if (random === 0 && list["출퇴근비용"]["카카오톡자전거"] > 0) {
      //   list["출퇴근비용"]["카카오톡자전거"] -= 1;
      //   targetMoney -= cost["출퇴근비용"]["카카오톡자전거"];
      //   piro++;
      // } else if (random === 1 && list["출퇴근비용"]["택시"] > 0) {
      //   list["출퇴근비용"]["택시"] -= 1;
      //   targetMoney -= cost["출퇴근비용"]["택시"];
      //   piro++;
      // } else if (random === 2 && list["커피"]["엔시나"] > 0) {
      //   list["커피"]["엔시나"] -= 1;
      //   targetMoney -= cost["커피"]["엔시나"];
      //   mium++;
      // } else if (random === 3 && list["커피"]["카누"] > 0) {
      //   list["커피"]["카누"] -= 1;
      //   targetMoney -= cost["커피"]["카누"];
      //   mium++;
      // }

      // targetMoney -= 50000;
    }
    // console.log(piro);
    // console.log(mium);
    // console.log(targetMoney);
    if (zero !== 0) {
      console.log(list);
      text = `당신은 ${piro}회 일찍 일어나서 걸어서 출근하면 ${piro}만큼 피곤해지고, 원장님에게 커피를 ${mium}회 얻어먹으면 ${mium}만큼 미움받지만 ${game.name}게임을 살수있게 됩니다!`;
      console.log(text);
    }
  } else {
    console.log("list와 cost의 데이터가 맞지않음.");
  }
};

commingsoon(menuList, menuCost, 100000, game);
