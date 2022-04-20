import React, { createContext, useState } from 'react';
import axios from 'axios';


export const CartContext = createContext();
const defaultCartSummary = {
    totalAmount: 0,
    items: [],
    totalRedeemPoints: 0

}
function CartContextProvider(props) {

    const [cartCount, setCartCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [cartSummary, setCartSummary] = useState(defaultCartSummary);
 
    const addToCart = (catalogue) => {
        let { redeemptionAmount, redeemptionPoint } = catalogue;
        if (!isItemAlreadyExist(catalogue)) {
            setCartItems(cartItems.concat(catalogue));
            setCartCount(cartItems.length + 1);
            setCartSummary({
                totalAmount: cartSummary.totalAmount + redeemptionAmount,
                items: cartItems.concat(catalogue),
                totalRedeemPoints: cartSummary.totalRedeemPoints + redeemptionPoint
            })
        }
        console.log(cartItems)
    }

    const afterPurchase = () => {
        setCartCount(0);
        setCartItems([]);
        setCartSummary(defaultCartSummary);
    }

    const removeItemFromCart = (item) => {
        let { redeemptionAmount, redeemptionPoint } = item;
        let filteredItems = cartItems.filter(c => c.id != item.id)
        setCartItems(filteredItems);
        setCartCount(cartItems.length - 1);
        setCartSummary({
            totalAmount: cartSummary.totalAmount - redeemptionAmount,
            items: filteredItems,
            totalRedeemPoints: cartSummary.totalRedeemPoints - redeemptionPoint
        })
    }

    const isItemAlreadyExist = (catalogue) => {

        let check = cartItems.filter(c => c.id == catalogue.id);
        if (check.length == 0) {
            return false
        } else {
            return true
        }
    }

    return (
        <div>
            <CartContext.Provider value={{ cartCount, addToCart, cartItems,cartSummary, removeItemFromCart, afterPurchase }}>
                {props.children}
            </CartContext.Provider>
        </div>

    )

}

export default CartContextProvider;