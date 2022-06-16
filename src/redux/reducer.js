import { ADD_TO_CART } from "./constant"



export const cartData = (data = [], action) => {
    if (action.type === ADD_TO_CART) {
    console.warn("ADD_TO_CART condtion ", action)

        // some logic
        return data
    } else {
        return "no action called"
    }
}