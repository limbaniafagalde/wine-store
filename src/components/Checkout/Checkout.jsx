import React, {useContext} from "react";
import Form from "../Form/Form";
import { CartContext } from "../CartContext/CartContext";
import {Redirect} from "react-router-dom";

const Checkout = () => {
    const {cart, totalPrice, totalQuantity, clearCart}  = useContext(CartContext);

    return(
    <>
        <div className="cartTotal">
            
            <p>Total: {totalPrice()} EUR</p>
            <p>Items: {totalQuantity()}</p>
            <Form cart={cart} totalPrice={totalPrice} clearCart={clearCart}/>
            {cart.length === 0 &&
            (
                <Redirect to="/cart" from="/checkout"> </Redirect>
            
            )
            }
        </div>
    </>
    );
} 

export default Checkout;


