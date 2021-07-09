import React from "react";
import ItemCount from "./ItemCount/ItemCount";


const ItemListContainer = (props) => {
    const stock = 4; //lo tengo que pasar por props al min y max
    const min = 1;
    
    return (
        <>
            <ItemCount stock = {stock} minimum = {min}/>
        </>
    );

}

export default ItemListContainer;