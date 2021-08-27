import React, {useState, useEffect} from "react"; //siempre en la line 1 de cada componente
import CartWidget from "./Cart/CartWidget";
import {NavLink} from "react-router-dom";
//import {categories} from "../../data/categories.json";
import {database} from "../../firebase/firebase";


const Navbar  = () => {

    const [categories, setCategories] = useState([]);

    const getCategories = () => {
    
        const cats = database.collection("categories");

        cats.get().then((query) => 
        setCategories(query.docs.map(doc => {
        return {...doc.data(), id: doc.id}; //devuelve un array
        }))
     );
    };

    useEffect(() => {

        getCategories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

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
                    <NavLink to= "/products" className="menuLinks"><li>Products</li></NavLink>
                    <NavLink to="/contact" className="menuLinks"><li>Contact</li></NavLink>
                    
                </ul>
            </nav>
            
            <NavLink to="/cart" className="cart-widget">
                    
                    <CartWidget/>
                
            </NavLink>

        </header>

    );
}


export default Navbar;