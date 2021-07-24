import React, {useContext} from "react";
import cartImg from "../../../assets/shopping-cart.png";
import { CartContext } from "../../CartContext/CartContext";

const Cart = () => {

    const {totalPrice, totalQuantity} = useContext(CartContext)
    
    return (
        <>
        <div className="cart-Q">
            <img src={cartImg} alt="ShoppingCart" />
            <p>{totalQuantity()}</p>
        </div>

            <p className="cart-P">{totalPrice()} EUR</p>
        </>
    ) 

};

export default Cart;