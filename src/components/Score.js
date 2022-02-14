import React, { useState } from "react";

export const Score = () => {
  const [score, setScore] = useState(0);

  return <div>{score}</div>;
};
