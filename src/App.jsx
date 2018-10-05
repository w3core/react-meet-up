import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Redux } from 'components/pages';
import store from 'store';
import ThemeContext, * as themes from 'themes';

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
    <Provider store={store}>
      <ThemeContext.Provider value={themes[theme]}>
        <h1>{title}</h1>
        <Redux />
      </ThemeContext.Provider>
    </Provider>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;
