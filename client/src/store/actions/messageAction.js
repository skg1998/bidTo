import { SET_MESSAGE, CLEAR_MESSAGE } from "../constant";

const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message,
});

const clearMessage = () => ({
    type: CLEAR_MESSAGE,
});

export const messageAction = {
    setMessage,
    clearMessage
}