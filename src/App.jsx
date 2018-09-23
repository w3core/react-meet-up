import React from 'react';
import PropTypes from 'prop-types';
import { ReactJS } from 'components/pages';
import ThemeContext, * as themes from './themes';

const displayName = 'App';

const propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
};

const defaultProps = {
  title: 'Hello, React by default!',
  theme: 'base',
};

export default function App({ title, theme }) {
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <h1>{title}</h1>
      <ReactJS />
    </ThemeContext.Provider>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;
