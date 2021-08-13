import React from 'react';

const ItemCount = ({minimum, stock, quantity, setQuantity}) => {

const increase = () => {
  setQuantity(quantity + 1);
} 
const decrease = () => {
  setQuantity(quantity - 1);
} 

  return (
    <div className="quantity">

       <div className="counter" onClick={quantity < stock && increase}> + </div> 

       <p className="counter">{quantity}</p>

       <div className="counter" onClick={quantity > minimum && decrease}> - </div> 

    </div>
  );
  
};

export default ItemCount;
