import React, {useState, createContext} from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
    setCart([...cart, item]);

    }


    const deleteProduct = (id) =>{
        setCart(cart.filter(prod => prod.id !== id));
    }

    const totalPrice = () =>{
        return cart.reduce((acc, prod) => acc + (prod.price * prod.counter), 0)
    }

    const totalQuantity = () =>{
        return cart.reduce((acc, prod) => acc +  prod.counter, 0)
    }

    return(

        <CartContext.Provider value={{cart, addToCart, totalPrice, totalQuantity, deleteProduct}}>
        {children}
    </CartContext.Provider>
    )

}