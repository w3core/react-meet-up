import { Map, List } from 'immutable';
import { TODO_ADD, TODO_TOGGLE, TODO_DELETE, TODO_CLEAR_COMPLETED } from '../actions/todos';

export default function todos(state = List(), { type, text, uid }) {
	switch (type) {
		case TODO_ADD:
			if (!text) {
				return state;
			}

			return state.push(Map({
				text,
				completed: false,
				uid: Date.now()
			}));
		case TODO_TOGGLE:
			return state.map((todo) => {
				if (todo.get('uid') === uid) {
					const completed = todo.get('completed');

					return todo.set('completed', !completed);
				}

				return todo;
			});
		case TODO_DELETE: {
			return state.filter(todo => todo.get('uid') !== uid);
		}
		case TODO_CLEAR_COMPLETED:
			return state.filter(todo => !todo.get('completed'));
		default:
			return state;
	}
}
