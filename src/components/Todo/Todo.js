import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import TodoWrapper, { Button, TodoText, TodoStatusFlair } from './Todo.style';

const Todo = ({ todo, todoToggle, todoDelete }) => (
	<TodoWrapper>
		<Button type="button" onClick={() => todoToggle(todo.get('uid'))}>
			<TodoStatusFlair completed={todo.get('completed')} />
		</Button>
		<TodoText>{todo.get('text')}</TodoText>
		<Button type="button" onClick={() => todoDelete(todo.get('uid'))}>
			<span role="img" aria-label="delete">🗑️</span>
		</Button>
	</TodoWrapper>
);

Todo.propTypes = {
	todo: ImmutablePropTypes.map,
	todoToggle: PropTypes.func,
	todoDelete: PropTypes.func
};


export default Todo;
