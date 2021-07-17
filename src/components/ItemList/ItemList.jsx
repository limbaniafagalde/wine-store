import React from "react";
import Item from "./Item/Item"


const ItemList = ({itemL}) => {
/*{itemL.map((itemItera) => <Item itemProp = {itemItera} key ={itemItera.id}/> )}
  <Item itemL = {itemL}/> 
*/ 
    return (
        <>
          {itemL.map((itemI) => <Item item = {itemI} key = {itemI.id}/> )}
        </>
            
    );

};

export default ItemList;