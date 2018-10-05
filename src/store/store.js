import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promiseMiddleware from 'redux-promise-middleware';
import {
  products, initialProductsState, userInfo, initialUserInfoState, filter, initialFilterState,
} from 'reducers';
import thunkMiddleware from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware()));

export const initialStoreState = Map({
  userInfo: initialUserInfoState,
  filter: initialFilterState,
  products: initialProductsState,
});

const store = createStore(
  combineReducers({
    userInfo,
    filter,
    products,
  }),
  initialStoreState,
  enhancer,
);

export default store;
