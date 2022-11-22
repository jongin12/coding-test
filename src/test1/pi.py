import math

def test(data):
  if type(data)==int and data>1 and data<100:
    return True
  else:
    return False

def cone_volume(r,h):
  if test(r) and test(h):
    return int(math.pi*r*r*h/3)
  else:
    return 'data error'

print(cone_volume(3,10))