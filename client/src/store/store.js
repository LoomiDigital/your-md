/* eslint-disable no-underscore-dangle, no-undef */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

function resolveComposerFunction() {
  return window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
}

const composeEnhancers = resolveComposerFunction();
const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancer];
const composedEnhancer = composeEnhancers(...storeEnhancers);
const store = createStore(rootReducer, {}, composedEnhancer);

export default store;
