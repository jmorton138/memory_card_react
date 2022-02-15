import React, { useState } from "react";

export const Score = (props) => {
  // const [score, setScore] = useState(0);

  return <div className="score">{props.score}</div>;
};
