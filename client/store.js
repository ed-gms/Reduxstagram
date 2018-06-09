import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import createSagaMiddleware from 'redux-saga';

import 'babel-polyfill';

//Import the root reducers
import rootReducer from './reducers/index'
import mySaga from './sagas';

import comments from './data/comments'
import posts from './data/posts'

// Create object for for the default data

const defaultState = {
  posts,
  comments,
}

const enhancers = compose(
  window.devToolsExtension ?
    window.devToolsExtension() :
    (f) => f
)

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(sagaMiddleware),
  enhancers,
)

sagaMiddleware.run(mySaga);

export const history = syncHistoryWithStore(browserHistory, store)

export default store