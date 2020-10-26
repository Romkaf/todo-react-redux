import {
	ADD_TODO,
	DELETE_TODO,
	SELECT_TODO,
	EDIT_TODO,
	SELECT_ALL_TODO,
	DELETE_COMPLETED_TODO,
} from '../actions/actionTypes';

const updateTodosArray = (state, action) => {
	if (state === undefined) {
		return [];
	}

	const { todosArray, allCompleted } = state;
	let id =
		todosArray.length === 0 ? 1 : todosArray[todosArray.length - 1].id + 1;

	switch (action.type) {
		case ADD_TODO:
			console.log(action.payload);
			const createTodo = (title) => {
				return {
					title,
					id: id++,
					completed: false,
				};
			};
			return [...todosArray, createTodo(action.payload)];

		case DELETE_TODO:
			return todosArray.filter((it) => !(it.id === action.payload));

		case SELECT_TODO:
			return todosArray.map((it) => {
				return it.id === action.payload
					? { ...it, completed: !it.completed }
					: it;
			});

		case EDIT_TODO:
			const { idx, text } = action.payload;
			return todosArray.map((it) => ({
				...it,
				title: it.id === idx ? text : it.title,
			}));

		case SELECT_ALL_TODO:
			return todosArray.map((it) => ({
				...it,
				completed: !allCompleted,
			}));

		case DELETE_COMPLETED_TODO:
			return todosArray.filter((it) => !it.completed);

		default:
			return todosArray;
	}
};

export default updateTodosArray;
