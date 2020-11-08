import { combineReducers } from 'redux';
import todosArray from './todosArray';
import filter from './filter';

export default combineReducers({
	todosArray,
	filter,
});
