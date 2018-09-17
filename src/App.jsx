import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'App';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: 'Hello, React by default!',
};

export default function App({ title }) {
  return <h1>{title}</h1>;
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;
