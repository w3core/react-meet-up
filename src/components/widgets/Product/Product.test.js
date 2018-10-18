import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

describe('Given the Product component', () => {
  describe('when the component is rendered', () => {
    const component = shallow(<Product name="Product 1" handleRemove={jest.fn()} />);

    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
