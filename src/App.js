import "./App.css";
import { Card } from "./components/Card";
import { CardDeck } from "./components/CardDeck";
import { Score } from "./components/Score";
import { BestScore } from "./components/BestScore";

import { useState, useEffect } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const updateScore = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
    }
  };

  // useEffect(() => {
  //   if (score > bestScore) {
  //     setBestScore(score);
  //   }
  // }, [score]);

  const addToClicked = (id) => {
    setClickedCards([...clickedCards, id]);
  };

  return (
    <div className="App">
      Score: <Score score={score} />
      Best Score: <BestScore bestScore={bestScore} />
      <CardDeck updateScore={updateScore} addToClicked={addToClicked} />
    </div>
  );
}

export default App;
