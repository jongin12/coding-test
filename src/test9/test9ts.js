"use strict";
const shape_array = ["spade", "heart", "diamond", "club", "joker"];
const trump_deck = (shapeArray) => {
    const number_array = [
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
    ];
    const joker_array = ["RED", "BLACK"];
    let card = {};
    shapeArray.map((item) => {
        if (item === "joker") {
            card[item] = {};
            joker_array.map((item2, index) => {
                card[item][item2] = {
                    value: index + 1,
                    isOpen: false,
                    shape: item,
                    number: item2,
                };
            });
        }
        else {
            card[item] = {};
            number_array.map((item2, index) => {
                card[item][item2] = {
                    value: index + 1,
                    isOpen: false,
                    shape: item,
                    number: item2,
                };
            });
        }
    });
    // console.log(card);
    let cardNum = 0;
    for (let shape in card) {
        for (let i in card[shape]) {
            cardNum++;
        }
    }
    // console.log(
    //   `해당 리턴된 객체의 카드 갯수에 대한 검사결과, 총 ${cardNum}개로 정상적인 구성입니다.`
    // );
    return card;
};
const card_game = (card) => {
    let card_deck = [];
    while (card_deck.length < 7) {
        let randomNum = Math.floor(Math.random() * 54);
        let cardNum = 0;
        for (let shape in card) {
            for (let number in card[shape]) {
                if (randomNum === cardNum && card[shape][number].isOpen === false) {
                    card[shape][number].isOpen = true;
                    card_deck.push(card[shape][number]);
                }
                cardNum++;
            }
        }
    }
    console.log(card_deck);
};
card_game(trump_deck(shape_array));
// trump_deck(shape_array);
