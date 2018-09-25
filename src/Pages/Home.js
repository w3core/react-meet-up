import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Counter from '../components/Counter';

import { counterIncrement, counterDecrement } from '../actions/counter';

const Home = ({ value, increment, decrement }) => (
	<div>
		<Counter value={value} increment={increment} decrement={decrement} />
	</div>
);

Home.propTypes = {
	value: PropTypes.number,
	increment: PropTypes.func,
	decrement: PropTypes.func
};

const mapStateToProps = state => ({
	value: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators({
	increment: counterIncrement,
	decrement: counterDecrement
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
