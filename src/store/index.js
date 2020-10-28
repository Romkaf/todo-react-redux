import { createStore } from 'redux';
import reducer from '@models/reducers';
import { locStorKey } from '@constants';

const persistedState = localStorage.getItem(locStorKey)
	? JSON.parse(localStorage.getItem(locStorKey))
	: {};

const store = createStore(reducer, persistedState);

export default store;
