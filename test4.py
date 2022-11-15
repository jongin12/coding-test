import math

money = (50000,10000,500,100,50,10)

def change_money(have_money, sum_item, money):
  change = have_money-sum_item
  answer = {}
  for i in money:
    many = math.floor(change/i)
    change -= i*many
    answer[f'{i}원'] = f'{many}개'
  print(answer)

change_money(100000,34830,money)

# python f'{number}개' === js `${number}개`