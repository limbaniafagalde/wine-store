import React, {useContext} from "react";
import { CartContext } from "../../CartContext/CartContext";
import {Link} from "react-router-dom";

const Cart = () => {
    const {cart, deleteProduct}  = useContext(CartContext);

    const handleRemove = (id) => deleteProduct(id);

    return (
        <>
            {cart.length === 0 ? 
            (
            <>
                <h2 className="cartTitle">Cart</h2>
                <h2>No items added.</h2>
            </>
            ) 
            : 
            (
            <>
                <h2 className="cartTitle">Cart</h2>
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
                                    {c.price * c.quantity} EUR
                                </p>
                                <p>
                                    =
                                </p>
                                <p>
                                x{c.quantity}
                                </p>
                                <p>
                                    {c.price} EUR                            
                                </p>
                        </div>
                    </div>
                    ))}
                    <Link to = {"/Checkout"}>
                        <button className="nextToCheck">Next</button>
                    </Link>
                </div>       
            </>
            )} 
        </>
    ) 

};

export default Cart;