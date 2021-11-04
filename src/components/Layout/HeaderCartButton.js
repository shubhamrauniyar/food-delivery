import React, { useState ,useEffect} from "react";
import styles from "./HeaderCartButton.module.css";
import element from "../Cart/PlateIcon";
import CartContext from "../../Context/CartContext";
const HeaderCartButton=(props)=>
{
const CartConsumer=React.useContext(CartContext);
const [buttonbump,setButtonBump]=useState(true);
useEffect(()=>{
    setButtonBump(false);
   const Timer= setTimeout(()=>{setButtonBump(true);},300);
    return ()=>{clearTimeout(Timer)}
},[CartConsumer.items])
const TotalItems=CartConsumer.items.reduce((prev,item)=>{
    return prev+parseInt(item.quantity);
},0)
const btnClass=`${styles.button} ${buttonbump? styles.bump:''}`
return <button onClick={props.onClickCart} className={btnClass}>
    <span className={styles.icon}>{element}</span>
    <span >{props.children}</span>
    <span className={styles.badge}>{TotalItems}</span>

    
    </button>
}

export default HeaderCartButton;