import removeProduct from './removeProduct';

describe('Given the removeProduct action', () => {
  let action;

  describe('when the action is called', () => {
    let id;

    beforeEach(() => {
      action = removeProduct(id);
    });

    it('should have the REMOVE_PRODUCT type', () => {
      expect(action.type).toBe('REMOVE_PRODUCT');
    });

    describe('and an id of a product is provided', () => {
      beforeAll(() => {
        id = 111;
      });

      it('should create a payload with the provided id', () => {
        expect(action.payload).toBe(id);
      });
    });
  });
});
