/* eslint-disable camelcase */
// == Initial State
const initialState = {
  test: true,
};

// == Types
const TEST = 'TEST';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: !state.test,
      };
    default:
      return state;
  }
};

// == Action Creators
export const test = () => ({
  type: TEST,
});

// == Export
export default reducer;
