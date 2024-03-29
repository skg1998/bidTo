import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import Reducers from '../store/reducers';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    Reducers,
    composeEnhancers(
        applyMiddleware(thunk, loggerMiddleware),
        //window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);