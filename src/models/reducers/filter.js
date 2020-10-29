import { FILTER_CHANGE } from '@models/actions/actionTypes';

const updateFilter = (state, action) => {
	if (state === undefined) {
		return 'all';
	}

	switch (action.type) {
		case FILTER_CHANGE:
			return action.payload;

		default:
			return state.filter;
	}
};

export default updateFilter;
