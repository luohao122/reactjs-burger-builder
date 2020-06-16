import { put } from "redux-saga/effects";
import orders from "../../axios-orders";
import * as actions from "../actions";

export function* initIngredientSaga(action) {
  try {
    const response = yield orders.get(
      "https://react-burger-builder-b805f.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
