import { SET_MESSAGE, CLEAR_MESSAGE } from "../constant";

const initialState = {};

export function messageReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            return { message: payload };

        case CLEAR_MESSAGE:
            return { message: "" };

        default:
            return state;
    }
}
