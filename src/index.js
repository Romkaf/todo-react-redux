import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { locStorKey } from '@constants';

import '@styles/reset.css';
import '@styles/scaffolding.scss';
import App from '@components/App';

store.subscribe(() => {
	localStorage.setItem(locStorKey, JSON.stringify(store.getState()));
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
