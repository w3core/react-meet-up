import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import VisibilityFilter from '../components/VisibilityFilter';

import { todoAdd, todoToggle, todoDelete } from '../actions/todos';
import { visibilityFilterSet } from '../actions/visibilityFilter';

const Home = ({
	todoAdd,
	todoToggle,
	todoDelete,
	visibilityFilterSet,
	todos,
	visibilityFilter
}) => (
	<div>
		<TodoInput todoAdd={todoAdd} />
		<TodoList todos={todos} todoToggle={todoToggle} todoDelete={todoDelete} />
		<VisibilityFilter visibilityFilter={visibilityFilter} visibilityFilterSet={visibilityFilterSet} />
	</div>
);

Home.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	visibilityFilter: PropTypes.string,
	todoAdd: PropTypes.func,
	todoToggle: PropTypes.func,
	todoDelete: PropTypes.func,
	visibilityFilterSet: PropTypes.func
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

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter),
	visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => bindActionCreators({
	todoAdd,
	todoToggle,
	todoDelete,
	visibilityFilterSet
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
