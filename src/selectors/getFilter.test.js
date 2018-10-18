import { initialStoreState } from 'store';
import getFilter from './getFilter';

describe('Given the getFilter selector', () => {
  let currentStoreState = initialStoreState;

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getFilter(currentStoreState);
    });

    describe('and the filter is in the store', () => {
      currentStoreState = initialStoreState.setIn(['filter'], '111');

      it('should return the filter from the store', () => {
        expect(result).toBe('111');
      });
    });
  });
});
