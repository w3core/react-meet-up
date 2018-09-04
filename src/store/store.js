import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import { apiMiddleware } from 'redux-api-middleware';

import defaultState from './defaultState';

import {
	userReducer,
	categoriesReducer,
	goodsReducer
} from '../ducks';

const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	goods: goodsReducer
});

const getInitialStore = () => {
	const state = Map(defaultState);

	return state;
};

const middleware = applyMiddleware(apiMiddleware /* ,... */);

export default (additionalMiddleware) => {
	if (additionalMiddleware) {
		return createStore(rootReducer, getInitialStore(), compose(middleware, additionalMiddleware));
	}

	return createStore(rootReducer, getInitialStore(), middleware);
};
