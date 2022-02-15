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

  const addToClicked = (id) => {
    setClickedCards([...clickedCards, id]);
  };

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }

    if (score === 12) {
      alert("You've won! You memorized all 12 cards");
    }
  }, [score]);

  return (
    <div className="App">
      <header>
        <h1>Learn Chinese Memory Game</h1>
      </header>

      <div className="scores">
        <div className="score-container">
          <div>Score:</div> <Score score={score} />
        </div>
        <div className="best-score-container">
          <div>Best Score:</div> <BestScore bestScore={bestScore} />
        </div>
      </div>

      <div className="card-deck">
        <CardDeck updateScore={updateScore} addToClicked={addToClicked} />
      </div>
    </div>
  );
}

export default App;
