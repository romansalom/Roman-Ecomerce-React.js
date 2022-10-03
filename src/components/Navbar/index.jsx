import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";
import {Link} from 'react-router-dom';
import { useState } from "react";
import { Button } from "@mui/material";
import AuthContainer from "../../conteiners/AuthContainer";



const NavBar = () => {

    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);

    const handleLogin = () => {
        setLoginModal(true);
    };

    const handleSignup = ()=> {
        setSignupModal(true);
    }
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
            
            <div className="buttons-container">
                    <Button
                        size="medium"
                        variant="outlined"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Button
                        size="medium"
                        variant="contained"
                        onClick={handleSignup}
                    >
                        Signup
                    </Button>
                </div>
            <Link to="/cart">
                <CartWidget>

                </CartWidget>
            </Link>
          
     
        </ul>
        {(loginModal || signupModal) && (
                    <AuthContainer
                        handleClose={() => {
                            setLoginModal(false);
                            setSignupModal(false);
                        }}
                        login={loginModal}
                        signUp={signupModal}
                    />
                )}
        </>
    );
};

export default NavBar;