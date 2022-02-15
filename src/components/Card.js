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
      <div className="hanzi">{props.hanyu}</div>
      <div className="pinyin">{props.pinyin}</div>
      <div className="translation">{props.translation}</div>
    </div>
  );
};
