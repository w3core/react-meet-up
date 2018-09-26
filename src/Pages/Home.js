import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import VisibilityFilter from '../components/VisibilityFilter';
import Information from '../components/Information';

import { todoAdd, todoToggle, todoDelete, todoClearCompleted } from '../actions/todos';
import { visibilityFilterSet } from '../actions/visibilityFilter';

const Home = ({
	todoAdd,
	todoToggle,
	todoDelete,
	todoClearCompleted,
	visibilityFilterSet,
	todos,
	visibilityFilter,
	todosLeft,
	showClearCompleted
}) => (
	<div>
		<TodoInput todoAdd={todoAdd} />
		<TodoList todos={todos} todoToggle={todoToggle} todoDelete={todoDelete} />
		<VisibilityFilter visibilityFilter={visibilityFilter} visibilityFilterSet={visibilityFilterSet} />
		<Information todosLeft={todosLeft} todoClearCompleted={todoClearCompleted} showClearCompleted={showClearCompleted} />
	</div>
);

Home.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	visibilityFilter: PropTypes.string,
	todosLeft: PropTypes.number,
	showClearCompleted: PropTypes.bool,
	todoAdd: PropTypes.func,
	todoToggle: PropTypes.func,
	todoDelete: PropTypes.func,
	visibilityFilterSet: PropTypes.func,
	todoClearCompleted: PropTypes.func
};

const getVisibleTodos = (todos, visibilityFilter) => todos.filter(({ completed }) => {
	switch (visibilityFilter) {
		case 'SHOW_ACTIVE':
			return !completed;
		case 'SHOW_COMPLETED':
			return completed;
		default:
			return true;
	}
});

const todosLeft = todos => todos.filter(({ completed }) => !completed).length;

const showClearCompleted = todos => todos.filter(({ completed }) => completed).length > 0;

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter),
	visibilityFilter: state.visibilityFilter,
	todosLeft: todosLeft(state.todos),
	showClearCompleted: showClearCompleted(state.todos)
});

const mapDispatchToProps = dispatch => bindActionCreators({
	todoAdd,
	todoToggle,
	todoDelete,
	visibilityFilterSet,
	todoClearCompleted
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
