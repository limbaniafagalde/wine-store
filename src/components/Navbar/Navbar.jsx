import React from "react"; //siempre en la line 1 de cada componente
import Cart from "./Cart/Cart";
import {NavLink} from "react-router-dom";
import {categories} from "../../data/categories.json";

const Navbar  = () => {
    return ( //un jsx siempre tiene return
        <header>   
            <NavLink to="/" className="logo">
                
                    W-ARda
                
            </NavLink>
            
            <nav className="menu">
                <ul>    
                    {categories.map((cat) =>(
                        <NavLink to={"/category/" + cat.id} key = {cat.id} className="menuLinks">
                            {cat.title}
                        </NavLink>))}


                    <NavLink to="/" className="menuLinks"><li>Home</li></NavLink>
                    <NavLink to= "" className="menuLinks"><li>Products</li></NavLink>
                    <NavLink to="" className="menuLinks"><li>Contact</li></NavLink>
                    
                </ul>
            </nav>
            <div className="cart-widget">
                <Cart/>
            </div>
        </header>

    );
}


export default Navbar;