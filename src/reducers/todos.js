import { TODO_ADD } from '../actions/todos';

export default function todos(state = [], { type, text }) {
	if (type === TODO_ADD) {
		if (!text) {
			return state;
		}

		return [
			...state,
			{
				text,
				uid: Date.now()
			}
		];
	}

	return state;
}
