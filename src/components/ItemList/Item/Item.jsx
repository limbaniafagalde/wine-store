import React from "react";
import {Link} from "react-router-dom";

const Item = ({ item }) => {


    return (
        <>
            <Link to = {"item/" + item.id} className="productLink">
                <div className = "productView">
                    <img className = "productImage" src={item.img} alt={item.title} />
                    <div className="productInfo">
                        <h3>{item.title}</h3>
                        <p>
                            <span>{item.price}</span> EUR
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );

};

export default Item;