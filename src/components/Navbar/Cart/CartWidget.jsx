import React, {useContext} from "react";
import cartImg from "../../../assets/cart.png";
import { CartContext } from "../../CartContext/CartContext";

const CartWidget = () => {

    //llamamiento de un contexto
    const {cart, totalPrice, totalQuantity} = useContext(CartContext)
    
    return (
        <>
        <div className="cart-Q">
            <img src={cartImg} alt="ShoppingCart" />
            <p>{cart.length !== 0 && totalQuantity()}</p>
        </div>

            <p className="cart-P">{cart.length !== 0 && totalPrice() + " EUR"} </p>
        </>
    ) 

};

export default CartWidget;