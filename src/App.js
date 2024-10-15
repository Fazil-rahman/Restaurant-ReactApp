import { Fragment } from "react";
import {useState} from "react"
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [isCartShown,setIsCartShown]= useState(false);

  const showCartHandler= ()=>{
    setIsCartShown(true);
  }

  const hideCarthandler = ()=> {
    setIsCartShown(false)
  }


  return (
    <Fragment>
      {isCartShown && <Cart onClose= {hideCarthandler}/>}
      <Header onShow = {showCartHandler}/>
      <Meals/>
    </Fragment>
  );
}

export default App;
