import React, { useEffect, useState } from "react";

export const Card = (props) => {
  const [id, setID] = useState(props.num);

  const handleClick = (e) => {
    e.preventDefault();
    props.addToClicked(id);
    props.updateScore(id);
    props.shuffleDeck(e);
  };

  return (
    <div onClick={(e) => handleClick(e)} className="card">
      <div>{props.hanyu}</div>
      <div>{props.pinyin}</div>
      <div>{props.translation}</div>
    </div>
  );
};
