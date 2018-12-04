import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import TodoList from '../../components/TodoList/TodoList';
import TodoInput from '../../components/TodoInput/TodoInput';
import VisibilityFilter from '../../components/VisibilityFilter/VisibilityFilter';
import Information from '../../components/Information/Information';

import { todoAdd, todoToggle, todoDelete, todoClearCompleted } from '../../actions/todos';
import { visibilityFilterSet } from '../../actions/visibilityFilter';

import HomeWrapper, { HomeHolder } from './Home.style';

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
}) => {
	const todoListProps = {
		todos,
		todoToggle,
		todoDelete
	};

	const visibilityFilterProps = {
		visibilityFilter,
		visibilityFilterSet
	};

	const informationProps = {
		todosLeft,
		todoClearCompleted,
		showClearCompleted
	};

	return (
		<HomeWrapper>
			<HomeHolder>
				<TodoInput todoAdd={todoAdd} />
				<TodoList {...todoListProps} />
				<VisibilityFilter {...visibilityFilterProps} />
				<Information {...informationProps} />
			</HomeHolder>
		</HomeWrapper>
	);
};

Home.propTypes = {
	todos: ImmutablePropTypes.list,
	visibilityFilter: PropTypes.string,
	todosLeft: PropTypes.number,
	showClearCompleted: PropTypes.bool,
	todoAdd: PropTypes.func,
	todoToggle: PropTypes.func,
	todoDelete: PropTypes.func,
	visibilityFilterSet: PropTypes.func,
	todoClearCompleted: PropTypes.func
};

const getVisibleTodos = (todos, visibilityFilter) => todos.filter((todo) => {
	switch (visibilityFilter) {
		case 'SHOW_ACTIVE':
			return !todo.get('completed');
		case 'SHOW_COMPLETED':
			return todo.get('completed');
		default:
			return true;
	}
});

const todosLeft = todos => todos.filter(todo => !todo.get('completed')).size;

const showClearCompleted = todos => todos.filter(todo => todo.get('completed')).size > 0;

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.get('todos'), state.get('visibilityFilter')),
	visibilityFilter: state.get('visibilityFilter'),
	todosLeft: todosLeft(state.get('todos')),
	showClearCompleted: showClearCompleted(state.get('todos'))
});

const mapDispatchToProps = dispatch => bindActionCreators({
	todoAdd,
	todoToggle,
	todoDelete,
	visibilityFilterSet,
	todoClearCompleted
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
