import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import Reducers from '../store/reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    Reducers,
    compose(
        applyMiddleware(thunk, loggerMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);