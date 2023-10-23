import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PROGRESS } from "../../product/action/action";
import { handleGetProduct } from "../manageProduct/manageProduct";

//get category data
export function* getProductSaga () {
    yield takeLatest (GET_PRODUCT_PROGRESS , handleGetProduct)
}