import React from "react";


const Item = ({itemL}, props) => {


    return (
        <>
            {props.getItem}
            <div className = "productView">
                <img className = "productImage" src={itemL.img} alt={itemL.title} />
                <div className="productInfo">
                    <h3>{itemL.title}</h3>
                    <p>
                        <span>{itemL.price}</span> EUR
                    </p>
                </div>
            </div>
        </>
    );

};

export default Item;