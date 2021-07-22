import React, {useState, useEffect} from "react";
import ItemList from "./ItemList"
import {products} from "../../data/products.json";
import {useParams} from "react-router-dom";
const ItemListContainer = () => {
    
    //state of items
    const[itemState, setItemState] = useState([]);
    
    const {idCat} = useParams();

    useEffect(() => {

        setItemState([]);

        //promise
        const getItems = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if(idCat){
                        let filteredList = products.filter(
                            (item) => item.category.toString() === idCat);
                            resolve(filteredList);
                        }
                    
                    else{
                        resolve(products);
                        }
                }, 2000);
            });
        };

        getItems().then((result) => setItemState(result)); //recibo la data en result y lo almaceno en itemState
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCat, products]);
        
    return (
        <>
            <ItemList itemL={itemState} />
        </>
    );

}

export default ItemListContainer;