import { put } from "redux-saga/effects";
import orders from "../../axios-orders";
import * as actions from "../actions";

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield orders.post(
      `/orders.json?auth=${action.token}`,
      action.orderData
    );
    yield put(
      actions.purchaseBurgerSuccess(response.data.name, action.orderData)
    );
  } catch (error) {
    yield put(actions.purchaseBurgerFail(error));
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersStart());
  const queryParams = `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;
  try {
    const response = yield orders.get(`/orders.json${queryParams}`);
    const fetchOrders = [];
    for (let key in response.data) {
      fetchOrders.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(actions.fetchOrdersSuccess(fetchOrders));
  } catch (err) {
    yield put(actions.fetchOrdersFail(err));
  }
}
