import { cloneDeep } from 'lodash';
import { combineReducers } from 'redux'
import {
    BID_INITIATE_REQUEST,
    BID_INITIATE_SUCESS,
    BID_INITIATE_FAILURE,

    BID_NOT_START_YET,
    BID_RUNNING,
    BID_END,

    SET_WINNER,
    SET_HIGHEST_PRICE,

    GET_BIDDING_HISTORY_REQUEST,
    GET_BIDDING_HISTORY_SUCESS,
    GET_BIDDING_HISTORY_FAILURE,

    GET_YOUR_CURRENT_BID,
    ADD_YOUR_CURRENT_BID
} from '../constant';

const defaultProduct = {
    time: "",
    yourbid: "Haven't Bid",
    highestbid: "Not Start",
    winner: "Not End",
    bidhistory: [],
    biddingProgress: [],
    biddingType: [],
    dailyBid: [],
    bidstatus: ""
}

const initialState = {
    products: {}
}

const bidStatus = (state = initialState, { payload, type }) => {
    switch (type) {
        case BID_NOT_START_YET: {
            const { prodId, time } = payload;
            if (!state.products[prodId]) {
                state.products[prodId] = cloneDeep(defaultProduct);
            }

            state.products[prodId].time = time;
            state.products[prodId].bidstatus = "BID NOT STARTED YET"
            state.products = {
                ...state.products,
                [prodId]: cloneDeep(state.products[prodId])
            }

            return state;
        }

        case BID_RUNNING: {
            const { prodId, time } = payload;
            if (!state.products[prodId]) {
                state.products[prodId] = cloneDeep(defaultProduct);
            }

            state.products[prodId].time = time;
            state.products[prodId].bidstatus = "BID IS RUNNING"
            state.products = {
                ...state.products,
                [prodId]: cloneDeep(state.products[prodId])
            }

            return state;
        }

        case BID_END: {
            const { prodId } = payload;
            if (!state.products[prodId]) {
                state.products[prodId] = cloneDeep(defaultProduct);
            }

            state.products[prodId].bidstatus = "BID END";
            state.products = {
                ...state.products,
                [prodId]: cloneDeep(state.products[prodId])
            }
            return state;
        }

        case GET_YOUR_CURRENT_BID: {
            const { prodId, bidAmount } = payload;
            state.products[prodId].yourbid = bidAmount
            state.products = {
                ...state.products,
                [prodId]: cloneDeep(state.products[prodId])
            }
            return state;
        }

        case SET_WINNER: {
            const { prodId, user } = payload;
            state.products[prodId].winner = user
            state.products = {
                ...state.products,
                [prodId]: cloneDeep(state.products[prodId])
            }
            return state;
        }

        case SET_HIGHEST_PRICE: {
            const { prodId, highestbid } = payload;
            state.products[prodId].yourbid = highestbid
            state.products = {
                ...state.products,
                [prodId]: cloneDeep(state.products[prodId])
            }
            return state;
        }

        case ADD_YOUR_CURRENT_BID: {
            const { prodId, bidAmount, user } = payload;
            state.products[prodId].bidhistory?.unshift({ prodId, bidAmount, user });
            state.products[prodId].yourbid = bidAmount;
            state.products = {
                ...state.products,
                [prodId]: cloneDeep(state.products[prodId])
            }
            return state;
        }

        case GET_BIDDING_HISTORY_REQUEST:
        case GET_BIDDING_HISTORY_SUCESS: {
            const { prodId, data } = payload;
            state.products[prodId].bidhistory = data;
            state.products = {
                ...state.products,
                [prodId]: cloneDeep(state.products[prodId])
            }
            return state;
        }
        case GET_BIDDING_HISTORY_FAILURE:
        default:
            return state;
    }
}

const createBid = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case BID_INITIATE_REQUEST:
        case BID_INITIATE_SUCESS:
        case BID_INITIATE_FAILURE:
        default:
            return state;
    }
}

const bid = combineReducers({ createBid, bidStatus });
export default bid;