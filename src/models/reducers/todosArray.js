import {
	ADD_TODO,
	DELETE_TODO,
	SELECT_TODO,
	EDIT_TODO,
	SELECT_ALL_TODO,
	DELETE_COMPLETED_TODO,
} from '@models/actions/actionTypes';

export default (state = [], action) => {
	console.log(state);
	let id = state.length === 0 ? 1 : state[state.length - 1].id + 1;

	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					title: action.payload,
					id: id++,
					completed: false,
				},
			];

		case DELETE_TODO:
			return state.filter((it) => !(it.id === action.payload));

		case SELECT_TODO:
			return state.map((it) => {
				return it.id === action.payload
					? { ...it, completed: !it.completed }
					: it;
			});

		case EDIT_TODO:
			const { idx, text } = action.payload;
			return state.map((it) => ({
				...it,
				title: it.id === idx ? text : it.title,
			}));

		case SELECT_ALL_TODO:
			const isAllCompleted = state.every((it) => it.completed);
			return state.map((it) => ({
				...it,
				completed: !isAllCompleted,
			}));

		case DELETE_COMPLETED_TODO:
			return state.filter((it) => !it.completed);

		default:
			return state;
	}
};
