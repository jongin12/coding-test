const map = [
  ["A", "B", 3],
  ["A", "C", 8],
  ["A", "D", 9],
  ["C", "D", 2],
  ["D", "B", 5],
  ["D", "E", 2],
  ["B", "E", 4],
];

function length(start) {
  let route = {};
  map.map((item) => {
    if (item.includes(start)) {
      if (item[0] === start) {
        route[item[1]] = item[2];
      } else {
        route[item[0]] = item[2];
      }
    }
  });
  return route;
}
//127.37846891542378, 36.34911909922432.

function navi(start, end) {
  let start_1 = length(start);
  // console.log(start_1);
  for (let key in start_1) {
    let b = length(key);
    for (let key2 in b) {
      b[key2] += start_1[key];
      if (!start_1[key2]) {
        start_1[key2] = b[key2];
      }
      if (b[key2] < start_1[key2]) {
        start_1[key2] = b[key2];
      }
    }
  }
  console.log(start_1[end]);
}
navi("A", "E");
