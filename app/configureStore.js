import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {reduxReactRouter, routerStateReducer} from 'redux-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import thunk from 'redux-thunk';
import persistenceStore from './persistence/store';
import * as reducers from './reducers';

const createHistory = createBrowserHistory;

const storeEnhancers = [
  persistenceStore,
  reduxReactRouter({createHistory})
];

const finalCreateStore = compose(
  applyMiddleware(thunk),
  ...storeEnhancers
)(createStore);

const combinedReducer = combineReducers(Object.assign({
  router: routerStateReducer
}, reducers));

export default function configureStore(initialState) {
  const store = finalCreateStore(combinedReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

