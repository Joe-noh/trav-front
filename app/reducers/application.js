import createReducer from '../createReducer';

const initialState = {
  token: null
};

const actionHandlers = {
  LOG_OUT: () => ({token: null})
};

export default createReducer(initialState, actionHandlers);
