import re
import random

menuCost = {
  "출퇴근비용" : {
    "카카오톡자전거" : "1500원",
    "택시" : "3500원",
  },
  "커피" : {
    "엔시나" : "4500원",
    "카누" : "200원",
  },
  "고양이간식" : {
    "닭고기" : "400원",
    "락토프리우유" : "800원",
  }
}
menuList = {
  "출퇴근비용" : {
    "카카오톡자전거" : "19회",
    "택시" : "3회",
  },
  "커피" : {
    "엔시나" : "6잔",
    "카누" : "15잔",
  },
  "고양이간식" : {
    "닭고기" : "30개",
    "락토프리우유" : "2개",
  }
}
game = { "cost": 64800, "name": "포켓몬스터 스칼렛 바이올렛" }

def commingsoon(List,cost,fixed,game):
  sumCost = 0
  for key in List:
    for key2 in List[key]:
      cost[key][key2] = int(re.sub(r'[^0-9]', '',cost[key][key2]))
      List[key][key2] = int(re.sub(r'[^0-9]', '',List[key][key2]))
      sumCost += cost[key][key2]*List[key][key2]
  
  targetMoney = game["cost"] - fixed + sumCost
  piro = 0
  mium = 0

  while targetMoney > 0:
    Random = int(random.random()*4)
    checkNum = 0
    for key in List:
      for key2 in List[key]:
        if Random == checkNum and List[key][key2]>0:
          List[key][key2] -= 1
          targetMoney -= cost[key][key2]
          if key == "출퇴근비용":
            piro += 1
          elif key == "커피":
            mium += 1
        checkNum += 1
  
  gameName = game["name"]
  text = f"당신은 {piro}회 일찍 일어나서 걸어서 출근하면 {piro}만큼 피곤해지고, 원장님에게 커피를 {mium}회 얻어먹으면 {mium}만큼 미움받지만 {gameName}게임을 살수있게 됩니다!"
  # print(List)
  print(text)

commingsoon(menuList, menuCost, 100000, game)