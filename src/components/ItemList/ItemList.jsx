import React from "react";
import Item from "./Item/Item"


const ItemList = ({itemL}) => {

    return (
        <>

        <div>
                <Item itemL = {itemL}/> 
            
        </div>
            
        </>
    );

};

export default ItemList;