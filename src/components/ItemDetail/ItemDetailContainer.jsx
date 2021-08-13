import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
//import {products} from "../../data/products.json";
import {database} from "../../firebase/firebase";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]); 

    //id, los : cambian el nombre del parametro
    const { idDet } = useParams();

    const getProduct = (idProd) => {
    
        database.collection("products").doc(idProd).get()
        .then((query) => {
            setProduct(query.data()); //devuelve un array

        })
        
    };


          useEffect (()=> {
            getProduct(idDet); //recibo la data en resolve y lo almaceno en itemState
            
            // eslint-disable-next-line react-hooks/exhaustive-deps
            } ,  [idDet]); 
        
      
    return (
        <>
            <ItemDetail itemD = {product} id={idDet} />
        </>
    );

}

export default ItemDetailContainer;