import styles from "./MealsItem.module.css";
import Card from "../UI/Card";
import MealDesc from "./MealDesc/MealDesc";
import CartProvider from "../../Context/CartProvider";
const MealsItem = () => {
  const availableItem = [
    {
      id: "m1",
      name: "Chicken Kadhai",
      description: "250 gm, made with indian chilly spices",
      price: 500,
    },
    {
      id: "m2",
      name: "Mutton Korma",
      description: "500 gm, made with afgahni spices",
      price: 800,
    },
    {
      id: "m3",
      name: "Panner Do pyaja",
      description: "Fresh Panner, made with onion in low flame",
      price: 340,
    },
    {
      id: "m4",
      name: "Chole Bhature",
      description:
        "2 large sized bhature served with punjabi chole, Pickles",
      price: 650,
    },
    {
      id: "m5",
      name: "Dal Fry",
      description: "Cooked for 6 hrs in low flame",
      price: 240,
    },
    {
      id: "m6",
      name: "Butter Naan",
      description:
        "3 pices served, customization available(Stuff/Panner/Aloo/Garlic)",
      price: 125,
    },
  ];
  const Items = availableItem.map((meal) => {
    return <MealDesc key={meal.id} price={meal.price} name={meal.name} id={meal.id} description={meal.description}></MealDesc>;
  });
  return (
    
    <section className={styles.meals}>
      <Card>
        <ul>{Items}</ul>
      </Card>
    </section>
 
    
  );
};

export default MealsItem;
