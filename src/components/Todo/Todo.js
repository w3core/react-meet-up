import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import './Todo.scss';

const Todo = ({ todo, todoToggle, todoDelete }) => (
	<div className="Todo">
		<button type="button" onClick={() => todoToggle(todo.get('uid'))}>{todo.get('completed') ? '✔️' : '⭕'}</button>
		<span>{todo.get('text')}</span>
		<button type="button" onClick={() => todoDelete(todo.get('uid'))}>
			<span role="img" aria-label="delete">🗑️</span>
		</button>
	</div>
);

Todo.propTypes = {
	todo: ImmutablePropTypes.map,
	todoToggle: PropTypes.func,
	todoDelete: PropTypes.func
};


export default Todo;
