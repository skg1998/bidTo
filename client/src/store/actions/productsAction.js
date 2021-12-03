import {
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    RECEIVE_PRODUCTS
} from "../constant";
import { productServices } from '../services';

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    payload: { products },
});

const getProductsFromApi = () => (dispatch) => {
    dispatch(receiveProducts(productServices.getAllProducts()));
};

const incrementQuantity = (productId) => ({
    type: INCREMENT_QUANTITY,
    payload: { productId },
});

const decrementQuantity = (productId) => ({
    type: DECREMENT_QUANTITY,
    payload: { productId },
});

const filterProducts = (products, size) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items:
                size === ""
                    ? products
                    : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
        },
    });
};

const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "latest") {
        sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
        sortedProducts.sort((a, b) =>
            sort === "lowest"
                ? a.price > b.price
                    ? 1
                    : -1
                : a.price > b.price
                    ? -1
                    : 1
        );
    }
    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts,
        },
    });
};

export const productAction = {
    filterProducts,
    sortProducts,
    getProductsFromApi,
    incrementQuantity,
    decrementQuantity
}