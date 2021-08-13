import React from "react";
import Item from "./Item/Item"


const ItemList = ({itemL}) => {

    return (
        <>
          {itemL.map((itemI) => <Item item = {itemI} key = {itemI.id}/> )}
        </>
            
    );

};

export default ItemList;