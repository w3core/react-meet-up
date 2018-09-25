import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Counter from '../components/Counter';

const Home = ({ value }) => (
	<div>
		<Counter value={value} />
	</div>
);

Home.propTypes = {
	value: PropTypes.number
};

const mapStateToProps = state => ({
	value: state.counter
});

export default connect(mapStateToProps)(Home);
