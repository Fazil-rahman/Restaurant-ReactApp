import React , {useContext} from 'react'
import classes from "./MealItemForm.module.css"
import Input from '../../UI/Input'
import Cartcntx from "../../../store/cart-context"

const MealItemForm = (props) => {
    const cartcntx =  useContext(Cartcntx)

    const addItemToCart = (event) => {
      event.preventDefault();
      const quantity = document.getElementById("amount" + props.id).value
      cartcntx.addItem({...props.item,quantity : quantity})

    }
  return (
    <form className={classes.form}>
        <Input label="Amount" input ={{ 
            id:"amount" + props.id,
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1",
            }}/>
        <button onClick = {addItemToCart}>+ add</button>
    </form>
  )
}

export default MealItemForm;