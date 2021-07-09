import React from "react";
import Item from "./Item/Item"


const ItemList = ({itemL}, props) => {

    return (
        <>

        <div>
                <Item itemL = {itemL} getItems = {props.getItems}/> 
            
        </div>
            
        </>
    );

};

export default ItemList;