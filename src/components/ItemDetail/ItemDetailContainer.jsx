import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {products} from "../../data/products.json";

const ItemDetailContainer = () => {

    //state of items
    const[itemDetail, setItemDetail] = useState([]);

    //id, los : cambian el nombre del parametro
    const { id } = useParams();

   
    
        const getItem = () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                  //va a resolver solo el item cuyo id coincida con el de la url
                  let productId = products.find((item) => item.id.toString() === id);
                  resolve(productId);
                  
            }, 1000);
            });
          };
    
          useEffect (()=> {
            setItemDetail([]);
            getItem().then((result) => setItemDetail(result)); //recibo la data en resolve y lo almaceno en itemState
            
            // eslint-disable-next-line react-hooks/exhaustive-deps
            } ,  [id]); 

    
    return (
        <>
            <ItemDetail itemD = {itemDetail}/>
        </>
    );

}

export default ItemDetailContainer;