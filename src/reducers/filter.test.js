import filter, { initialFilterState } from './filter';

describe('Given the filter reducer', () => {
  describe('and the reducer is called', () => {
    const testAction = {
      type: '',
      payload: undefined,
    };

    let newState;

    beforeEach(() => {
      newState = filter(initialFilterState, testAction);
    });

    describe('and the CHANGE_FILER action is dispatched', () => {
      beforeAll(() => {
        testAction.type = 'CHANGE_FILTER';
        testAction.payload = '111';
      });

      it('should return a new state with the provided filter', () => {
        expect(newState).toBe('111');
      });
    });

    describe('and the action dispatched is unknown', () => {
      beforeAll(() => {
        testAction.type = 'UNKNOWN_ACTION';
        testAction.payload = '111';
      });

      it('should return the current state', () => {
        expect(newState).toBe(initialFilterState);
      });
    });
  });
});
