import { authHeader } from '../helpers';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_PATH = process.env.REACT_APP_BASE_API_KEY;

let auth_Header = authHeader();

const headers = {
    'Content-Type': 'application/json',
    'Authorization': auth_Header?.Authorization
}

const createProduct = (data) => {
    const configs = {
        method: 'post',
        url: BASE_URL + BASE_PATH + "product",
        headers: headers,
        data: data
    };

    return axios(configs);
}

const getAllProducts = () => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + "product",
        headers: headers
    };

    return axios(configs);
}

const getMyAllProducts = () => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + "product/getmyproducts",
        headers: headers
    };
    return axios(configs);
}

const getProductById = (id) => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + `product/${id}`,
        headers: headers
    };

    return axios(configs);
}

const updateProduct = (data) => {
    const configs = {
        method: 'PUT',
        url: BASE_URL + BASE_PATH + `product/${data.id}`,
        params: { id: data.id },
        headers: headers,
        data: data
    };

    return axios(configs);
}

const deleteProduct = (id) => {
    console.log("id......................", id);
    const configs = {
        method: 'DELETE',
        url: BASE_URL + BASE_PATH + `product/${id}`,
        headers: headers
    };

    return axios(configs);
}

const getSlot = () => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + "product/slot/",
        headers: headers
    };

    return axios(configs);
}

const getCategory = () => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + "category/",
        headers: headers
    };

    return axios(configs);
}


export const productServices = {
    createProduct,
    getAllProducts,
    getMyAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getSlot,
    getCategory
}
