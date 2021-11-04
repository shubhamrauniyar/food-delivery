import React from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>₹{props.price}</span>
          <span className={styles.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
          <button onClick={props.onRemoveItem}>-</button>
          <button onClick={props.onAddItem}>+</button>
                
      </div>
    </li>
  );
};

export default CartItem;
