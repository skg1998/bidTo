import { authHeader } from '../helpers';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_PATH = process.env.REACT_APP_BASE_API_KEY;

const headers = {
    'Content-Type': 'application/json',
    'Authorization': authHeader()
}

const createCategory = (data) => {
    const configs = {
        method: 'post',
        url: BASE_URL + BASE_PATH + "category",
        headers: headers,
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

const getAllCategories = () => {
    const configs = {
        method: 'post',
        url: BASE_URL + BASE_PATH + "category",
        headers: headers
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

const getCategoryById = (id) => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + `category/${id}`,
        headers: headers
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

const updateCategory = (id, data) => {
    const configs = {
        method: 'PUT',
        url: BASE_URL + BASE_PATH + `category/${id}`,
        params: { id: id },
        headers: headers,
        data: data
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

const deleteCategory = (id) => {
    const configs = {
        method: 'DELETE',
        url: BASE_URL + BASE_PATH + `category/${id}`,
        headers: headers
    };

    return new Promise((resolve, reject) => {
        axios(configs).then(({ status, data }) => {
            resolve(status == 200 && data ? data : null)
        })
            .catch(reject)
    })
}

export const categoryServices = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}