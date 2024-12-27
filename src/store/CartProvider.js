import React, { useState } from 'react'
import CartContext from './cart-context'


const CartProvider = (props) => {
  const [items,setItems]= useState([])
    const addItemToCartHandler= (item)=>{
      setItems((prevItems) => [...prevItems, item]);
      console.log("inside", cartContext)
    };

    const removeItemFromCartHandler= (id)=>{};

    const cartContext = {
        items: items,
        totalAmount:0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message: " Click here"
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;