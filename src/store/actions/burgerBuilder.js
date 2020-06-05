import * as actionTypes from "./actionTypes";
import orders from "../../axios-orders";

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
  return (dispatch) => {
    orders
      .get("https://react-burger-builder-b805f.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch({
          type: actionTypes.SET_INGREDIENTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FETCH_INGREDIENTS_FAILED,
        });
      });
  };
};
