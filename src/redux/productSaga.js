import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    let data = yield fetch('http://localhost:3500/products');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}

function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)

}

export default productSaga;