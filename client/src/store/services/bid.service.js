import { authHeader } from '../helpers';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_PATH = process.env.REACT_APP_BASE_API_KEY;

const headers = {
    'Content-Type': 'application/json',
    'Authorization': authHeader()
}

function createBid(data) {
    const configs = {
        method: 'post',
        url: BASE_URL + BASE_PATH + "bid/create-bid",
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

export const bidServices = {
    createBid
}