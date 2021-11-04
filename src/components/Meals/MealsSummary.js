import Meals from "./Meals"
import styles from "./MealsSummary.module.css";
const MealsSummary=()=>
{
return (<div className={styles.summary}>
<h2>Delicious Food, Delivered at your Door</h2>
<p>Choose your favourite meal from our broad selection meals and enjoy a delicious meal at your door step</p>
<p>All the meals cooked are hygenic, we follow COVID-19 precaution. Our delivery partners are fully vacinated. </p>
</div>);
}

export default MealsSummary;