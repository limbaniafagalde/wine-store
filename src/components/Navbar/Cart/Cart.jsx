import React, {useContext} from "react";
import { CartContext } from "../../CartContext/CartContext";

const Cart = () => {
    const {cart, totalPrice, deleteProduct, totalQuantity}  = useContext(CartContext);

    const handleRemove = (id) => deleteProduct(id);

    return (
        <>
            <h2 className="cartTitle">Cart</h2>
            {cart.length === 0 && <h2>No items added.</h2>}

            <div className="cartContainer">
                {cart.map((c) =>(
                <div className = "productViewCart">
                
                    <img className = "productImageCart" src={c.img} alt={c.title} />
            
                    <div className="productTitleCart">
                        <h4>{c.title}</h4>
                    </div>
            
                    <div className="productPriceCart">
            
                            <button className="deleteFromCart" onClick={()=>handleRemove(c.id)}>X</button>                        
                            <p>
                                {c.price * c.counter} EUR
                            </p>
                            <p>
                                =
                            </p>
                            <p>
                            x{c.counter}
                            </p>
                            <p>
                                {c.price} EUR                            
                            </p>
            
                    </div>
                </div>
            ))}
        </div>       
            <div className="cartTotal">
                <p>Total: {totalPrice()} EUR</p>
                <p>Items: {totalQuantity()}</p>
                <button className="checkOut">Check Out</button>
            </div>
            
        </>
    ) 

};

export default Cart;