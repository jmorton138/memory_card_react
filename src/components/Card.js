import React, { useState } from 'react'

export const Card = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(true);
  }


  return (
    <div className='card' onClick={(e) => {handleClick(e)}}>
        <div>Card</div>
    </div>
  )
}
