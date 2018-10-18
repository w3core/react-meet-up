import React from 'react';
import PropTypes from 'prop-types';
import { withStyle } from 'components/HOCs';

const displayName = 'Button';

const propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.string,
};

const defaultProps = {
  onClick: undefined,
  style: {},
  children: '',
};

export function ButtonBase({ onClick, style, children }) {
  return (
    <button type="button" onClick={onClick} style={style}>
      {children}
    </button>
  );
}

ButtonBase.displayName = displayName;
ButtonBase.propTypes = propTypes;
ButtonBase.defaultProps = defaultProps;

export const styleCreator = (theme, { accent }) => ({
  backgroundColor: accent ? theme.colorAccent : theme.colorDefault,
});

export default withStyle(ButtonBase, styleCreator);
