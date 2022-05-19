/** ################################################################################# */
// Auth
/** ################################################################################# */
export const USER_LOGGING_IN = 'USER_LOGGING_IN'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
export const USER_LOGGING_ERROR = 'USER_LOGGING_ERROR'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE'
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE'

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE'

export const CONFIRM_PASSWORD_REQUEST = 'CONFIRM_PASSWORD_REQUEST'
export const CONFIRM_PASSWORD_SUCCESS = 'CONFIRM_PASSWORD_SUCCESS'
export const CONFIRM_PASSWORD_FAILURE = 'CONFIRM_PASSWORD_FAILURE'

export const PASSWORD_CHANGE_REQUEST = 'PASSWORD_CHANGE_REQUEST'
export const PASSWORD_CHANGE_SUCCESS = 'PASSWORD_CHANGE_SUCCESS'
export const PASSWORD_CHANGE_FAILURE = 'PASSWORD_CHANGE_FAILURE'


/** ################################################################################# */
//Products
/** ################################################################################# */
export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST'
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS'
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE'

export const GET_ALL_PRODUCTS_REQUEST = 'GET_ALL_PRODUCTS_REQUEST'
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS'
export const GET_ALL_PRODUCTS_FAILURE = 'GET_ALL_PRODUCTS_FAILURE'

export const GET_MY_PRODUCTS_REQUEST = 'GET_MY_PRODUCTS_REQUEST'
export const GET_MY_PRODUCTS_SUCCESS = 'GET_MY_PRODUCTS_SUCCESS'
export const GET_MY_PRODUCTS_FAILURE = 'GET_MY_PRODUCTS_FAILURE'

export const GET_PRODUCTS_BY_ID_REQUEST = 'GET_PRODUCTS_BY_ID_REQUEST'
export const GET_PRODUCTS_BY_ID_SUCCESS = 'GET_PRODUCTS_BY_ID_SUCCESS'
export const GET_PRODUCTS_BY_ID_FAILURE = 'GET_PRODUCTS_BY_ID_FAILURE'

export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST'
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE'

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST'
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS'
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE'

export const GET_CATEGORY_REQUEST = 'GET_CATEGORY_REQUEST'
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS'
export const GET_CATEGORY_FAILURE = 'GET_CATEGORY_FAILURE'

export const GET_SLOT_REQUEST = 'GET_SLOT_REQUEST'
export const GET_SLOT_SUCCESS = 'GET_SLOT_SUCCESS'
export const GET_SLOT_FAILURE = 'GET_SLOT_FAILURE'


/** ################################################################################# */
//FILTER
/** ################################################################################# */
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FILTER_PRODUCTS_BY_SIZE = "FILTER_PRODUCTS_BY_SIZE";
export const FILTER_PRODUCTS_BY_CATEGORY = "FILTER_PRODUCTS_BY_CATEGORY";
export const FILTER_PRODUCTS_BY_PRICE = "FILTER_PRODUCTS_BY_PRICE";
export const FILTER_PRODUCTS_BY_STATUS = "FILTER_PRODUCTS_BY_STATUS";
export const FILTER_PRODUCTS_BY_SEARCH = "FILTER_PRODUCTS_BY_SEARCH";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";


/** ################################################################################# */
//BID
/** ################################################################################# */
export const BID_NOT_START_YET = "BID_NOT_START_YET";
export const BID_RUNNING = "BID_RUNNING";
export const BID_END = "BID_END";

export const SET_WINNER = "SET_WINNER";
export const SET_HIGHEST_PRICE = "SET_HIGHEST_PRICE";
export const SET_ADD_TO_CART = "SET_ADD_TO_CART";

export const BID_INITIATE_REQUEST = "BID_INITIATE_REQUEST";
export const BID_INITIATE_SUCESS = "BID_INITIATE_SUCESS";
export const BID_INITIATE_FAILURE = "BID_INITIATE_FAILURE";

export const GET_BIDDING_HISTORY_REQUEST = "GET_BIDDING_HISTORY_REQUEST";
export const GET_BIDDING_HISTORY_SUCESS = "GET_BIDDING_HISTORY_SUCESS";
export const GET_BIDDING_HISTORY_FAILURE = "GET_BIDDING_HISTORY_FAILURE";

export const GET_YOUR_CURRENT_BID = "GET_YOUR_CURRENT_BID";
export const ADD_YOUR_CURRENT_BID = "ADD_YOUR_CURRENT_BID";

/** ################################################################################# */
//CARTS
/** ################################################################################# */
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const CHECKOUT = "CHECKOUT";


/** ################################################################################# */
//WISHLIST
/** ################################################################################# */
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const CLEAR_FAVORITE = "CLEAR_FAVORITE";


/** ################################################################################# */
//ORDERS
/** ################################################################################# */
export const CREATE_ORDER = "CREATE_ORDER";
export const CLEAR_ORDER = "CLEAR_ORDER";
export const FETCH_ORDERS = "FETCH_ORDERS";

/** ################################################################################# */
//MESSAGE
/** ################################################################################# */
export const SET_MESSAGE = "SET_MESSAGE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";
export const ORDER_PRODUCTS_BY_PRICE = "ORDER_PRODUCTS_BY_PRICE";