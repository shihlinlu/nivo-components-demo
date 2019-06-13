import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  connectRouter,
  routerMiddleware,
  RouterState,
} from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { all } from 'redux-saga/effects';

const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
});

export interface RootState {
  router: RouterState;
}

function* rootSaga() {
  yield all([]);
}

const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line
const middleware: any = [sagaMiddleware, routerMiddleware(history)];

// Necessary if we want to use Redux Devtools
const composeEnhancers =
  // eslint-disable-next-line
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);

export { store, history };
