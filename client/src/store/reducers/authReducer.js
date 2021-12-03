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

export function authReducer(state = {}, action) {
    const { type, payload, message } = action;

    switch (type) {
        case USER_LOGGING_IN:
            return Object.assign({}, state, { login: payload, isLogin: true, loading: true })
        case USER_LOGGED_IN:
            return Object.assign({}, state, { login: payload, isLogin: true, loading: false })
        case USER_LOGGING_ERROR:
            return Object.assign({}, state, { message: message, isLogin: false, loading: false })
        case USER_REQUEST:
        case USER_SUCCESS:
            return Object.assign({}, state, { user: payload, isLogin: true })
        case USER_FAILURE:
            return Object.assign({}, state, { message: message, isLogin: false })
        case USER_UPDATE_REQUEST:
        case USER_UPDATE_SUCCESS:
            return Object.assign({}, state, { user: payload, isLogin: true })
        case USER_UPDATE_FAILURE:
            return Object.assign({}, state, { message: message })
        case LOGOUT_REQUEST:
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, { user: {}, isLogin: false })
        case USER_REGISTER_REQUEST:
            return { reg: true }
        case USER_REGISTER_SUCCESS:
            return { reg: false }
        case USER_REGISTER_FAILURE:
            return { reg: false }
        case FORGOT_PASSWORD_REQUEST:
            return { forgot: true }
        case FORGOT_PASSWORD_SUCCESS:
            return { forgot: false }
        case FORGOT_PASSWORD_FAILURE:
            return { forgot: false }
        case CONFIRM_PASSWORD_REQUEST:
            return { confirm: true }
        case CONFIRM_PASSWORD_SUCCESS:
            return { confirm: false }
        case CONFIRM_PASSWORD_FAILURE:
            return { confirm: false }
        case PASSWORD_CHANGE_REQUEST:
        case PASSWORD_CHANGE_SUCCESS:
        case PASSWORD_CHANGE_FAILURE:
        default:
            return state;
    }
}