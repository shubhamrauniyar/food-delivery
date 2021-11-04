import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Context/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const CartConsumer=React.useContext(CartContext);
 
   const onAddItem=(item)=>
   {
      const tempItem={...item,quantity:1}
      if(item.quantity<5)
      {
      CartConsumer.addItem(tempItem);
      }
      
      
   }
   const onRemoveItem=(id)=>
   {
    CartConsumer.removeItem(id);
   }
  const cartItems = (
    
    <ul className={classes[`cart-items`]}>
      {CartConsumer.items.map((item) => {
        
        return <CartItem onAddItem={onAddItem.bind(null,item)} onRemoveItem={onRemoveItem.bind(null,item.id)} key={item.id} name={item.name} price={item.price} quantity={item.quantity}></CartItem>;
      })}
    </ul>
  );
  const hasItems=CartConsumer.items.length>0;
  const MenuItem=React.useContext(CartContext);
  
  return (
    
    <Modal onCloseClick={props.onCloseClick}>
    
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>₹{CartConsumer.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseClick} className={classes[`button--alt`]}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
    
  );
};
export default Cart;
