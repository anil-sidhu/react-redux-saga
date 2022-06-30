import {combineReducers} from 'redux'
import { cartData } from './reducer'
import {productData} from './productReducer'
export default combineReducers({
    cartData,
    productData
})