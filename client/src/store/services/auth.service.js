import { authHeader } from '../helpers';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_PATH = process.env.REACT_APP_BASE_API_KEY;

const headers = {
    'Content-Type': 'application/json',
    'Authorization': authHeader()
}

const register = (username, email, password) => {
    const configs = {
        method: 'post',
        url: BASE_URL + BASE_PATH + "users/signup",
        headers: { 'Content-Type': 'application/json' },
        data: { username, email, password }
    };

    return axios(configs);
};

const login = (username, password) => {
    const configs = {
        method: 'post',
        url: BASE_URL + BASE_PATH + "users/signin",
        headers: { 'Content-Type': 'application/json' },
        data: { username, password }
    };

    return axios(configs);
};

const forgotPassword = (email) => {
    const configs = {
        method: 'post',
        url: BASE_URL + BASE_PATH + "users/forgotPassword",
        headers: {
            'Content-Type': 'application/json'
        },
        data: email
    };
    return axios(configs);
}

const updateProfile = (data) => {
    const configs = {
        method: 'PUT',
        url: BASE_URL + BASE_PATH + "users/",
        headers: headers,
        data: data
    };
    return axios(configs);
}

const deleteProfile = () => {
    const configs = {
        method: 'DELETE',
        url: BASE_URL + BASE_PATH + "users/",
        headers: headers
    };
    return axios(configs);
}

const getMyProfile = () => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + "users/myProfile",
        headers: headers,
    };
    return axios(configs);
}

function getUserById() {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + "users/",
        headers: headers,
    };
    return axios(configs);
}

const logout = () => {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + "users/logout",
        headers: headers,
    };
    return axios(configs);
}

export const authServices = {
    login,
    register,
    forgotPassword,
    updateProfile,
    deleteProfile,
    getMyProfile,
    getUserById,
    logout
}