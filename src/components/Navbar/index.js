import React from 'react'
import CartWidget from '../CartWidget';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to='/'>
          <h1>Vape Store</h1>  
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to='/fume' activeStyle>
                Fume
            </NavLink>
            <NavLink to='/supreme' activeStyle>
                Supreme
            </NavLink>
            <NavLink to='/juul' activeStyle>
                Juul
            </NavLink>
            <NavLink to='/contacto' activeStyle>
                Contactanos
            </NavLink>
            <NavLink to='/registro' activeStyle>
                registrate
            </NavLink>

        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/sing-in'>Sing in</NavBtnLink>
            <NavBtnLink to='/carrito'> <CartWidget/></NavBtnLink>
        </NavBtn>
        
    </Nav>
    </>
  );
};

export default Navbar;