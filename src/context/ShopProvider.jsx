import React from 'react'
import { useState } from 'react';
import { createContext } from "react";

export const Shop = createContext();

const ShopProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addItem = (item) => {
        const productoRepetido = isInCart(item.id);
        console.log(productoRepetido);
        if (productoRepetido) {
            const cartModified = cart.map(product => {
                if (product.id === item.id) {
                    product.quantity += item.quantity
                    return product
                }
                return product
                
            })
            console.log(cartModified);


        } else{
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
   
    }
    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removeItem =  (ItemToRemuve) => {
        const filterProducts = cart.filter(item => item !== ItemToRemuve);
        setCart(filterProducts)
    }



    const clearCart = () => {setCart([])
    }
    return (
        <Shop.Provider value={{ cart , addItem, clearCart , removeItem,  }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;
