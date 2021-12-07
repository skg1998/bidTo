import {
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,

    CREATE_PRODUCT_FAILURE,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_REQUEST,

    GET_ALL_PRODUCTS_FAILURE,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,

    GET_CATEGORY_FAILURE,
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,

    GET_MY_PRODUCTS_FAILURE,
    GET_MY_PRODUCTS_REQUEST,
    GET_MY_PRODUCTS_SUCCESS,

    GET_PRODUCTS_BY_ID_FAILURE,
    GET_PRODUCTS_BY_ID_REQUEST,
    GET_PRODUCTS_BY_ID_SUCCESS,

    UPDATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,

    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,

    GET_SLOT_FAILURE,
    GET_SLOT_REQUEST,
    GET_SLOT_SUCCESS

} from "../constant";
import { productServices } from '../services';

const createProducts = (data) => (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST })
    return productServices.createProduct(data)
        .then(res => {
            dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: CREATE_PRODUCT_FAILURE, message: error.response.data })
        })
}

const getAllProducts = () => (dispatch) => {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST })
    return productServices.getAllProducts()
        .then(res => {
            dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: GET_ALL_PRODUCTS_FAILURE, message: error.response.data })
        })
}

const getProductById = (id) => (dispatch) => {
    dispatch({ type: GET_PRODUCTS_BY_ID_REQUEST });
    return productServices.getProductById(id)
        .then(res => {
            dispatch({ type: GET_PRODUCTS_BY_ID_SUCCESS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: GET_PRODUCTS_BY_ID_FAILURE, message: error.response.data })
        })
}

const getMyAllProducts = () => (dispatch) => {
    dispatch({ type: GET_MY_PRODUCTS_REQUEST })
    return productServices.createProduct()
        .then(res => {
            dispatch({ type: GET_MY_PRODUCTS_SUCCESS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: GET_MY_PRODUCTS_FAILURE, message: error.response.data })
        })
}

const updateProduct = (data) => (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST })
    return productServices.updateProduct(data)
        .then(res => {
            dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: UPDATE_PRODUCT_FAILURE, message: error.response.data })
        })
}

const deleteProduct = () => (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST })
    return productServices.deleteProduct()
        .then(res => {
            dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: DELETE_PRODUCT_FAILURE, message: error.response.data })
        })
}

const getAllCategories = () => (dispatch) => {
    dispatch({ type: GET_CATEGORY_REQUEST })
    return productServices.deleteProduct()
        .then(res => {
            dispatch({ type: GET_CATEGORY_SUCCESS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: GET_CATEGORY_FAILURE, message: error.response.data })
        })
}

const getAllSlot = () => (dispatch) => {
    dispatch({ type: GET_SLOT_REQUEST })
    return productServices.getSlot()
        .then(res => {
            dispatch({ type: GET_SLOT_SUCCESS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: GET_SLOT_FAILURE, message: error.response.data })
        })
}

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
    createProducts,
    getAllProducts,
    getMyAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getAllCategories,
    getAllSlot,
    filterProducts,
    sortProducts,
    incrementQuantity,
    decrementQuantity
}