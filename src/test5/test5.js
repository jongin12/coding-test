"use strict";
const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1];
const sortArray = (data) => {
    let step = 0;
    for (let j = 0; j < data.length; j++) {
        for (let i = 1; i < data.length; i++) {
            if (data[i - 1] > data[i]) {
                [[data[i - 1]], [data[i]]] = [[data[i]], [data[i - 1]]];
                step++;
            }
        }
    }
    let answer = {
        one: data[0],
        two: data[1],
        three: data[2],
        four: data[3],
        five: data[4],
    };
    console.log(answer);
    console.log(step);
};
sortArray(inputData);
