import changeFilter from './changeFilter';

describe('Given the changeFilter action', () => {
  let action;

  describe('when the action is called', () => {
    let value;

    beforeEach(() => {
      action = changeFilter(value);
    });

    it('should have the CHANGE_FILTER type', () => {
      expect(action.type).toBe('CHANGE_FILTER');
    });

    describe('and a value of a filter is provided', () => {
      beforeAll(() => {
        value = '111';
      });

      it('should create a payload equal to the provided value', () => {
        expect(action.payload).toBe('111');
      });
    });
  });
});
