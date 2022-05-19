import { combineReducers } from 'redux';

import cart, * as fromCart from './cartReducer';
import { orderReducer } from './orderReducer';
import products, * as fromProducts from './productReducer';
import bidReducer from './bidReducer';
import { messageReducer } from './message';
import authReducer from './authReducer';
import wishlist from './wishListReduce';

const Reducer = combineReducers({
    authReducer,
    cart,
    orderReducer,
    products,
    wishlist,
    messageReducer,
    bidReducer
})

export default Reducer;

//parseToInt converts product price "12,000" -> 12000
const parseToInt = str => parseInt(str.split(',').join(''))

//total price of individual product -> (product X it's quantity)
export const getTotalItemPrice = (state, id) =>
    fromCart.getQuantity(state.cart, id) *
    parseToInt(fromProducts.getProduct(state.products, id).offerPrice)

//total price of all items, final payable amount
export const getTotalPrice = (state) =>
    state.cart.addedIds
        .map(id => getTotalItemPrice(state, id))
        .reduce((total, price) => total + price, 0)