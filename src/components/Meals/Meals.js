import React from "react";
import MealsItem from "./MealsItem";
import MealsSummary from "./MealsSummary";
const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>
      <MealsItem></MealsItem>
    </React.Fragment>
  );
};

export default Meals;
