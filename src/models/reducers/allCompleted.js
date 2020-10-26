import {
	ALL_COMPLETED_CHANGE,
	ADD_TODO,
	SELECT_ALL_TODO,
	DELETE_COMPLETED_TODO,
} from '../actions/actionTypes';

const updateAllCompleted = (state, action) => {
	if (state === undefined) {
		return false;
	}

	const { todosArray, allCompleted } = state;

	switch (action.type) {
		case ALL_COMPLETED_CHANGE:
			return todosArray.every((it) => it.completed);

		case ADD_TODO:
			return false;

		case SELECT_ALL_TODO:
			return !allCompleted;

		case DELETE_COMPLETED_TODO:
			return false;

		default:
			return allCompleted;
	}
};

export default updateAllCompleted;
