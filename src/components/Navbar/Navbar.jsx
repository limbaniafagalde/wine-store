import React from "react"; //siempre en la line 1 de cada componente
import vino from './vino.png';


const Navbar  = () => {
    return ( //un jsx siempre tiene return
        <header>   
            <div className="logo">
                <a href="#">W-ARda</a>
            </div>
            <nav className="menu">
                <ul>    
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <div className="menu-toggle">
                #
            </div>
        </header>

    );
}


export default Navbar;