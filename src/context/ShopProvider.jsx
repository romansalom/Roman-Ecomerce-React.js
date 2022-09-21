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

    const removeItem =  (id) => setCart(cart.filter(product => product.id !== id));


    const clearCart = () => setCart([])

    return (
        <Shop.Provider value={{ cart , addItem, clearCart , removeItem, isInCart }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;
