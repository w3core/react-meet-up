import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';
import { Product } from 'components/widgets';

const displayName = 'Redux';

const propTypes = {
  myProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleAddProduct: PropTypes.func.isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
  handleFetchProducts: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  name: PropTypes.string,
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const defaultProps = {
  name: '',
  filter: '',
};

function Redux({
  myProducts,
  filter,
  handleChangeFilter,
  handleAddProduct,
  changeName,
  name,
  handleRemoveProduct,
  handleFetchProducts,
}) {
  return (
    <main>
      <div>
        Filter:
        {' '}
        <input type="text" value={filter} onChange={handleChangeFilter} />
      </div>
      <div>
        {myProducts.map(product => (
          <Product key={product.id} {...product} onRemove={handleRemoveProduct} />
        ))}
      </div>
      <div>
        <input data-name="new-product-name" type="text" value={name} onChange={changeName} />
        <Button name="add-product" onClick={handleAddProduct}>
          Add Product
        </Button>
      </div>
      <div>
        <Button name="fetch-products" onClick={handleFetchProducts}>
          Fetch Products
        </Button>
      </div>
    </main>
  );
}

Redux.displayName = displayName;
Redux.propTypes = propTypes;
Redux.defaultProps = defaultProps;

export default Redux;
