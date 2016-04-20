import * as constants from '../constants';
import createReducer from '../createReducer';

const initialState = {
  token: null
};

const actionHandlers = {
  [constants.LOG_IN]: (_, action) => ({token: action.payload.token}),
  [constants.LOG_OUT]: () => ({token: null})
};

export default createReducer(initialState, actionHandlers);
