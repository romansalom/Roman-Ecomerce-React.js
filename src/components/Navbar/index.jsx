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
                <Link to="/category/men's clothing">Supreme
                (ropa de hombre)</Link>
            </li>
            <li>
                <Link to="/category/women's clothing">Fume
                (ropa de mujer)</Link>
            </li>
            <li>
                <Link to="/category/electronics">Juul (electronicos)</Link>
            </li>
            <li>
                <Link to="/category/jewelery">Vapos(joyas)</Link>
            </li>
            <CartWidget/>
     
        </ul>
    );
};

export default NavBar;