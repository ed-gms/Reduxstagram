import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
// import apiData from './apiData';
import helloWorld from './HelloWorld';

const rootReducer = combineReducers({posts, comments, helloWorld, routing: routerReducer});

export default rootReducer;