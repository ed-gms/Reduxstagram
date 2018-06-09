import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import data from './apiData';

const rootReducer = combineReducers({data, posts, comments, routing: routerReducer});

export default rootReducer;