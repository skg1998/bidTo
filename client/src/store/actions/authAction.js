import {
    USER_LOGGING_IN,
    USER_LOGGED_IN,
    USER_LOGGING_ERROR,
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAILURE,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    CONFIRM_PASSWORD_REQUEST,
    CONFIRM_PASSWORD_SUCCESS,
    CONFIRM_PASSWORD_FAILURE,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGE_FAILURE
} from "../constant";

import { createBrowserHistory } from 'history';
import { authServices } from "../services";

const history = createBrowserHistory();

const register = (username, email, password) => (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST })
    return authServices.register(username, email, password)
        .then(res => {
            dispatch({ type: USER_REGISTER_SUCCESS })
            history.push('/login')
            window.location.reload(true)
        })
        .catch(error => {
            dispatch({ type: USER_REGISTER_FAILURE })
        })
};

const login = (email, password) => (dispatch) => {
    dispatch({ type: USER_LOGGING_IN })
    return authServices.login(email, password)
        .then(res => {
            history.push('/home');
            //window.location.reload(true)
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch({ type: USER_LOGGED_IN, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: USER_LOGGING_ERROR, message: error.response.data })

        })
};

const getProfile = () => (dispatch) => {
    dispatch({ type: USER_REQUEST })
    return authServices.getMyProfile()
        .then(res => {
            dispatch({ type: USER_SUCCESS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: USER_FAILURE, message: error.data })
        })
}

const updateUser = (data) => (dispatch) => {
    dispatch({ type: USER_UPDATE_REQUEST })
    authServices.updateProfile(data)
        .then(res => {
            dispatch({ type: USER_UPDATE_SUCCESS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: USER_UPDATE_FAILURE, message: error.data })
        })
}


const forgotPassword = (email) => (dispatch) => {
    dispatch({ type: FORGOT_PASSWORD_REQUEST })
    return authServices.forgotPassword(email)
        .then(res => {
            history.push('/login')
            window.location.reload(true)
            dispatch({ type: FORGOT_PASSWORD_SUCCESS })
            return Promise.resolve();
        })
        .catch(error => {
            dispatch({ type: FORGOT_PASSWORD_FAILURE })
            return Promise.reject();
        })
};

const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST })
    authServices.logout()
        .then(res => {
            history.push('/login')
            window.location.reload(true)
            dispatch({ type: LOGOUT_SUCCESS })
        })
};

export const authAction = {
    register,
    login,
    getProfile,
    updateUser,
    logout,
    forgotPassword
}

