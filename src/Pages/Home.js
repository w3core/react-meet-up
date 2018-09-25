import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Counter from '../components/Counter';

import { counterIncrement, counterDecrement, counterChangeBy } from '../actions/counter';

const Home = ({ value, increment, decrement, changeBy }) => (
	<div>
		<Counter value={value} increment={increment} decrement={decrement} changeBy={changeBy} />
	</div>
);

Home.propTypes = {
	value: PropTypes.number,
	increment: PropTypes.func,
	decrement: PropTypes.func,
	changeBy: PropTypes.func
};

const mapStateToProps = state => ({
	value: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators({
	increment: counterIncrement,
	decrement: counterDecrement,
	changeBy: counterChangeBy
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
