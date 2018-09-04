import { Set } from 'immutable';

export default (state = Set(), action = {}) => {
	if (action.error) {
		return state;
	}
	switch (action.type) {
		default:
			return state;
	}
};
