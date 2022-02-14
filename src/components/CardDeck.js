import React, { useState, useEffect } from "react";
import { Card } from "./Card";

export const CardDeck = (props) => {
  //initialize deck
  const [deck, setDeck] = useState([1, 2, 3, 4]);

  const shuffleDeck = (e) => {
    e.preventDefault();
    let shuffled = shuffle(deck);
    setDeck([...shuffled]);
  };

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
      <div
        onClick={(e) => {
          shuffleDeck(e);
          props.updateScore();
        }}
        className="card"
      >
        <Card num={card} key={card} />
      </div>
    );
  });
};
