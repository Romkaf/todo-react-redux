import updateTodosArray from './todosArray';
import updateFilter from './filter';
import updateAllCompleted from './allCompleted';

const reducer = (state, action) => {
	return {
		todosArray: updateTodosArray(state, action),
		filter: updateFilter(state, action),
		allCompleted: updateAllCompleted(state, action),
	};
};

export default reducer;
