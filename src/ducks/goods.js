import { RSAA } from 'redux-api-middleware';
import { List } from 'immutable';

export const GOODS_REQUEST = 'GOODS_REQUEST';
export const GOODS_SUCCESS = 'GOODS_SUCCESS';
export const GOODS_FAILURE = 'GOODS_FAILURE';

export const fetchGoods = () => ({
	[RSAA]: {
		endpoint: 'https://api.myjson.com/bins/f7xkc',
		method: 'GET',
		types: [GOODS_REQUEST, GOODS_SUCCESS, GOODS_FAILURE]
	}
});

export default (state = List(), action = {}) => {
	if (action.error) {
		return state;
	}
	switch (action.type) {
		case GOODS_SUCCESS:
			return List(action.payload);

		default:
			return state;
	}
};
