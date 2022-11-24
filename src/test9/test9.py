shape_array = ["spade", "heart", "diamond", "club", "joker"]
number_array = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ]
joker_array = ["RED", "BLACK"]

def trump_deck(shapeArray):
  card = {}
  for shape in shapeArray:
    card[shape] = {}
    if shape == 'joker':
      for index  in range(len(joker_array)):
        card[shape][joker_array[index]] = {
          "value":index+1,
          "isOpen":False,
          "isContain":False
        }
    else:
      for index in range(len(number_array)):
        card[shape][number_array[index]] = {
          "value":index+1,
          "isOpen":False,
          "isContain":False
        }
  # print(card)
  return card

print(trump_deck(shape_array))