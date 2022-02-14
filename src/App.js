import "./App.css";
import { Card } from "./components/Card";
import { CardDeck } from "./components/CardDeck";
import { Score } from "./components/Score";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      <Score score={score} />
      <CardDeck updateScore={updateScore} />
    </div>
  );
}

export default App;
