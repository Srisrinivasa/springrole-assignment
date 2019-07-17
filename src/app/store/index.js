import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from 'core/reducers';
import promiseMiddleware from 'redux-promise-middleware';
import {logger} from "redux-logger";
export const store = createStore(rootReducer, {}, applyMiddleware(logger, promiseMiddleware));
