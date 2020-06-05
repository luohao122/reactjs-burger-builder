import classes from "./Burger.module.css";
import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let parsedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
      return [...Array(props.ingredients[ingredientKey])].map((_, idx) => {
        return (
          <BurgerIngredient key={ingredientKey + idx} type={ingredientKey} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (parsedIngredients.length === 0) {
    parsedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {parsedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
