import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to='/'>
          <h1>logo</h1>  
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
        </NavBtn>
        
    </Nav>
    </>
  );
};

export default Navbar;