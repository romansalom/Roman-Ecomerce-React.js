import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";
import {Link} from 'react-router-dom';




const NavBar = () => {



    return (
        <>
 <ul className="navbar-fondo">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/supreme">Supreme
                </Link>
            </li>
            <li>
                <Link to="/category/fume">Fume
                </Link>
            </li>
            <li>
                <Link to="/category/juul">Juul </Link>
            </li>
            <li>
                <Link to="/category/equipos">Vapos</Link>
            </li>
            
            <Link to="/cart">
                <CartWidget>
            
                </CartWidget>
            </Link>
          
     
        </ul>
       
        </>
    );
};

export default NavBar;