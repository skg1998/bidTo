import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from '../constant';

//CART ACTIONS
const addToCart = (productId, quantity) => ({
    type: ADD_TO_CART,
    payload: { productId, quantity },
});

const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: { productId },
});

const checkout = (allProductsId) => ({
    type: CHECKOUT,
    payload: { allProductsId },
});

const changeQty = (product) => {
    //change quantity
    console.log(product);
}

export const cartAction = {
    addToCart,
    removeFromCart,
    changeQty,
    checkout
}