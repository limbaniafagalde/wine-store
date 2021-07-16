import React from "react";
import ItemCount from "../ItemList/ItemCount/ItemCount";

const ItemDetail = ({itemD}) => {
const stock = itemD.stock;
const min = 1;

    return (
        <>
            <div className = "singleProduct">

                <div className="productDetImage">
                    <h3 className="productTitle">{itemD.title}</h3>
                    <img className = "productImg" src={itemD.img} alt={itemD.title} />
                </div>

                <div className="productDetInfo">
                    <p className="productDetDet">
                        <span>
                        {itemD.detail}</span>
                    </p>
                    <p>
                        <span>{itemD.price}</span> EUR
                    </p>
                    <ItemCount stock = {stock} minimum = {min}/>
                </div>
            </div>
        </>
    );

};

export default ItemDetail;