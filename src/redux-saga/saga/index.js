import { all } from "@redux-saga/core/effects";
import { getProductSaga } from "./root/rootProductSaga";

export function* rootSaga() {
    yield all([getProductSaga()]);
  }