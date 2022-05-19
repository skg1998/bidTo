import {
    BID_INITIATE_REQUEST,
    BID_INITIATE_SUCESS,
    BID_INITIATE_FAILURE,

    BID_NOT_START_YET,
    BID_RUNNING,
    BID_END,

    SET_WINNER,
    SET_ADD_TO_CART,
    SET_HIGHEST_PRICE,

    GET_BIDDING_HISTORY_REQUEST,
    GET_BIDDING_HISTORY_SUCESS,
    GET_BIDDING_HISTORY_FAILURE,

    GET_YOUR_CURRENT_BID,
    ADD_YOUR_CURRENT_BID
} from '../constant';
import { bidServices } from "../services";

const scheduler = (date1, date2) => {
    let d = (new Date(date1)) - (new Date(date2));
    let weekdays = Math.floor(d / 1000 / 60 / 60 / 24 / 7);
    let days = Math.floor(d / 1000 / 60 / 60 / 24 - weekdays * 7);
    let hours = Math.floor(d / 1000 / 60 / 60 - weekdays * 7 * 24 - days * 24);
    let minutes = Math.floor(d / 1000 / 60 - weekdays * 7 * 24 * 60 - days * 24 * 60 - hours * 60);
    let seconds = Math.floor(d / 1000 - weekdays * 7 * 24 * 60 * 60 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);

    let t = `${days} d ${hours} h ${minutes} m ${seconds} s`;
    return t;
}

const bidStatus = (prodId, current, start, end) => (dispatch) => {
    if (new Date(current) < new Date(start)) {
        //calculate total time remaining before bidding start
        let time = scheduler(start, current);
        return dispatch({ type: BID_NOT_START_YET, payload: { prodId, time } });

    } else if (new Date(current) >= new Date(start) && new Date(current) <= new Date(end)) {
        //calculate total time remaining after bidding start and before and time
        let time = scheduler(end, current);
        return dispatch({ type: BID_RUNNING, payload: { prodId, time } });

    } else {
        //end of bid
        dispatch({ type: BID_END, payload: { prodId } });
        // winner(prodId);
        // highestBid(prodId);
        // dispatch({ type: SET_ADD_TO_CART, payload: "" });
    }
}

const getBid = (prodId) => (dispatch) => {
    dispatch({ type: GET_BIDDING_HISTORY_REQUEST })
    return bidServices.getBid(prodId)
        .then(res =>
            dispatch({ type: GET_BIDDING_HISTORY_SUCESS, payload: { prodId: [this.prodId], data: res.data } })
        )
        .catch(error => dispatch({ type: GET_BIDDING_HISTORY_FAILURE, payload: error.response.data }))
}

const updateYourCurrentBid = (data) => (dispatch) => {
    const { prodId, bidAmount, user } = data;
    return dispatch({
        type: ADD_YOUR_CURRENT_BID,
        payload: { prodId, bidAmount, user }
    })
}

const winner = (data) => (dispatch) => {
    return dispatch({
        type: SET_WINNER,
        payload: data
    })
}

const highestBid = (data) => (dispatch, getState) => {
    console.log("getState", getState());
    return dispatch({
        type: SET_HIGHEST_PRICE,
        payload: data
    })
}

const creatBid = (data) => (dispatch) => {
    dispatch({ type: BID_INITIATE_REQUEST })
    return bidServices.createBid(data)
        .then(res => {
            dispatch({ type: BID_INITIATE_SUCESS, payload: res.data })
            console.log("updateYourCurrentBid")
            updateYourCurrentBid(res.data);
        })
        .catch(error => {
            dispatch({ type: BID_INITIATE_FAILURE, message: error.response.data })
        })
}

export const bidAction = {
    creatBid,
    bidStatus,
    getBid,
    updateYourCurrentBid
}
