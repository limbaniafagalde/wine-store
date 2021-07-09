import React, {useState} from "react";
import ItemCount from "./ItemCount/ItemCount";
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const stock = 4; //lo tengo que pasar por props al min y max
    const min = 1;
    
    //state of items
    const[itemState, setItemState] = useState([]);

    //array of items
    const itemsArray = [
        {
            id: 1,
            title: "The President's Blend",
            img: "./img/president.webp",
            category: 1, /*2018*/ 
            price: 30,
            stock: 10,
        },
        {
            id: 2,
            title: "Primus",
            img:"./img/primus.webp",
            category: 1,
            price: 40,
            stock: 20,
        },
        {
            id: 3,
            title:"Amalaya",
            img:"./img/amalaya.webp",
            category:2, /*2019*/
            price:20,
            stock:10,
        },

    ]

    const getItems = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(itemsArray), 2000);
        });
      };

      
    
    return (
        <>
            <ItemCount stock = {stock} minimum = {min}/>
            {itemsArray.map(itemL => (<ItemList itemL={itemL} key={itemL.id} 
            getItems = {getItems ()
                        .then((result) => setItemState(result))
                        .catch((error) => console.log(error))}/>))}
        </>
    );

}

export default ItemListContainer;