import { combineReducers } from 'redux'
import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "../constant";

const addedIds = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.payload.productId) !== -1) {
                return state
            }
            return [...state, action.payload.productId]

        case REMOVE_FROM_CART:
            return state.filter(id => action.payload.productId !== id)

        case CHECKOUT:
            return []

        default:
            return state
    }
}

const quantityById = (state = {}, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                [action.payload.productId]: (state[action.payload.productId] || 0) + action.payload.quantity
            }

        case REMOVE_FROM_CART:
            let updatedState = { ...state }
            delete updatedState[action.payload.productId]
            return updatedState

        case CHECKOUT:
            return {}

        default:
            return state
    }
}

const cart = combineReducers({ addedIds, quantityById });
export default cart;

//utility functions
export const isAddedToCart = (cart, id) =>
    cart.addedIds.includes(id)

export const getTotalCartItems = cart =>
    cart.addedIds ? cart.addedIds.length : 0

export const getAllCartItems = (products, cart) => {
    console.log("product reducer", products)
    cart.addedIds.map(id => products.byId?.product?.data[id])
}

export const getQuantity = (cart, productId) =>
    cart.quantityById[productId] || 0