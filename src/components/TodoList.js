import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ todos, todoToggle, todoDelete }) => (
	<div>
		{todos.map(todo => (
			<Todo key={todo.uid} todo={todo} todoToggle={todoToggle} todoDelete={todoDelete} />
		))}
	</div>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	todoToggle: PropTypes.func,
	todoDelete: PropTypes.func
};

export default TodoList;
