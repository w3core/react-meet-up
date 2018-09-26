import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

import { todoAdd } from '../actions/todos';

const Home = ({ todoAdd, todos }) => (
	<div>
		<TodoInput todoAdd={todoAdd} />
		<TodoList todos={todos} />
	</div>
);

Home.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	todoAdd: PropTypes.func
};

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators({
	todoAdd
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
