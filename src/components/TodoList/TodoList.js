import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Todo from '../Todo/Todo';

const TodoList = ({ todos, todoToggle, todoDelete }) => (
	<div>
		{todos.map(todo => (
			<Todo key={todo.get('uid')} todo={todo} todoToggle={todoToggle} todoDelete={todoDelete} />
		))}
	</div>
);

TodoList.propTypes = {
	todos: ImmutablePropTypes.list,
	todoToggle: PropTypes.func,
	todoDelete: PropTypes.func
};

export default TodoList;
