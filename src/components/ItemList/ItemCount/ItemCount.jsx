import React, { useState } from 'react';

const ItemCount = (props) => {

  const [counter, setCounter] = useState(1);
  
  const increase = () => {
    setCounter(counter + 1);
  } 
  const decrease = () => {
    setCounter(counter - 1);
  } 

  return (
    <div className="quantity">

       <div className="counter" onClick={counter < props.stock ? increase : null}> + </div> 

       <p classNamee="counter">{counter}</p>

       <div className="counter" onClick={counter > props.minimum ? decrease : null}> - </div> 

    </div>
  );
  
};

export default ItemCount;
