import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  const composeEnhancers = composeWithDevTools({});

  return createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk, loggerMiddleware, reduxImmutableStateInvariant())
  ));
}
