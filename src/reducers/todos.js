import { TODO_ADD, TODO_TOGGLE, TODO_DELETE } from '../actions/todos';

export default function todos(state = [], { type, text, uid }) {
	switch (type) {
		case TODO_ADD:
			if (!text) {
				return state;
			}

			return [
				...state,
				{
					text,
					completed: false,
					uid: Date.now()
				}
			];
		case TODO_TOGGLE:
			return state.map((todo) => {
				if (todo.uid === uid) {
					const { completed, ...targetedTodo } = todo;

					return {
						completed: !completed,
						...targetedTodo
					};
				}

				return todo;
			});
		case TODO_DELETE: {
			return state.filter(todo => todo.uid !== uid);
		}
		default:
			return state;
	}
}
