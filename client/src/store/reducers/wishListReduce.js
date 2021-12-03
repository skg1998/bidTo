import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, CHECKOUT } from "../constant";
import { combineReducers } from 'redux'

const addedIds = (state = [], action) => {
    switch (action.type) {

        case ADD_TO_WISHLIST:
            //Check if productId already present
            if (state.indexOf(action.payload.productId) !== -1)
                return state
            return [...state, action.payload.productId].reverse()

        case REMOVE_FROM_WISHLIST:
            return state.filter(id => action.payload.productId !== id)

        case CHECKOUT:
            return []

        default:
            return state
    }
}

const wishlist = combineReducers({ addedIds })
export default wishlist

//utility functions
export const isWishlisted = (wishlist, id) => wishlist.addedIds.includes(id)

export const getTotalWishlistItems = wishlist => wishlist.addedIds.length

export const getAllWishlists = (products, wishlist) =>
    wishlist.addedIds.map(id => products.byId[id])