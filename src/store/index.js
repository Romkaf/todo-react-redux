import { createStore } from 'redux';
import reducer from '@models/reducers';
import { locStorKey } from '@constants';

const initialState = localStorage.getItem(locStorKey)
	? JSON.parse(localStorage.getItem(locStorKey))
	: { todosArray: [], filter: 'all' };

const store = createStore(reducer, initialState);

export default store;
