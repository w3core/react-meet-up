import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

import { todoAdd, todoToggle, todoDelete } from '../actions/todos';

const Home = ({ todoAdd, todoToggle, todoDelete, todos }) => (
	<div>
		<TodoInput todoAdd={todoAdd} />
		<TodoList todos={todos} todoToggle={todoToggle} todoDelete={todoDelete} />
	</div>
);

Home.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	todoAdd: PropTypes.func,
	todoToggle: PropTypes.func,
	todoDelete: PropTypes.func
};

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators({
	todoAdd,
	todoToggle,
	todoDelete
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
