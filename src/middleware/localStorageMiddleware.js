import { TODO_ADD, TODO_TOGGLE, TODO_DELETE, TODO_CLEAR_COMPLETED } from '../actions/todos';

export default ({ getState }) => next => (action) => {
	const result = next(action);

	switch (action.type) {
		case TODO_ADD:
		case TODO_TOGGLE:
		case TODO_DELETE:
		case TODO_CLEAR_COMPLETED:
			localStorage.setItem('todos', JSON.stringify(getState().get('todos')));

			return result;

		case 'SET_VISIBILITY_FILTER':
			localStorage.setItem('visibilityFilter', JSON.stringify(getState().get('visibilityFilter')));

			return result;
		default:
			return result;
	}
};
