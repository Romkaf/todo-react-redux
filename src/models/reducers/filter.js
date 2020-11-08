import { FILTER_CHANGE } from '@models/actions/actionTypes';

export default (state = 'all', action) => {
	switch (action.type) {
		case FILTER_CHANGE:
			return action.payload;

		default:
			return state;
	}
};
