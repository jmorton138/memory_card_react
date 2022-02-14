import React, { useEffect, useState } from "react";

export const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const [id, setID] = useState(props.num);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <div
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <div>{id}</div>
    </div>
  );
};
