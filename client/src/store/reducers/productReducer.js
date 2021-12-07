import _ from 'lodash'
import { combineReducers } from 'redux'
import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    RECEIVE_PRODUCTS,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    CHECKOUT,

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

const createProd = (state = {}, action) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST:
        case CREATE_PRODUCT_SUCCESS:
        case CREATE_PRODUCT_FAILURE:
        default:
            return state
    }
}

const updateProd = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_SUCCESS:
        case UPDATE_PRODUCT_FAILURE:
        default:
            return state
    }
}

const deleteProd = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
        case DELETE_PRODUCT_SUCCESS:
        case DELETE_PRODUCT_FAILURE:
        default:
            return state
    }
}

const myProd = (state = {}, action) => {
    switch (action.type) {
        case GET_MY_PRODUCTS_REQUEST:
        case GET_MY_PRODUCTS_SUCCESS:
            return Object.assign({}, state, { myallProduct: action.payload, loading: false })
        case GET_MY_PRODUCTS_FAILURE:
            return Object.assign({}, state, { message: action.message, loading: false })
        default:
            return state
    }
}

const Category = (state = {}, action) => {
    switch (action.type) {
        case GET_CATEGORY_REQUEST:
        case GET_CATEGORY_SUCCESS:
            return Object.assign({}, state, { category: action.payload, loading: false })
        case GET_CATEGORY_FAILURE:
            return Object.assign({}, state, { message: action.message, loading: false })
        default:
            return state
    }
}

const Slot = (state = {}, action) => {
    switch (action.type) {
        case GET_SLOT_REQUEST:
        case GET_SLOT_SUCCESS:
            return Object.assign({}, state, { category: action.payload, loading: false })
        case GET_SLOT_FAILURE:
            return Object.assign({}, state, { message: action.message, loading: false })
        default:
            return state
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCTS_BY_ID_REQUEST:
        case GET_PRODUCTS_BY_ID_SUCCESS:
            return Object.assign({}, state, { product: action.payload, loading: false })
        case GET_PRODUCTS_BY_ID_FAILURE:
            return Object.assign({}, state, { message: action.message, loading: false })
        default:
            return state
    }
}

const allproducts = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
        case GET_ALL_PRODUCTS_SUCCESS:
            return Object.assign({}, state, { products: action.payload, loading: false })
        case GET_ALL_PRODUCTS_FAILURE:
            return Object.assign({}, state, { message: action.message, loading: false })
        default:
            return state
    }
}

const selectedQuantityById = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.payload.products.reduce((obj, product) => {
                    obj[product.id] = 1
                    return obj
                }, {})
            }

        case INCREMENT_QUANTITY:
            return {
                ...state,
                [action.payload.productId]: state[action.payload.productId] + 1
            }

        case DECREMENT_QUANTITY:

            if (state[action.payload.productId] === 1)
                return state

            return {
                ...state,
                [action.payload.productId]: state[action.payload.productId] - 1
            }

        case CHECKOUT:
            return {
                ...state,
                ...action.payload.allProductsId.reduce((obj, productId) => {
                    obj[productId] = 1
                    return obj
                }, {})
            }

        default:
            return state
    }
}

const products = combineReducers({ createProd, updateProd, deleteProd, myProd, Category, Slot, byId, allproducts, selectedQuantityById })
export default products;

//utility functions
export const getProduct = (products, id) => products.byId[id]

export const getSelectedQuantity = (products, id) =>
    products.selectedQuantityById[id]