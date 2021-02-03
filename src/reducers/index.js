/* eslint-disable prettier/prettier */
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './todo';

const reducers = combineReducers({
  todo: todoReducer,
});

const middleware = [thunk];

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
