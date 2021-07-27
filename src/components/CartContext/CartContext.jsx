import React, {useState, createContext} from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    //item = item recibido
    const isInCart = (item) => cart.filter(it => it.id === item.id).length === 0;

    const addToCart = (item) => {
            if (isInCart(item)) {
                setCart([...cart, item]);
            }
            else{
                alert("The item is already added.");
            }
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

    const clearCart = () => setCart([]);

    return(

        <CartContext.Provider value={{cart, addToCart, totalPrice, totalQuantity, deleteProduct}}>
        {children}
    </CartContext.Provider>
    )
}