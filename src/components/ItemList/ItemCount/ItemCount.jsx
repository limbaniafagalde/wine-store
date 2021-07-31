import React from 'react';

const ItemCount = ({minimum, stock, counter, setCounter}) => {

const increase = () => {
  setCounter(counter + 1);
} 
const decrease = () => {
  setCounter(counter - 1);
} 

  return (
    <div className="quantity">

       <div className="counter" onClick={counter < stock && increase}> + </div> 

       <p className="counter">{counter}</p>

       <div className="counter" onClick={counter > minimum && decrease}> - </div> 

    </div>
  );
  
};

export default ItemCount;
