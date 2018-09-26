import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, todoToggle }) => (
	<div>
		<button type="button" onClick={() => todoToggle(todo.uid)}>{todo.completed ? '✔️' : '⭕'}</button>
		{todo.text}
	</div>
);

Todo.propTypes = {
	todo: PropTypes.shape({
		text: PropTypes.string,
		completed: PropTypes.bool,
		uid: PropTypes.number
	}),
	todoToggle: PropTypes.func
};


export default Todo;
