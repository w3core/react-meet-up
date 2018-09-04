import { Map } from 'immutable';

export default (state = Map(), action = {}) => {
	if (action.error) {
		return state;
	}
	switch (action.type) {
		default:
			return state;
	}
};
