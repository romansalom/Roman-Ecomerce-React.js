import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";
import {Link} from 'react-router-dom';



const NavBar = () => {

    

    return (
 <ul className="navbar-fondo">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/supreme">Supreme
                (ropa de hombre)</Link>
            </li>
            <li>
                <Link to="/category/fume">Fume
                (ropa de mujer)</Link>
            </li>
            <li>
                <Link to="/category/juul">Juul (electronicos)</Link>
            </li>
            <li>
                <Link to="/category/equipos">Vapos(joyas)</Link>
            </li>
          
            <Link to="/cart">
                <CartWidget>

                </CartWidget>
            </Link>
          
     
        </ul>
    );
};

export default NavBar;