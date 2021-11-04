import React, { createContext} from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import CartContext from "../../Context/CartContext";
const MealItemForm=(props)=>
{
    const CartConsumer=React.useContext(CartContext);    
   const Itemref=React.useRef();
   const [quantityIsValid,setQuantityIsValid]=React.useState(true);
const InputFormHandler=(event)=>
{
    
    const item={
        name:props.name,
        price:props.price,
        quantity:Itemref.current.value,
        id:props.id
       
    }
    if(Itemref.current.value<0 || Itemref.current.value>5 || Itemref.current.value.trim()===0)
    {          Itemref.current.value=1;
              setQuantityIsValid(false);
              setTimeout(()=>{
                setQuantityIsValid(true);
              },5000)
    }
    else{
        CartConsumer.addItem(item);
    }
  
   
    event.preventDefault();
}


return (
    <form onSubmit={InputFormHandler} className={styles.form}>
    <Input ref={Itemref} label={"Amount"} input={{id:"quantity" , type:"number", min:"1" ,defaultValue:"1"}}/>
    <button>+Add</button>
    {!quantityIsValid && <p style={{color:"red" , position:"absolute" ,right:"20px"}}>  Enter a Valid Quantity between 1 and 5</p>}
    </form>
)

}

export default MealItemForm;