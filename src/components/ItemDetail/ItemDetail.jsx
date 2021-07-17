import React from "react";
import ItemCount from "../ItemList/ItemCount/ItemCount";

const ItemDetail = ({itemD}) => {

const stock = itemD.stock;
const min = 1;

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
                    <ItemCount stock = {stock} minimum = {min}/>
                    <button className="btnAddCart">ADD TO CART</button>
                </div>
                
            </div>
        </>
    );

};

export default ItemDetail;