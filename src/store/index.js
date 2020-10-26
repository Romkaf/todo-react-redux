import { createStore } from 'redux';
import reducer from '../models/reducers';

const store = createStore(reducer);

export default store;
