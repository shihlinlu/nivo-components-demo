import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { all } from 'redux-saga/effects';

// const rootReducer = combineReducers({});
// eslint-disable-next-line
const rootReducer = (state: any) => state;

// eslint-disable-next-line
export interface MainStoreType {}

function* rootSaga() {
  yield all([]);
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Necessary if we want to use Redux Devtools
const composeEnhancers =
  // eslint-disable-next-line
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);

export { store };
