import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, todoToggle, todoDelete }) => (
	<div>
		<button type="button" onClick={() => todoToggle(todo.uid)}>{todo.completed ? '✔️' : '⭕'}</button>
		{todo.text}
		<button type="button" onClick={() => todoDelete(todo.uid)}>
			<span role="img" aria-label="delete">🗑️</span>
		</button>
	</div>
);

Todo.propTypes = {
	todo: PropTypes.shape({
		text: PropTypes.string,
		completed: PropTypes.bool,
		uid: PropTypes.number
	}),
	todoToggle: PropTypes.func,
	todoDelete: PropTypes.func
};


export default Todo;
