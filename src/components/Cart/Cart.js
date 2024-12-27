import React, {useContext} from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'
import CartCntxt from "../../store/cart-context"
import CartItem from './CartItem'

const Cart = (props) => {
    const cartcntx= useContext(CartCntxt)

   const cartItems= (
   <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item)=> (
        <CartItem 
          key={item.id} 
          name={item.name} 
          price= {item.price} 
          
          
        />
      ))}
    </ul>
    );

    const totalAmount = cartcntx.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    const hasItems= cartcntx.items.length > 0;

    const cartItemRemoveHandler = (id) => {};

    const cartItemAddHandler = (item) => {};


  return (
    <Modal onClose={props.onClose}>
        {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$$ {totalAmount}</span>
        </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick= {props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>

  )
}

export default Cart;