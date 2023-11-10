import { createStore, combineReducers, applyMiddleware } from 'redux';

import RegisterReducer from './Reducers/RegisterReducers';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({ RegisterReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));