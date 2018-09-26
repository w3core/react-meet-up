import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

import { todoAdd, todoToggle } from '../actions/todos';

const Home = ({ todoAdd, todoToggle, todos }) => (
	<div>
		<TodoInput todoAdd={todoAdd} />
		<TodoList todos={todos} todoToggle={todoToggle} />
	</div>
);

Home.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	todoAdd: PropTypes.func,
	todoToggle: PropTypes.func
};

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators({
	todoAdd,
	todoToggle
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
