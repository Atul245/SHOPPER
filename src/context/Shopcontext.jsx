import React, { createContext } from 'react'
import all_product from '../components/Assets/all_product'
import { useState } from 'react';

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i = 0; i<all_product.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartValue = () => {
        let total = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id===Number(item))
                total += itemInfo.new_price * cartItems[item];
            }
        }
        return total;
    }

    const getTotalCartItems = () => { 
        let totalItem = 0
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItem++;
            }
        }
        return totalItem;
    }

    const contextValue = {all_product, cartItems,getTotalCartItems, addToCart, removeFromCart, getTotalCartValue};

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopContextProvider;
