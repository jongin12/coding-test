inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]

def sortArray(data):
  test = [0 for i in range(len(data))]
  answer = [0 for i in range(len(data))]
  # inputdata와 같은 길이의 배열 두개 준비.
  i = 0
  for num in data:
    for num in data:
      if data[i]>num:
        test[i] = test[i] + 1
        # data[i]가 배열에서 몇번째로 큰지 test[i]에 입력
    if answer[test[i]] == 0:
      answer[test[i]] = data[i]
      # test[i]를 index값으로 answer 배열에 data[i] 대입
    else:
      same_num = data.count(data[i])
      for j in range(0,same_num):
        answer[test[i]+j] = data[i]
      # 에러처리 : 중복된 수가 있으면 그만큼 answer 배열이 비는것 해결
    i = i + 1
  answer_ob = {
    'one' : answer[0],
    'two' : answer[1],
    'three' : answer[2],
    'four' : answer[3],
    'five' : answer[4],
  }
  print(answer_ob)

sortArray(inputData)