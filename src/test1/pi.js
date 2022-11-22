const test = (data) => {
  if (data >= 1 && data <= 100 && Number.isInteger(data)) {
    return [true, ""];
  } else if (data < 1 || data > 100) {
    return [false, "값은 1이상 100이하여야 합니다. "];
  } else if (!Number.isInteger(data)) {
    return [false, "값은 정수여야 합니다. "];
  }
};

const cone_volume = (r, h) => {
  if (test(r)[0] && test(h)[0]) {
    return Math.floor((r * r * h * Math.PI) / 3);
  } else {
    return test(r)[1] + test(h)[1];
  }
};

console.log(cone_volume(101, 10.3));
