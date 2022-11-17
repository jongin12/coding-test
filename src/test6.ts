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

interface game {
  cost:number,
  name:string
}

interface menu {
  [key:string]: {
    [key:string]: string
  }
};

interface menuNum {
  [key:string]: {
    [key:string]: number
  }
};

const commingsoon = (list:menu, cost:menu, fixed:number, game:game) => {
  let sum = 0;
  let listNum:menuNum = JSON.parse(JSON.stringify(list))
  let costNum:menuNum = JSON.parse(JSON.stringify(cost))
  //타입스크립트에서는 새로운 객체를 다시 만들어주는게 편하다.
  for (let key in list) {
    for (let key2 in list[key]) {
      listNum[key][key2] = Number(list[key][key2].replace(/[^0-9]/g, ""));
      costNum[key][key2] = Number(cost[key][key2].replace(/[^0-9]/g, ""));
      sum += listNum[key][key2] * costNum[key][key2];
    }
  }
  // console.log(sumList);
  // console.log(sum);
  // console.log("남는 돈 : " + (fixed - sum));
  let targetMoney = game.cost - fixed + sum;
  // console.log("목표금액까지 : " + targetMoney);

  let piro = 0;
  let mium = 0;

  while (targetMoney > 0) {
    let random = Math.floor(Math.random() * 4);

    let checkNum = 0;
    for (let key in listNum) {
      for (let key2 in listNum[key]) {
        if (random === checkNum && listNum[key][key2] > 0) {
          listNum[key][key2] -= 1;
          targetMoney -= Number(costNum[key][key2]);
          if (key === "출퇴근비용") {
            piro++;
          } else if (key === "커피") {
            mium++;
          }
        }
        checkNum++;
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
  console.log(listNum);
  let text:string = `당신은 ${piro}회 일찍 일어나서 걸어서 출근하면 ${piro}만큼 피곤해지고, 원장님에게 커피를 ${mium}회 얻어먹으면 ${mium}만큼 미움받지만 ${game.name}게임을 살수있게 됩니다!`;
  console.log(text);
};

commingsoon(menuList, menuCost, 100000, game);
