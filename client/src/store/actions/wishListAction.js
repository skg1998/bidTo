import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../constant';

//WISHLIST ACTIONS
const addToWishlist = (productId) => ({
    type: ADD_TO_WISHLIST,
    payload: { productId },
});

const removeFromWishlist = (productId) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: { productId },
});

export const wishListAction = {
    addToWishlist,
    removeFromWishlist
}