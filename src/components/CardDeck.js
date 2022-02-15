import React, { useState, useEffect } from "react";
import { Card } from "./Card";

export const CardDeck = (props) => {
  //initialize deck
  const [deck, setDeck] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const characterArray = [
    "我",
    "你",
    "要",
    "我们",
    "这个",
    "什么",
    "看",
    "东西",
    "吃",
    "请",
  ];
  const pinyinArray = [
    "Wǒ",
    "Nǐ",
    "Yào",
    "Wǒmen",
    "Zhège",
    "Shénme",
    "Kàn",
    "Dōngxī",
    "Chī",
    "Qǐng",
  ];
  const translationArray = [
    "I",
    "You",
    "Want",
    "We",
    "This",
    "What",
    "Look",
    "Thing",
    "Eat",
    "Please",
  ];

  const shuffleDeck = (e) => {
    e.preventDefault();
    let shuffled = shuffle(deck);
    setDeck([...shuffled]);
  };

  useEffect(() => {
    console.log(props);
    const newGame = () => {};
  });

  //Fisher-Yates shuffle algorythm
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  return deck.map((card) => {
    return (
      <div>
        <Card
          hanyu={characterArray[card]}
          pinyin={pinyinArray[card]}
          translation={translationArray[card]}
          num={card}
          key={card}
          updateScore={props.updateScore}
          addToClicked={props.addToClicked}
          shuffleDeck={shuffleDeck}
        />
      </div>
    );
  });
};
