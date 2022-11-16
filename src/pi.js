"use strict";
const test2 = (data) => {
    if (data > 1 &&
        data < 100 &&
        Number.isInteger(data)) {
        return true;
    }
    else {
        return false;
    }
};
const cone_volume2 = (r, h) => {
    if (test2(r) && test2(h)) {
        return Math.floor((r * r * h * Math.PI) / 3);
    }
    else {
        return "data error";
    }
};
console.log(cone_volume2(99, 10));
