import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => (
	<ul>
		{todos.map(todo => (
			<li key={todo.uid}>{todo.text}</li>
		))}
	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object)
};

export default TodoList;
