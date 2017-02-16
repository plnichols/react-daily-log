import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  // return createStore(
  //   rootReducer,
  //   initialState,
  //   applyMiddleware(thunk, reduxImmutableStateInvariant()),
  //   composeEnhancers
  // );

  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options if needed
  });

  return createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk, reduxImmutableStateInvariant())
    // other store enhancers if any
  ));
}
