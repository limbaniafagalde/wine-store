import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    //state of items
    const[itemDetail, setItemDetail] = useState([]);

    //array of items
    const itemsArray = [
        {
            id: 1,
            title: "The President's Blend",
            img: "./img/president.webp",
            category: 1, /*2018*/ 
            price: 30,
            stock: 10,
            detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt repellendus, maxime iste dolorem reiciendis itaque hic error veritatis repudiandae nam nobis ipsam ducimus debitis consectetur accusantium. Cupiditate, tempore porro?",
        },
        {
            id: 2,
            title: "Primus",
            img:"./img/primus.webp",
            category: 1,
            price: 40,
            stock: 20,
            detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt repellendus, maxime iste dolorem reiciendis itaque hic error veritatis repudiandae nam nobis ipsam ducimus debitis consectetur accusantium. Cupiditate, tempore porro?",
        },
        {
            id: 3,
            title:"Amalaya",
            img:"./img/amalaya.webp",
            category:2, /*2019*/
            price:20,
            stock:10,
            detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt repellendus, maxime iste dolorem reiciendis itaque hic error veritatis repudiandae nam nobis ipsam ducimus debitis consectetur accusantium. Cupiditate, tempore porro?",
        },

    ]


    
        const getItem = () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => resolve(itemsArray.find((item) => item.id === 1)), 2000);
            });
          };
    
          useEffect (()=> {
            getItem().then((result) => setItemDetail(result)); //recibo la data en resolve y lo almaceno en itemState
            
            } , []); 

    
            return (
        <>
            <ItemDetail itemD = {itemDetail}/>
        </>
    );

}

export default ItemDetailContainer;