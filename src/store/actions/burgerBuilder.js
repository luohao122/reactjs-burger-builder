import * as actionTypes from "./actionTypes";

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    payload: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: name,
  };
};

export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS,
  };
};
