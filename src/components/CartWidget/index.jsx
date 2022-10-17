import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "./style.css";
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';

const CartWidget = () => {
     const {cart} = useContext(Shop);
     if (cart && cart.lenght > 0){
        return(
            <div style={{
                position : 'absolute' ,
                right: '20px',
                top : '5px'
            }}>
                
                <AiOutlineShoppingCart color='green' size={40}/>
                <span className="cart-widget_counter">{cart.lenght}</span>
            </div>
            

        )
     }  else {
    return (
      <div style={{
          position: 'absolute',
          right: '20px',
          top: '5px',
          color : 'black'
      }}>
        
          <AiOutlineShoppingCart color='black' size={40}/>
      </div>
     )
     }
    }

export default CartWidget
