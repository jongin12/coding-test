lineOne1 = [0, 1, 0, 0, 0, 1, 0, 0, 1, 0]
lineTwo1 = [0, 1, 1, 0, 0, 1, 0, 0, 0, 0]
lineThr1 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 0]
lineFou1 = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0]
linefiv1 = [0, 1, 0, 0, 0, 1, 0, 1, 0, 0]
linesix1 = [0, 1, 0, 0, 0, 1, 0, 1, 0, 0]

def bingo(arr):
  test = "ok"
  sum = []
  bingo = []
  for i in range(len(arr[0])):
    sum.append(0)
  # sum 리스트 생성
  for item in arr:
    if len(item) != len(arr[0]):
      test = "모든 배열의 길이가 같아야합니다."
    for index in range(len(arr[0])):
      if item[index] != 0 and item[index] != 1:
        test = "데이터에 0과 1이 아닌값이 있습니다."
      sum[index] += item[index]
  # 리스트들의 값을 sum에 더하기.
  print(sum)
  if test == "ok":
    for i in range(len(arr[0])):
      if sum[i] == len(arr):
        bingo.append(i)
    # bingo 리스트에 sum값이 5인 index를 넣기.
    print(bingo)
    score = len(bingo)

    for i in bingo:
      del sum[i]
      for index in range(len(arr)):
        del arr[index][i]
        # 지우기
    print(arr)
    print(score)
  else:
    print("error : "+test)
      







bingo([lineOne1, lineTwo1, lineThr1, lineFou1, linefiv1,linesix1])