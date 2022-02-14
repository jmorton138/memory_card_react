import "./App.css";
import { Card } from "./components/Card";
import { CardDeck } from "./components/CardDeck";
import { Score } from "./components/Score";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  console.log(clickedCards);

  const updateScore = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
    } else {
      setScore(score + 1);
    }
  };

  const addToClicked = (id) => {
    setClickedCards([...clickedCards, id]);
  };

  return (
    <div className="App">
      <Score score={score} />
      <CardDeck updateScore={updateScore} addToClicked={addToClicked} />
    </div>
  );
}

export default App;
