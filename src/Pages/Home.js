import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName } from 'recompose';

import { goodsActions } from '../ducks';

import Button from '../Elements/Button';

class Home extends Component {
	static propTypes = {
		fetchGoods: PropTypes.func
	}

	render() {
		const { fetchGoods } = this.props;

		return (
			<Fragment>
				<Button onClick={fetchGoods}>Fetch Goods</Button>
				<pre>{ JSON.stringify(this.props, null, '\t') }</pre>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	name: state.getIn(['user', 'name'], 'Anonymous'),
	age: state.getIn(['user', 'age'], '38'),
	goods: state.getIn(['goods'])
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		fetchGoods: goodsActions.fetchGoods
	},

	dispatch,
);

const enhance = compose(
	setDisplayName('Home'),
	connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(Home);
