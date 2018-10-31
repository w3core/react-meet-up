import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';

const displayName = 'Product';

const propTypes = {
  name: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

function Product({ name, handleRemove }) {
  return (
    name && (
      <div data-name={name}>
        {name}
        {' - '}
        <Button onClick={handleRemove} value="removeProduct">
          Remove
        </Button>
      </div>
    )
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
