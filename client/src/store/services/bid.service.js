import { authHeader } from '../helpers';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_PATH = process.env.REACT_APP_BASE_API_KEY;

let auth_Header = authHeader();

const headers = {
    'Content-Type': 'application/json',
    'Authorization': auth_Header?.Authorization
}

function createBid(data) {
    const configs = {
        method: 'POST',
        url: BASE_URL + BASE_PATH + "bid/create-bid",
        headers: headers,
        data: data
    };
    return axios(configs);
}

function getBid(data) {
    const configs = {
        method: 'GET',
        url: BASE_URL + BASE_PATH + "bid/getbiddinghistory",
        headers: headers,
        data: data
    };
    return axios(configs);
}

export const bidServices = {
    createBid,
    getBid
}