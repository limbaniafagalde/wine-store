import React, {useContext} from "react";
import Form from "../Form/Form";
import { CartContext } from "../CartContext/CartContext";

const Checkout = () => {
    const {cart, totalPrice, totalQuantity, clearCart}  = useContext(CartContext);

    return(
    <>
        <div className="cartTotal">
            <p>Total: {totalPrice()} EUR</p>
            <p>Items: {totalQuantity()}</p>
            <button className="checkOut">Check Out</button>
            <Form cart={cart} totalPrice={totalPrice} clearCart={clearCart}/>
        </div>
    </>
    );
} 

export default Checkout;


