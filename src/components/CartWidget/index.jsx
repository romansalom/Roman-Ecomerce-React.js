import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "./style.css";

const CartWidget = () => {

    return (
      <div style={{
          position: 'absolute',
          right: '20px',
          top: '5px',
      }}>
        
          <AiOutlineShoppingCart color='green' size={40}/>
      </div>
    )
    }

export default CartWidget
