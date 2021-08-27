import React, {useState, useEffect} from "react";
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";
import {database} from "../../firebase/firebase";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]); //[] si es + de 1

    const {idCat} = useParams();

    const getProducts = (idCategory) => {
        
        if(idCategory){
           
            const prodCat = database.collection("products").where("category", "==", idCategory);
            prodCat.get().then((query) => 
            setProducts(query.docs.map(doc => {
            return {...doc.data(), id: doc.id}; //devuelve un array
            }))
          );     
        }
        else{
            const prods = database.collection("products");
        
            prods.get().then((query) => 
            setProducts(query.docs.map(doc => {
            return {...doc.data(), id: doc.id}; //devuelve un array
            }))
          );   
        }     
    }
        
     

    useEffect(() => {

        getProducts(idCat);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCat, products]); 
        
    console.log(products);

    return (
        <>
            <h1 className="prodTitle">PRODUCTS</h1>
            <ItemList itemL={products} />
        </>
    );

}

export default ItemListContainer;