import styles from "./MealDesc.module.css";
import MealItemForm from "../MealItemForm";
const MealDesc=(props)=>
{const price=props.price.toFixed(2);
return (
    
    <li className={styles.meal}>
        <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>₹{price}</p>
        </div>
        <div>
        <MealItemForm name={props.name} id={props.id} price={price}></MealItemForm>
        </div>
   

    </li>
)

}
export default MealDesc;