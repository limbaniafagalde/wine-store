import React, {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemList/ItemCount/ItemCount";

const ItemDetail = ({itemD}) => {

const stock = itemD.stock;
const min = 1;

const [counter, setCounter] = useState(1);
const [shop, setShop] = useState(false);

const handleShop = () => setShop(!shop); //cambiará el estado dependiendo del valor que tenga cuando haga click
  

    return (
        <>
            <div className = "singleProduct">

                <div className="productDetImage">

                    <img className = "productImg" src={itemD.img} alt={itemD.title} />
                </div>

                <div className="productDetInfo">
                    <h3 className="productTitle">{itemD.title}</h3>
                    <p className="productDetDet">
                        <span>{itemD.detail}</span>
                    </p>
                    <p className="productPrice">
                        <span>{itemD.price}</span> EUR
                    </p>
                    {!shop ? (
                        <>
                            <ItemCount stock = {stock} minimum = {min}  counter = {counter} setCounter = {setCounter}/>
                            <button className="btnAddCart" onClick= {handleShop}>Shop</button>
                        </>
                    ) : (
                        <>
                        <Link to="/cart" onClick = {handleShop}>
                            <button className="btnAddCart" onClick= {handleShop}>Let's Pay</button>
                        </Link>
                        <button className="btnAddCart" onClick={handleShop}>Edit</button>
                        </>
                    )
                        
                    }
                    
                </div>
                
            </div>
        </>
    );

};

export default ItemDetail;