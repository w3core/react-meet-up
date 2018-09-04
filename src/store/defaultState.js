import { Map, Set, List } from 'immutable';

const defaultState = {
	user: Map({
		// name: null,
		age: null,
		sex: null
	}),
	categories: Set(),
	goods: List()

};

export default defaultState;
